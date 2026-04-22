import { ReactNode } from "react";

type Props = {
  kicker: string;
  title: string;
  titleItalic?: string; // palabra/frase en italic accent
  description?: string;
  align?: "left" | "center" | "split";
  children?: ReactNode; // alternative title content (for multi-line)
};

/**
 * Jerarquía editorial consistente:
 *   ━━ KICKER
 *   Título grande con *accent italic*
 *   Descripción secundaria
 */
export default function SectionHeader({
  kicker,
  title,
  titleItalic,
  description,
  align = "left",
  children,
}: Props) {
  const isCenter = align === "center";
  const isSplit = align === "split";

  const kickerEl = (
    <div
      className={`inline-flex items-center gap-2.5 mb-4 ${
        isCenter ? "justify-center" : ""
      }`}
    >
      <span className="w-10 h-px bg-[#33BAF0]" />
      <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#33BAF0]">
        {kicker}
      </span>
    </div>
  );

  const titleEl = (
    <h2
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#092f57] leading-[0.98] tracking-tight text-balance ${
        isCenter ? "text-center" : ""
      }`}
    >
      {children ?? (
        <>
          {title}
          {titleItalic && (
            <>
              {" "}
              <em className="font-medium italic text-[#33BAF0] [font-family:Georgia,serif]">
                {titleItalic}
              </em>
            </>
          )}
        </>
      )}
    </h2>
  );

  const descEl = description && (
    <p
      className={`text-base sm:text-[17px] text-gray-500 leading-relaxed text-pretty ${
        isCenter ? "text-center max-w-2xl mx-auto" : ""
      }`}
    >
      {description}
    </p>
  );

  if (isSplit) {
    return (
      <div className="grid gap-8 md:gap-10 items-end mb-10 md:mb-14 md:grid-cols-[1.5fr_1fr]">
        <div>
          {kickerEl}
          {titleEl}
        </div>
        {descEl}
      </div>
    );
  }

  return (
    <div className={`mb-10 md:mb-14 ${isCenter ? "text-center" : ""}`}>
      {kickerEl}
      {titleEl}
      {descEl && <div className="mt-5">{descEl}</div>}
    </div>
  );
}
