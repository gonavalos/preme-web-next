"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: Props) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = spanRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        normal: "(prefers-reduced-motion: no-preference)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { reduced } = context.conditions!;

        const finalText = `${prefix}${value.toLocaleString("es-AR")}${suffix}`;

        if (reduced) {
          el.textContent = finalText;
          return;
        }

        el.textContent = `${prefix}0${suffix}`;

        const counter = { val: 0 };

        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              val: value,
              duration,
              ease: "power2.out",
              snap: { val: 1 },
              onUpdate: () => {
                el.textContent = `${prefix}${counter.val.toLocaleString("es-AR")}${suffix}`;
              },
            });
          },
        });
      }
    );
  });

  return (
    <span ref={spanRef} className={`tabular-nums ${className}`}>
      {prefix}0{suffix}
    </span>
  );
}
