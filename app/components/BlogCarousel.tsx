// /components/BlogCarousel.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Category = "todos" | "salud" | "bienestar" | "consejos" | "novedades";

type Slide = {
  title: string;
  excerpt: string;
  more: string;
  image: string;
  href: string;
  category: Exclude<Category, "todos">;
};

const slides: Slide[] = [
  {
    title: "Grasas saludables",
    excerpt: "Las grasas buenas cuidan tu corazón y tu cerebro.",
    more: "Dónde encontrarlas y cómo sumarlas a tu semana sin complicaciones.",
    image: "/assets/blog/grasas-saludables/h1.png",
    href: "/blog/grasas-saludables",
    category: "bienestar",
  },
  {
    title: "Cerebro joven y ágil",
    excerpt: "Hábitos simples que mantienen tu mente activa.",
    more: "Ejercicios, descanso y alimentación que favorecen la memoria.",
    image: "/assets/blog/cerebro-joven-agil/1.png",
    href: "/blog/cerebro-joven",
    category: "consejos",
  },
  {
    title: "Consejos para tu descanso",
    excerpt: "Dormir mejor impacta en tu energía y tu ánimo.",
    more: "Rutinas previas, luz, temperatura y horarios recomendados.",
    image: "/assets/blog/blog2.png",
    href: "/blog/descanso-saludable",
    category: "consejos",
  },
  {
    title: "Novedades en atención digital",
    excerpt: "Turnos online, credencial digital y seguimiento.",
    more: "Tecnología para simplificar tu experiencia en salud.",
    image: "/assets/blog/blog1.png",
    href: "/blog/atencion-digital",
    category: "novedades",
  },
];

// 🎨 ESTILOS
const STYLES = {
  salud: {
    bg: "bg-gradient-to-b from-[#FFE1E1] via-[#FFF0F0] to-[#FFF7F7]",
    badge: "bg-[#D94B4B] text-white",
    btn: "bg-gradient-to-b from-[#F07171] to-[#D94B4B]",
    label: "SALUD",
    glow: "shadow-[0_0_0_3px_rgba(217,75,75,0.16)]",
  },
  bienestar: {
    bg: "bg-gradient-to-b from-[#D9F2E2] via-[#EAF8EE] to-[#F5FBF8]",
    badge: "bg-[#2E9B71] text-white",
    btn: "bg-gradient-to-b from-[#3CB989] to-[#2E9B71]",
    label: "BIENESTAR",
    glow: "shadow-[0_0_0_3px_rgba(46,155,113,0.18)]",
  },
  consejos: {
    bg: "bg-gradient-to-b from-[#FFE5D0] via-[#FFF2E5] to-[#FFF9F5]",
    badge: "bg-[#DC6A2C] text-white",
    btn: "bg-gradient-to-b from-[#F28B50] to-[#DC6A2C]",
    label: "CONSEJOS",
    glow: "shadow-[0_0_0_3px_rgba(220,106,44,0.18)]",
  },
  novedades: {
    bg: "bg-gradient-to-b from-[#D6E8F3] via-[#E6F2FB] to-[#F8FBFD]",
    badge: "bg-[#238AD4] text-white",
    btn: "bg-gradient-to-b from-[#4A9FE5] to-[#238AD4]",
    label: "NOVEDADES",
    glow: "shadow-[0_0_0_3px_rgba(35,138,212,0.18)]",
  },
} as const;

const BOTTOM_BTN: Record<Category, string> = {
  todos:
    "bg-gradient-to-b from-[#4A9FE5] to-[#238AD4] hover:from-[#3E95E8] hover:to-[#1F7AC0]",
  salud: STYLES.salud.btn,
  bienestar: STYLES.bienestar.btn,
  consejos: STYLES.consejos.btn,
  novedades: STYLES.novedades.btn,
};

// ✅ helper: Image con fallback local
function ImgWithFallback(props: React.ComponentProps<typeof Image>) {
  const [src, setSrc] = useState(props.src);
  return (
    <Image
      {...props}
      src={src}
      onError={() => setSrc("/assets/blog/fallback.png")}
    />
  );
}

export default function BlogCarousel() {
  const [activeCat, setActiveCat] = useState<Category>("todos");
  const [mobileCount, setMobileCount] = useState(1);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMobileCount(1), [activeCat]);

  const filteredSlides =
    activeCat === "todos" ? slides : slides.filter((s) => s.category === activeCat);

  const canLoadMore = mobileCount < filteredSlides.length;

  // 📌 Flechas: desplazan exactamente 1 card
  const handleArrow = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const styles = getComputedStyle(el);
    const gapPx = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const firstCard = el.querySelector<HTMLDivElement>("[data-card]");
    const delta = firstCard
      ? Math.round(firstCard.getBoundingClientRect().width + gapPx)
      : Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" });
  };

  const Card = ({ post, i }: { post: Slide; i: number }) => {
    const style = STYLES[post.category];
    return (
      <article
        className={[
          "flex flex-col rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm hover:shadow-md transition-all duration-300",
          "w-full shrink-0",
          style.bg,
        ].join(" ")}
      >
        <div className="relative aspect-[16/10] w-full">
          <ImgWithFallback
            src={post.image}
            alt={post.title}
            fill
            className="object-cover object-bottom"
            sizes="(max-width: 768px) 100vw, 330px"
            priority={i === 0}
          />
        </div>

        <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
          <span
            className={`self-start text-[11px] font-semibold px-3 py-1 rounded-full ${style.badge}`}
          >
            {style.label}
          </span>

          <h3 className="mt-3 text-[18px] font-bold text-[#0D2A53] leading-tight">
            {post.title}
          </h3>

          <p className="mt-2 text-[14px] text-gray-700 leading-snug line-clamp-2">
            {post.excerpt}
          </p>
          <p className="mt-1 text-[13px] text-gray-600 leading-snug line-clamp-2">
            {post.more}
          </p>

          <div className="mt-auto pt-5 flex justify-center">
            <Link
              href={post.href}
              aria-label={`Leer más: ${post.title}`}
              className={`inline-flex h-10 items-center justify-center rounded-lg px-5 text-white text-[14px] font-semibold shadow-sm hover:opacity-95 transition-all duration-200 ${style.btn}`}
            >
              Ver más
            </Link>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-4">
      {/* Encabezado */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-[#0D2A53]">
          SALUD · BIENESTAR · CONSEJOS · NOVEDADES
        </h2>
        <div className="mx-auto mt-2 h-1 w-24 bg-[#33BAF0]" />
      </div>

      {/* Chips */}
      <div className="mb-8 flex justify-center gap-2 sm:gap-3 flex-wrap">
        {(["todos", "salud", "bienestar", "consejos", "novedades"] as Category[]).map((cat) => {
          const active = activeCat === cat;
          const st = cat !== "todos" ? STYLES[cat] : null;
          const label = cat === "todos" ? "Todos" : st!.label;
          const btnColor =
            cat === "todos"
              ? "bg-gradient-to-b from-[#4A9FE5] to-[#238AD4]"
              : st!.btn;
          const glow =
            cat === "todos"
              ? "shadow-[0_0_0_3px_rgba(35,138,212,0.18)]"
              : st!.glow;

          return (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={[
                "rounded-full px-4 py-1.5 text-sm font-semibold ring-1 transition-all duration-200 will-change-transform",
                active
                  ? `${btnColor} text-white shadow-md ${glow} scale-[1.04]`
                  : "bg-white text-[#0D2A53] ring-[#0D2A53]/20 hover:bg-gray-50",
              ].join(" ")}
              aria-pressed={active}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex flex-col gap-6">
          {filteredSlides.slice(0, mobileCount).map((post, i) => (
            <Card key={i} post={post} i={i} />
          ))}
        </div>
        {canLoadMore && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() =>
                setMobileCount((n) => Math.min(n + 1, filteredSlides.length))
              }
              className="rounded-lg bg-[#33BAF0] px-6 py-3 text-white hover:opacity-90 transition"
            >
              Ver más publicaciones
            </button>
          </div>
        )}
      </div>

      {/* Desktop / Tablet */}
      <div className="hidden md:grid gap-6 xl:grid-cols-5">
        <div className="relative xl:col-span-4">
          <div
            ref={scrollerRef}
            className="
              flex overflow-x-auto scroll-smooth py-2 px-1
              snap-x snap-mandatory
              gap-3 md:gap-3 lg:gap-3 xl:gap-5
            "
            style={{ scrollPadding: "1rem" }}
          >
            {filteredSlides.map((post, i) => (
    <div
      key={i}
      data-card
      className={[
        "shrink-0 snap-start transition-transform",
        // En md y lg: 2 visibles cómodas
        "md:flex-[0_0_calc(50%-0.75rem)]",
        // En xl: 3 visibles exactas, con margen suave entre ellas
        "xl:flex-[0_0_calc(33.333%-1rem)]",
      ].join(" ")}
    >
                <Card post={post} i={i} />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            aria-label="Anterior"
            onClick={() => handleArrow("left")}
            className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 md:flex items-center justify-center rounded-lg bg-white/90 ring-1 ring-black/10 hover:bg-white shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button
            aria-label="Siguiente"
            onClick={() => handleArrow("right")}
            className="absolute right-0 top-1/2 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 md:flex items-center justify-center rounded-lg bg-white/90 ring-1 ring-black/10 hover:bg-white shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <aside className="hidden xl:flex items-center justify-end pr-6">
          <Image
            src="/logoPreme5.png"
            alt="PREME"
            width={260}
            height={260}
            className="opacity-[0.85] select-none"
          />
        </aside>
      </div>

      {/* CTA inferior */}
      <div className="mt-10 py-4 text-center">
        <Link
          href="/blog"
          className={[
            "inline-flex items-center justify-center rounded-lg px-6 py-3 text-white transition font-semibold",
            BOTTOM_BTN[activeCat],
          ].join(" ")}
        >
          Ir al blog
        </Link>
      </div>
    </section>
  );
}