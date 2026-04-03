// /components/Navbar.tsx
"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserMd } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const NAV_LINKS = [
  ["Inicio", "/"],
  ["Planes", "/planes"],
  ["Prestadores", "/prestadores"],
  ["Institucional", "/institucional"],
  ["Blog", "/blog"],
  ["Contacto", "/contacto"],
];

const SCROLL_THRESHOLD = 60;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileTimelineRef = useRef<gsap.core.Timeline | null>(null);

  // Hamburger line refs
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);

  // Glassmorphism on scroll
  useGSAP(
    () => {
      const header = headerRef.current;
      const logo = logoRef.current;
      if (!header || !logo) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        ScrollTrigger.create({
          trigger: document.body,
          start: `${SCROLL_THRESHOLD}px top`,
          onEnter: () => {
            gsap.to(header, {
              backgroundColor: "rgba(255, 255, 255, 0.88)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(logo, {
              scale: 0.88,
              duration: 0.3,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(header, {
              backgroundColor: "rgba(255, 255, 255, 0)",
              backdropFilter: "blur(0px)",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(logo, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        ScrollTrigger.create({
          trigger: document.body,
          start: `${SCROLL_THRESHOLD}px top`,
          onEnter: () => {
            gsap.set(header, {
              backgroundColor: "rgba(255, 255, 255, 0.88)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            });
          },
          onLeaveBack: () => {
            gsap.set(header, {
              backgroundColor: "rgba(255, 255, 255, 0)",
              backdropFilter: "blur(0px)",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
            });
          },
        });
      });
    },
    { scope: headerRef }
  );

  // Mobile menu animation
  const openMenu = useCallback(() => {
    setMenuOpen(true);

    requestAnimationFrame(() => {
      const panel = mobileMenuRef.current;
      const l1 = line1Ref.current;
      const l2 = line2Ref.current;
      const l3 = line3Ref.current;
      if (!panel || !l1 || !l2 || !l3) return;

      const links = panel.querySelectorAll("[data-nav-link]");
      const ctas = panel.querySelectorAll("[data-nav-cta]");

      const tl = gsap.timeline();

      // Hamburger → X
      tl.to(l1, { rotation: 45, y: 7, duration: 0.25, ease: "power2.inOut" }, 0)
        .to(l2, { autoAlpha: 0, duration: 0.15, ease: "power2.in" }, 0)
        .to(l3, { rotation: -45, y: -7, duration: 0.25, ease: "power2.inOut" }, 0);

      // Panel slide
      tl.fromTo(
        panel,
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" },
        0.1
      );

      // Links stagger
      tl.fromTo(
        links,
        { autoAlpha: 0, x: -15 },
        { autoAlpha: 1, x: 0, duration: 0.3, ease: "power2.out", stagger: 0.05 },
        0.15
      );

      // CTAs stagger
      tl.fromTo(
        ctas,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out", stagger: 0.05 },
        0.3
      );

      mobileTimelineRef.current = tl;
    });
  }, []);

  const closeMenu = useCallback(() => {
    const tl = mobileTimelineRef.current;
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const l3 = line3Ref.current;

    if (tl) {
      tl.reverse();
      tl.eventCallback("onReverseComplete", () => {
        setMenuOpen(false);
        mobileTimelineRef.current = null;
      });
    } else {
      setMenuOpen(false);
    }

    // Reset hamburger lines
    if (l1 && l2 && l3) {
      gsap.to(l1, { rotation: 0, y: 0, duration: 0.25, ease: "power2.inOut" });
      gsap.to(l2, { autoAlpha: 1, duration: 0.15, ease: "power2.out", delay: 0.1 });
      gsap.to(l3, { rotation: 0, y: 0, duration: 0.25, ease: "power2.inOut" });
    }
  }, []);

  const toggleMenu = useCallback(() => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [menuOpen, openMenu, closeMenu]);

  const handleLinkClick = useCallback(() => {
    if (menuOpen) closeMenu();
  }, [menuOpen, closeMenu]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0)",
        backdropFilter: "blur(0px)",
      }}
    >
      <div className="mx-auto max-w-[95%] flex items-center justify-between px-4 sm:px-6 lg:px-6 xl:px-10 py-2 sm:py-2.5 xl:py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            ref={logoRef}
            src="/logoPreme.png"
            alt="PREME"
            width={520}
            height={520}
            className="h-11 w-auto sm:h-12 xl:h-14 origin-left will-change-transform"
            priority
            quality={100}
          />
        </Link>

        {/* Nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 xl:gap-8 text-gray-700">
          {NAV_LINKS.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm lg:text-[15px] xl:text-base font-medium hover:text-brandBlue transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTAs (desktop) */}
        <div className="hidden md:flex items-center gap-3 xl:gap-4">
          <a
            href="https://premeprepaga-consultas.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2 rounded-xl
              bg-white text-[#0D2A53] ring-1 ring-[#0D2A53]/15
              h-10 xl:h-11 px-4 xl:px-5
              text-sm xl:text-[15px] font-semibold
              hover:bg-gray-50 hover:ring-[#0D2A53]/25 transition-all
            "
          >
            <FaUserMd className="text-[#FF914D] text-base" />
            <span>Portal Prestadores</span>
          </a>

          <Link
            href="/formulario-landing"
            className="
              nav-cta-primary
              inline-flex items-center justify-center rounded-xl
              bg-brandBlue text-white
              h-10 xl:h-11 px-5 xl:px-6
              text-sm xl:text-[15px] font-semibold
              shadow-md transition-all duration-200
              hover:bg-[#25A6DC] hover:shadow-lg hover:scale-[1.03]
            "
          >
            Afiliate ahora
          </Link>
        </div>

        {/* Hamburguesa (mobile) */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Menú"
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition flex flex-col items-center justify-center gap-[5px] w-10 h-10"
        >
          <span
            ref={line1Ref}
            className="block h-[2px] w-5 bg-current rounded-full origin-center will-change-transform"
          />
          <span
            ref={line2Ref}
            className="block h-[2px] w-5 bg-current rounded-full origin-center"
          />
          <span
            ref={line3Ref}
            className="block h-[2px] w-5 bg-current rounded-full origin-center will-change-transform"
          />
        </button>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden border-t border-gray-100 bg-white shadow-lg"
          style={{ visibility: "hidden" }}
        >
          <div className="px-4 py-5 flex flex-col gap-3 text-gray-700">
            {NAV_LINKS.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                data-nav-link
                onClick={handleLinkClick}
                className="py-1.5 text-base font-medium hover:text-brandBlue transition-colors"
              >
                {label}
              </Link>
            ))}

            <div className="mt-2 pt-3 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="https://premeprepaga-consultas.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                data-nav-cta
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 rounded-xl bg-white text-[#0D2A53] ring-1 ring-[#0D2A53]/15 px-4 py-2.5 font-semibold"
              >
                <FaUserMd className="text-[#FF914D]" />
                Portal Prestadores
              </a>

              <Link
                href="/formulario-landing"
                data-nav-cta
                onClick={handleLinkClick}
                className="rounded-xl bg-brandBlue text-white px-4 py-2.5 text-center font-semibold hover:bg-[#25A6DC] shadow-md"
              >
                Afiliate ahora
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
