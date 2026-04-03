"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Calendar, Stethoscope, Users, LayoutGrid } from "lucide-react";
import type { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Stat = {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
};

const STATS: Stat[] = [
  { value: 45, suffix: "+", label: "Años cuidando Córdoba", icon: Calendar },
  { value: 2800, suffix: "+", label: "Prestadores en cartilla", icon: Stethoscope },
  { value: 13000, suffix: "+", label: "Afiliados activos", icon: Users },
  { value: 4, suffix: "", label: "Planes a tu medida", icon: LayoutGrid },
];

export default function StatsBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          normal: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduced } = context.conditions!;

          // Counter objects for GSAP to animate
          const counters = STATS.map(() => ({ val: 0 }));

          if (reduced) {
            // Just show final values immediately
            STATS.forEach((stat, i) => {
              const el = numberRefs.current[i];
              if (el) el.textContent = stat.value.toLocaleString("es-AR") + stat.suffix;
            });
            return;
          }

          // Fade in icons + labels
          const items = container.querySelectorAll("[data-stat-item]");
          gsap.set(items, { autoAlpha: 0, y: 20 });

          ScrollTrigger.create({
            trigger: container,
            start: "top 85%",
            once: true,
            onEnter: () => {
              // Stagger reveal of items
              gsap.to(items, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.2,
              });

              // Count up numbers
              STATS.forEach((stat, i) => {
                gsap.to(counters[i], {
                  val: stat.value,
                  duration: 2,
                  ease: "power2.out",
                  delay: i * 0.2,
                  snap: { val: 1 },
                  onUpdate: () => {
                    const el = numberRefs.current[i];
                    if (el) {
                      el.textContent =
                        counters[i].val.toLocaleString("es-AR") + stat.suffix;
                    }
                  },
                });
              });
            },
          });
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#092f57] via-[#0D2A53] to-[#0a1f3d]"
    >
      {/* Subtle decorative glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_rgba(51,186,240,0.3)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/10 py-10 md:py-12 px-4 md:px-6">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              data-stat-item
              className="flex flex-col items-center px-4 py-3"
              style={{ visibility: "hidden" }}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <Icon className="h-6 w-6 text-brandBlue" strokeWidth={1.8} />
              </div>
              <span
                ref={(el) => { numberRefs.current[i] = el; }}
                className="text-3xl md:text-4xl font-extrabold text-white tabular-nums"
              >
                0{stat.suffix}
              </span>
              <span className="mt-1.5 text-sm md:text-base text-white/75 font-medium text-center leading-snug">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
