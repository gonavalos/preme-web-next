import { ReactNode } from "react";

type Props = {
  kicker: string;
  title: string;
  titleItalic?: string;
  description?: string;
  align?: "left" | "center" | "split";
  children?: ReactNode;
};

/**
 * Jerarquía editorial consistente:
 *   ━━ KICKER
 *   Título con *accent italic*
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
      className={`inline-flex items-center gap-2.5 mb-3 ${
        isCenter ? "justify-center" : ""
      }`}
    >
      <span className="w-8 h-px bg-[#33BAF0]" />
      <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#33BAF0]">
        {kicker}
      </span>
    </div>
  );

  const titleEl = (
    <h2
      className={`font-extrabold text-[#092f57] leading-[1.05] tracking-tight text-balance ${
        isCenter
          ? "text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-center"
          : "text-2xl sm:text-3xl md:text-4xl"
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
      className={`text-sm sm:text-base text-gray-500 leading-relaxed text-pretty ${
        isCenter ? "text-center max-w-2xl mx-auto" : "max-w-xl"
      }`}
    >
      {description}
    </p>
  );

  if (isSplit) {
    return (
      <div className="grid gap-4 md:gap-10 items-baseline mb-10 md:mb-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          {kickerEl}
          {titleEl}
        </div>
        {descEl}
      </div>
    );
  }

  return (
    <div className={`mb-10 md:mb-12 ${isCenter ? "text-center" : ""}`}>
      {kickerEl}
      {titleEl}
      {descEl && <div className="mt-3">{descEl}</div>}
    </div>
  );
}
