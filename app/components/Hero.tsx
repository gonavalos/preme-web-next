"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WA_LINK = "https://wa.me/5493512006002?text=Hola%2C%20quiero%20asesoramiento%20sobre%20planes";

const stats = [
  { value: "45+", label: "Años de experiencia" },
  { value: "2.800+", label: "Prestadores" },
  { value: "13.000+", label: "Afiliados" },
];

export default function Hero() {
  return (
    <section className="relative isolate w-full h-[80vh] lg:h-[88vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/hero/home/promo.png"
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-[55%_25%] lg:object-[55%_20%]"
      />

      {/* Overlay — opacidad uniforme, sin gradient */}
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6">
            <Image
              src="/assets/n11v2.png"
              alt=""
              width={20}
              height={30}
              className="h-5 w-auto opacity-90"
            />
            <span className="text-white/90 text-xs font-semibold tracking-wide">
              1° prepaga de Córdoba
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
            Elegí la cobertura médica que tu familia{" "}
            <span className="text-[#33BAF0]">necesita</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            Un asesor te ayuda a elegir el plan ideal en menos de 2 minutos.
            Sin compromiso.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-bold px-7 py-3.5 rounded-xl text-base hover:bg-[#20bd5a] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#25D366]/25"
            >
              <FaWhatsapp className="text-xl" />
              Hablar con un asesor
            </a>
            <Link
              href="/planes"
              className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl text-base hover:bg-white/25 transition-all duration-200"
            >
              Ver planes
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 sm:gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] font-medium text-white/50 uppercase tracking-[0.12em] mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
