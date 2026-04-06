"use client";

import Image from "next/image";

const prestadores = [
  { name: "Sanatorio Allende", logo: "/assets/prestadores/sanatorio-allende.png" },
  { name: "Clínica Romagosa", logo: "/assets/prestadores/romagosa.png" },
  { name: "Oulton", logo: "/assets/prestadores/oulton.png" },
  { name: "Hospital Privado", logo: "/assets/prestadores/hospital-privado.png" },
  { name: "Reina Fabiola", logo: "/assets/prestadores/reina-fabiola.png" },
];

// Secondary — text only por ahora, hasta tener logos
const secondary = [
  "HOSPITAL ITALIANO",
  "VÉLEZ SARSFIELD",
  "CLÍNICA SUCRE",
  "CONCI CARPINELLA",
  "SANATORIO DEL SALVADOR",
  "INSTITUTO MODELO",
  "CLÍNICA UNIVERSITARIA",
  "CLÍNICA CHUTRO",
];

export default function PrestadoresMarquee() {
  return (
    <section className="py-14 md:py-18 overflow-hidden">
      <p className="text-center text-gray-400 text-xs font-medium uppercase tracking-[0.2em] mb-10 md:mb-12 px-4">
        Nuestra Red de Excelencia Médica
      </p>

      {/* Primary — logos reales, slower */}
      <div className="relative mb-6">
        <div className="flex animate-marquee-slow items-center">
          {[...prestadores, ...prestadores, ...prestadores].map((p, i) => (
            <div
              key={`p-${i}`}
              className="flex-none mx-8 sm:mx-12 md:mx-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={140}
                height={50}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Secondary — text, faster, reverse */}
      <div className="relative">
        <div className="flex animate-marquee-fast-reverse">
          {[...secondary, ...secondary, ...secondary].map((name, i) => (
            <span
              key={`s-${i}`}
              className="flex-none mx-4 sm:mx-8 md:mx-10 text-xs sm:text-sm md:text-base font-bold tracking-tight text-[#092f57]/15 hover:text-[#092f57]/50 transition-all duration-500 cursor-default whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
