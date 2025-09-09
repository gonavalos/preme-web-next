"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export type PlanCardProps = {
  /** Imagen del header (ocupa todo el ancho de la card) */
  headerImageSrc?: string;
  headerImageAlt?: string;

  /** Contenido */
  title: string;
  subtitle: string;
  benefits: string[];

  /** Estilos de marca */
  color: string;        // ej: "#33BAF0"
  highlight?: string;   // badge (opcional)
  buttonColor?: string; // CTA (si no viene, usa color)
};

function hexToRgb(hex: string) {
  const m = hex.replace("#", "").match(/^([0-9a-f]{6})$/i);
  if (!m) return null;
  const int = parseInt(m[1], 16);
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}

export default function PlanCard({
  headerImageSrc,
  headerImageAlt,
  title,
  subtitle,
  benefits,
  color,
  highlight,
  buttonColor,
}: PlanCardProps) {
  const cta = buttonColor ?? color;
  const rgb = hexToRgb(color) ?? { r: 51, g: 186, b: 240 };

  // Degradado SOLO para el cuerpo de la card
  const bodyGradient = `linear-gradient(
    180deg,
    rgba(${rgb.r},${rgb.g},${rgb.b},0.12) 0%,
    rgba(${rgb.r},${rgb.g},${rgb.b},0.06) 45%,
    rgba(255,255,255,1) 100%
  )`;

  return (
    <article className="rounded-2xl overflow-hidden bg-white shadow-md ring-1 ring-black/5 hover:shadow-lg hover:ring-black/10 transition">
      {/* Header con imagen completa */}
      <div className="relative h-46 sm:h-50 md:h-54">
        {headerImageSrc ? (
          <Image
            src={headerImageSrc}
            alt={headerImageAlt || title}
            fill
            className="object-cover"
            sizes="(min-width:1024px) 320px, 100vw"
          />
        ) : (
          <div className="h-full w-full" style={{ background: bodyGradient }} />
        )}

        {/* Veladura sutil para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/0" />

        {/* Badge */}
        {highlight && (
          <span
            className="absolute top-3 left-3 text-[11px] font-semibold text-white px-3 py-1 rounded-full"
            style={{ backgroundColor: cta }}
          >
            {highlight}
          </span>
        )}
      </div>

      {/* Cuerpo con degradado de color del plan */}
      <div className="px-6 pt-5 pb-6 text-center" style={{ background: bodyGradient }}>
        <h3 className="pt-3 text-xl font-extrabold mb-1" style={{ color }}>
          {title}
        </h3>
        <p className="pt-3 text-gray-700 text-sm mb-4">{subtitle}</p>

        <ul className="pt-3 text-sm text-gray-800 space-y-2 text-left mb-5">
          {benefits?.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <FaCheck className="mt-0.5 text-green-500 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="pt-2">
        <button
          className="w-full py-2.5 rounded-lg text-white font-semibold shadow-sm hover:opacity-95 transition"
          style={{ backgroundColor: cta }}
        >
          Elegir Plan
        </button>
        <div className="pt-3"></div>
        <button
          className="w-full mt-2 py-2.5 rounded-lg bg-white/90 backdrop-blur border border-gray-300 text-gray-700 hover:bg-white transition"
          type="button"
        >
          Ver detalles
        </button>
        </div>
      </div>
    </article>
  );
}