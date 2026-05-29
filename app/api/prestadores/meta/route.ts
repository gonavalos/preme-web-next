// /app/api/prestadores/meta/route.ts
// Opciones de filtro (tipos, especialidades médicas, planes, ciudades) del snapshot.
import { NextResponse } from "next/server";
import type { NormalizedPrestador } from "@/lib/gecros";
import snapshot from "@/data/cartilla.json";

const prestadores = snapshot.prestadores as NormalizedPrestador[];

// Mismo orden que el listado (route.ts). Las categorías no listadas van al final.
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
function catRank(tipo: string): number {
  const i = CATEGORY_ORDER.indexOf(tipo);
  return i === -1 ? CATEGORY_ORDER.length : i;
}

export async function GET() {
  const planSet = new Set<string>();
  const tipoSet = new Set<string>();
  const citySet = new Set<string>();
  const espSet = new Set<string>();

  for (const p of prestadores) {
    p.plan.forEach((pl) => planSet.add(pl));
    tipoSet.add(p.tipo);
    citySet.add(p.ciudad);
    p.especialidadesMedicas.forEach((e) => espSet.add(e));
  }

  const planes = Array.from(planSet)
    .filter(Boolean)
    .sort()
    .map((label) => ({ label, value: label }));

  // Tipos en el orden de categorías; los no listados, alfabético al final.
  const tipos = Array.from(tipoSet)
    .filter(Boolean)
    .sort((a, b) => {
      const ra = catRank(a);
      const rb = catRank(b);
      if (ra !== rb) return ra - rb;
      return a.localeCompare(b, "es", { sensitivity: "base" });
    });

  const especialidades = Array.from(espSet)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, "es", { sensitivity: "base" }));

  const ciudades = Array.from(citySet).filter(Boolean).sort();

  return NextResponse.json({
    planes,
    tipos: tipos.map((label) => ({ label, value: label })),
    especialidades: especialidades.map((label) => ({ label, value: label })),
    ciudades: ciudades.map((label) => ({ label, value: label })),
  });
}
