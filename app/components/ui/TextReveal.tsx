"use client";

import { useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  splitBy?: "chars" | "words" | "lines";
  stagger?: number;
  delay?: number;
  triggerOnScroll?: boolean;
  start?: string;
};

export default function TextReveal({
  text,
  as: Tag = "p",
  className = "",
  splitBy = "words",
  stagger = 0.03,
  delay = 0,
  triggerOnScroll = false,
  start = "top 85%",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const units = useMemo(() => {
    if (splitBy === "chars") {
      return text.split("").map((char, i) => ({
        key: `${char}-${i}`,
        content: char === " " ? "\u00A0" : char,
      }));
    }
    if (splitBy === "lines") {
      return text.split("\n").map((line, i) => ({
        key: `line-${i}`,
        content: line,
      }));
    }
    // words
    return text.split(" ").map((word, i) => ({
      key: `${word}-${i}`,
      content: word,
    }));
  }, [text, splitBy]);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const spans = container.querySelectorAll("[data-reveal-unit]");
      if (!spans.length) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          normal: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduced } = context.conditions!;

          if (reduced) {
            gsap.set(spans, { yPercent: 0, autoAlpha: 1 });
            return;
          }

          gsap.set(spans, { yPercent: 100, autoAlpha: 0 });

          const animVars: gsap.TweenVars = {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger,
            delay,
          };

          if (triggerOnScroll) {
            ScrollTrigger.create({
              trigger: container,
              start,
              once: true,
              onEnter: () => gsap.to(spans, animVars),
            });
          } else {
            gsap.to(spans, animVars);
          }
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <Tag ref={containerRef as React.RefObject<HTMLHeadingElement>} className={className} aria-label={text}>
      {units.map((unit) => (
        <span key={unit.key} className="inline-block overflow-hidden">
          <span data-reveal-unit className="inline-block will-change-transform" style={{ visibility: "hidden" }}>
            {unit.content}
          </span>
        </span>
      ))}
      {splitBy === "words" &&
        units.map((_, i) =>
          i < units.length - 1 ? (
            <span key={`space-${i}`} className="inline-block">&nbsp;</span>
          ) : null
        )}
    </Tag>
  );
}
