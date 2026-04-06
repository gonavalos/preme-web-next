// /app/api/prestadores/route.ts
import { NextRequest, NextResponse } from "next/server";
import { fetchCartilla, type NormalizedPrestador } from "@/lib/gecros";
import fallbackData from "@/data/prestadores.json";

type FallbackPrestador = {
  id: number;
  nombre: string;
  tipo: string;
  plan: string[];
  ciudad: string;
  direccion: string;
  telefono: string;
  orden1?: number;
  orden2?: number;
};

function fallbackToNormalized(p: FallbackPrestador): NormalizedPrestador {
  return {
    id: p.id,
    nombre: p.nombre,
    tipo: p.tipo,
    especialidades: [],
    plan: p.plan,
    ciudad: p.ciudad,
    direccion: p.direccion,
    telefono: p.telefono,
    lat: null,
    lng: null,
    destacado: (p.orden1 ?? 9999) <= 1,
    ordenPrioridad: p.orden1 ?? 9999,
  };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const plan = searchParams.get("plan") || "";
  const tipo = searchParams.get("tipo") || "";
  const ciudad = searchParams.get("ciudad") || "";
  const q = (searchParams.get("q") || "").toLowerCase();
  const page = Number(searchParams.get("page") || "1");
  const pageSize = Number(searchParams.get("pageSize") || "24");

  let all: NormalizedPrestador[];
  let source: "gecros" | "fallback";
  let fetchedAt: string;

  try {
    const result = await fetchCartilla();
    all = result.prestadores;
    source = result.fromCache ? "gecros" : "gecros";
    fetchedAt = result.fetchedAt;
  } catch {
    // Fallback to static JSON
    all = (fallbackData as FallbackPrestador[]).map(fallbackToNormalized);
    source = "fallback";
    fetchedAt = "2025-10-01T00:00:00Z";
  }

  // Sort: destacados first, then by priority, then alphabetical
  const sorted = [...all].sort((a, b) => {
    if (a.destacado !== b.destacado) return a.destacado ? -1 : 1;
    if (a.ordenPrioridad !== b.ordenPrioridad) return a.ordenPrioridad - b.ordenPrioridad;
    return a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" });
  });

  // Filter
  const filtered = sorted.filter((p) => {
    if (plan && !p.plan.includes(plan)) return false;
    if (tipo && p.tipo !== tipo) return false;
    if (ciudad && p.ciudad !== ciudad) return false;
    if (q) {
      const match =
        p.nombre.toLowerCase().includes(q) ||
        p.tipo.toLowerCase().includes(q) ||
        p.direccion.toLowerCase().includes(q) ||
        p.ciudad.toLowerCase().includes(q) ||
        p.especialidades.some((e) => e.toLowerCase().includes(q));
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
    source,
    fetchedAt,
  });
}
