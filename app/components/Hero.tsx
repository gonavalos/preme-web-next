"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CalendarBlank, Siren, IdentificationCard } from "@phosphor-icons/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = heroRef.current;
      if (!container) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          normal: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduced } = context.conditions!;

          const badge = container.querySelector("[data-hero-badge]");
          const lines = container.querySelectorAll("[data-hero-line]");
          const subtitle = container.querySelector("[data-hero-subtitle]");
          const ctas = container.querySelector("[data-hero-ctas]");
          const stats = container.querySelector("[data-hero-stats]");
          const cards = container.querySelectorAll("[data-hero-card]");

          const all = [badge, ...lines, subtitle, ctas, stats, ...cards].filter(Boolean);

          if (reduced) {
            gsap.set(all, { autoAlpha: 1, y: 0, scale: 1 });
            return;
          }

          // Set initial states
          gsap.set([badge, ...lines, subtitle, ctas, stats].filter(Boolean), {
            autoAlpha: 0,
            y: 20,
          });
          gsap.set(cards, { autoAlpha: 0, scale: 0.9 });

          const tl = gsap.timeline({ delay: 0.2 });

          // Badge
          if (badge) {
            tl.to(badge, {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            });
          }

          // Headline lines stagger
          if (lines.length) {
            tl.to(lines, {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.15,
            }, "-=0.2");
          }

          // Subtitle
          if (subtitle) {
            tl.to(subtitle, {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            }, "-=0.3");
          }

          // CTAs
          if (ctas) {
            tl.to(ctas, {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            }, "-=0.2");
          }

          // Stats
          if (stats) {
            tl.to(stats, {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            }, "-=0.2");
          }

          // Floating cards
          if (cards.length) {
            tl.to(cards, {
              autoAlpha: 1,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.4)",
              stagger: 0.2,
            }, "-=0.4");
          }
        }
      );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 80% 20%, rgba(51,186,240,0.3) 0%, transparent 50%),
          radial-gradient(ellipse at 20% 80%, rgba(26,90,138,0.4) 0%, transparent 50%),
          var(--brand-primary)
        `,
      }}
      aria-label="PREME Salud — 45 años cuidando tu salud"
    >
      {/* Dot pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-16 lg:px-24 py-20 md:py-0">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16">
          {/* Column left — text */}
          <div className="flex-[0.6] flex flex-col gap-6 md:gap-8 text-center md:text-left">
            {/* Badge */}
            <div data-hero-badge style={{ visibility: "hidden" }}>
              <span className="inline-flex items-center text-caption text-white/80 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                La primera prepaga de Córdoba · 45 años
              </span>
            </div>

            {/* Headline */}
            <h1 className="flex flex-col gap-1">
              <span data-hero-line className="heading-hero text-white" style={{ visibility: "hidden" }}>
                45 años
              </span>
              <span data-hero-line className="heading-hero text-brand-secondary" style={{ visibility: "hidden" }}>
                cuidando tu salud
              </span>
            </h1>

            {/* Subtitle */}
            <p data-hero-subtitle className="text-lead text-white/70 max-w-lg mx-auto md:mx-0" style={{ visibility: "hidden" }}>
              Cobertura integral para vos y tu familia. Red de 2.800+ prestadores en Córdoba.
            </p>

            {/* CTAs */}
            <div data-hero-ctas className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" style={{ visibility: "hidden" }}>
              <Link
                href="/planes"
                className="inline-flex items-center justify-center bg-brand-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-float hover:brightness-110 transition-all duration-200"
              >
                Conocé nuestros planes
              </Link>
              <a
                href="https://wa.me/5493512006002?text=Hola!%20Quiero%20info%20sobre%20PREME"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-200"
              >
                Hablá con un asesor
              </a>
            </div>

            {/* Mini stats */}
            <div data-hero-stats className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 justify-center md:justify-start text-sm text-white/50" style={{ visibility: "hidden" }}>
              <span>45+ años</span>
              <span className="hidden sm:inline mx-3">·</span>
              <span>2.800+ prestadores</span>
              <span className="hidden sm:inline mx-3">·</span>
              <span>13.000+ afiliados</span>
            </div>
          </div>

          {/* Column right — floating cards (desktop only) */}
          <div className="hidden md:flex flex-[0.4] relative h-[420px] lg:h-[480px] items-center justify-center">
            {/* Card 1: Credencial (large, top) */}
            <div
              data-hero-card
              className="absolute top-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 bg-white rounded-[var(--radius-card)] shadow-float p-5 w-[260px] rotate-2"
              style={{ visibility: "hidden" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <IdentificationCard size={28} weight="duotone" className="text-brand-primary" />
                <span className="text-sm font-semibold text-brand-primary">Credencial PREME</span>
              </div>
              <div className="space-y-2">
                <p className="text-[15px] font-semibold text-slate-800">María García</p>
                <p className="text-xs text-slate-500">DNI 30.456.789</p>
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-plan-integral/10 text-plan-integral">
                  Plan Integral
                </span>
              </div>
            </div>

            {/* Card 2: Turnos (small, bottom-left) */}
            <div
              data-hero-card
              className="absolute bottom-16 left-0 bg-white rounded-xl shadow-hover p-4 w-[200px] -rotate-1"
              style={{ visibility: "hidden" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light">
                  <CalendarBlank size={22} weight="duotone" className="text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Turnos online</p>
                  <p className="text-xs text-slate-500">En 2 minutos</p>
                </div>
              </div>
            </div>

            {/* Card 3: Emergencias (small, bottom-right) */}
            <div
              data-hero-card
              className="absolute bottom-4 right-0 bg-white rounded-xl shadow-hover p-4 w-[200px] rotate-1"
              style={{ visibility: "hidden" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                  <Siren size={22} weight="duotone" className="text-red-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Emergencias 24/7</p>
                  <p className="text-xs text-slate-500">ECCO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
