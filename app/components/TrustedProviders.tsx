"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PROVIDERS = [
  "Sanatorio Allende",
  "Clínica Romagosa",
  "Hospital Italiano",
  "Clínica Oulton",
  "Clínica Vélez Sarsfield",
  "Conci Carpinella",
];

export default function TrustedProviders() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const content = container.querySelector("[data-providers-content]");
      if (!content) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          normal: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduced } = context.conditions!;
          if (reduced) {
            gsap.set(content, { autoAlpha: 1 });
            return;
          }
          gsap.set(content, { autoAlpha: 0, y: 30 });
          ScrollTrigger.create({
            trigger: container,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(content, {
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
    <section ref={containerRef} className="py-16 md:py-[100px] bg-brand-light/30">
      <div
        data-providers-content
        className="mx-auto max-w-6xl px-6"
        style={{ visibility: "hidden" }}
      >
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-caption text-brand-secondary mb-3">RED DE CONFIANZA</p>
          <h2 className="heading-section text-brand-primary">Los mejores centros de Córdoba</h2>
        </div>

        {/* Logo ribbon — placeholders until real logos are provided */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-8 md:gap-12 items-center justify-center flex-wrap md:flex-nowrap hover:[animation-play-state:paused]">
            {/* Double for infinite loop on desktop */}
            {[...PROVIDERS, ...PROVIDERS].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="
                  shrink-0
                  bg-white rounded-xl px-6 py-3.5
                  text-slate-400 font-medium text-sm md:text-base
                  shadow-rest
                  grayscale opacity-60
                  hover:grayscale-0 hover:opacity-100 hover:text-brand-primary
                  transition-all duration-300
                  cursor-default select-none
                "
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-10 text-sm text-slate-400 text-center">
          Y más de 2.800 prestadores en toda la provincia
        </p>
      </div>
    </section>
  );
}
