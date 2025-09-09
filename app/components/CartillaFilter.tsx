// /app/components/CartillaFilter.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import prestadoresData from "../../data/prestadores.json";

export type Prestador = {
  id: number;
  nombre: string;
  tipo: string;
  especialidades: string[];
  plan: string[];
  provincia: string;
  ciudad: string;
  direccion: string;
  telefono: string;
};

type Props = {
  onResults: (items: Prestador[]) => void;
};

type Filters = {
  plan: string;
  especialidad: string;
  provincia: string;
  ciudad: string;
  q: string;
};

export default function CartillaFilter({ onResults }: Props) {
  const allPrestadores = prestadoresData as unknown as Prestador[];

  const [filters, setFilters] = useState<Filters>({
    plan: "",
    especialidad: "",
    provincia: "",
    ciudad: "",
    q: "",
  });

  const uniquePlans = useMemo(() => {
    const set = new Set<string>();
    allPrestadores.forEach((p) => p.plan.forEach((pl) => set.add(pl)));
    return Array.from(set).sort();
  }, [allPrestadores]);

  const uniqueEspecialidades = useMemo(() => {
    const set = new Set<string>();
    allPrestadores.forEach((p) => p.especialidades.forEach((e) => set.add(e)));
    return Array.from(set).sort();
  }, [allPrestadores]);

  const uniqueProvincias = useMemo(() => {
    const set = new Set<string>();
    allPrestadores.forEach((p) => set.add(p.provincia));
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
      const okEsp =
        !filters.especialidad ||
        p.especialidades.some((e) => e.toLowerCase() === filters.especialidad.toLowerCase());
      const okProv = !filters.provincia || p.provincia === filters.provincia;
      const okCity = !filters.ciudad || p.ciudad === filters.ciudad;
      const okQuery =
        !q ||
        p.nombre.toLowerCase().includes(q) ||
        p.tipo.toLowerCase().includes(q) ||
        p.direccion.toLowerCase().includes(q);

      return okPlan && okEsp && okProv && okCity && okQuery;
    });

    onResults(filtered);
  }, [filters, allPrestadores, onResults]);

  return (
    <form
      className="grid gap-4 md:grid-cols-5"
      onSubmit={(e) => e.preventDefault()}
      role="search"
      aria-label="Filtrar cartilla médica"
    >
      <select
        className="rounded-lg border border-black/10 px-3 py-2"
        value={filters.plan}
        onChange={handleChange("plan")}
        aria-label="Plan"
      >
        <option value="">Plan (todos)</option>
        {uniquePlans.map((pl) => (
          <option key={pl} value={pl}>
            {pl}
          </option>
        ))}
      </select>

      <select
        className="rounded-lg border border-black/10 px-3 py-2"
        value={filters.especialidad}
        onChange={handleChange("especialidad")}
        aria-label="Especialidad"
      >
        <option value="">Especialidad (todas)</option>
        {uniqueEspecialidades.map((esp) => (
          <option key={esp} value={esp}>
            {esp}
          </option>
        ))}
      </select>

      <select
        className="rounded-lg border border-black/10 px-3 py-2"
        value={filters.provincia}
        onChange={handleChange("provincia")}
        aria-label="Provincia"
      >
        <option value="">Provincia (todas)</option>
        {uniqueProvincias.map((prov) => (
          <option key={prov} value={prov}>
            {prov}
          </option>
        ))}
      </select>

      <select
        className="rounded-lg border border-black/10 px-3 py-2"
        value={filters.ciudad}
        onChange={handleChange("ciudad")}
        aria-label="Ciudad"
      >
        <option value="">Ciudad (todas)</option>
        {uniqueCiudades.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <input
        type="search"
        inputMode="search"
        placeholder="Buscar por nombre, tipo o dirección"
        className="rounded-lg border border-black/10 px-3 py-2 md:col-span-1"
        value={filters.q}
        onChange={handleChange("q")}
        aria-label="Buscar"
      />
    </form>
  );
}