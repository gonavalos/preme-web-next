// /components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
      <div className="max-w-[95%] mx-auto px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logoPreme.png"
            alt="PREME"
            width={520}
            height={520}
            className="h-17 w-auto"
            priority
            quality={100}
          />
        </Link>

        {/* NAV LINKS desktop */}
        <nav className="hidden md:flex items-center gap-10 text-base lg:text-lg text-gray-700">
          <Link href="/" className="hover:text-[#33BAF0]">Inicio</Link>
          <Link href="/planes" className="hover:text-[#33BAF0]">Planes</Link>
          <Link href="/prestadores" className="hover:text-[#33BAF0]">Prestadores</Link>
          <Link href="/institucional" className="hover:text-[#33BAF0]">Institucional</Link>
          <Link href="/contacto" className="hover:text-[#33BAF0]">Contacto</Link>
        </nav>

{/* BOTONES derechos (alineados en altura y proporción) */}
<div className="hidden md:flex items-stretch gap-8 lg:gap-4">
  {/* AUTORIZACIONES */}
  <Link
    href="/autorizaciones"
    className="flex flex-col justify-center items-center rounded-xl bg-[#FF914D] text-white px-5 py-2.5 lg:px-6 lg:py-2 shadow-md hover:bg-[#ff7a26] transition-all min-w-[190px]"
  >
    <span className="leading-none font-extrabold tracking-wide text-[14px] lg:text-[15px]">
      AUTORIZACIONES
    </span>
    <span className="leading-tight text-[11px] lg:text-[11px] mt-1 opacity-95 -mt-0.5">
      Trámite de Prestadores
    </span>
  </Link>

  {/* AFILIATE AHORA */}
  <Link
    href="https://formularios.fidelitytools.net?f=OTQ3MA"
    className="flex items-center justify-center rounded-xl bg-brand-blue text-white px-5 py-2.5 lg:px-6 lg:py-3 text-[19px] font-semibold hover:bg-brand-blue-hover shadow-md transition-all min-w-[190px]"
  >
    Afiliate ahora
  </Link>
</div>

        {/* BOTÓN HAMBURGUESA */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* MENÚ MOBILE */}
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
                className="hover:text-primary"
              >
                {label}
              </Link>
            ))}

            {/* CTA móvil destacada para Autorizaciones */}
            <Link
              href="http://autorizaciones.preme.com.ar/Account/Login?ReturnUrl=%2f"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-[#FF914D] text-white px-4 py-2 text-center font-bold"
            >
              AUTORIZACIONES
              <span className="block text-[12px] font-medium leading-tight opacity-95">
                Trámite de Prestadores
              </span>
            </Link>

            <Link
              href="https://formularios.fidelitytools.net?f=OTQ3MA"
              onClick={() => setMenuOpen(false)}
              className="bg-brand-blue text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-brand-blue-hover"
            >
              AFILIATE ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}