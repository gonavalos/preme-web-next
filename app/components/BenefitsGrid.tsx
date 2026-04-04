"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  DeviceMobile,
  CalendarBlank,
  Users,
  ShieldCheck,
} from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Benefit = {
  icon: PhosphorIcon;
  title: string;
  description: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: DeviceMobile,
    title: "Credencial digital",
    description: "Tu credencial en el celular, siempre a mano",
  },
  {
    icon: CalendarBlank,
    title: "Turnos online",
    description: "Agendá con tu prestador desde la app",
  },
  {
    icon: Users,
    title: "2.800+ prestadores",
    description: "La red más amplia de Córdoba",
  },
  {
    icon: ShieldCheck,
    title: "Sin coseguros",
    description: "En planes Integral y Máximo",
  },
];

export default function BenefitsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = container.querySelectorAll("[data-benefit-card]");
      if (!cards.length) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          normal: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduced } = context.conditions!;
          if (reduced) {
            gsap.set(cards, { autoAlpha: 1 });
            return;
          }
          gsap.set(cards, { autoAlpha: 0, y: 30 });
          ScrollTrigger.create({
            trigger: container,
            start: "top 80%",
            once: true,
            onEnter: () => {
              gsap.to(cards, {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
              });
            },
          });
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-16 md:py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="text-caption text-brand-secondary mb-3">POR QUÉ PREME</p>
          <h2 className="heading-section text-brand-primary">Tu salud, simplificada</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                data-benefit-card
                className="bg-white rounded-[var(--radius-card)] shadow-rest p-6 transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
                style={{ visibility: "hidden" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light mb-4">
                  <Icon size={28} weight="duotone" className="text-brand-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
