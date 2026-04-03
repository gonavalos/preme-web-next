// /components/PlanCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  ShieldCheck,
  Pill,
  Siren,
  BadgeCheck,
  Heart,
  Eye,
  Check,
  BriefcaseMedical,
  CreditCard,
  UserRound,
  Smile,
  Bone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
  featured?: boolean;
};

function hexToRgb(hex: string) {
  const m = hex.replace("#", "").match(/^([0-9a-f]{6})$/i);
  if (!m) return null;
  const int = parseInt(m[1], 16);
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}

// Keyword → icon mapping for benefits
const BENEFIT_ICON_MAP: [RegExp, LucideIcon][] = [
  [/consult/i, Stethoscope],
  [/cobertura\s*100|100\s*%/i, ShieldCheck],
  [/farmacia|medicamento/i, Pill],
  [/emergencia|urgencia|24\s*h/i, Siren],
  [/sin\s*co-?seguro|sin\s*coseguro/i, BadgeCheck],
  [/anticonceptivo|materno|parto|embarazo|ecograf/i, Heart],
  [/óptic/i, Eye],
  [/internaci/i, BriefcaseMedical],
  [/credencial|acto/i, CreditCard],
  [/recibo|sueldo/i, UserRound],
  [/psicolog|psiquiat/i, Smile],
  [/ortodoncia|prótesis|implante|odonto/i, Bone],
];

function getBenefitIcon(text: string): LucideIcon {
  for (const [pattern, icon] of BENEFIT_ICON_MAP) {
    if (pattern.test(text)) return icon;
  }
  return Check;
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
  featured,
}: PlanCardProps) {
  const cta = buttonColor ?? color;
  const rgb = hexToRgb(color) ?? { r: 51, g: 186, b: 240 };

  const bodyGradient = `linear-gradient(
    180deg,
    rgba(${rgb.r},${rgb.g},${rgb.b},0.12) 0%,
    rgba(${rgb.r},${rgb.g},${rgb.b},0.06) 45%,
    rgba(255,255,255,1) 100%
  )`;

  const hoverGlow = `0 8px 30px rgba(${rgb.r},${rgb.g},${rgb.b},0.18)`;

  return (
    <article
      className={`
        group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white
        shadow-md ring-1
        transition-all duration-300 ease-out
        hover:-translate-y-1.5 hover:shadow-xl
        ${featured
          ? "ring-2 ring-brandBlue shadow-lg scale-[1.02] xl:scale-105"
          : "ring-black/5 hover:ring-black/10"
        }
      `}
      style={{
        // @ts-expect-error CSS custom property for hover glow
        "--plan-glow": hoverGlow,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = hoverGlow;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      {featured && (
        <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-10 bg-brandBlue text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-b-lg shadow-sm">
          Recomendado
        </div>
      )}

      {/* Header */}
      <div className="relative h-40 sm:h-44 lg:h-44 xl:h-52">
        {headerImageSrc ? (
          <Image
            src={headerImageSrc}
            alt={headerImageAlt || title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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
              badge-shimmer
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

      {/* Body */}
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

        {/* Benefits list with contextual icons */}
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
          {benefits?.map((b, i) => {
            const Icon = getBenefitIcon(b);
            return (
              <li key={i} className="flex items-start gap-2">
                <Icon
                  className="mt-0.5 shrink-0 h-4 w-4"
                  style={{ color }}
                  strokeWidth={2}
                />
                <span className="leading-snug">{b}</span>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        {href ? (
          <Link
            href={href}
            className="
              mt-auto inline-flex w-full justify-center items-center
              rounded-lg text-white font-semibold shadow-sm
              hover:brightness-110 hover:shadow-md transition-all duration-200
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
              hover:brightness-110 hover:shadow-md transition-all duration-200
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
