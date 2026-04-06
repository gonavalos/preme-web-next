// /components/PlanCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheck, FaWhatsapp, FaChevronDown } from "react-icons/fa";

const WA_LINK = "https://wa.me/5493512006002?text=Hola%2C%20quiero%20asesoramiento%20sobre%20el%20";

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
  dark?: boolean;
};

export default function PlanCard({
  headerImageSrc,
  headerImageAlt,
  title,
  subtitle,
  benefits,
  color,
  highlight,
  buttonColor,
  dark,
}: PlanCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cta = buttonColor ?? color;
  const isDark = dark || title.toLowerCase().includes("máximo");

  const visibleBenefits = benefits?.slice(0, 3) ?? [];
  const hiddenBenefits = benefits?.slice(3) ?? [];
  const hasMore = hiddenBenefits.length > 0;

  return (
    <article
      className={[
        "group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300",
        "hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(9,47,87,0.12)]",
        isDark
          ? "bg-[#092f57] text-white shadow-[0_12px_40px_rgba(9,47,87,0.2)]"
          : "bg-white shadow-[0_4px_24px_rgba(9,47,87,0.06)] ring-1 ring-black/5",
      ].join(" ")}
    >
      {/* Image header */}
      <div className="relative h-44 sm:h-48 overflow-hidden">
        {headerImageSrc ? (
          <Image
            src={headerImageSrc}
            alt={headerImageAlt || title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width:1280px) 320px, (min-width:768px) 50vw, 100vw"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{ backgroundColor: isDark ? "#0a1e36" : `${color}15` }}
          />
        )}
        {/* Overlay suave sin gradient */}
        <div className={`absolute inset-0 ${isDark ? "bg-black/35" : "bg-black/5"}`} />

        {highlight && (
          <span
            className="absolute top-3 left-3 text-[10px] xl:text-[11px] font-semibold text-white px-3 py-1 rounded-full shadow-sm"
            style={{ backgroundColor: cta }}
          >
            {highlight}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
        <h3
          className={`text-xl font-extrabold mb-1 ${isDark ? "text-white" : ""}`}
          style={isDark ? undefined : { color }}
        >
          {title}
        </h3>

        <p className={`text-sm mb-5 ${isDark ? "text-white/60" : "text-gray-500"}`}>
          {subtitle}
        </p>

        {/* Top 3 benefits — always visible */}
        <ul className={`text-sm space-y-2.5 ${isDark ? "text-white/85" : "text-gray-700"}`}>
          {visibleBenefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <FaCheck
                className={`mt-0.5 shrink-0 text-xs ${isDark ? "text-[#33BAF0]" : "text-emerald-500"}`}
              />
              <span className="leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        {/* Expanded benefits — accordion */}
        {hasMore && (
          <>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                expanded ? "max-h-[500px] opacity-100 mt-2.5" : "max-h-0 opacity-0"
              }`}
            >
              <ul className={`text-sm space-y-2.5 ${isDark ? "text-white/85" : "text-gray-700"}`}>
                {hiddenBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <FaCheck
                      className={`mt-0.5 shrink-0 text-xs ${isDark ? "text-[#33BAF0]" : "text-emerald-500"}`}
                    />
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className={`mt-3 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 ${
                isDark
                  ? "text-[#33BAF0] hover:text-white"
                  : "text-[#33BAF0] hover:text-[#092f57]"
              }`}
            >
              <FaChevronDown
                className={`text-[10px] transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
              {expanded ? "Ver menos" : `Ver ${hiddenBenefits.length} beneficios más`}
            </button>
          </>
        )}

        {/* Spacer */}
        <div className="flex-1 min-h-4" />

        {/* CTA */}
        <a
          href={`${WA_LINK}${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 w-full py-3 rounded-xl font-bold text-sm text-center transition-all duration-200 flex items-center justify-center gap-2 ${
            isDark
              ? "bg-[#25D366] text-white hover:bg-[#20bd5a]"
              : "bg-[#092f57] text-white hover:bg-[#0a3d6e]"
          }`}
        >
          <FaWhatsapp className="text-base" />
          Quiero asesoramiento
        </a>
      </div>
    </article>
  );
}
