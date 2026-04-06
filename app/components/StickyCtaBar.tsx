"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WA_LINK = "https://wa.me/5493512006002?text=Hola%2C%20quiero%20asesoramiento%20sobre%20planes";

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <p className="hidden sm:block text-sm text-[#092f57] font-medium">
            ¿Necesitás ayuda para elegir tu plan?
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#20bd5a] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#25D366]/20"
          >
            <FaWhatsapp className="text-lg" />
            Hablar con un asesor ahora
          </a>
        </div>
      </div>
    </div>
  );
}
