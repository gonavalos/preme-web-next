// lib/gecros.ts — Gecros API client (server-side only)

const GECROS_BASE = process.env.GECROS_API_URL ?? "http://186.189.234.37:84";
const GECROS_CLIENT_ID = process.env.GECROS_CLIENT_ID ?? "gecros";
const GECROS_OS_ID = 10; // PREME in Gecros

// ─── Token cache (in-memory, server-side) ────────────────────────
let cachedToken: string | null = null;
let tokenExpiresAt = 0;

async function getToken(): Promise<string> {
  if (cachedToken && Date.now() < tokenExpiresAt) return cachedToken;

  const res = await fetch(`${GECROS_BASE}/connect/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `client_id=${GECROS_CLIENT_ID}&grant_type=client_credentials`,
  });

  if (!res.ok) throw new Error(`Gecros auth failed: ${res.status}`);

  const data = await res.json();
  cachedToken = data.access_token;
  // expires_in is in seconds; subtract 60s buffer
  tokenExpiresAt = Date.now() + (data.expires_in - 60) * 1000;
  return cachedToken!;
}

// ─── Cartilla endpoint ───────────────────────────────────────────

export type GecrosPrestadorRaw = {
  preId: number;
  oriId: number;
  preNom: string;
  oriNom: string;
  domicilio: string;
  telefono: string;
  profesion: string;
  especialidad: string;
  geographyLat: number;
  geographyLong: number;
  planNom: string;
  osNom: string;
  ocultarPrestador: boolean;
  ocultarOrigen: boolean;
};

export type NormalizedPrestador = {
  id: number;
  nombre: string;
  tipo: string;
  especialidades: string[];
  plan: string[];
  ciudad: string;
  direccion: string;
  telefono: string;
  lat: number | null;
  lng: number | null;
  destacado: boolean;
  ordenPrioridad: number;
};

// ─── Plan mapping: Gecros planNom → user-facing plan name ────────
function mapPlan(planNom: string): string | null {
  const p = planNom.toUpperCase();
  if (p === "TODOS") return null; // means all plans
  if (p.includes("CORAL") || p.includes("PCOR")) return "Plan Coral";
  if (p.includes("MAXIMO") || p.includes("PMAX")) return "Plan Máximo";
  if (p.includes("INTEGRAL") || p.includes("PINT") || p.includes("INTEG") || p.includes("INTG"))
    return "Plan Integral";
  if (p.includes("JOVEN")) return "Plan Joven";
  return null;
}

// ─── City extraction from domicilio ──────────────────────────────
function extractCity(domicilio: string): string {
  // Format: "Deán Funes 429, 1. CORDOBA, CORDOBA"
  const parts = domicilio.split(",");
  if (parts.length >= 2) {
    const cityPart = parts[parts.length - 2].trim();
    // Remove leading numbers like "1. "
    const cleaned = cityPart.replace(/^\d+\.\s*/, "");
    // Title case
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

// ─── Destacados config ───────────────────────────────────────────
import { getDestacadoConfig } from "./destacados";

// ─── Normalize + group by prestador ──────────────────────────────
function normalizeCartilla(raw: GecrosPrestadorRaw[]): NormalizedPrestador[] {
  const ALL_PLANS = ["Plan Coral", "Plan Integral", "Plan Máximo"];
  const grouped = new Map<number, NormalizedPrestador>();

  for (const r of raw) {
    if (r.ocultarPrestador && r.ocultarOrigen) continue;

    const existing = grouped.get(r.preId);
    const plan = mapPlan(r.planNom);
    const especialidad = r.especialidad?.trim();

    if (existing) {
      if (plan && !existing.plan.includes(plan)) existing.plan.push(plan);
      if (!plan) {
        // "Todos" → all plans
        existing.plan = [...ALL_PLANS];
      }
      if (especialidad && !existing.especialidades.includes(especialidad)) {
        existing.especialidades.push(especialidad);
      }
    } else {
      const dest = getDestacadoConfig(r.preId);
      grouped.set(r.preId, {
        id: r.preId,
        nombre: formatName(r.preNom),
        tipo: r.profesion || "Sin clasificar",
        especialidades: especialidad ? [especialidad] : [],
        plan: plan ? [plan] : [...ALL_PLANS],
        ciudad: extractCity(r.domicilio),
        direccion: r.domicilio.split(",")[0]?.trim() || r.domicilio,
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

function formatName(name: string): string {
  // Remove leading dots, clean up
  return name.replace(/^\.+/, "").trim();
}

// ─── Fetch cartilla from Gecros ──────────────────────────────────

let cartillaCache: { data: NormalizedPrestador[]; fetchedAt: number } | null = null;
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

export async function fetchCartilla(): Promise<{
  prestadores: NormalizedPrestador[];
  fromCache: boolean;
  fetchedAt: string;
}> {
  // Check in-memory cache
  if (cartillaCache && Date.now() - cartillaCache.fetchedAt < CACHE_TTL) {
    return {
      prestadores: cartillaCache.data,
      fromCache: true,
      fetchedAt: new Date(cartillaCache.fetchedAt).toISOString(),
    };
  }

  const token = await getToken();

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
  });

  if (!res.ok) throw new Error(`Gecros cartilla failed: ${res.status}`);

  const json = await res.json();
  const raw: GecrosPrestadorRaw[] = json?.result?.prestadores ?? [];
  const normalized = normalizeCartilla(raw);

  const now = Date.now();
  cartillaCache = { data: normalized, fetchedAt: now };

  return {
    prestadores: normalized,
    fromCache: false,
    fetchedAt: new Date(now).toISOString(),
  };
}

// ─── Fetch taxonomy data ─────────────────────────────────────────

export async function fetchEspecialidades(): Promise<{ id: number; value: string }[]> {
  const token = await getToken();
  const res = await fetch(`${GECROS_BASE}/api/taxonomy/especialidades`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return [];
  return res.json();
}

export async function fetchLocalidades(): Promise<{ id: number; value: string }[]> {
  const token = await getToken();
  const res = await fetch(`${GECROS_BASE}/api/taxonomy/localidades`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return [];
  return res.json();
}
