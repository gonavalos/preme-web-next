// /app/api/prestadores/route.ts
import { NextResponse } from "next/server";
import raw from "../../../data/prestadores.json";

// Opcional: Edge = menor latencia
export const runtime = "edge";

type Prestador = {
  id: number;
  nombre: string;
  tipo: string;
  plan: string[];
  ciudad: string;
  direccion: string;
  telefono: string;
  provincia?: string;
  especialidades?: string[];
};

// Cargamos 1 vez en módulo
const ALL: Prestador[] = (raw as Prestador[]).map(p => ({
  ...p,
  // normalizaciones mínimas
  nombre: p.nombre.trim(),
  tipo: p.tipo.trim(),
  ciudad: p.ciudad.trim(),
}));

export async function GET(req: Request) {
  const url = new URL(req.url);
  const plan = (url.searchParams.get("plan") || "").toLowerCase();
  const tipo = (url.searchParams.get("tipo") || "").toLowerCase();
  const ciudad = (url.searchParams.get("ciudad") || "").toLowerCase();
  const q = (url.searchParams.get("q") || "").toLowerCase();

  const page = Math.max(1, Number(url.searchParams.get("page") || "1"));
  const pageSize = Math.min(50, Math.max(6, Number(url.searchParams.get("pageSize") || "24"))); // 24 = 3x8 cards

  // FILTRO SERVER-SIDE
  let filtered = ALL.filter(p => {
    const okPlan = !plan || p.plan.some(pl => pl.toLowerCase() === plan);
    const okTipo = !tipo || p.tipo.toLowerCase() === tipo;
    const okCiudad = !ciudad || p.ciudad.toLowerCase() === ciudad;
    const okQ =
      !q ||
      p.nombre.toLowerCase().includes(q) ||
      p.tipo.toLowerCase().includes(q) ||
      p.direccion.toLowerCase().includes(q);

    return okPlan && okTipo && okCiudad && okQ;
  });

  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = filtered.slice(start, end);

  const res = NextResponse.json({ items, total, page, pageSize });
  // Cache 5 min en CDN; entrega stale mientras revalida 1 día.
  res.headers.set("Cache-Control", "public, s-maxage=300, stale-while-revalidate=86400");
  return res;
}