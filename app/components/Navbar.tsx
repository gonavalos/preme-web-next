// /components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
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
            md:gap-4 lg:gap-4 xl:gap-6
          "
        >
          {/* Autorizaciones */}
          <Link
            href="/autorizaciones"
            className="
              flex flex-col justify-center items-center
              rounded-xl bg-[#FF914D] text-white
              md:h-10 lg:h-11 xl:h-12
              md:min-w-[150px] lg:min-w-[145px] xl:min-w-[175px]
              md:px-3 lg:px-3 xl:px-5
              shadow-md hover:bg-[#ff7a26] transition-all
            "
          >
            <span className="font-extrabold tracking-wide leading-none md:text-[13px] lg:text-[12px] xl:text-[15px]">
              AUTORIZACIONES
            </span>
            <span className="hidden lg:block leading-tight lg:text-[10px] text-[11px] mt-0.5 opacity-95">
              Trámite de Prestadores
            </span>
          </Link>

          {/* Afiliate ahora (sin subtítulo, mismo tamaño) */}
          <Link
            href="https://formularios.fidelitytools.net?f=OTQ3MA"
            className="
              inline-flex items-center justify-center rounded-xl bg-brand-blue text-white
              md:h-10 lg:h-11 xl:h-12
              md:min-w-[150px] lg:min-w-[145px] xl:min-w-[175px]
              md:px-3 lg:px-3 xl:px-5
              md:text-[14px] lg:text-[15px] xl:text-[15px]
              font-semibold hover:bg-brand-blue-hover shadow-md transition-all
            "
          >
            Afiliate ahora
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