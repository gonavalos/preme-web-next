// /app/api/prestadores/route.ts
import { NextResponse } from "next/server";
import raw from "../../../data/prestadores.json";

export const runtime = "edge";

type Prestador = {
  id: number;
  nombre: string;
  tipo: string;
  plan: string[];
  ciudad: string;
  direccion: string;
  telefono: string;
};

const norm = (s: string) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const ALL: Prestador[] = (raw as Prestador[]).map(p => ({
  ...p,
  nombre: p.nombre?.trim() ?? "",
  tipo: p.tipo?.trim() ?? "",
  ciudad: p.ciudad?.trim() ?? "",
  direccion: p.direccion?.trim() ?? "",
  telefono: p.telefono?.trim() ?? "",
}));

export async function GET(req: Request) {
  const url = new URL(req.url);

  const planQ   = url.searchParams.get("plan")   || "";
  const tipoQ   = url.searchParams.get("tipo")   || "";
  const ciudadQ = url.searchParams.get("ciudad") || "";
  const q       = url.searchParams.get("q")      || "";

  const planQN   = norm(planQ);
  const tipoQN   = norm(tipoQ);
  const ciudadQN = norm(ciudadQ);
  const qN       = norm(q);

  const page = Math.max(1, Number(url.searchParams.get("page") || "1"));
  const pageSize = Math.min(50, Math.max(6, Number(url.searchParams.get("pageSize") || "24")));

  const filtered = ALL.filter(p => {
    const pPlanesN = (p.plan ?? []).map(pl => norm(pl));
    const pTipoN   = norm(p.tipo);
    const pCiudadN = norm(p.ciudad);

    const okPlan   = !planQN   || pPlanesN.includes(planQN);
    const okTipo   = !tipoQN   || pTipoN === tipoQN;               // ← compara contra el tipo tal cual (normalizado)
    const okCiudad = !ciudadQN || pCiudadN === ciudadQN;           // ← igual para ciudad
    const okQ      = !qN || norm(p.nombre).includes(qN) || pTipoN.includes(qN) || norm(p.direccion).includes(qN);

    return okPlan && okTipo && okCiudad && okQ;
  });

  const total = filtered.length;
  const start = (page - 1) * pageSize;
  const end   = start + pageSize;
  const items = filtered.slice(start, end);

  const res = NextResponse.json({ items, total, page, pageSize });
  res.headers.set("Cache-Control", "public, s-maxage=300, stale-while-revalidate=86400");
  return res;
}