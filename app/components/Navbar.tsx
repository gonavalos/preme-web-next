// /components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky justify-between top-0 z-50 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
      <div className=" mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo: archivo en /public/logoPreme.png */}
        <Link href="/" className="flex items-center gap-3">
  <Image
    src="/logoPreme.png"      // poné un archivo grande (ej: 320×320)
    alt="PREME"
    width={520}               // tamaño intrínseco grande
    height={520}
    className="h-17 w-auto"   // tamaño visible (40px alto)
    priority
    quality={100}
  />
  
        </Link>

        <nav className="hidden md:flex items-center gap-13 text-lg text-gray-700">
          <Link href="/" className="hover:text-[#33BAF0]">Inicio</Link>
          <Link href="/planes" className="hover:text-[#33BAF0]">Planes</Link>
          <Link href="/prestadores" className="hover:text-[#33BAF0]">Prestadores</Link>
          <Link href="/institucional" className="hover:text-[#33BAF0]">Institucional</Link>
          <Link href="/contacto" className="hover:text-[#33BAF0]">Contacto</Link>
        </nav>

        <Link
          href="/contacto"
          className="hidden md:inline-block bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-brand-blue-hover"
        >
          Afiliate ahora
        </Link>

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

      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-sm">
          <div className="px-4 py-4 flex flex-col gap-4 text-gray-700">
            {[
              ["Inicio","/"],
              ["Planes","/planes"],
              ["Prestadores","/prestadores"],
              ["Institucional","/institucional"],
              ["Contacto","/contacto"],
            ].map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="hover:text-primary">
                {label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-brand-blue text-white px-4 py-2 rounded-lg text-center hover:bg-brand-blue-hover"
            >
              Afiliate ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}