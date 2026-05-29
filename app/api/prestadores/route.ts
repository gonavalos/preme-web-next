// /app/api/prestadores/route.ts
//
// Sirve la cartilla desde el snapshot estático data/cartilla.json (generado por
// scripts/sync-cartilla.mjs). No le pega a Gecros en runtime: la API es HTTP
// plano sobre IP interna y no es consumible desde el hosting.
import { NextRequest, NextResponse } from "next/server";
import type { NormalizedPrestador } from "@/lib/gecros";
import snapshot from "@/data/cartilla.json";

const all = snapshot.prestadores as NormalizedPrestador[];
const fetchedAt = snapshot.generatedAt;

// Orden de aparición de las categorías institucionales. Las que no están acá
// (especialidades médicas: alergia, oftalmología, etc.) van después, alfabético.
const CATEGORY_ORDER = [
  "Instituciones y Centros Médicos",
  "Centros Especializados",
  "Centros Médicos",
  "Diagnóstico por Imágenes",
  "Laboratorios",
  "Fisioterapia y Kinesiología",
  "Salud Mental",
  "Farmacias",
  "Odontología",
  "Ópticas",
  "Urgencias y Emergencias",
];
const ROMAGOSA_ID = 1023; // Clínica Romagosa — siempre primero

function catRank(tipo: string): number {
  const i = CATEGORY_ORDER.indexOf(tipo);
  return i === -1 ? CATEGORY_ORDER.length : i;
}

function norm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}
// Ciudad de Córdoba (capital) — va primero dentro de cada categoría.
function isCapital(ciudad: string): boolean {
  return norm(ciudad) === "cordoba";
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const plan = searchParams.get("plan") || "";
  const tipo = searchParams.get("tipo") || "";
  const esp = searchParams.get("esp") || ""; // especialidad médica
  const ciudad = searchParams.get("ciudad") || "";
  const q = (searchParams.get("q") || "").toLowerCase();
  const page = Number(searchParams.get("page") || "1");
  const pageSize = Number(searchParams.get("pageSize") || "24");

  // Sort: Romagosa primero → orden de categoría → (especialidades alfabético)
  // → ciudad capital primero → destacados → prioridad → alfabético.
  const sorted = [...all].sort((a, b) => {
    const aR = a.id === ROMAGOSA_ID;
    const bR = b.id === ROMAGOSA_ID;
    if (aR !== bR) return aR ? -1 : 1;

    const ra = catRank(a.tipo);
    const rb = catRank(b.tipo);
    if (ra !== rb) return ra - rb;

    // Ambas son especialidades médicas (no listadas): alfabético por categoría
    if (ra === CATEGORY_ORDER.length && a.tipo !== b.tipo) {
      return a.tipo.localeCompare(b.tipo, "es", { sensitivity: "base" });
    }

    if (a.destacado !== b.destacado) return a.destacado ? -1 : 1;
    if (a.ordenPrioridad !== b.ordenPrioridad) return a.ordenPrioridad - b.ordenPrioridad;

    const aCap = isCapital(a.ciudad);
    const bCap = isCapital(b.ciudad);
    if (aCap !== bCap) return aCap ? -1 : 1;

    return a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" });
  });

  // Filter
  const filtered = sorted.filter((p) => {
    if (plan && !p.plan.includes(plan)) return false;
    if (tipo && p.tipo !== tipo) return false;
    if (esp && !p.especialidadesMedicas.includes(esp)) return false;
    if (ciudad && p.ciudad !== ciudad) return false;
    if (q) {
      const match =
        p.nombre.toLowerCase().includes(q) ||
        p.tipo.toLowerCase().includes(q) ||
        p.direccion.toLowerCase().includes(q) ||
        p.ciudad.toLowerCase().includes(q) ||
        p.especialidades.some((e) => e.toLowerCase().includes(q)) ||
        p.especialidadesMedicas.some((e) => e.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);

  return NextResponse.json({
    items,
    total,
    page,
    pageSize,
    source: "snapshot",
    fetchedAt,
  });
}
