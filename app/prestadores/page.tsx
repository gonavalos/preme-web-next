// /app/prestadores/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Prestador = {
  id: number;
  nombre: string;
  tipo: string;
  plan: string[];
  ciudad: string;
  direccion: string;
  telefono: string;
};

const HERO_SRC = "/assets/hero/cartillav2.png";
const PAGE_SIZE = 24;

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function PrestadoresPage() {
  // Filtros mínimos (según tu nueva estructura)
  const [plan, setPlan] = useState("");
  const [tipo, setTipo] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const qs = useMemo(() => {
    const p = new URLSearchParams();
    if (plan) p.set("plan", plan);
    if (tipo) p.set("tipo", tipo);
    if (ciudad) p.set("ciudad", ciudad);
    if (q) p.set("q", q);
    p.set("page", String(page));
    p.set("pageSize", String(PAGE_SIZE));
    return p.toString();
  }, [plan, tipo, ciudad, q, page]);

  const { data, isLoading } = useSWR<{ items: Prestador[]; total: number; page: number; pageSize: number }>(
    `/api/prestadores?${qs}`,
    fetcher,
    { keepPreviousData: true }
  );

  const items = data?.items ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  // Reset page al cambiar filtros
  useEffect(() => { setPage(1); }, [plan, tipo, ciudad, q]);

  // (Opcional) combos estáticos para demo rápida
  const plans = ["Plan Joven", "Plan Coral", "Plan Integral", "Plan Máximo"];
  const tipos = ["Clínica", "Consultorios", "Diagnóstico", "Laboratorio", "Farmacia"];
  const ciudades = ["Córdoba Capital", "Río Cuarto", "Villa María", "Alta Gracia"];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[42vh] md:h-[56vh] w-full overflow-hidden">
        <Image
          src={HERO_SRC}
          alt="Cartilla y red de prestadores PREME"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[top_80%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Cartilla médica</h1>
            <p className="mt-3 text-base md:text-lg text-white/90">
              Buscá por plan, tipo y ciudad. Encontrá el profesional indicado.
            </p>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <main className="mx-auto max-w-7xl px-4 py-10">
        <form
          className="grid gap-4 md:grid-cols-5"
          onSubmit={(e) => e.preventDefault()}
          role="search"
          aria-label="Filtrar cartilla médica"
        >
          <select className="rounded-lg border border-black/10 px-3 py-2" value={plan} onChange={(e) => setPlan(e.target.value)}>
            <option value="">Plan (todos)</option>
            {plans.map(pl => <option key={pl} value={pl}>{pl}</option>)}
          </select>

          <select className="rounded-lg border border-black/10 px-3 py-2" value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">Tipo (todos)</option>
            {tipos.map(t => <option key={t} value={t}>{t}</option>)}
          </select>

          <select className="rounded-lg border border-black/10 px-3 py-2" value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
            <option value="">Ciudad (todas)</option>
            {ciudades.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <input
            type="search"
            placeholder="Buscar por nombre o dirección"
            className="rounded-lg border border-black/10 px-3 py-2 md:col-span-2"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </form>

        {/* RESULTADOS */}
        <section className="mt-8">
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-32 rounded-2xl bg-gray-100 animate-pulse" />
              ))}
            </div>
          )}

          {!isLoading && (
            <>
              <div className="mb-4 text-sm text-gray-600">
                {total} resultado{total !== 1 ? "s" : ""}{plan || tipo || ciudad || q ? " (filtrado)" : ""}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((p) => (
                  <article key={p.id} className="rounded-2xl border border-black/5 bg-white p-5">
                    <h3 className="text-lg font-bold text-[#092f57]">{p.nombre}</h3>
                    <p className="text-sm text-gray-600">{p.tipo}</p>
                    <p className="mt-2 text-sm text-gray-700">{p.direccion}</p>
                    <p className="text-sm text-gray-700">{p.ciudad}, Córdoba</p>
                    <p className="mt-1 text-sm text-gray-700">Tel: {p.telefono}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.plan.map((pl) => (
                        <span key={pl} className="rounded-full bg-[#f1f5f9] px-3 py-1 text-xs text-[#092f57] ring-1 ring-black/5">
                          {pl}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              {/* Paginación */}
              {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className="rounded-lg px-3 py-2 text-sm ring-1 ring-black/10 disabled:opacity-50"
                    disabled={page === 1}
                  >
                    ← Anterior
                  </button>
                  <span className="text-sm text-gray-600">
                    Página {page} de {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    className="rounded-lg px-3 py-2 text-sm ring-1 ring-black/10 disabled:opacity-50"
                    disabled={page === totalPages}
                  >
                    Siguiente →
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}