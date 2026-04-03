"use client";

import type { ReactNode } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

type Props = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  /** Delay en ms (se convierte a segundos internamente) */
  delay?: number;
  distance?: number;
};

export default function FadeIn({
  children,
  className = "",
  direction = "up",
  delay = 0,
  distance = 24,
}: Props) {
  return (
    <AnimateOnScroll
      className={className}
      direction={direction === "none" ? "up" : direction}
      delay={delay / 1000}
      distance={direction === "none" ? 0 : distance}
      duration={0.6}
    >
      {children}
    </AnimateOnScroll>
  );
}
