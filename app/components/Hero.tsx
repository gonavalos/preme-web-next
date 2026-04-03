"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SLIDE_INTERVAL = 7000;

type Slide = {
  title: string;
  highlight?: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  image: string;
  blur?: string;
  promo?: boolean;
  bullets?: string[];
  objectPos?: string;
  objectPosMobile?: string;
  centerAll?: boolean;
};

const slides: Slide[] = [
  {
    title: "¿Querés adherirte a",
    highlight: "Preme?",
    subtitle:
      "Tenemos un plan para vos y tu familia, con cobertura integral y acompañamiento personalizado.",
    cta: { label: "Afiliate ahora", href: "/formulario-landing" },
    image: "/assets/hero/herov1.png",
    blur: "/assets/hero/herov1.png",
    objectPos: "object-[50%_25%]",
    objectPosMobile: "object-[50%_40%]",
    centerAll: true,
  },
  {
    title: "¡Adherite con débito automático!",
    subtitle: "Y obtené beneficios exclusivos durante el primer año.",
    cta: { label: "Adherirme ahora", href: "/formulario-landing" },
    image: "/assets/hero/home/promo.png",
    promo: true,
    objectPos: "object-[55%_25%]",
    objectPosMobile: "object-[50%_35%]",
  },
  {
    title: "Beneficios a tu alcance",
    subtitle:
      "Gestiones más simples, atención personalizada y acceso a una red médica líder.",
    cta: { label: "Ver beneficios", href: "/planes" },
    image: "/assets/hero/home/hero3.png",
    blur: "/assets/hero/home/hero3.png",
    bullets: [
      "Credencial digital y app móvil",
      "Turnos y autorizaciones online",
      "Red de prestadores líderes",
      "Atención personalizada",
    ],
    objectPos: "object-[50%_30%]",
    objectPosMobile: "object-[50%_40%]",
    centerAll: true,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement | null>(null);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaPulseRef = useRef<gsap.core.Tween | null>(null);

  // Carousel auto-advance
  useEffect(() => {
    if (paused) return;
    const isPromo = slides[index]?.promo;
    const duration = isPromo ? Math.round(SLIDE_INTERVAL * 1.8) : SLIDE_INTERVAL;
    const id = setTimeout(() => setIndex((p) => (p + 1) % slides.length), duration);
    return () => clearTimeout(id);
  }, [index, paused]);

  // Hover pause
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

  // Parallax on background images
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        bgRefs.current.forEach((bg) => {
          if (!bg) return;
          gsap.to(bg, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });
    },
    { scope: heroRef }
  );

  // Animate content on slide change
  const animateSlideContent = useCallback((slideIndex: number) => {
    const content = contentRefs.current[slideIndex];
    if (!content) return;

    const title = content.querySelector("[data-hero-title]");
    const subtitle = content.querySelector("[data-hero-subtitle]");
    const bullets = content.querySelector("[data-hero-bullets]");
    const cta = content.querySelector("[data-hero-cta]");

    const elements = [title, subtitle, bullets, cta].filter(Boolean);
    if (elements.length === 0) return;

    // Check reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      gsap.set(elements, { autoAlpha: 1, y: 0 });
      return;
    }

    gsap.set(elements, { autoAlpha: 0, y: 20 });

    gsap.to(elements, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
    });
  }, []);

  // CTA pulse
  const startCtaPulse = useCallback((slideIndex: number) => {
    if (ctaPulseRef.current) {
      ctaPulseRef.current.kill();
      ctaPulseRef.current = null;
    }

    const content = contentRefs.current[slideIndex];
    if (!content) return;

    const cta = content.querySelector("[data-hero-cta] a");
    if (!cta) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    ctaPulseRef.current = gsap.to(cta, {
      scale: 1.03,
      duration: 1.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1,
    });
  }, []);

  // Trigger content animation on slide change
  useEffect(() => {
    animateSlideContent(index);
    startCtaPulse(index);
  }, [index, animateSlideContent, startCtaPulse]);

  return (
    <section
      ref={(el: HTMLDivElement | null) => {
        heroRef.current = el;
        hoverRef.current = el;
      }}
      className="relative isolate w-full h-[72vh] lg:h-[74vh] flex items-center justify-center overflow-hidden"
      aria-label="Promociones y novedades de Preme"
    >
      {/* Backgrounds with parallax */}
      {slides.map((s, i) => (
        <div
          key={`bg-${i}`}
          ref={(el) => { bgRefs.current[i] = el; }}
          className={`absolute inset-0 will-change-transform transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: "-5%", height: "110%" }}
        >
          <Image
            src={s.image}
            alt="Fondo"
            fill
            priority={i === 0}
            quality={s.promo ? 100 : 95}
            sizes="100vw"
            className={[
              "object-cover select-none",
              s.objectPosMobile ?? "object-center",
              "lg:" + (s.objectPos ?? "object-[50%_25%]"),
            ].join(" ")}
            placeholder={!s.promo && s.blur ? "blur" : undefined}
            blurDataURL={!s.promo && s.blur ? s.blur : undefined}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#092f57]/40 via-transparent to-transparent" />

      {/* Badge desktop */}
      <div className="absolute left-6 top-6 z-20 hidden lg:block">
        <Image
          src="/assets/n11v2.png"
          alt="1ª prepaga de CBA - +40 años"
          width={120}
          height={180}
          className="drop-shadow-lg select-none"
          priority
        />
      </div>

      {/* Contenido */}
      <div
        className="
          z-10 w-full px-4 lg:px-8 pb-4
          absolute inset-x-0 bottom-[7%] flex justify-center
          lg:inset-x-auto lg:left-4 lg:bottom-24
          xl:left-6 xl:bottom-10
        "
      >
        {slides.map((s, i) => {
          const wrapBase =
            "inline-flex flex-col gap-4 lg:gap-5 rounded-2xl p-4 lg:p-10 w-[min(92vw,640px)] xl:relative xl:bottom-20 xl:right-60";
          const wrapVariant = s.promo
            ? "bg-transparent backdrop-blur-0 shadow-none"
            : "bg-black/45 backdrop-blur-sm text-white shadow-lg";

          const textCenter = s.centerAll ? "text-center items-center" : "text-left";

          return (
            <div
              key={`slide-${i}`}
              ref={(el) => { contentRefs.current[i] = el; }}
              className={`transition-opacity duration-700 ease-out ${
                i === index ? "opacity-100" : "opacity-0 invisible absolute pointer-events-none"
              }`}
            >
              <div className="lg:relative lg:top-12 lg:right-[70px] xl:top-16 xl:right-[100px] 2xl:top-20 2xl:right-[140px]">
                <div className={`${wrapBase} ${wrapVariant} ${textCenter}`}>
                  {/* Slide normal */}
                  {!s.promo && (
                    <>
                      <h3
                        data-hero-title
                        className="text-white text-[20px] sm:text-2xl lg:text-[42px] leading-tight font-extrabold tracking-[-0.01em]"
                      >
                        {s.title}{" "}
                        {s.highlight && (
                          <span className="text-brandBlue">{s.highlight}</span>
                        )}
                      </h3>

                      {s.subtitle && (
                        <p
                          data-hero-subtitle
                          className="text-white/90 text-[13px] sm:text-[14px] lg:text-[18px] leading-snug"
                        >
                          {s.subtitle}
                        </p>
                      )}

                      {/* Bullets */}
                      {s.bullets && (
                        <ul
                          data-hero-bullets
                          className="
                            mt-4
                            grid grid-cols-2
                            gap-x-10 gap-y-2
                            text-[13px] sm:text-[14px] lg:text-[15px]
                            text-white/95 font-medium
                            justify-center
                            max-w-[500px] mx-auto
                          "
                        >
                          {s.bullets.map((b, bi) => (
                            <li
                              key={bi}
                              className="flex items-center gap-2 justify-start"
                            >
                              <span className="inline-block h-2 w-2 rounded-full bg-brandBlue flex-shrink-0" />
                              <span className="leading-snug">{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* CTA */}
                      {s.cta && (
                        <div data-hero-cta className="pt-2 flex justify-center">
                          <Link
                            href={s.cta.href}
                            className="inline-flex items-center justify-center rounded-xl bg-brandBlue px-5 py-1.5 sm:py-2 lg:py-2.5 text-[#0D2A53] text-[13px] sm:text-[14px] lg:text-[15px] font-semibold hover:bg-[#25A6DC] shadow-md transition-colors will-change-transform"
                          >
                            {s.cta.label}
                          </Link>
                        </div>
                      )}
                    </>
                  )}

                  {/* Slide promo */}
                  {s.promo && (
                    <div className="mt-1 lg:mt-2 flex flex-col items-center text-center lg:relative lg:top-13">
                      <div
                        data-hero-title
                        className="flex flex-col gap-3 lg:gap-5 bg-white rounded-2xl p-4 lg:p-6 ring-1 ring-brandBlue/20 shadow-none max-w-[92vw] lg:max-w-[580px]"
                      >
                        <h3 className="text-[#0D2A53] text-[16px] sm:text-[20px] lg:text-[30px] font-black leading-tight">
                          ¡Afiliate con <span className="text-brandBlue">débito automático!</span>
                        </h3>
                        <p className="text-[#0D2A53]/80 text-[13px] sm:text-[14px] lg:text-[17px]">
                          Y obtené beneficios exclusivos durante el primer año.
                        </p>
                        <div className="flex items-end justify-center gap-6">
                          <div className="flex flex-col items-center">
                            <span className="text-[#0D2A53] text-[40px] sm:text-[48px] lg:text-[62px] font-black leading-none">
                              30%
                            </span>
                            <span className="text-[#0D2A53]/80 text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-wide">
                              los primeros 3 meses
                            </span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="inline-block bg-brandBlue text-[#0D2A53] rounded-full px-4 py-1 text-[12px] sm:text-[16px] lg:text-[20px] font-semibold shadow-sm w-fit">
                              10%
                            </span>
                            <p className="mt-1 text-[#0D2A53]/70 text-[9px] sm:text-[10px] lg:text-[11px]">
                              del mes 4 al 12
                            </p>
                          </div>
                        </div>
                        {s.cta && (
                          <div data-hero-cta className="pt-1 flex justify-center">
                            <Link
                              href={s.cta.href}
                              className="inline-flex items-center justify-center rounded-xl bg-brandBlue px-5 py-2 sm:py-2.5 text-[#0D2A53] text-[13px] sm:text-[14px] lg:text-[15px] font-semibold hover:bg-[#25A6DC] shadow-md transition-colors will-change-transform"
                            >
                              {s.cta.label}
                            </Link>
                          </div>
                        )}
                      </div>
                      <p
                        data-hero-subtitle
                        className="mt-2 text-[10px] sm:text-[11px] text-white/85 italic text-center"
                      >
                        *Promoción válida para nuevas adhesiones y con tarjeta de crédito bancaria.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 lg:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 w-2.5 lg:h-3 lg:w-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-brandBlue scale-125 shadow-lg" : "bg-white/70 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
