"use client";

import { useMemo } from "react";

export type Filters = {
  plan: string;
  tipo: string;
  ciudad: string;
  q: string;
};

type Props = {
  value: Filters; // estado controlado desde el padre
  onChange: (next: Filters) => void;
  options: {
    plans: string[];
    tipos: string[];
    ciudades: string[];
  };
};

// mapping de color por plan para chips
const planClass: Record<string, string> = {
  "Plan Joven": "bg-emerald-50 text-emerald-900 ring-emerald-200",
  "Plan Coral": "bg-rose-50 text-rose-900 ring-rose-200",
  "Plan Integral": "bg-amber-50 text-amber-900 ring-amber-200",
  "Plan Máximo": "bg-indigo-50 text-indigo-900 ring-indigo-200",
};

export default function CartillaFilter({ value, onChange, options }: Props) {
  const { plans, tipos, ciudades } = options;

  const set = <K extends keyof Filters>(k: K, v: Filters[K]) =>
    onChange({ ...value, [k]: v });

  const reset = () => onChange({ plan: "", tipo: "", ciudad: "", q: "" });

  const chips = useMemo(() => {
    const arr: { k: "Plan" | "Tipo" | "Ciudad" | "Buscar"; v: string; onClear: () => void }[] = [];
    if (value.plan)   arr.push({ k: "Plan",   v: value.plan,   onClear: () => set("plan", "") });
    if (value.tipo)   arr.push({ k: "Tipo",   v: value.tipo,   onClear: () => set("tipo", "") });
    if (value.ciudad) arr.push({ k: "Ciudad", v: value.ciudad, onClear: () => set("ciudad", "") });
    if (value.q)      arr.push({ k: "Buscar", v: `"${value.q}"`, onClear: () => set("q", "") });
    return arr;
  }, [value]);

  const chipBase = "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1";
  const classForChip = (k: string, v: string) =>
    k === "Plan"
      ? `${chipBase} ${planClass[v] ?? "bg-[#33BAF0]/10 text-[#092f57] ring-[#33BAF0]/20"}`
      : `${chipBase} bg-[#33BAF0]/10 text-[#092f57] ring-[#33BAF0]/20`;

  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-black/[0.06] shadow-sm p-4 md:p-5">
      {/* Encabezado */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[#092f57] font-semibold">Filtrar búsqueda</h3>
        <button
          type="button"
          onClick={reset}
          className="text-sm text-[#092f57]/80 hover:text-[#092f57] underline underline-offset-4 decoration-[#33BAF0]/60"
        >
          Limpiar filtros
        </button>
      </div>

      {/* Controles */}
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
            value={value.plan}
            onChange={(e) => set("plan", e.target.value)}
            aria-label="Plan"
          >
            <option value="">Todos</option>
            {plans.map((pl) => (
              <option key={pl} value={pl}>{pl}</option>
            ))}
          </select>
        </label>

        {/* TIPO */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-[#092f57]/70">Tipo de prestador</span>
          <select
            className="rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#33BAF0] focus:border-transparent hover:border-[#33BAF0]/50 transition"
            value={value.tipo}
            onChange={(e) => set("tipo", e.target.value)}
            aria-label="Tipo de prestador"
          >
            <option value="">Todos</option>
            {tipos.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>

        {/* CIUDAD */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-[#092f57]/70">Ciudad</span>
          <select
            className="rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#33BAF0] focus:border-transparent hover:border-[#33BAF0]/50 transition"
            value={value.ciudad}
            onChange={(e) => set("ciudad", e.target.value)}
            aria-label="Ciudad"
          >
            <option value="">Todas</option>
            {ciudades.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>

        {/* BUSCADOR */}
        <label className="flex flex-col gap-1 sm:col-span-2 lg:col-span-2">
          <span className="text-xs text-[#092f57]/70">Buscar</span>
          <input
            type="search"
            inputMode="search"
            placeholder="Institución, tipo o dirección"
            className="rounded-xl border border-black/10 bg-white px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#33BAF0] focus:border-transparent hover:border-[#33BAF0]/50 transition"
            value={value.q}
            onChange={(e) => set("q", e.target.value)}
            aria-label="Buscar"
          />
        </label>
      </form>

      {/* Chips activos */}
      {chips.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((chip, i) => (
            <span key={`${chip.k}-${i}`} className={classForChip(chip.k, chip.v)}>
              <strong className="font-semibold">{chip.k}:</strong> {chip.v}
              <button
                type="button"
                onClick={chip.onClear}
                className="ml-1 rounded-full px-1 text-xs/none hover:bg-black/10"
                aria-label={`Quitar filtro ${chip.k}`}
                title="Quitar"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}