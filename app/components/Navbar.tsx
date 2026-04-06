// /components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaClipboardCheck, FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/70 backdrop-blur-xl"
      }`}
    >
      <div
        className="
          mx-auto max-w-[95%]
          flex items-center justify-between flex-nowrap overflow-hidden
          px-4 sm:px-6 lg:px-6 xl:px-10
          py-2 sm:py-2.5 lg:py-2.5 xl:py-3
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logoPreme.png"
            alt="PREME"
            width={520}
            height={520}
            className="h-11 w-auto sm:h-12 lg:h-12 xl:h-14"
            priority
            quality={100}
          />
        </Link>

        {/* Links (tablet/desktop) */}
        <nav
          className="
            hidden md:flex items-center
            md:gap-6 lg:gap-6 xl:gap-8
            text-gray-700
          "
        >
          {[
            ["Inicio", "/"],
            ["Planes", "/planes"],
            ["Prestadores", "/prestadores"],
            ["Institucional", "/institucional"],
            ["Contacto", "/contacto"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="
                hover:text-[#33BAF0]
                md:text-[14px] lg:text-[15px] xl:text-[17px]
                md:leading-6 lg:leading-[1.15]
              "
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTAs (derecha) */}
        <div
          className="
            hidden md:flex items-center
            md:gap-3 lg:gap-3 xl:gap-4
          "
        >
          {/* Autorizaciones — naranja con ícono y borde */}
          <Link
            href="/autorizaciones"
            className="
              flex items-center gap-2
              rounded-xl border-2 border-[#FF914D] text-[#FF914D]
              md:h-10 lg:h-11 xl:h-12
              md:px-3 lg:px-4 xl:px-5
              hover:bg-[#FF914D] hover:text-white transition-all duration-300
              group
            "
          >
            <FaClipboardCheck className="text-base lg:text-lg xl:text-xl" />
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wide leading-none md:text-[12px] lg:text-[12px] xl:text-[14px]">
                AUTORIZACIONES
              </span>
              <span className="hidden lg:block leading-tight lg:text-[9px] xl:text-[10px] mt-0.5 opacity-80">
                Trámite de Prestadores
              </span>
            </div>
          </Link>

          {/* Quiero mi Plan — navy sólido con ícono */}
          <Link
            href="/formulario-landing"
            className="
              inline-flex items-center justify-center gap-2
              rounded-xl bg-[#092f57] text-white
              md:h-10 lg:h-11 xl:h-12
              md:min-w-[140px] lg:min-w-[155px] xl:min-w-[180px]
              md:px-4 lg:px-5 xl:px-6
              md:text-[13px] lg:text-[14px] xl:text-[15px]
              font-bold hover:bg-[#0a3d6e] hover:shadow-lg hover:scale-[1.02] transition-all duration-300
            "
          >
            <svg className="w-4 h-4 lg:w-[18px] lg:h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Quiero mi Plan
            <FaArrowRight className="text-[10px] lg:text-xs" />
          </Link>
        </div>

        {/* Hamburguesa (mobile) */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-sm">
          <div className="px-4 py-4 flex flex-col gap-4 text-gray-700 text-base">
            {[
              ["Inicio", "/"],
              ["Planes", "/planes"],
              ["Prestadores", "/prestadores"],
              ["Institucional", "/institucional"],
              ["Contacto", "/contacto"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#33BAF0]"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/autorizaciones"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg border-2 border-[#FF914D] text-[#FF914D] px-4 py-2 text-center font-bold flex items-center justify-center gap-2"
            >
              <FaClipboardCheck />
              AUTORIZACIONES
            </Link>

            <Link
              href="/formulario-landing"
              onClick={() => setMenuOpen(false)}
              className="bg-[#092f57] text-white px-4 py-2.5 rounded-lg text-center font-bold flex items-center justify-center gap-2"
            >
              Quiero mi Plan
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
