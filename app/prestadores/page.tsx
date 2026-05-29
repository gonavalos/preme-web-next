// /app/prestadores/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartillaFilter, { Filters } from "../components/CartillaFilter";
import { FaPhoneAlt, FaMapMarkerAlt, FaStar } from "react-icons/fa";

type Prestador = {
  id: number;
  nombre: string;
  tipo: string;
  especialidades: string[];
  especialidadesMedicas: string[];
  plan: string[];
  ciudad: string;
  direccion: string;
  telefono: string;
  lat: number | null;
  lng: number | null;
  destacado: boolean;
  ordenPrioridad: number;
};

const HERO_SRC = "/assets/hero/cartillav2.png";
const PAGE_SIZE = 24;

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type MetaResp = {
  planes: { value: string; label: string }[];
  tipos: { value: string; label: string }[];
  especialidades: { value: string; label: string }[];
  ciudades: { value: string; label: string }[];
};

const PLAN_COLORS: Record<string, string> = {
  "Plan Joven": "bg-[#F79630]/12 text-[#F79630] ring-1 ring-[#F79630]/25",
  "Plan Coral": "bg-[#33BAF0]/12 text-[#33BAF0] ring-1 ring-[#33BAF0]/25",
  "Plan Integral": "bg-[#68AE26]/12 text-[#68AE26] ring-1 ring-[#68AE26]/25",
  "Plan Máximo": "bg-[#864D8D]/12 text-[#864D8D] ring-1 ring-[#864D8D]/25",
};

export default function PrestadoresPage() {
  const [filters, setFilters] = useState<Filters>({
    plan: "",
    tipo: "",
    esp: "",
    ciudad: "",
    q: "",
  });
  const [page, setPage] = useState(1);

  const { data: meta } = useSWR<MetaResp>("/api/prestadores/meta", fetcher);

  const planLabelToValue = useMemo(() => {
    const m = new Map<string, string>();
    meta?.planes.forEach((p) => m.set(p.label, p.value));
    return m;
  }, [meta]);

  const tipoLabelToValue = useMemo(() => {
    const m = new Map<string, string>();
    meta?.tipos.forEach((t) => m.set(t.label, t.value));
    return m;
  }, [meta]);

  const espLabelToValue = useMemo(() => {
    const m = new Map<string, string>();
    meta?.especialidades?.forEach((e) => m.set(e.label, e.value));
    return m;
  }, [meta]);

  const ciudadLabelToValue = useMemo(() => {
    const m = new Map<string, string>();
    meta?.ciudades.forEach((c) => m.set(c.label, c.value));
    return m;
  }, [meta]);

  const qs = useMemo(() => {
    const p = new URLSearchParams();
    const planValue = filters.plan ? planLabelToValue.get(filters.plan) ?? "" : "";
    const tipoValue = filters.tipo ? tipoLabelToValue.get(filters.tipo) ?? "" : "";
    const espValue = filters.esp ? espLabelToValue.get(filters.esp) ?? "" : "";
    const ciudadValue = filters.ciudad ? ciudadLabelToValue.get(filters.ciudad) ?? "" : "";
    if (planValue) p.set("plan", planValue);
    if (tipoValue) p.set("tipo", tipoValue);
    if (espValue) p.set("esp", espValue);
    if (ciudadValue) p.set("ciudad", ciudadValue);
    if (filters.q) p.set("q", filters.q);
    p.set("page", String(page));
    p.set("pageSize", String(PAGE_SIZE));
    return p.toString();
  }, [filters, page, planLabelToValue, tipoLabelToValue, espLabelToValue, ciudadLabelToValue]);

  const { data, isLoading } = useSWR<{
    items: Prestador[];
    total: number;
    page: number;
    pageSize: number;
    source: "gecros" | "fallback";
    fetchedAt: string;
  }>(`/api/prestadores?${qs}`, fetcher, { keepPreviousData: true });

  const total = data?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const isFallback = data?.source === "fallback";

  useEffect(() => setPage(1), [filters]);

  const options = useMemo(
    () => ({
      plans: meta?.planes?.map((p) => p.label) ?? [],
      tipos: meta?.tipos?.map((t) => t.label) ?? [],
      especialidades: meta?.especialidades?.map((e) => e.label) ?? [],
      ciudades: meta?.ciudades?.map((c) => c.label) ?? [],
    }),
    [meta]
  );

  const items = data?.items ?? [];

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
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Cartilla médica
            </h1>
            <p className="mt-3 text-base md:text-lg text-white/90">
              Buscá por plan, tipo, especialidad y ciudad. Encontrá el prestador indicado.
            </p>
          </div>
        </div>
      </section>

      {/* FILTROS + RESULTADOS */}
      <main className="mx-auto max-w-7xl px-4 py-10">
        <CartillaFilter value={filters} onChange={setFilters} options={options} />

        {/* Fallback notice */}
        {isFallback && (
          <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
            Datos actualizados al{" "}
            {new Date(data?.fetchedAt ?? "").toLocaleDateString("es-AR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            . Los datos en tiempo real no están disponibles en este momento.
          </div>
        )}

        {/* RESULTADOS */}
        <section className="mt-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="h-44 rounded-2xl bg-gray-100 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <>
              <div className="mb-4 text-sm text-gray-600">
                {total} resultado{total !== 1 ? "s" : ""}
                {filters.plan || filters.tipo || filters.esp || filters.ciudad || filters.q
                  ? " (filtrado)"
                  : ""}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((p) => (
                  <PrestadorCard key={`${p.id}-${p.tipo}`} prestador={p} />
                ))}
              </div>

              {/* Paginación */}
              {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className="rounded-lg px-3 py-2 text-sm ring-1 ring-black/10 disabled:opacity-50 hover:bg-gray-50 transition"
                    disabled={page === 1}
                  >
                    ← Anterior
                  </button>
                  <span className="text-sm text-gray-600">
                    Página {page} de {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    className="rounded-lg px-3 py-2 text-sm ring-1 ring-black/10 disabled:opacity-50 hover:bg-gray-50 transition"
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

function PrestadorCard({ prestador: p }: { prestador: Prestador }) {
  const tel = p.telefono?.replace(/\D/g, "");

  return (
    <article
      className={`rounded-2xl border bg-white p-5 transition-shadow hover:shadow-md ${
        p.destacado
          ? "border-[#33BAF0]/30 ring-1 ring-[#33BAF0]/10"
          : "border-black/5"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-[#092f57] leading-tight">
          {p.nombre}
        </h3>
        {p.destacado && (
          <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-[#33BAF0]/10 text-[#33BAF0] px-2.5 py-1 text-[11px] font-bold">
            <FaStar className="text-[10px]" />
            Destacado
          </span>
        )}
      </div>

      {/* Tipo / Categoría */}
      <p className="mt-1 text-sm text-gray-500">{p.tipo}</p>

      {/* Especialidades médicas que se atienden (max 4) */}
      {p.especialidadesMedicas.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {p.especialidadesMedicas.slice(0, 4).map((esp) => (
            <span
              key={esp}
              className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] text-gray-600"
            >
              {esp}
            </span>
          ))}
          {p.especialidadesMedicas.length > 4 && (
            <span className="text-[11px] text-gray-400">
              +{p.especialidadesMedicas.length - 4} más
            </span>
          )}
        </div>
      )}

      {/* Dirección */}
      <div className="mt-3 flex items-start gap-2 text-sm text-gray-700">
        <FaMapMarkerAlt className="shrink-0 mt-0.5 text-gray-400" />
        <span>
          {p.direccion}
          {p.ciudad ? `, ${p.ciudad}` : ""}
        </span>
      </div>

      {/* Teléfono */}
      {tel && (
        <a
          href={`tel:${tel}`}
          className="mt-2 flex items-center gap-2 text-sm text-[#33BAF0] hover:text-[#1a9fd8] font-medium transition-colors"
        >
          <FaPhoneAlt className="text-xs" />
          {p.telefono}
        </a>
      )}

      {/* Planes */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.plan.map((pl) => {
          const cls =
            PLAN_COLORS[pl] ??
            "bg-slate-100 text-[#092f57] ring-1 ring-slate-200";
          return (
            <span
              key={pl}
              className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${cls}`}
            >
              {pl}
            </span>
          );
        })}
      </div>
    </article>
  );
}
