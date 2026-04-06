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
  href,
  dark,
}: PlanCardProps) {
  const cta = buttonColor ?? color;
  const isDark = dark || title.toLowerCase().includes("máximo");

  return (
    <article
      className={[
        "group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500",
        "hover:-translate-y-3 hover:shadow-[0_24px_60px_rgba(9,47,87,0.15)]",
        isDark
          ? "bg-[#092f57] text-white shadow-[0_16px_48px_rgba(9,47,87,0.25)]"
          : "bg-white shadow-[0_8px_30px_rgba(9,47,87,0.08)] ring-1 ring-black/5",
      ].join(" ")}
    >
      {/* Image header */}
      <div className="relative h-48 sm:h-52 lg:h-48 xl:h-56 overflow-hidden">
        {headerImageSrc ? (
          <Image
            src={headerImageSrc}
            alt={headerImageAlt || title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(min-width:1280px) 320px, (min-width:768px) 50vw, 100vw"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{ backgroundColor: isDark ? "#0a1e36" : `${color}15` }}
          />
        )}
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-b from-transparent via-transparent to-[#092f57]"
              : "bg-gradient-to-b from-black/5 to-black/0"
          }`}
        />

        {highlight && (
          <span
            className="absolute top-3 left-3 text-[10px] xl:text-[11px] font-semibold text-white px-3 py-1 rounded-full shadow-sm"
            style={{ backgroundColor: cta }}
          >
            {highlight}
          </span>
        )}

        {/* Decorative accent on dark card — contained within overflow-hidden */}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6 text-center">
        <h3
          className={`text-xl sm:text-2xl font-extrabold mb-2 ${
            isDark ? "text-white" : ""
          }`}
          style={isDark ? undefined : { color }}
        >
          {title}
        </h3>

        <p
          className={`text-sm mb-4 ${
            isDark ? "text-white/70" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>

        <ul
          className={`text-sm text-left space-y-2 mb-6 flex-1 ${
            isDark ? "text-white/85" : "text-gray-700"
          }`}
        >
          {benefits?.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              {isDark ? (
                <span className="mt-0.5 shrink-0 text-xs" style={{ color }}>★</span>
              ) : (
                <FaCheck className="mt-0.5 text-emerald-500 shrink-0 text-xs" />
              )}
              <span className="leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        {href ? (
          <Link
            href={href}
            className={`mt-auto w-full py-3 rounded-full font-bold text-sm text-center transition-all duration-300 ${
              isDark
                ? "bg-white text-[#092f57] hover:opacity-90"
                : "text-white hover:scale-[1.02] hover:shadow-md"
            }`}
            style={isDark ? undefined : { backgroundColor: cta }}
          >
            Conocer Plan
          </Link>
        ) : (
          <button
            type="button"
            className={`mt-auto w-full py-3 rounded-full font-bold text-sm transition-all duration-300 ${
              isDark
                ? "bg-white text-[#092f57] hover:opacity-90"
                : "text-white hover:scale-[1.02] hover:shadow-md"
            }`}
            style={isDark ? undefined : { backgroundColor: cta }}
          >
            Conocer Plan
          </button>
        )}
      </div>
    </article>
  );
}
