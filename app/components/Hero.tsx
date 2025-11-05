"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SLIDE_INTERVAL = 7000; // base (ms)

type Slide = {
  title: string;
  highlight?: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  image: string;
  blur?: string;
  promo?: boolean;   // slide 2 = true
  bullets?: string[];
  objectPos?: string; // foco por slide (desktop)
  objectPosMobile?: string; // foco por slide (mobile)
};

const slides: Slide[] = [
  // 1) Aspiracional institucional
  {
    title: "¿Querés adherirte a",
    highlight: "Preme?",
    subtitle:
      "Tenemos un plan para vos y tu familia, con cobertura integral y acompañamiento personalizado.",
    cta: { label: "Afiliate ahora", href: "https://formularios.fidelitytools.net?f=OTQ3MA" },
    image: "/assets/hero/herov1.png",
    blur: "/assets/hero/herov1.png",
    objectPos: "object-[50%_25%]",
    objectPosMobile: "object-[50%_40%]",
  },

  // 2) Promoción débito automático (card propia, sin textos genéricos)
  {
    title: "¡Adherite con débito automático!",
    subtitle: "Y obtené beneficios exclusivos durante el primer año.",
    cta: { label: "Adherirme ahora", href: "https://formularios.fidelitytools.net?f=OTQ3MA" },
    image: "/assets/hero/home/v3.png",
    promo: true,
    objectPos: "object-[55%_25%]",
    objectPosMobile: "object-[50%_35%]",
  },

  // 3) Beneficios (con bullets)
  {
    title: "Beneficios a tu alcance",
    subtitle:
      "Gestiones más simples, atención personalizada y acceso a una red médica líder.",
    cta: { label: "Ver beneficios", href: "/beneficios" },
    image: "/assets/hero/home/v4.png",
    blur: "/assets/hero/home/v4.png",
    bullets: [
      "Credencial digital y app móvil",
      "Turnos y autorizaciones online",
      "Red de prestadores líderes",
      "Atención personalizada",
    ],
    objectPos: "object-[50%_30%]",
    objectPosMobile: "object-[50%_40%]",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const hoverRef = useRef<HTMLDivElement | null>(null);

  // autoplay con duración VARIABLE por slide (promo dura ~x1.8)
  useEffect(() => {
    if (paused) return;
    const isPromo = slides[index]?.promo;
    const duration = isPromo ? Math.round(SLIDE_INTERVAL * 1.8) : SLIDE_INTERVAL;
    const id = setTimeout(() => setIndex((p) => (p + 1) % slides.length), duration);
    return () => clearTimeout(id);
  }, [index, paused]);

  // pausa en hover
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
      className="relative isolate w-full h-[66vh] md:h-[82vh] flex items-center justify-center overflow-hidden"
      aria-label="Promociones y novedades de Preme"
    >
      {/* Backgrounds */}
      {slides.map((s, i) => (
        <div
          key={`bg-${i}`}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt="Fondo"
            fill
            priority={i === index}
            quality={s.promo ? 100 : 95}
            sizes="100vw"
            className={[
              "object-cover select-none",
              // foco distinto mobile/desktop
              s.objectPosMobile ?? "object-center",
              "md:" + (s.objectPos ?? "object-[50%_25%]")
            ].join(" ")}
            // NUNCA usar blur en la promo para evitar “mancha”
            placeholder={!s.promo && s.blur ? "blur" : undefined}
            blurDataURL={!s.promo && s.blur ? s.blur : undefined}
          />
        </div>
      ))}

      {/* Gradiente original para legibilidad */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />

      {/* Badge 1ª prepaga de CBA (oculta en mobile para dejar respirar) */}
      <div className="absolute left-6 top-6 z-20 hidden md:block">
        <Image
          src="/assets/n11v2.png"
          alt="1ª prepaga de CBA - +40 años"
          width={120}
          height={180}
          className="drop-shadow-lg select-none"
          priority
        />
      </div>

      {/* Contenido (centrado en mobile / a la derecha en desktop) */}
      <div className="relative z-10 w-full px-4 md:px-8 flex justify-center md:block md:absolute md:left-[18%] md:top-[45%]">
        {slides.map((s, i) => {
          const wrapBase =
            "inline-flex flex-col gap-3 md:gap-4 rounded-2xl p-4 md:p-8 max-w-[92vw] md:max-w-[640px]";
          const wrapVariant = s.promo
            ? "bg-transparent backdrop-blur-0 shadow-none"
            : "bg-black/45 backdrop-blur-sm text-white shadow-lg";

          return (
            <div
              key={`slide-${i}`}
              className={`transition-opacity duration-700 ease-out ${
                i === index ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              <div className={`${wrapBase} ${wrapVariant}`}>
                {/* 1 y 3: textos genéricos */}
                {!s.promo && (
                  <>
                    <h3 className="text-white text-[22px] sm:text-3xl md:text-[42px] leading-tight font-extrabold tracking-[-0.01em]">
                      {s.title}{" "}
                      {s.highlight && (
                        <span className="text-[#33BAF0]">{s.highlight}</span>
                      )}
                    </h3>
                    {s.subtitle && (
                      <p className="text-white/90 text-[14px] sm:text-[15px] md:text-[18px] leading-snug">
                        {s.subtitle}
                      </p>
                    )}
                  </>
                )}

                {/* 2: PROMO – card blanca, SIN fondo negro detrás */}
                {s.promo && (
                  <div className="relative mt-1 md:mt-2">
                    <div className="flex flex-col gap-3 md:gap-4 bg-white rounded-2xl p-4 md:p-6 ring-1 ring-[#33BAF0]/20 shadow-none max-w-[92vw] md:max-w-none">
                      <h3 className="text-[#0D2A53] text-[20px] sm:text-[24px] md:text-[30px] font-black leading-tight">
                        ¡Afiliate con <span className="text-[#33BAF0]">débito automático!</span>
                      </h3>
                      <p className="text-[#0D2A53]/80 text-[14px] sm:text-[15px] md:text-[17px]">
                        Y obtené beneficios exclusivos durante el primer año.
                      </p>

                      <div className="flex flex-col md:flex-row items-start md:items-end gap-3 md:gap-6">
                        <div className="flex flex-col items-center md:items-start">
                          <span className="text-[#0D2A53] text-[36px] sm:text-[54px] md:text-[88px] font-black leading-none">
                            30%
                          </span>
                          <span className="text-[#0D2A53]/80 text-[10px] sm:text-[13px] md:text-[14px] uppercase tracking-wide">
                            los primeros 3 meses
                          </span>
                        </div>

                        <div className="flex flex-col items-start md:items-start">
                          <span className="inline-block bg-[#33BAF0] text-[#0D2A53] rounded-full px-4 sm:px-5 py-1 text-[13px] sm:text-[14px] md:text-[15px] font-semibold shadow-sm w-fit">
                            10% del mes 4 al 12
                          </span>
                          <p className="mt-2 text-[#0D2A53]/70 text-[9px] sm:text-[14px] md:text-[15px]">
                            Bonificación exclusiva por adhesión automática.
                          </p>
                        </div>
                      </div>

                      {s.cta && (
                        <div className="pt-1">
                          <Link
                            href="https://formularios.fidelitytools.net?f=OTQ3MA"
                            className="inline-flex items-center justify-center rounded-xl bg-[#33BAF0] px-5 md:px-6 py-2 md:py-2.5 text-[#0D2A53] text-[14px] md:text-[15px] font-semibold hover:bg-[#25A6DC] shadow-md transition-all"
                          >
                            {s.cta.label}
                          </Link>
                        </div>
                      )}
                    </div>

                    <p className="mt-2 text-[11px] sm:text-[12px] text-white/85 italic">
                      *Promoción válida para nuevas adhesiones. Aplican T&C.
                    </p>
                  </div>
                )}

                {/* 3: bullets */}
                {!s.promo && s.bullets && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-[13.5px] sm:text-[14px] md:text-[15px] text-white/95 font-medium">
                    {s.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-[#33BAF0]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA genérico (1 y 3) */}
                {!s.promo && s.cta && (
                  <div className="pt-1 md:pt-2">
                    <Link
                      href={s.cta.href}
                      className="inline-flex items-center justify-center rounded-xl bg-[#33BAF0] px-5 md:px-6 py-2 md:py-2.5 text-[#0D2A53] text-[14px] md:text-[15px] font-semibold hover:bg-[#25A6DC] shadow-md transition-all"
                    >
                      {s.cta.label}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#33BAF0] scale-125 shadow-lg" : "bg-white/70 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </section>
  );
}