// /app/planes/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import planesData from "../../data/planes.json";

type PlanJSON = {
  id: number;
  nombre: string;
  descripcion: string;
  beneficios: string[];
  color?: string;
  highlight?: string;
  buttonColor?: string;
  headerImageSrc?: string;
  image?: string;          // fallback si no hay headerImageSrc
  imageAlt?: string;
};

type PlanView = {
  id: number;
  title: string;
  subtitle: string;
  benefits: string[];
  color: string;
  cta: string;
  heroSrc: string;
  heroAlt: string;
};

// helpers arriba del componente o dentro de PlanesPage
function hexToRgb(hex: string) {
  const m = hex.replace("#", "").match(/^([0-9a-f]{6})$/i);
  if (!m) return null;
  const int = parseInt(m[1], 16);
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}
function rgba(hex: string, a: number) {
  const rgb = hexToRgb(hex);
  if (!rgb) return `rgba(51,186,240,${a})`; // fallback brand celeste
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`;
}

export default function PlanesPage() {
  // Normalizamos el JSON a un arreglo de planes listos para render
  const planes: PlanView[] = useMemo(() => {
    const raw: PlanJSON[] = Array.isArray(planesData)
      ? (planesData as PlanJSON[])
      : ((planesData as { Plan?: PlanJSON[] }).Plan ?? []);
    return raw.map((p) => ({
      id: p.id,
      title: p.nombre,
      subtitle: p.descripcion,
      benefits: p.beneficios ?? [],
      color: p.color ?? "#33BAF0",
      cta: p.buttonColor ?? p.color ?? "#33BAF0",
      heroSrc: p.headerImageSrc || p.image || "/banner.png",
      heroAlt: p.imageAlt || p.nombre,
    }));
  }, []);

  const [active, setActive] = useState(0);
  const current = planes[active];

  return (
    <>
      <Navbar />

      {/* HERO con imagen del plan seleccionado */}
      <section className="relative w-full h-[52vh] md:h-[60vh]">
        <Image
          src={current?.heroSrc || "/banner.png"}
          alt={current?.heroAlt || "Plan PREME"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[top_85%]"
        />
        {/* veladura para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/0" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 md:px-6 w-full">
            <div className="max-w-2xl text-white">
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: current?.cta || "#33BAF0" }}
              >
                {current?.title}
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
                Cobertura pensada para vos
              </h1>
              <p className="mt-3 text-base md:text-lg text-white/90">
                {current?.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#detalle"
                  className="rounded-lg px-5 py-3 text-white font-semibold"
                  style={{ backgroundColor: current?.cta || "#33BAF0" }}
                >
                  Ver detalles del plan
                </a>
                <a
                  href="/contacto"
                  className="rounded-lg border border-white/60 px-5 py-3 text-white hover:bg-white/10"
                >
                  Quiero asesoramiento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* SWITCHER de planes (botones) */}
<section className="bg-white">
  <div className="mx-auto max-w-7xl px-4 md:px-6 py-4">
    <div className="mx-auto max-w-3xl flex flex-wrap justify-center gap-8 md:gap-3">
      {planes.map((p, i) => {
        const isActive = i === active;
        const inactiveBg = rgba(p.cta, 0.12);     // fondo suave
        const inactiveBorder = rgba(p.cta, 0.35); // borde un poco más notorio

        return (
          <button
            key={p.id}
            onClick={() => setActive(i)}
            aria-pressed={isActive}
            className={[
              "rounded-lg border font-semibold transition",
              "px-4 md:px-4 py-1 md:py-3 text-base md:text-lg",
              isActive ? "text-white" : "text-[#092f57] hover:brightness-105",
            ].join(" ")}
            style={{
              backgroundColor: isActive ? p.cta : inactiveBg,
              borderColor: isActive ? p.cta : inactiveBorder,
            }}
          >
            {p.title}
          </button>
        );
      })}
    </div>
  </div>
</section>

      {/* DETALLE del plan seleccionado */}
      <section id="detalle" className="mx-auto max-w-7xl px-4 md:px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Card de beneficios */}
          <article className="rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden">
            {/* encabezado con degradado del color del plan */}
            <div
              className="h-2"
              style={{ background: `linear-gradient(90deg, ${current?.color} 0%, #ffffff 100%)` }}
            />
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold" style={{ color: current?.color }}>
                {current?.title}
              </h2>
              <p className="mt-1 text-gray-700">{current?.subtitle}</p>

              <ul className="mt-5 space-y-3 text-sm text-gray-800">
                {current?.benefits?.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/contacto"
                  className="rounded-lg px-5 py-3 text-white font-semibold"
                  style={{ backgroundColor: current?.cta || "#33BAF0" }}
                >
                  Elegir este plan
                </a>
                <a
                  href="/prestadores"
                  className="rounded-lg border border-gray-300 px-5 py-3 text-gray-800 hover:bg-white"
                >
                  Ver cartilla
                </a>
              </div>
            </div>
          </article>

          {/* Imagen/hero contextual del plan (se actualiza con el switcher) */}
          <div className="relative h-[280px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden ring-1 ring-black/5">
            <Image
              src={current?.heroSrc || "/banner.png"}
              alt={current?.heroAlt || "Plan PREME"}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0" />
          </div>
        </div>

        {/* Bloque informativo extra (opcional) */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-[#f7f9fb] p-5 ring-1 ring-black/5">
            <h3 className="font-semibold text-[#092f57]">Atención 24/7</h3>
            <p className="mt-1 text-sm text-gray-700">Emergencias y urgencias médicas en todo momento.</p>
          </div>
          <div className="rounded-xl bg-[#f7f9fb] p-5 ring-1 ring-black/5">
            <h3 className="font-semibold text-[#092f57]">Telemedicina</h3>
            <p className="mt-1 text-sm text-gray-700">Consultá desde tu casa con profesionales de nuestra red.</p>
          </div>
          <div className="rounded-xl bg-[#f7f9fb] p-5 ring-1 ring-black/5">
            <h3 className="font-semibold text-[#092f57]">Cobertura Nacional</h3>
            <p className="mt-1 text-sm text-gray-700">Prestadores y centros en múltiples provincias del país.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}