// /components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaClipboardCheck, FaWhatsapp } from "react-icons/fa";

const WA_LINK = "https://api.whatsapp.com/send?phone=5493512006002&text=Hola%2C%20quiero%20asesoramiento%20sobre%20planes.%20Estuve%20navegando%20en%20la%20web.";
// Portal externo (aún sin certificado SSL, por eso http). Cuando lo migren
// a https se cambia acá y listo.
const AUTORIZACIONES_URL = "http://autorizaciones.preme.com.ar";

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
      <div className="mx-auto max-w-[95%] flex items-center justify-between flex-nowrap overflow-hidden px-4 sm:px-6 lg:px-6 xl:px-10 py-2 sm:py-2.5 lg:py-2.5 xl:py-3">
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
        <nav className="hidden md:flex items-center md:gap-4 lg:gap-6 xl:gap-8">
          {[
            ["Inicio", "/"],
            ["Planes", "/planes"],
            ["Prestadores", "/prestadores"],
            ["Afiliados", "/afiliados"],
            ["Institucional", "/institucional"],
            ["Contacto", "/contacto"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="whitespace-nowrap font-medium text-[#092f57] hover:text-[#33BAF0] transition-colors md:text-[13px] lg:text-[14px] xl:text-[15px]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTAs (derecha) */}
        <div className="hidden md:flex items-center md:gap-3 lg:gap-3 xl:gap-4">
          {/* Autorizaciones — portal externo (Gecros) */}
          <a
            href={AUTORIZACIONES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-[#092f57]/15 text-[#092f57]/70 md:h-10 lg:h-11 xl:h-12 md:px-3 lg:px-4 xl:px-5 hover:border-[#092f57]/30 hover:text-[#092f57] transition-all duration-200"
          >
            <FaClipboardCheck className="text-sm lg:text-base" />
            <span className="font-semibold md:text-[12px] lg:text-[12px] xl:text-[13px]">
              Autorizaciones
            </span>
          </a>

          {/* CTA principal — Hablar con un asesor */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white md:h-10 lg:h-11 xl:h-12 md:px-4 lg:px-5 xl:px-6 md:text-[13px] lg:text-[14px] xl:text-[15px] font-bold hover:bg-[#20bd5a] transition-all duration-200"
          >
            <FaWhatsapp className="text-base lg:text-lg" />
            Hablar con un asesor
          </a>
        </div>

        {/* Hamburguesa (mobile) */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              ["Para afiliados", "/afiliados"],
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

            {/* Autorizaciones — portal externo */}
            <a
              href={AUTORIZACIONES_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 border border-[#092f57]/15 text-[#092f57] px-4 py-3 rounded-xl font-semibold"
            >
              <FaClipboardCheck />
              Autorizaciones
            </a>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="bg-[#25D366] text-white px-4 py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Hablar con un asesor
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
