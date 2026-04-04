"use client";

import { useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function PageTransition({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced) {
        gsap.set(el, { autoAlpha: 1 });
        return;
      }

      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    },
    { dependencies: [pathname], scope: containerRef }
  );

  return (
    <div ref={containerRef} style={{ visibility: "hidden" }}>
      {children}
    </div>
  );
}
