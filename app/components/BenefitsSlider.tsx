"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaMobileAlt } from "react-icons/fa";

export default function BenefitsSlider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Header editorial — tamaño grande como el Remix (clamp 36–64px) */}
      <div className="mb-10 md:mb-14">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="w-10 h-px bg-[#33BAF0]" />
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#33BAF0]">
            Beneficios
          </span>
        </div>
        <h2 className="font-extrabold text-[#092f57] tracking-tight leading-[0.98] text-balance text-[clamp(2.25rem,5.2vw,4rem)] max-w-[14ch]">
          Mucho más que{" "}
          <em className="font-medium italic text-[#33BAF0] [font-family:Georgia,serif]">
            cobertura médica.
          </em>
        </h2>
      </div>

      {/* Bento grid — 6 cols × 3 rows desktop / 2 cols mobile */}
      <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[200px] md:auto-rows-[180px] gap-3 md:gap-4">
        {/* Featured — 50% en farmacias, el gancho principal (3x2) */}
        <Link
          href="/planes"
          className="group relative isolate col-span-2 md:col-span-3 row-span-2 overflow-hidden rounded-[22px] p-7 md:p-9 flex flex-col bg-[#33BAF0] text-white transition-transform duration-300 hover:-translate-y-1"
        >
          {/* Glow decorativo sutil */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />

          <span className="self-start inline-flex items-center gap-1.5 bg-white/20 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase">
            ★ 10% más que otras obras sociales
          </span>

          <div className="mt-auto">
            <div className="font-extrabold leading-[0.85] tracking-tighter text-[clamp(4.5rem,13vw,8rem)]">
              50%
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold leading-[1.05] tracking-tight mt-1 mb-3 max-w-[380px] text-balance">
              de descuento en farmacias.
            </h3>
            <p className="text-[15px] text-white/85 leading-relaxed mb-5 max-w-[360px]">
              10 puntos más que cualquier otra obra social, en toda la red
              adherida de Córdoba.
            </p>
            <span className="inline-flex items-center gap-2.5 text-sm font-bold transition-all duration-200 group-hover:gap-3.5">
              Conocer más
              <FaArrowRight className="text-sm" />
            </span>
          </div>
        </Link>

        {/* ECCO 24/7 — image tile (3x1) */}
        <Link
          href="/planes"
          className="group relative isolate col-span-2 md:col-span-3 overflow-hidden rounded-[22px] p-6 flex flex-col justify-end text-white transition-transform duration-300 hover:-translate-y-1"
        >
          <Image
            src="/assets/hero/home/ecco-ambulancia.avif"
            alt="Servicio de emergencias ECCO 24/7"
            fill
            className="-z-20 object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            sizes="(min-width:768px) 50vw, 100vw"
          />
          {/* Doble overlay: oscurece la base y agrega un tinte de marca abajo
              para que el texto blanco quede legible sobre cualquier escena. */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#051529] via-[#051529]/55 to-[#051529]/10" />
          <div className="absolute inset-0 -z-10 mix-blend-multiply bg-[#092f57]/15" />

          <span className="inline-flex items-center gap-1.5 self-start bg-[#E05A4F] text-white text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full mb-3">
            Acceso inmediato
          </span>
          <h3 className="text-xl md:text-2xl font-extrabold leading-tight tracking-tight text-balance">
            ECCO 24/7
          </h3>
          <p className="mt-1.5 text-sm text-white/85 leading-snug">
            Consultas virtuales y atención domiciliaria.
          </p>
        </Link>

        {/* Asistencia al Viajero (3x1) — cobertura exclusiva */}
        <Link
          href="/planes"
          className="group col-span-2 md:col-span-3 overflow-hidden rounded-[22px] p-6 flex flex-col bg-[#092f57] text-white transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="w-10 h-10 rounded-xl bg-white/10 text-white grid place-items-center mb-auto">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5S18 3 16.5 4.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#33BAF0] mb-1.5">
            Cobertura exclusiva
          </span>
          <h3 className="text-lg font-bold leading-tight tracking-tight">
            Cobertura en tu viaje nacional
          </h3>
          <p className="mt-1.5 text-xs text-white/70 leading-snug line-clamp-2">
            Con reintegro de urgencias en todo el país.
          </p>
        </Link>

        {/* Digital — light (2x1) */}
        <Link
          href="#app-preme"
          className="group col-span-1 md:col-span-2 overflow-hidden rounded-[22px] p-6 flex flex-col bg-[#f5f8fa] text-[#092f57] border border-[#092f57]/[0.06] transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="w-10 h-10 rounded-xl bg-white text-[#33BAF0] grid place-items-center mb-auto shadow-[0_4px_10px_-4px_rgba(9,47,87,0.1)]">
            <FaMobileAlt className="text-[22px]" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#33BAF0] mb-1">
            Digital
          </span>
          <h3 className="text-[17px] font-bold leading-tight tracking-tight text-[#092f57]">
            Credencial en tu celular
          </h3>
        </Link>

        {/* Odontología — green (2x1) */}
        <Link
          href="/planes"
          className="group col-span-1 md:col-span-2 overflow-hidden rounded-[22px] p-6 flex flex-col bg-[#2E9B71] text-white transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="text-[34px] font-medium leading-none tracking-tight [font-family:Georgia,serif] mb-auto opacity-95">
            24/7
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-85 mb-1.5">
            Odontología
          </span>
          <h3 className="text-lg font-bold leading-tight tracking-tight">
            Ortodoncia y prótesis
          </h3>
          <p className="mt-1.5 text-xs text-white/80 leading-snug line-clamp-2">
            Coberturas especiales.
          </p>
        </Link>

        {/* Beneficios — purple (2x1) */}
        <Link
          href="/beneficios"
          className="group col-span-2 md:col-span-2 overflow-hidden rounded-[22px] p-6 flex flex-col bg-[#864D8D] text-white transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="text-[34px] font-medium leading-none tracking-tight [font-family:Georgia,serif] mb-auto opacity-95">
            +15
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-85 mb-1.5">
            Beneficios
          </span>
          <h3 className="text-lg font-bold leading-tight tracking-tight">
            Red de beneficios
          </h3>
          <p className="mt-1.5 text-xs text-white/80 leading-snug line-clamp-2">
            Convenios exclusivos para afiliados.
          </p>
        </Link>
      </div>
    </div>
  );
}
