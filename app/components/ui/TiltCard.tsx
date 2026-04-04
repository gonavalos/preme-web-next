"use client";

import { useRef, useCallback, type ReactNode } from "react";
import gsap from "gsap";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
};

export default function TiltCard({
  children,
  className = "",
  intensity = 10,
  glare = true,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile || prefersReduced) return;
      const el = cardRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (0.5 - y) * intensity;
      const rotateY = (x - 0.5) * intensity;

      gsap.to(el, {
        rotateX,
        rotateY,
        duration: 0.3,
        ease: "power2.out",
        transformPerspective: 1000,
      });

      if (glare && glareRef.current) {
        gsap.to(glareRef.current, {
          autoAlpha: 0.15,
          background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          duration: 0.3,
        });
      }
    },
    [intensity, glare, isMobile, prefersReduced]
  );

  const handleMouseLeave = useCallback(() => {
    if (isMobile || prefersReduced) return;
    const el = cardRef.current;
    if (!el) return;

    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    if (glare && glareRef.current) {
      gsap.to(glareRef.current, {
        autoAlpha: 0,
        duration: 0.3,
      });
    }
  }, [glare, isMobile, prefersReduced]);

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ visibility: "hidden" }}
        />
      )}
    </div>
  );
}
