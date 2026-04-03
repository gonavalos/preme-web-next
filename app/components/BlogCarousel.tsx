// /components/BlogCarousel.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Category = "salud" | "bienestar" | "consejos" | "novedades";

type Post = {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  category: Category;
};

const posts: Post[] = [
  {
    title: "Cuidar tu salud mental es parte de tu bienestar",
    excerpt: "Por qué es tan importante como la salud física. Señales de alerta y hábitos para tu día a día.",
    image: "/assets/blog/salud-mental/hero.jpg",
    href: "/blog/salud-mental",
    category: "bienestar",
  },
  {
    title: "Deshidratación: señales que tu cuerpo te envía",
    excerpt: "Dolor de cabeza, fatiga, boca seca. Aprendé a reconocer las señales y mantenerte hidratado.",
    image: "/assets/blog/deshidratacion/hero.jpg",
    href: "/blog/deshidratacion",
    category: "salud",
  },
  {
    title: "Chequeos preventivos: hacelos una vez al año",
    excerpt: "Prevenir es cuidarte. Qué incluye un chequeo y por qué puede salvarte la vida.",
    image: "/assets/blog/chequeos-preventivos/hero.jpg",
    href: "/blog/chequeos-preventivos",
    category: "novedades",
  },
];

const BADGE: Record<Category, { bg: string; label: string }> = {
  salud: { bg: "bg-[#D94B4B]", label: "Salud" },
  bienestar: { bg: "bg-[#2E9B71]", label: "Bienestar" },
  consejos: { bg: "bg-[#DC6A2C]", label: "Consejos" },
  novedades: { bg: "bg-[#238AD4]", label: "Novedades" },
};

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
  return (
    <section className="mx-auto max-w-7xl px-4">
      {/* Header editorial — título izquierda, link derecha */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 lg:mb-10">
        <div>
          <p className="text-sm font-semibold tracking-wider uppercase text-[#33BAF0] mb-1.5">Blog Preme</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0D2A53] leading-tight">
            Salud, bienestar y más
          </h2>
        </div>
        <Link
          href="/blog"
          className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-[#33BAF0] font-semibold text-sm hover:text-[#25A6DC] transition-colors group"
        >
          Ver todas las notas
          <svg className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      {/* Grid 3 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {posts.map((post, i) => {
          const badge = BADGE[post.category];
          return (
            <Link key={i} href={post.href} className="group">
              <article className="flex flex-col h-full rounded-2xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                {/* Imagen con zoom hover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <ImgWithFallback
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={i === 0}
                  />
                  <span className={`absolute top-3 left-3 text-[11px] font-semibold text-white px-3 py-1 rounded-full shadow-sm ${badge.bg}`}>
                    {badge.label}
                  </span>
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col p-5 lg:p-6">
                  <h3 className="text-[18px] font-bold text-[#0D2A53] leading-tight group-hover:text-[#33BAF0] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-gray-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto pt-4 text-sm font-semibold text-[#33BAF0] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer más
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
