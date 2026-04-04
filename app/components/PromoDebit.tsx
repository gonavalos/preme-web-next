"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PromoDebit() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const card = el.querySelector("[data-promo-card]");
      if (!card) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          normal: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduced } = context.conditions!;
          if (reduced) {
            gsap.set(card, { autoAlpha: 1 });
            return;
          }
          gsap.set(card, { autoAlpha: 0, y: 40 });
          ScrollTrigger.create({
            trigger: el,
            start: "top 80%",
            once: true,
            onEnter: () => {
              gsap.to(card, {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
              });
            },
          });
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-16 md:py-[120px] bg-brand-light/50">
      <div className="mx-auto max-w-4xl px-6">
        <div
          data-promo-card
          className="relative bg-white rounded-[var(--radius-card)] shadow-float p-8 md:p-14"
          style={{ visibility: "hidden" }}
        >
          {/* Badge */}
          <span className="absolute top-6 right-6 text-caption bg-brand-secondary text-white rounded-full px-4 py-1">
            Oferta
          </span>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Discounts */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 flex-1">
              {/* 30% */}
              <div className="text-center">
                <p className="text-[56px] font-bold text-brand-secondary leading-none">30%</p>
                <p className="text-lead mt-1">los primeros 3 meses</p>
              </div>

              {/* Separator */}
              <div className="w-full md:w-px h-px md:h-20 bg-slate-200" />

              {/* 10% */}
              <div className="text-center">
                <p className="text-[40px] font-bold text-brand-primary leading-none">10%</p>
                <p className="text-lead mt-1">del mes 4 al 12</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
              <Link
                href="/formulario-landing"
                className="inline-flex items-center justify-center bg-brand-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-hover hover:brightness-110 transition-all duration-200"
              >
                Adherirme con débito
              </Link>
              <p className="text-xs text-slate-400 text-center md:text-right">
                *Con tarjeta de crédito bancaria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
