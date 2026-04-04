"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: ReactNode;
  className?: string;
  /** CSS selector for the direct children to stagger. Default ":scope > *" */
  selector?: string;
  /** Stagger delay between items in seconds. Default 0.12 */
  stagger?: number;
  /** Animation duration in seconds. Default 0.7 */
  duration?: number;
  /** Distance in px for the translate. Default 40 */
  distance?: number;
  /** ScrollTrigger start. Default "top 80%" */
  start?: string;
  /** Direction of entrance animation */
  from?: "bottom" | "left" | "right" | "scale";
};

function getFromVars(from: string, distance: number): gsap.TweenVars {
  switch (from) {
    case "left":
      return { x: -distance, autoAlpha: 0 };
    case "right":
      return { x: distance, autoAlpha: 0 };
    case "scale":
      return { scale: 0.9, autoAlpha: 0 };
    default: // bottom
      return { y: distance, autoAlpha: 0 };
  }
}

function getToVars(from: string): gsap.TweenVars {
  switch (from) {
    case "left":
    case "right":
      return { x: 0, autoAlpha: 1 };
    case "scale":
      return { scale: 1, autoAlpha: 1 };
    default:
      return { y: 0, autoAlpha: 1 };
  }
}

export default function StaggerReveal({
  children,
  className = "",
  selector = ":scope > *",
  stagger = 0.12,
  duration = 0.7,
  distance = 40,
  start = "top 80%",
  from = "bottom",
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

          gsap.set(items, getFromVars(from, distance));

          ScrollTrigger.create({
            trigger: container,
            start,
            once: true,
            onEnter: () => {
              gsap.to(items, {
                ...getToVars(from),
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
