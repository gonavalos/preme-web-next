"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: ReactNode;
  className?: string;
  /** CSS selector for the direct children to stagger. Default "> *" */
  selector?: string;
  /** Stagger delay between items in seconds. Default 0.12 */
  stagger?: number;
  /** Animation duration in seconds. Default 0.7 */
  duration?: number;
  /** Y offset in px. Default 40 */
  distance?: number;
  /** ScrollTrigger start. Default "top 80%" */
  start?: string;
};

export default function StaggerReveal({
  children,
  className = "",
  selector = "> *",
  stagger = 0.12,
  duration = 0.7,
  distance = 40,
  start = "top 80%",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const items = container.querySelectorAll(selector);
      if (items.length === 0) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          normal: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduced } = context.conditions!;

          if (reduced) {
            gsap.set(items, { autoAlpha: 1 });
            return;
          }

          gsap.set(items, { autoAlpha: 0, y: distance });

          ScrollTrigger.create({
            trigger: container,
            start,
            once: true,
            onEnter: () => {
              gsap.to(items, {
                autoAlpha: 1,
                y: 0,
                duration,
                ease: "power2.out",
                stagger,
              });
            },
          });
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
