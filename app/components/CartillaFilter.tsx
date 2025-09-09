// /components/CartillaFilter.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import planesData from "../../data/planes.json";
import prestadores from "../../data/prestadores.json";

type Prestador = {
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
  onResults: (list: Prestador[]) => void;
};

export default function CartillaFilter({ onResults }: Props) {
  const planes = useMemo(() => {
    const arr =
      Array.isArray(planesData)
        ? planesData
        : (planesData as any).Plan ?? [];
    return arr.map((p: any) => p.nombre);
  }, []);

  const [plan, setPlan] = useState<string>("");
  const [provincia, setProvincia] = useState<string>("");
  const [ciudad, setCiudad] = useState<string>("");
  const [especialidad, setEspecialidad] = useState<string>("");
  const [q, setQ] = useState<string>("");

  // Opciones dinámicas a partir del JSON de prestadores
  const provincias = useMemo(
    () => Array.from(new Set((prestadores as Prestador[]).map((p) => p.provincia))).sort(),
    []
  );
  const ciudades = useMemo(
    () =>
      Array.from(
        new Set(
          (prestadores as Prestador[])
            .filter((p) => !provincia || p.provincia === provincia)
            .map((p) => p.ciudad)
        )
      ).sort(),
    [provincia]
  );
  const especialidades = useMemo(
    () =>
      Array.from(
        new Set(
          (prestadores as Prestador[])
            .flatMap((p) => p.especialidades)
        )
      ).sort(),
    []
  );

  useEffect(() => {
    const res = (prestadores as Prestador[]).filter((p) => {
      const matchPlan = !plan || p.plan.includes(plan);
      const matchProv = !provincia || p.provincia === provincia;
      const matchCiudad = !ciudad || p.ciudad === ciudad;
      const matchEsp = !especialidad || p.especialidades.includes(especialidad);
      const matchQ =
        !q ||
        p.nombre.toLowerCase().includes(q.toLowerCase()) ||
        p.tipo.toLowerCase().includes(q.toLowerCase());
      return matchPlan && matchProv && matchCiudad && matchEsp && matchQ;
    });
    onResults(res);
  }, [plan, provincia, ciudad, especialidad, q, onResults]);

  // Geolocalización (opcional, setear provincia/ciudad rápido)
  const usarMiUbicacion = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      () => {
        // Placeholder: seteamos un default útil (Córdoba Capital)
        setProvincia("Córdoba");
        setCiudad("Córdoba Capital");
      },
      () => {
        // ignorar errores por ahora
      }
    );
  };

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-4 md:p-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
        <select className="rounded-lg border px-3 py-2" value={plan} onChange={(e) => setPlan(e.target.value)}>
          <option value="">Plan (todos)</option>
          {planes.map((p: string) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>

        <select className="rounded-lg border px-3 py-2" value={provincia} onChange={(e) => setProvincia(e.target.value)}>
          <option value="">Provincia</option>
          {provincias.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>

        <select className="rounded-lg border px-3 py-2" value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
          <option value="">Ciudad</option>
          {ciudades.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select className="rounded-lg border px-3 py-2" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)}>
          <option value="">Especialidad</option>
          {especialidades.map((e) => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>

        <input
          className="col-span-2 md:col-span-1 rounded-lg border px-3 py-2"
          placeholder="Clínica o profesional"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <button
          type="button"
          onClick={usarMiUbicacion}
          className="rounded-lg bg-[#33BAF0] px-3 py-2 text-white hover:opacity-95"
        >
          Usar mi ubicación
        </button>
      </div>
    </div>
  );
}