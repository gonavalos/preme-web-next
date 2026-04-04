"use client";

import { useRef, useCallback, type ReactNode } from "react";
import gsap from "gsap";
import Link from "next/link";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  href,
  target,
  rel,
  onClick,
}: Props) {
  const buttonRef = useRef<HTMLElement>(null);
  const isMobile = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile || prefersReduced) return;
      const el = buttonRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;

      gsap.to(el, {
        x,
        y,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    [strength, isMobile, prefersReduced]
  );

  const handleMouseLeave = useCallback(() => {
    if (isMobile || prefersReduced) return;
    const el = buttonRef.current;
    if (!el) return;

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  }, [isMobile, prefersReduced]);

  const sharedProps = {
    className: `inline-block will-change-transform ${className}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
  };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    if (isExternal) {
      return (
        <a
          ref={buttonRef as React.RefObject<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          {...sharedProps}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        {...sharedProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button ref={buttonRef as React.RefObject<HTMLButtonElement>} type="button" {...sharedProps}>
      {children}
    </button>
  );
}
