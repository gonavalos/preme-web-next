"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export type PlanCardProps = {
  headerImageSrc?: string;
  headerImageAlt?: string;
  title: string;
  subtitle: string;
  benefits: string[];
  color: string;
  highlight?: string;
  buttonColor?: string;
  href?: string;
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
  href,
}: PlanCardProps) {
  const cta = buttonColor ?? color;
  const rgb = hexToRgb(color) ?? { r: 51, g: 186, b: 240 };

  const bodyGradient = `linear-gradient(
    180deg,
    rgba(${rgb.r},${rgb.g},${rgb.b},0.12) 0%,
    rgba(${rgb.r},${rgb.g},${rgb.b},0.06) 45%,
    rgba(255,255,255,1) 100%
  )`;

  return (
    <article className="flex flex-col h-full rounded-2xl overflow-hidden bg-white shadow-md ring-1 ring-black/5 hover:shadow-lg hover:ring-black/10 transition">
      {/* Header con altura fija para todas las cards */}
      <div className="relative h-44 sm:h-48 md:h-52">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/0" />
        {highlight && (
          <span
            className="absolute top-3 left-3 text-[11px] font-semibold text-white px-3 py-1 rounded-full"
            style={{ backgroundColor: cta }}
          >
            {highlight}
          </span>
        )}
      </div>

      {/* Cuerpo: flex-col con el CTA forzado al fondo */}
      <div
        className="flex flex-col flex-1 px-6 pt-5 pb-6 text-center"
        style={{ background: bodyGradient }}
      >
        <h3 className="pt-3 text-xl font-extrabold mb-1" style={{ color }}>
          {title}
        </h3>
        <p className="pt-3 text-gray-700 text-sm mb-4">{subtitle}</p>

        {/* Lista crece y ocupa el espacio disponible; CTA queda abajo */}
        <ul className="pt-3 text-sm text-gray-800 space-y-2 text-left mb-6 flex-1 overflow-hidden">
          {benefits?.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <FaCheck className="mt-0.5 text-green-500 shrink-0" />
              <span className="leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA siempre al final */}
        {href ? (
          <Link
            href={href}
            className="mt-auto inline-flex w-full justify-center py-2.5 rounded-lg text-white font-semibold shadow-sm hover:opacity-95 transition"
            style={{ backgroundColor: cta }}
          >
            Ver detalles
          </Link>
        ) : (
          <button
            className="mt-auto w-full py-2.5 rounded-lg text-white font-semibold shadow-sm hover:opacity-95 transition"
            style={{ backgroundColor: cta }}
            type="button"
          >
            Ver detalles
          </button>
        )}
      </div>
    </article>
  );
}