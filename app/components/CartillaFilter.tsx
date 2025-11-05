// /app/components/CartillaFilter.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import prestadoresData from "../../data/prestadores.json";

export type Prestador = {
  id: number;
  nombre: string;
  tipo: string;
  plan: string[];
  ciudad: string;
  direccion: string;
  telefono: string;
};

type Props = {
  onResults: (items: Prestador[]) => void;
};

type Filters = {
  plan: string;
  tipo: string;
  ciudad: string;
  q: string;
};

export default function CartillaFilter({ onResults }: Props) {
  const allPrestadores = prestadoresData as unknown as Prestador[];

  const [filters, setFilters] = useState<Filters>({
    plan: "",
    tipo: "",
    ciudad: "",
    q: "",
  });

  // Opciones únicas
  const uniquePlans = useMemo(() => {
    const set = new Set<string>();
    allPrestadores.forEach((p) => p.plan.forEach((pl) => set.add(pl)));
    return Array.from(set).sort();
  }, [allPrestadores]);

  const uniqueTipos = useMemo(() => {
    const set = new Set<string>();
    allPrestadores.forEach((p) => set.add(p.tipo));
    return Array.from(set).sort();
  }, [allPrestadores]);

  const uniqueCiudades = useMemo(() => {
    const set = new Set<string>();
    allPrestadores.forEach((p) => set.add(p.ciudad));
    return Array.from(set).sort();
  }, [allPrestadores]);

  function handleChange<K extends keyof Filters>(
    key: K
  ): (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void {
    return (e) => setFilters((prev) => ({ ...prev, [key]: e.target.value }));
  }

  useEffect(() => {
    const q = filters.q.trim().toLowerCase();

    const filtered = allPrestadores.filter((p) => {
      const okPlan =
        !filters.plan ||
        p.plan.some((pl) => pl.toLowerCase() === filters.plan.toLowerCase());
      const okTipo =
        !filters.tipo || p.tipo.toLowerCase() === filters.tipo.toLowerCase();
      const okCity =
        !filters.ciudad ||
        p.ciudad.toLowerCase() === filters.ciudad.toLowerCase();
      const okQuery =
        !q ||
        p.nombre.toLowerCase().includes(q) ||
        p.tipo.toLowerCase().includes(q) ||
        p.direccion.toLowerCase().includes(q);

      return okPlan && okTipo && okCity && okQuery;
    });

    onResults(filtered);
  }, [filters, allPrestadores, onResults]);

  const resetFilters = () =>
    setFilters({
      plan: "",
      tipo: "",
      ciudad: "",
      q: "",
    });

  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-black/[0.06] shadow-sm p-4 md:p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[#092f57] font-semibold">
          Filtrar búsqueda
        </h3>
        <button
          type="button"
          onClick={resetFilters}
          className="text-sm text-[#092f57]/80 hover:text-[#092f57] underline underline-offset-4 decoration-[#33BAF0]/60"
        >
          Limpiar filtros
        </button>
      </div>

      <form
        className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-5"
        onSubmit={(e) => e.preventDefault()}
        role="search"
        aria-label="Filtrar cartilla médica"
      >
        {/* PLAN */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-[#092f57]/70">Plan</span>
          <select
            className="rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#33BAF0] focus:border-transparent hover:border-[#33BAF0]/50 transition"
            value={filters.plan}
            onChange={handleChange("plan")}
            aria-label="Plan"
          >
            <option value="">Todos</option>
            {uniquePlans.map((pl) => (
              <option key={pl} value={pl}>
                {pl}
              </option>
            ))}
          </select>
        </label>

        {/* TIPO */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-[#092f57]/70">Tipo de prestador</span>
          <select
            className="rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#33BAF0] focus:border-transparent hover:border-[#33BAF0]/50 transition"
            value={filters.tipo}
            onChange={handleChange("tipo")}
            aria-label="Tipo de prestador"
          >
            <option value="">Todos</option>
            {uniqueTipos.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        {/* CIUDAD */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-[#092f57]/70">Ciudad</span>
          <select
            className="rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#33BAF0] focus:border-transparent hover:border-[#33BAF0]/50 transition"
            value={filters.ciudad}
            onChange={handleChange("ciudad")}
            aria-label="Ciudad"
          >
            <option value="">Todas</option>
            {uniqueCiudades.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        {/* BUSCADOR */}
        <label className="flex flex-col gap-1 sm:col-span-2 lg:col-span-2">
          <span className="text-xs text-[#092f57]/70">Buscar</span>
          <input
            type="search"
            inputMode="search"
            placeholder="Nombre, tipo o dirección"
            className="rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#33BAF0] focus:border-transparent hover:border-[#33BAF0]/50 transition"
            value={filters.q}
            onChange={handleChange("q")}
            aria-label="Buscar"
          />
        </label>
      </form>

      {/* Chips de filtros activos */}
      <div className="mt-4 flex flex-wrap gap-2">
        {[filters.plan && { k: "Plan", v: filters.plan },
          filters.tipo && { k: "Tipo", v: filters.tipo },
          filters.ciudad && { k: "Ciudad", v: filters.ciudad },
          filters.q && { k: "Buscar", v: `"${filters.q}"` },
        ].filter(Boolean).map((chip, i) => (
          <span
            key={`${(chip as any).k}-${i}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#33BAF0]/10 text-[#092f57] px-3 py-1 text-xs ring-1 ring-[#33BAF0]/20"
          >
            <strong className="font-semibold">{(chip as any).k}:</strong> {(chip as any).v}
          </span>
        ))}
      </div>
    </div>
  );
}