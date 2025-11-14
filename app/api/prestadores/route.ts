// /app/api/prestadores/route.ts
import { NextRequest, NextResponse } from "next/server";
import prestadoresData from "@/data/prestadores.json";

type Prestador = {
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

function safeOrder(v?: number) {
  return typeof v === "number" && !Number.isNaN(v) ? v : 9999;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const plan = searchParams.get("plan") || "";
  const tipo = searchParams.get("tipo") || "";
  const ciudad = searchParams.get("ciudad") || "";
  const q = (searchParams.get("q") || "").toLowerCase();

  const page = Number(searchParams.get("page") || "1");
  const pageSize = Number(searchParams.get("pageSize") || "24");

  // 1) CAST a tipo Prestador
  const all = (prestadoresData as Prestador[]).map((p) => p);

  // 2) ORDEN GLOBAL POR PRIORIDAD
  const ordered = [...all].sort((a, b) => {
    const o1 = safeOrder(a.orden1) - safeOrder(b.orden1);
    if (o1 !== 0) return o1;

    const o2 = safeOrder(a.orden2) - safeOrder(b.orden2);
    if (o2 !== 0) return o2;

    return a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" });
  });

  // 3) FILTROS
  const filtered = ordered.filter((p) => {
    if (plan && !p.plan.includes(plan)) return false;
    if (tipo && p.tipo !== tipo) return false;
    if (ciudad && p.ciudad !== ciudad) return false;

    if (q) {
      const hayCoincidencia =
        p.nombre.toLowerCase().includes(q) ||
        p.tipo.toLowerCase().includes(q) ||
        p.direccion.toLowerCase().includes(q) ||
        p.ciudad.toLowerCase().includes(q);
      if (!hayCoincidencia) return false;
    }

    return true;
  });

  const total = filtered.length;

  // 4) PAGINACIÓN SOBRE LA LISTA YA ORDENADA
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = filtered.slice(start, end);

  return NextResponse.json({
    items,
    total,
    page,
    pageSize,
  });
}