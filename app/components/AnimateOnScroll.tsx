"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Direction = "up" | "down" | "left" | "right";

type Props = {
  children: ReactNode;
  className?: string;
  /** Dirección de entrada. Default "up" */
  direction?: Direction;
  /** Delay en segundos antes de la animación */
  delay?: number;
  /** Duración en segundos. Default 0.8 */
  duration?: number;
  /** Distancia del translate en px. Default 30 */
  distance?: number;
  /** Cuándo se activa el ScrollTrigger. Default "top 85%" */
  start?: string;
  /** Ease de GSAP. Default "power2.out" */
  ease?: string;
};

const directionToVars = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: -distance };
    case "right":
      return { x: distance };
  }
};

export default function AnimateOnScroll({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 30,
  start = "top 85%",
  ease = "power2.out",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          normal: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduced } = context.conditions!;

          if (reduced) {
            gsap.set(el, { autoAlpha: 1 });
            return;
          }

          gsap.from(el, {
            ...directionToVars(direction, distance),
            autoAlpha: 0,
            duration,
            delay,
            ease,
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: "play none none none",
            },
          });
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ visibility: "hidden" }}
    >
      {children}
    </div>
  );
}
