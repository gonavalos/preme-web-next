// /components/PlanCard.tsx
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
  color: string;        // hex #33BAF0
  highlight?: string;   // chip del header
  buttonColor?: string; // opcional, sino usa "color"
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
    <article
      className="
        flex flex-col h-full rounded-2xl overflow-hidden bg-white
        shadow-md ring-1 ring-black/5
        hover:shadow-lg hover:ring-black/10 transition
      "
    >
      {/* Header — compactado en lg (iPad), grande en xl */}
      <div className="relative h-40 sm:h-44 lg:h-44 xl:h-52">
        {headerImageSrc ? (
          <Image
            src={headerImageSrc}
            alt={headerImageAlt || title}
            fill
            className="object-cover"
            sizes="(min-width:1280px) 320px, 100vw"
            priority={false}
          />
        ) : (
          <div className="h-full w-full" style={{ background: bodyGradient }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/0" />

        {highlight && (
          <span
            className="
              absolute top-3 left-3
              text-[10px] xl:text-[11px]
              font-semibold text-white
              px-2.5 py-1 rounded-full
            "
            style={{ backgroundColor: cta }}
          >
            {highlight}
          </span>
        )}
      </div>

      {/* Body — menos padding y tipografías más contenidas en lg */}
      <div
        className="
          flex flex-col flex-1
          px-5 pt-4 pb-5
          xl:px-6 xl:pt-5 xl:pb-6
          text-center
        "
        style={{ background: bodyGradient }}
      >
        <h3
          className="
            pt-2
            text-lg sm:text-xl lg:text-xl xl:text-2xl
            font-extrabold mb-1
          "
          style={{ color }}
        >
          {title}
        </h3>

        <p
          className="
            pt-2
            text-[13px] sm:text-sm lg:text-sm xl:text-base
            text-gray-700 mb-3 lg:mb-3 xl:mb-4
          "
        >
          {subtitle}
        </p>

        {/* Lista — compactada en lg */}
        <ul
          className="
            pt-2
            text-[13px] sm:text-sm lg:text-[13.5px] xl:text-sm
            text-gray-800
            space-y-2 lg:space-y-1.5
            text-left mb-5 lg:mb-5 xl:mb-6
            flex-1 overflow-hidden
          "
        >
          {benefits?.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <FaCheck className="mt-0.5 text-green-500 shrink-0" />
              <span className="leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA — misma altura/estética, más corto en lg por contención de ancho global */}
        {href ? (
          <Link
            href={href}
            className="
              mt-auto inline-flex w-full justify-center
              rounded-lg text-white font-semibold shadow-sm
              hover:opacity-95 transition
              h-10 lg:h-10 xl:h-11
              text-[14px] xl:text-[15px]
            "
            style={{ backgroundColor: cta }}
          >
            Ver detalles
          </Link>
        ) : (
          <button
            type="button"
            className="
              mt-auto w-full
              rounded-lg text-white font-semibold shadow-sm
              hover:opacity-95 transition
              h-10 lg:h-10 xl:h-11
              text-[14px] xl:text-[15px]
            "
            style={{ backgroundColor: cta }}
          >
            Ver detalles
          </button>
        )}
      </div>
    </article>
  );
}