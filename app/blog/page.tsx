// /app/blog/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Category = "todos" | "salud" | "bienestar" | "consejos" | "novedades";

type Post = {
  title: string;
  excerpt: string;
  more: string;
  image: string;
  href: string;
  category: Exclude<Category, "todos">;
  date?: string;
  reading?: string;
};

const POSTS: Post[] = [
  {
    title: "Cuidar tu salud mental es parte de tu bienestar",
    excerpt: "Por qué es tan importante como la salud física.",
    more: "Señales de alerta, beneficios de la terapia y hábitos para tu día a día.",
    image: "/assets/blog/salud-mental/hero.jpg",
    href: "/blog/salud-mental",
    category: "bienestar",
    date: "2026-03-20",
    reading: "5 min",
  },
  {
    title: "Deshidratación: señales que tu cuerpo te envía",
    excerpt: "Dolor de cabeza, fatiga, boca seca.",
    more: "Aprendé a reconocer las señales y mantenerte hidratado todo el año.",
    image: "/assets/blog/deshidratacion/hero.jpg",
    href: "/blog/deshidratacion",
    category: "salud",
    date: "2026-03-15",
    reading: "4 min",
  },
  {
    title: "Chequeos preventivos: por qué hacerlos una vez al año",
    excerpt: "Prevenir es cuidarte.",
    more: "Qué incluye un chequeo, recomendaciones por edad y cómo agendarlos.",
    image: "/assets/blog/chequeos-preventivos/hero.jpg",
    href: "/blog/chequeos-preventivos",
    category: "salud",
    date: "2026-03-10",
    reading: "5 min",
  },
  {
    title: "Alergias en verano: recaudos para tu bienestar",
    excerpt: "Polen, sol, insectos y cloro.",
    more: "Causas comunes, síntomas y cómo prevenirlas durante el verano.",
    image: "/assets/blog/alergias-verano/hero.jpg",
    href: "/blog/alergias-verano",
    category: "salud",
    date: "2026-03-05",
    reading: "4 min",
  },
  {
    title: "Entrenar en verano: tips para cuidar tu salud",
    excerpt: "Los mejores horarios y actividades.",
    more: "Hidratación, golpe de calor y ejercicios recomendados para el verano.",
    image: "/assets/blog/entrenar-verano/hero.jpg",
    href: "/blog/entrenar-verano",
    category: "bienestar",
    date: "2026-02-28",
    reading: "4 min",
  },
  {
    title: "Descuentos en farmacias: hasta 100% con Preme",
    excerpt: "50%, 70% y hasta 100% en medicamentos.",
    more: "Cómo usar tu credencial, farmacias adheridas y diferencias por plan.",
    image: "/assets/blog/descuentos-farmacias/hero.jpg",
    href: "/blog/descuentos-farmacias",
    category: "novedades",
    date: "2026-02-20",
    reading: "3 min",
  },
  {
    title: "Rosácea: tips para cuidar tu piel",
    excerpt: "Qué es, qué la dispara y cómo controlarla.",
    more: "Rutina de skincare, protección solar y cuándo consultar al dermatólogo.",
    image: "/assets/blog/rosacea/hero.jpg",
    href: "/blog/rosacea",
    category: "salud",
    date: "2026-02-15",
    reading: "4 min",
  },
  {
    title: "Inflamación por comer en exceso",
    excerpt: "Cómo aliviar el malestar estomacal.",
    more: "Tips inmediatos, infusiones que ayudan y cuándo consultar al médico.",
    image: "/assets/blog/inflamacion-estomacal/hero.jpg",
    href: "/blog/inflamacion-estomacal",
    category: "salud",
    date: "2026-02-10",
    reading: "3 min",
  },
  {
    title: "Grasas saludables: las aliadas de tu bienestar",
    excerpt: "Las grasas buenas cuidan tu corazón y tu cerebro.",
    more: "Dónde encontrarlas y cómo sumarlas a tu semana sin complicaciones.",
    image: "/assets/blog/grasas-saludables/h1.png",
    href: "/blog/grasas-saludables",
    category: "bienestar",
    date: "2026-01-15",
    reading: "4 min",
  },
  {
    title: "Descanso reparador: dormí mejor, viví mejor",
    excerpt: "El descanso de calidad impacta en energía y ánimo.",
    more: "Rutina previa, temperatura, luz y horarios recomendados.",
    image: "/assets/blog/blog2.png",
    href: "/blog/descanso-reparador",
    category: "bienestar",
    date: "2026-01-05",
    reading: "4 min",
  },
];

// 🎨 Paletas (acordadas)
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

const CHIPS_ORDER: Category[] = ["todos", "salud", "bienestar", "consejos", "novedades"];

export default function BlogIndexPage() {
  const [activeCat, setActiveCat] = useState<Category>("todos");
  const [visible, setVisible] = useState(8);

  useEffect(() => {
    setVisible(8);
  }, [activeCat]);

  const filtered = useMemo(
    () => (activeCat === "todos" ? POSTS : POSTS.filter((p) => p.category === activeCat)),
    [activeCat]
  );

  const canLoadMore = visible < filtered.length;

  return (
    <>
      <Navbar />

{/* Hero del blog (full-bleed image) */}
<header className="relative">
  <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
    {/* Lienzo del hero */}
    <div className="relative mt-6 sm:mt-8 h-[360px] sm:h-[420px] lg:h-[520px] overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-sm">

      {/* Imagen de fondo full-bleed */}
      <Image
        src="/assets/blog/blogg1.png"
        alt="Blog PREME"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Degradado para mejorar contraste del texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D2A53]/70 via-[#0D2A53]/35 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-4 px-6 sm:px-10 py-10 lg:py-14">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 text-white px-3 py-1 text-xs font-semibold ring-1 ring-white/25">
            <span className="h-2 w-2 rounded-full bg-[#33BAF0]" /> Blog PREME
          </span>

          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-white leading-tight">
            Salud, Bienestar, Consejos y Novedades
          </h1>

          <p className="text-base sm:text-lg text-white/85 max-w-[60ch]">
            Contenidos confiables y cercanos para acompañarte todos los días:
            prevención, hábitos, guías prácticas y lo último en atención digital.
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-xl bg-[#33BAF0] text-[#0D2A53] px-5 py-2.5 text-sm font-semibold shadow-md hover:bg-[#25A6DC] transition"
            >
              Volver al inicio
            </Link>
            <a
              href="#listado"
              className="rounded-xl bg-white/90 text-[#0D2A53] px-5 py-2.5 text-sm font-semibold ring-1 ring-[#0D2A53]/10 hover:bg-white transition"
            >
              Ver artículos
            </a>
          </div>
        </div>

        {/* Columna derecha vacía para dejar respirar la imagen en desktop */}
        <div className="hidden lg:block" />
      </div>
    </div>
  </div>
</header>

      {/* Chips categorías */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mt-8 mb-6 flex justify-center gap-2 sm:gap-3 flex-wrap">
          {CHIPS_ORDER.map((cat) => {
            const active = activeCat === cat;
            const st = cat !== "todos" ? STYLES[cat] : null;
            const label =
              cat === "todos" ? "Todos" : st ? st.label : (cat.toUpperCase() as string);
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
      </div>

      {/* Listado */}
      <main id="listado" className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filtered.slice(0, visible).map((post, i) => (
            <ArticleCard key={`${post.href}-${i}`} post={post} idx={i} />
          ))}
        </div>

        {canLoadMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisible((v) => v + 8)}
              className="rounded-xl bg-[#33BAF0] text-[#0D2A53] px-6 py-3 text-sm font-semibold shadow-md hover:bg-[#25A6DC] transition"
            >
              Cargar más
            </button>
          </div>
        )}
      </main>

      {/* Footer institucional */}
      <Footer />
    </>
  );
}

function ArticleCard({ post, idx }: { post: Post; idx: number }) {
  const st = STYLES[post.category];
  return (
    <article
      className={[
        "group flex flex-col rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-sm hover:shadow-md transition-all duration-300",
        st.bg,
      ].join(" ")}
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center"
          priority={idx < 4}
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${st.badge}`}>
            {st.label}
          </span>
          {(post.date || post.reading) && (
            <span className="text-[11px] text-[#0D2A53]/60">
              {post.date &&
                new Date(post.date).toLocaleDateString("es-AR", {
                  day: "2-digit",
                  month: "short",
                })}
              {post.date && post.reading ? " · " : ""}
              {post.reading}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-[18px] font-bold text-[#0D2A53] leading-tight line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-[14px] text-[#0D2A53]/80 leading-snug line-clamp-2">
          {post.excerpt}
        </p>
        <p className="mt-1 text-[13px] text-[#0D2A53]/70 leading-snug line-clamp-2">
          {post.more}
        </p>

        <div className="mt-auto pt-5">
          <Link
            href={post.href}
            className={[
              "inline-flex h-10 items-center justify-center rounded-lg px-5 text-white text-[14px] font-semibold shadow-sm transition-all duration-200",
              st.btn,
              "hover:brightness-[1.02]",
            ].join(" ")}
            aria-label={`Leer: ${post.title}`}
          >
            Leer artículo
          </Link>
        </div>
      </div>
    </article>
  );
}