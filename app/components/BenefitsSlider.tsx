"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaMobileAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

export default function BenefitsSlider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <SectionHeader
        kicker="Beneficios"
        title="Mucho más que"
        titleItalic="cobertura médica."
        description="Cada plan PREME suma beneficios en farmacia, viajes, wellness y atención 24/7. Sin costo extra. Sin letra chica."
        align="split"
      />

      {/* Bento grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[200px] md:auto-rows-[180px] gap-3 md:gap-4">
        {/* Featured — Asistencia al Viajero */}
        <Link
          href="/planes"
          className="group relative isolate col-span-2 md:col-span-3 row-span-2 overflow-hidden rounded-[22px] p-7 md:p-9 flex flex-col text-white transition-transform duration-300 hover:-translate-y-1"
        >
          <Image
            src="/assets/hero/home/promo.png"
            alt=""
            fill
            className="-z-10 object-cover opacity-35"
            sizes="(min-width:768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#092f57]/95 to-[#092f57]/70" />

          <span className="self-start inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase">
            ★ Exclusivo PREME
          </span>

          <div className="mt-auto">
            <h3 className="text-2xl sm:text-3xl md:text-[40px] font-extrabold leading-[1.05] tracking-tight mb-3 max-w-[380px] text-balance">
              Asistencia al Viajero con cobertura global.
            </h3>
            <p className="text-[15px] text-white/75 leading-relaxed mb-5 max-w-[360px]">
              De Córdoba al mundo. Atención médica de primer nivel en cada
              destino.
            </p>
            <span className="inline-flex items-center gap-2.5 text-sm font-bold transition-all duration-200 group-hover:gap-3.5">
              Conocer más
              <FaArrowRight className="text-sm" />
            </span>
          </div>
        </Link>

        {/* Image tile — ECCO 24/7 */}
        <Link
          href="/planes"
          className="group relative isolate col-span-2 md:col-span-3 overflow-hidden rounded-[22px] p-6 flex flex-col justify-end text-white transition-transform duration-300 hover:-translate-y-1"
        >
          <Image
            src="/assets/hero/home/AdobeStock_602896949.jpeg"
            alt=""
            fill
            className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width:768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#092f57]/90 via-[#092f57]/10 to-transparent" />

          <span className="text-[10px] font-bold text-white/80 tracking-[0.2em] uppercase mb-2">
            Emergencias
          </span>
          <h3 className="text-xl font-bold leading-tight tracking-tight text-balance">
            ECCO 24/7 en el acto
          </h3>
        </Link>

        {/* Color sky — Farmacias */}
        <Link
          href="/planes"
          className="group col-span-1 md:col-span-2 overflow-hidden rounded-[22px] p-6 flex flex-col bg-[#33BAF0] text-white transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="text-[34px] font-medium leading-none tracking-tight [font-family:Georgia,serif] mb-auto opacity-95">
            −50%
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-85 mb-1.5">
            Farmacias
          </span>
          <h3 className="text-lg font-bold leading-tight tracking-tight">
            Hasta 50% off
          </h3>
          <p className="mt-1.5 text-xs text-white/80 leading-snug line-clamp-2">
            Red adherida en toda Córdoba.
          </p>
        </Link>

        {/* Light — App / Credencial */}
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

        {/* Color green — Odontología */}
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

        {/* Color purple — Wellness */}
        <Link
          href="/planes"
          className="group col-span-2 md:col-span-2 overflow-hidden rounded-[22px] p-6 flex flex-col bg-[#864D8D] text-white transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="text-[34px] font-medium leading-none tracking-tight [font-family:Georgia,serif] mb-auto opacity-95">
            +15
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-85 mb-1.5">
            Wellness
          </span>
          <h3 className="text-lg font-bold leading-tight tracking-tight">
            Gimnasios y ópticas
          </h3>
          <p className="mt-1.5 text-xs text-white/80 leading-snug line-clamp-2">
            Descuentos asociados.
          </p>
        </Link>
      </div>
    </div>
  );
}
