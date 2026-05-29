#!/usr/bin/env node
// scripts/sync-cartilla.mjs
//
// Baja la cartilla de prestadores de Gecros, la filtra y normaliza, y la
// guarda como snapshot estático en data/cartilla.json.
//
// La API de Gecros es HTTP plano sobre una IP interna: NO es consumible desde
// el hosting de producción. Por eso la cartilla se sirve desde este JSON, que
// se regenera corriendo este script (~1 vez al mes):
//
//     node scripts/sync-cartilla.mjs
//
// Filtros aplicados:
//   - Solo prestadores VISIBLES: ocultarPrestador === false && ocultarOrigen === false
//   - Se excluyen los médicos individuales (profesion === "Médicos")

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = join(__dirname, "..", "data", "cartilla.json");

const GECROS_BASE = process.env.GECROS_API_URL ?? "http://186.189.234.37:84";
const GECROS_CLIENT_ID = process.env.GECROS_CLIENT_ID ?? "gecros";
const GECROS_OS_ID = 10; // PREME en Gecros

// Profesiones de personas individuales que NO se muestran en la cartilla pública.
const EXCLUIR_PROFESION = new Set(["Médicos"]);

// ── Destacados (preId → prioridad). Aparecen primero en la cartilla. ──
const DESTACADOS = {
  6430: { destacado: true, orden: 1 },   // Sanatorio Allende (Nueva Córdoba)
  14129: { destacado: true, orden: 1 },  // Sanatorio Allende Cerro de las Rosas
  1023: { destacado: true, orden: 2 },   // Clínica Romagosa
  1136: { destacado: true, orden: 2 },   // Centro Privado de Ojos Romagosa
  11202: { destacado: true, orden: 3 },  // Clínica Reina Fabiola
  11985: { destacado: true, orden: 4 },  // Oulton
};
const DEFAULT_DEST = { destacado: false, orden: 9999 };

// ── Normalización ────────────────────────────────────────────────
function mapPlan(planNom) {
  const p = (planNom ?? "").toUpperCase();
  if (p === "TODOS") return null; // significa todos los planes
  if (p.includes("CORAL") || p.includes("PCOR")) return "Plan Coral";
  if (p.includes("MAXIMO") || p.includes("PMAX")) return "Plan Máximo";
  if (p.includes("INTEGRAL") || p.includes("PINT") || p.includes("INTEG") || p.includes("INTG"))
    return "Plan Integral";
  if (p.includes("JOVEN")) return "Plan Joven";
  return null;
}

function extractCity(domicilio) {
  const parts = (domicilio ?? "").split(",");
  if (parts.length >= 2) {
    const cityPart = parts[parts.length - 2].trim();
    const cleaned = cityPart.replace(/^\d+\.\s*/, "");
    return cleaned
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .replace(/\bDe\b/g, "de")
      .replace(/\bDel\b/g, "del")
      .replace(/\bLa\b/g, "la")
      .replace(/\bEl\b/g, "el")
      .replace(/^la\b/, "La")
      .replace(/^el\b/, "El");
  }
  return "Córdoba";
}

function formatName(name) {
  return (name ?? "").replace(/^\.+/, "").trim();
}

function titleCase(s) {
  return s
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bY\b/g, "y")
    .replace(/\bDe\b/g, "de");
}

// Deriva la categoría mostrada a partir de la especialidad (clasificación
// oficial, confiable) con fallback a la profesión. La profesión sola es poco
// fiable: trae "Sin Datos" o etiquetas genéricas como "Servicios de las Clínicas".
function mapTipo(profesion, especialidad) {
  const esp = (especialidad ?? "")
    .toUpperCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, ""); // sin acentos
  const has = (kw) => esp.includes(kw);

  if (has("FARMACIA")) return "Farmacias";
  if (has("URGENCIA") || has("URGENICA") || has("EMERGENCIA")) return "Urgencias y Emergencias";
  if (has("IMAGEN")) return "Diagnóstico por Imágenes";
  if (has("LABORATORIO")) return "Laboratorios";
  if (has("ODONTOLOGIA")) return "Odontología";
  if (has("OPTICA")) return "Ópticas";
  if (has("KINESIOLOGIA") || has("FISIOTERAPIA")) return "Fisioterapia y Kinesiología";
  if (has("SALUD MENTAL")) return "Salud Mental";
  if (has("OFTALMOLOGIA")) return "Oftalmología";
  // "01. INSTITUCIONES Y CENTROS MEDICOS" debe ir antes que "CENTROS MEDICOS"
  // (03), porque contiene esa misma subcadena.
  if (has("INSTITUCIONES")) return "Instituciones y Centros Médicos";
  if (has("CENTROS ESPECIALIZADOS")) return "Centros Especializados";
  if (has("CENTROS MEDICOS")) return "Centros Médicos";

  // Especialidad sin categoría reconocida: usarla tal cual (sin el "NN. ").
  const espClean = (especialidad ?? "").replace(/^\d+\.\s*/, "").trim();
  if (espClean) return titleCase(espClean);

  // Sin especialidad útil: caer a la profesión si no es genérica.
  const prof = (profesion ?? "").trim();
  if (prof && prof !== "Sin Datos") return prof;
  return "Otros prestadores";
}

const ALL_PLANS = ["Plan Coral", "Plan Integral", "Plan Máximo"];

// Especialidades médicas a ignorar (no son especialidades clínicas reales).
const ESP_MEDICA_IGNORAR = new Set(["MEDICINA GENERAL", "CLINICA MEDICA", "SIN DATOS", ""]);

// Limpia y normaliza una especialidad médica (PEDIATRIA → "Pediatría" no, sin
// acentos del origen; solo title case). Devuelve null si no es médica.
function cleanEspMedica(esp) {
  const raw = (esp ?? "").trim();
  if (!raw || /^\d/.test(raw)) return null; // los "NN. ..." son categorías, no especialidades
  if (ESP_MEDICA_IGNORAR.has(raw.toUpperCase())) return null;
  return titleCase(raw);
}

// Construye un mapa oriId → Set(especialidades médicas) a partir de TODOS los
// médicos. El oriId vincula al médico con la institución donde atiende.
function buildEspByOri(raw) {
  const map = new Map();
  for (const r of raw) {
    if (r.profesion !== "Médicos") continue;
    const esp = cleanEspMedica(r.especialidad);
    if (!esp) continue;
    if (!map.has(r.oriId)) map.set(r.oriId, new Set());
    map.get(r.oriId).add(esp);
  }
  return map;
}

function normalize(raw, espByOri) {
  const grouped = new Map();
  for (const r of raw) {
    // Solo visibles
    if (r.ocultarPrestador || r.ocultarOrigen) continue;
    // Sin médicos individuales
    if (EXCLUIR_PROFESION.has(r.profesion)) continue;

    const plan = mapPlan(r.planNom);
    const especialidad = r.especialidad?.trim();
    const existing = grouped.get(r.preId);

    if (existing) {
      if (plan && !existing.plan.includes(plan)) existing.plan.push(plan);
      if (!plan) existing.plan = [...ALL_PLANS];
      if (especialidad && !existing.especialidades.includes(especialidad)) {
        existing.especialidades.push(especialidad);
      }
    } else {
      const dest = DESTACADOS[r.preId] ?? DEFAULT_DEST;
      const espMedicas = [...(espByOri.get(r.oriId) ?? [])].sort((a, b) =>
        a.localeCompare(b, "es", { sensitivity: "base" })
      );
      grouped.set(r.preId, {
        id: r.preId,
        nombre: formatName(r.preNom),
        tipo: mapTipo(r.profesion, r.especialidad),
        especialidades: especialidad ? [especialidad] : [],
        especialidadesMedicas: espMedicas,
        plan: plan ? [plan] : [...ALL_PLANS],
        ciudad: extractCity(r.domicilio),
        direccion: r.domicilio?.split(",")[0]?.trim() || r.domicilio || "",
        telefono: r.telefono || "",
        lat: r.geographyLat || null,
        lng: r.geographyLong || null,
        destacado: dest.destacado,
        ordenPrioridad: dest.orden,
      });
    }
  }
  return Array.from(grouped.values());
}

// ── Gecros API ───────────────────────────────────────────────────
async function getToken() {
  const res = await fetch(`${GECROS_BASE}/connect/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `client_id=${GECROS_CLIENT_ID}&grant_type=client_credentials`,
  });
  if (!res.ok) throw new Error(`Gecros auth falló: ${res.status}`);
  const data = await res.json();
  return data.access_token;
}

async function fetchCartillaRaw(token) {
  const res = await fetch(`${GECROS_BASE}/api/prestadores/cartilla`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      preId: null,
      nombrePrestador: "",
      oriId: null,
      nombreOrigen: "",
      tipoPrestador: 0,
      osId: GECROS_OS_ID,
      planId: 0,
      espId: 0,
      locId: 0,
      mostrarOcultos: -1,
      farmacias: null,
    }),
    signal: AbortSignal.timeout(90_000),
  });
  if (!res.ok) throw new Error(`Gecros cartilla falló: ${res.status}`);
  const json = await res.json();
  return json?.result?.prestadores ?? [];
}

// ── Main ─────────────────────────────────────────────────────────
async function main() {
  let raw;

  // Fallback: regenerar desde un crudo local (útil si Gecros no responde).
  //   CARTILLA_RAW_FILE=/ruta/al/crudo.json node scripts/sync-cartilla.mjs
  if (process.env.CARTILLA_RAW_FILE) {
    const { readFile } = await import("node:fs/promises");
    console.log(`→ Usando crudo local: ${process.env.CARTILLA_RAW_FILE}`);
    const json = JSON.parse(await readFile(process.env.CARTILLA_RAW_FILE, "utf8"));
    raw = json?.result?.prestadores ?? [];
  } else {
    console.log(`→ Autenticando contra Gecros (${GECROS_BASE})...`);
    const token = await getToken();
    console.log("→ Bajando cartilla (puede tardar ~10-30s)...");
    raw = await fetchCartillaRaw(token);
  }
  console.log(`  ${raw.length} registros crudos`);

  const espByOri = buildEspByOri(raw);
  console.log(`  ${espByOri.size} instituciones (oriId) con especialidades médicas`);

  const prestadores = normalize(raw, espByOri);
  prestadores.sort((a, b) => {
    if (a.destacado !== b.destacado) return a.destacado ? -1 : 1;
    if (a.ordenPrioridad !== b.ordenPrioridad) return a.ordenPrioridad - b.ordenPrioridad;
    return a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" });
  });

  const snapshot = {
    generatedAt: new Date().toISOString(),
    total: prestadores.length,
    prestadores,
  };

  await writeFile(OUT_PATH, JSON.stringify(snapshot, null, 2), "utf8");

  // Resumen por tipo
  const porTipo = {};
  for (const p of prestadores) porTipo[p.tipo] = (porTipo[p.tipo] ?? 0) + 1;
  console.log(`✓ ${prestadores.length} prestadores guardados en data/cartilla.json`);
  console.log("  Por tipo:");
  for (const [tipo, n] of Object.entries(porTipo).sort((a, b) => b[1] - a[1])) {
    console.log(`    ${String(n).padStart(4)}  ${tipo}`);
  }
}

main().catch((err) => {
  console.error("✗ Error:", err.message);
  process.exit(1);
});
