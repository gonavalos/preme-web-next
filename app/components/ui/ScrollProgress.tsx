"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const bar = barRef.current;
    if (!bar) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(bar, { scaleX: 0, autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          gsap.set(bar, {
            scaleX: self.progress,
            autoAlpha: self.progress > 0.01 ? 1 : 0,
          });
        },
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(bar, { autoAlpha: 0 });
    });
  });

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left"
      style={{
        backgroundColor: "var(--brand-secondary)",
        visibility: "hidden",
      }}
    />
  );
}
