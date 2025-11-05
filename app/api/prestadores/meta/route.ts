// /app/api/prestadores/meta/route.ts
import { NextResponse } from "next/server";
import raw from "../../../../data/prestadores.json";

export const runtime = "edge";

type Prestador = {
  plan: string[];
  tipo: string;
  ciudad: string;
};

export async function GET() {
  const ALL = (raw as Prestador[]);

  // Planes (tal cual)
  const planSet = new Set<string>();
  ALL.forEach(p => (p.plan ?? []).forEach(pl => planSet.add(pl?.trim())));
  const planes = Array.from(planSet)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b))
    .map(label => ({ label, value: label })); // value = label (tal cual)

  // Tipos (tal cual)
  const tipoSet = new Set<string>();
  ALL.forEach(p => tipoSet.add((p.tipo ?? "").trim()));
  const tipos = Array.from(tipoSet)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b))
    .map(label => ({ label, value: label })); // value = label (tal cual)

  // Ciudades (tal cual)
  const citySet = new Set<string>();
  ALL.forEach(p => citySet.add((p.ciudad ?? "").trim()));
  const ciudades = Array.from(citySet)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b))
    .map(label => ({ label, value: label })); // value = label (tal cual)

  return NextResponse.json({ planes, tipos, ciudades });
}