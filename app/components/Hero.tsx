"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SLIDE_INTERVAL = 7000;

type Slide = {
  headline: string;
  highlightWord?: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  image: string;
  objectPos?: string;
  objectPosMobile?: string;
  promo?: boolean;
};

const slides: Slide[] = [
  {
    headline: "45 años cuidando tu salud",
    subtitle:
      "Primera prepaga de Córdoba. Cobertura integral, acompañamiento personalizado y una red médica líder.",
    cta: { label: "Conocé nuestros planes", href: "/planes" },
    ctaSecondary: { label: "Hablá con un asesor", href: "/contacto" },
    image: "/assets/hero/home/familia-sofa.jpg",
    objectPos: "object-[50%_35%]",
    objectPosMobile: "object-[50%_45%]",
  },
  {
    headline: "¡Adherite con débito automático!",
    highlightWord: "débito automático!",
    subtitle:
      "30% de descuento los primeros 3 meses y 10% del mes 4 al 12. Promoción válida para nuevas adhesiones.",
    cta: { label: "Afiliate ahora", href: "/formulario-landing" },
    ctaSecondary: { label: "Ver Planes", href: "/planes" },
    image: "/assets/hero/home/promo.png",
    promo: true,
    objectPos: "object-[55%_25%]",
    objectPosMobile: "object-[50%_35%]",
  },
  {
    headline: "Beneficios a tu alcance",
    subtitle:
      "Gestiones más simples, atención personalizada y acceso a una red médica líder en Córdoba.",
    cta: { label: "Ver beneficios", href: "/planes" },
    ctaSecondary: { label: "Conocé la App", href: "#app-preme" },
    image: "/assets/hero/home/familia-cama.jpg",
    objectPos: "object-[50%_40%]",
    objectPosMobile: "object-[50%_50%]",
  },
];

const stats = [
  { value: "45+", label: "Años de Trayectoria" },
  { value: "2.800+", label: "Prestadores Médicos" },
  { value: "13.000+", label: "Afiliados Activos" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const hoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (paused) return;
    const isPromo = slides[index]?.promo;
    const duration = isPromo ? Math.round(SLIDE_INTERVAL * 1.8) : SLIDE_INTERVAL;
    const id = setTimeout(() => setIndex((p) => (p + 1) % slides.length), duration);
    return () => clearTimeout(id);
  }, [index, paused]);

  useEffect(() => {
    const el = hoverRef.current;
    if (!el) return;
    const onEnter = () => setPaused(true);
    const onLeave = () => setPaused(false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={hoverRef}
      className="relative isolate w-full h-[75vh] lg:h-[82vh] flex items-end overflow-hidden"
      aria-label="Promociones y novedades de Preme"
    >
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={`bg-${i}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            quality={95}
            sizes="100vw"
            className={[
              "object-cover select-none",
              s.objectPosMobile ?? "object-center",
              "lg:" + (s.objectPos ?? "object-[50%_25%]"),
            ].join(" ")}
          />
        </div>
      ))}

      {/* Gradient fuerte en la zona de texto (abajo), sutil arriba para ver caras */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Content — anclado abajo izquierda para no tapar caras */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pb-16 lg:pb-20">
        {slides.map((s, i) => (
          <div
            key={`slide-${i}`}
            className={`transition-all duration-700 ease-out ${
              i === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 absolute bottom-0 left-0 right-0 px-6 md:px-8"
            }`}
          >
            <div className="max-w-2xl">
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-4 lg:mb-5">
                {s.highlightWord
                  ? s.headline.split(s.highlightWord).map((part, pi, arr) => (
                      <span key={pi}>
                        {part}
                        {pi < arr.length - 1 && (
                          <span className="text-[#33BAF0]">{s.highlightWord}</span>
                        )}
                      </span>
                    ))
                  : s.headline}
              </h1>

              {/* Subtitle */}
              {s.subtitle && (
                <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 lg:mb-6 max-w-lg">
                  {s.subtitle}
                </p>
              )}

              {/* Stats — only on first slide, horizontal compact */}
              {i === 0 && (
                <div className="flex gap-6 sm:gap-10 mb-6 lg:mb-8 border-t border-white/15 pt-5">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-white">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-medium opacity-60 uppercase tracking-[0.15em] mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Promo badge — on promo slide */}
              {s.promo && (
                <div className="flex items-end gap-6 mb-6 lg:mb-8">
                  <div className="text-white">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none">
                      30<span className="text-[#33BAF0]">%</span>
                    </span>
                    <div className="text-[10px] sm:text-xs font-medium opacity-60 uppercase tracking-[0.15em] mt-1">
                      Los primeros 3 meses
                    </div>
                  </div>
                  <div className="text-white">
                    <span className="inline-block bg-[#33BAF0] text-white rounded-full px-4 py-1.5 text-lg sm:text-xl font-bold shadow-lg">
                      10%
                    </span>
                    <div className="text-[10px] sm:text-xs font-medium opacity-60 uppercase tracking-[0.15em] mt-1">
                      Del mes 4 al 12
                    </div>
                  </div>
                </div>
              )}

              {/* CTAs — estilo premium con gradient y glass */}
              <div className="flex flex-col sm:flex-row gap-3">
                {s.cta && (
                  <Link
                    href={s.cta.href}
                    className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#33BAF0] to-[#1a8fd4] text-white font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base hover:shadow-xl hover:shadow-[#33BAF0]/30 hover:scale-[1.03] transition-all duration-300"
                  >
                    {s.cta.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                )}
                {s.ctaSecondary && (
                  <Link
                    href={s.ctaSecondary.href}
                    className="inline-flex items-center justify-center gap-2 backdrop-blur-md bg-white/15 border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl text-sm sm:text-base hover:bg-white/25 transition-all duration-300"
                  >
                    {s.ctaSecondary.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Badge desktop — top left */}
      <div className="absolute left-6 lg:left-10 top-6 z-20 hidden lg:block">
        <Image
          src="/assets/n11v2.png"
          alt="1ª prepaga de CBA - +40 años"
          width={100}
          height={150}
          className="drop-shadow-lg select-none opacity-90"
          priority
        />
      </div>

      {/* Dots — bottom right */}
      <div className="absolute bottom-5 right-6 md:right-8 flex gap-2.5 z-20">
        {slides.map((_, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              i === index
                ? "bg-[#33BAF0] w-7 h-2.5 shadow-lg shadow-[#33BAF0]/40"
                : "bg-white/40 w-2.5 h-2.5 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
