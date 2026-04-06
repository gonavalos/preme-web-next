// /app/blog/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { articles } from "../../data/blog-articles";

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
  author?: string;
};

const POSTS: Post[] = [...articles]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((a) => ({
    title: a.title,
    excerpt: a.excerpt,
    more: a.more,
    image: a.image,
    href: `/blog/${a.slug}`,
    category: a.category,
    date: a.date,
    reading: a.reading,
    author: a.author,
  }));

const CAT_LABEL: Record<string, string> = {
  salud: "Salud",
  bienestar: "Bienestar",
  consejos: "Consejos",
  novedades: "Novedades",
};

const CAT_COLOR: Record<string, string> = {
  salud: "text-[#D94B4B]",
  bienestar: "text-[#2E9B71]",
  consejos: "text-[#DC6A2C]",
  novedades: "text-[#238AD4]",
};

const CHIP_ACTIVE: Record<string, string> = {
  todos: "bg-[#092f57] text-white",
  salud: "bg-[#D94B4B] text-white",
  bienestar: "bg-[#2E9B71] text-white",
  consejos: "bg-[#DC6A2C] text-white",
  novedades: "bg-[#238AD4] text-white",
};

const CHIPS_ORDER: Category[] = [
  "todos",
  "salud",
  "bienestar",
  "consejos",
  "novedades",
];

export default function BlogIndexPage() {
  const [activeCat, setActiveCat] = useState<Category>("todos");
  const [visible, setVisible] = useState(9);

  useEffect(() => setVisible(9), [activeCat]);

  const filtered = useMemo(
    () =>
      activeCat === "todos"
        ? POSTS
        : POSTS.filter((p) => p.category === activeCat),
    [activeCat]
  );

  const featured = filtered[0];
  const sidebar = filtered.slice(1, 3);
  const grid = filtered.slice(3, visible);
  const canLoadMore = visible < filtered.length;

  return (
    <>
      <Navbar />

      <main className="pt-8 pb-24">
        {/* ─── Editorial Header ─── */}
        <header className="max-w-7xl mx-auto px-6 sm:px-8 mb-10">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#092f57]/50 mb-6 font-semibold">
            <Link href="/" className="hover:text-[#092f57] transition-colors">
              Inicio
            </Link>
            <span className="text-[10px]">/</span>
            <span className="text-[#092f57]/80">Editorial</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#092f57] tracking-tight leading-[0.95] mb-5">
              Viví con
              <br />
              <span className="text-[#33BAF0]">Bienestar</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#092f57]/60 leading-relaxed font-light max-w-xl">
              Contenido especializado para tu salud y bienestar. Prevención,
              hábitos y guías prácticas con el respaldo de nuestros
              profesionales.
            </p>
          </div>
        </header>

        {/* ─── Category Filter ─── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-14 overflow-x-auto">
          <div className="flex items-center gap-3 border-b border-[#092f57]/8 pb-4">
            {CHIPS_ORDER.map((cat) => {
              const active = activeCat === cat;
              const label = cat === "todos" ? "Todas" : CAT_LABEL[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={[
                    "px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
                    active
                      ? CHIP_ACTIVE[cat]
                      : "text-[#092f57]/60 hover:bg-[#092f57]/5",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </section>

        {/* ─── Featured Article + Sidebar ─── */}
        {featured && (
          <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
            <div className="grid grid-cols-12 gap-8">
              {/* Large Featured */}
              <Link
                href={featured.href}
                className="col-span-12 lg:col-span-8 group"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-5">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(min-width:1024px) 66vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.15em] ${CAT_COLOR[featured.category]}`}
                    >
                      {CAT_LABEL[featured.category]}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  {featured.reading && (
                    <span className="text-xs text-[#092f57]/45 font-medium">
                      {featured.reading} de lectura
                    </span>
                  )}
                  {featured.date && (
                    <>
                      <span className="text-[#092f57]/20">·</span>
                      <span className="text-xs text-[#092f57]/45 font-medium">
                        {new Date(featured.date).toLocaleDateString("es-AR", {
                          day: "numeric",
                          month: "long",
                        })}
                      </span>
                    </>
                  )}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#092f57] mb-3 leading-snug group-hover:text-[#33BAF0] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[#092f57]/60 leading-relaxed line-clamp-2 max-w-2xl">
                  {featured.excerpt}. {featured.more}
                </p>
                {featured.author && (
                  <p className="mt-4 text-xs font-semibold text-[#092f57]/50">
                    Por {featured.author}
                  </p>
                )}
              </Link>

              {/* Sidebar Articles */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
                {sidebar.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4 h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width:1024px) 33vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span
                          className={`text-[9px] font-bold uppercase tracking-[0.15em] ${CAT_COLOR[post.category]}`}
                        >
                          {CAT_LABEL[post.category]}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#092f57] leading-snug group-hover:text-[#33BAF0] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#092f57]/50 line-clamp-2">
                      {post.excerpt}
                    </p>
                    {post.author && (
                      <p className="mt-2 text-xs font-semibold text-[#092f57]/40">
                        Por {post.author}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── Article Grid ─── */}
        {grid.length > 0 && (
          <section
            id="listado"
            className="max-w-7xl mx-auto px-6 sm:px-8 mb-20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {grid.map((post, i) => (
                <article key={`${post.href}-${i}`} className="group">
                  <Link href={post.href}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-gray-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      />
                    </div>
                    <span
                      className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2.5 block ${CAT_COLOR[post.category]}`}
                    >
                      {CAT_LABEL[post.category]}
                    </span>
                    <h3 className="text-xl font-bold text-[#092f57] mb-2 leading-snug group-hover:text-[#33BAF0] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#092f57]/55 leading-relaxed line-clamp-3 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-[#092f57]/40 font-medium">
                      {post.author && <span>Por {post.author}</span>}
                      {post.reading && (
                        <>
                          <span className="text-[#092f57]/15">·</span>
                          <span>{post.reading}</span>
                        </>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ─── Load More ─── */}
        {canLoadMore && (
          <div className="flex justify-center mb-24">
            <button
              onClick={() => setVisible((v) => v + 9)}
              className="px-10 py-4 rounded-full bg-[#092f57]/5 text-[#092f57] font-bold hover:bg-[#092f57]/10 transition-all flex items-center gap-2"
            >
              Cargar más artículos
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* ─── Newsletter CTA ─── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="bg-[#092f57] rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-16 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#33BAF0] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#33BAF0] blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4" />
            </div>
            <div className="relative z-10 flex-1">
              <span className="text-[#33BAF0] text-[10px] font-black uppercase tracking-[0.25em] mb-4 block">
                Newsletter PREME
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Bienestar en tu bandeja de entrada.
              </h2>
              <p className="text-white/60 text-base sm:text-lg max-w-md">
                Recibí nuestra selección mensual de artículos, guías prácticas y
                consejos médicos.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto md:min-w-[340px]">
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full bg-white/10 border border-white/15 rounded-full px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:bg-white/15 transition-all text-sm"
                />
                <button className="w-full bg-[#33BAF0] text-[#092f57] font-bold py-4 rounded-full hover:bg-[#5dc9f5] transition-all text-sm">
                  Suscribirme
                </button>
                <p className="text-white/30 text-[10px] text-center px-4">
                  Al suscribirte, aceptás nuestra Política de Privacidad.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
