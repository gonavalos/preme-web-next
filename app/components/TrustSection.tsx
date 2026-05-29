"use client";

import Image from "next/image";
import SectionHeader from "./SectionHeader";
import CountUp from "./CountUp";

type Logo = { name: string; src?: string; text?: string };

// Red de prestadores destacados (con logo). Clínicas + farmacias de Córdoba.
const logos: Logo[] = [
  { name: "Sanatorio Allende", src: "/assets/prestadores/sanatorio-allende.png" },
  { name: "Clínica Romagosa", src: "/assets/prestadores/romagosa.png" },
  { name: "Oulton", src: "/assets/prestadores/oulton.png" },
  { name: "Hospital Privado", src: "/assets/prestadores/hospital-privado.png" },
  { name: "Sanatorio del Salvador", src: "/assets/prestadores/salvador.png" },
  { name: "Conci Carpinella", src: "/assets/prestadores/conci.png" },
  { name: "Clínica y Maternidad del Sol", src: "/assets/prestadores/clinica-del-sol.png" },
  { name: "Sanatorio Vélez Sarsfield", src: "/assets/prestadores/velez-sarsfield.png" },
  { name: "Centro Deán Funes", src: "/assets/prestadores/centro-dean-funes.png" },
  { name: "Farmacias General Paz", src: "/assets/prestadores/general-paz.png" },
  { name: "Farmacia Líder", src: "/assets/prestadores/lider.png" },
  { name: "Farmacias Sánchez Antoniolli", src: "/assets/prestadores/sanchez-antoniolli.png" },
  { name: "HP Farma", src: "/assets/prestadores/hp-farma.png" },
];

const stats = [
  { value: 125, label: "Farmacias adheridas" },
  { value: 2800, label: "Prestadores en red" },
  { value: 45, label: "Años de experiencia" },
];

function LogoChip({ name, src, text }: Logo) {
  return (
    <div className="flex-none mx-3 sm:mx-4">
      <div className="flex h-20 w-44 items-center justify-center rounded-xl bg-white px-5 py-4 shadow-[0_4px_20px_rgba(9,47,87,0.06)] ring-1 ring-black/[0.04] transition-transform duration-300 hover:-translate-y-0.5">
        {src ? (
          <Image
            src={src}
            alt={name}
            width={160}
            height={56}
            className="h-full w-auto max-w-[140px] object-contain"
          />
        ) : (
          <span className="whitespace-pre-line text-center text-base font-extrabold leading-tight tracking-tight text-[#092f57]">
            {text}
          </span>
        )}
      </div>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          kicker="Red de prestadores"
          title="Confían en PREME."
          description="Las instituciones de salud y farmacias más prestigiosas de Córdoba."
          align="center"
        />
      </div>

      {/* Marquee de logos — movimiento continuo, se pausa al pasar el mouse */}
      <div className="relative overflow-hidden py-2 mb-14">
        {/* Degradados laterales para fundir el loop */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-[#f5f8fa] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-[#f5f8fa] to-transparent" />

        <div className="marquee-pause animate-marquee-slow flex w-max items-center">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <LogoChip key={`${logo.name}-${i}`} {...logo} />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUp
                value={stat.value}
                prefix="+"
                className="block text-3xl sm:text-4xl font-extrabold text-[#092f57] tracking-tight"
              />
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
