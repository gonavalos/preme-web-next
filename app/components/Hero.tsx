"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WA_LINK = "https://api.whatsapp.com/send?phone=5493512006002&text=Hola%2C%20quiero%20asesoramiento%20sobre%20planes.%20Estuve%20navegando%20en%20la%20web.";

export default function Hero() {
  return (
    <section className="relative isolate w-full h-[80vh] lg:h-[88vh] flex items-end overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/nuevas/hero.avif"
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-[60%_30%] lg:object-[60%_25%]"
      />

      {/* Overlay — opacidad uniforme, sin gradient */}
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      {/* Cocarda "1° prepaga de Córdoba" — sello visual arriba a la izquierda */}
      <div
        className="rise-in absolute z-20 top-24 left-4 sm:top-28 sm:left-6 md:top-32 md:left-10 flex flex-col items-center"
        style={{ animationDelay: "0.05s" }}
      >
        <Image
          src="/assets/n11v2.png"
          alt="1° prepaga de Córdoba"
          width={140}
          height={190}
          priority
          className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto drop-shadow-[0_6px_24px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* Content — anclado abajo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-6 pb-28 md:pb-36">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Badge (texto complementario, la cocarda visual está arriba) */}
          <div className="rise-in inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-5" style={{ animationDelay: "0.1s" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#33BAF0]" />
            <span className="text-white/90 text-xs font-semibold tracking-wide">
              1° prepaga de Córdoba
            </span>
          </div>

          {/* Headline */}
          <h1 className="rise-in text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-4" style={{ animationDelay: "0.22s" }}>
            Elegí la cobertura médica que tu familia{" "}
            <span className="text-[#33BAF0]">necesita</span>
          </h1>

          {/* Subtitle */}
          <p className="rise-in text-white/75 text-base sm:text-lg leading-relaxed mb-7 max-w-md" style={{ animationDelay: "0.36s" }}>
            Un asesor te ayuda a elegir el plan ideal en menos de 2 minutos.
            Sin compromiso.
          </p>

          {/* CTAs */}
          <div className="rise-in flex flex-col sm:flex-row gap-3" style={{ animationDelay: "0.5s" }}>
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
        </div>
      </div>
    </section>
  );
}
