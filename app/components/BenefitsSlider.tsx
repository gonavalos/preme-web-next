"use client";

import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    tag: "Exclusivo",
    title: "Asistencia al Viajero",
    desc: "Cobertura médica global de primer nivel en cada destino.",
    image: "/assets/hero/home/hero3.png",
    href: "/planes",
  },
  {
    tag: "Emergencias",
    title: "ECCO 24/7",
    desc: "Atención inmediata domiciliaria y traslados las 24 horas.",
    image: "/assets/hero/herov1.png",
    href: "/planes",
  },
  {
    tag: "Farmacias",
    title: "Hasta 50% en farmacias",
    desc: "Red de farmacias adheridas con descuentos exclusivos.",
    image: "/assets/hero/insti5.png",
    href: "/planes",
  },
  {
    tag: "Digital",
    title: "App PREME",
    desc: "Turnos, autorizaciones y credencial digital en tu celular.",
    image: "/assets/hero/home/promo.png",
    href: "#app-preme",
  },
];

export default function BenefitsSlider() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#092f57] max-w-md tracking-tight">
          Beneficios diseñados para tu estilo de vida.
        </h2>
      </div>

      {/* Horizontal scroll — compact */}
      <div className="flex gap-4 md:gap-6 px-4 sm:px-6 md:px-8 overflow-x-auto scrollbar-hide snap-x pb-2">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="flex-none w-[80%] sm:w-[60%] md:w-[45%] lg:w-[35%] snap-center rounded-xl overflow-hidden bg-white shadow-[0_4px_20px_rgba(9,47,87,0.06)] flex flex-col sm:flex-row h-auto sm:h-[220px]"
          >
            {/* Image */}
            <div className="sm:w-2/5 relative h-40 sm:h-full overflow-hidden shrink-0">
              <Image
                src={b.image}
                alt={b.title}
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>

            {/* Text */}
            <div className="sm:w-3/5 p-5 sm:p-6 flex flex-col justify-center">
              <span className="text-[#33BAF0] font-bold uppercase text-[10px] tracking-[0.2em] mb-1.5">
                {b.tag}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#092f57] mb-2 leading-snug">
                {b.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-xs sm:text-sm mb-3 line-clamp-2">
                {b.desc}
              </p>
              <Link
                href={b.href}
                className="text-[#092f57] font-semibold flex items-center gap-1.5 hover:gap-2.5 transition-all text-xs"
              >
                Leer más
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
