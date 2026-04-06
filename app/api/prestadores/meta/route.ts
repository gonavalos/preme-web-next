// /app/api/prestadores/meta/route.ts
import { NextResponse } from "next/server";
import { fetchCartilla } from "@/lib/gecros";
import fallbackData from "@/data/prestadores.json";

type FallbackPrestador = { plan: string[]; tipo: string; ciudad: string };

export async function GET() {
  let tipos: string[] = [];
  let ciudades: string[] = [];
  const planSet = new Set<string>();
  const tipoSet = new Set<string>();
  const citySet = new Set<string>();

  try {
    const { prestadores } = await fetchCartilla();
    for (const p of prestadores) {
      p.plan.forEach((pl) => planSet.add(pl));
      tipoSet.add(p.tipo);
      citySet.add(p.ciudad);
    }
  } catch {
    // Fallback
    for (const p of fallbackData as FallbackPrestador[]) {
      (p.plan ?? []).forEach((pl) => planSet.add(pl?.trim()));
      tipoSet.add((p.tipo ?? "").trim());
      citySet.add((p.ciudad ?? "").trim());
    }
  }

  const planes = Array.from(planSet)
    .filter(Boolean)
    .sort()
    .map((label) => ({ label, value: label }));

  tipos = Array.from(tipoSet).filter(Boolean).sort();
  ciudades = Array.from(citySet).filter(Boolean).sort();

  return NextResponse.json({
    planes,
    tipos: tipos.map((label) => ({ label, value: label })),
    ciudades: ciudades.map((label) => ({ label, value: label })),
  });
}
