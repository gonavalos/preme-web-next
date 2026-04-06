// /app/blog/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFab from "../components/WhatsAppFab";
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

const CAT_BADGE_BG: Record<string, string> = {
  salud: "bg-[#D94B4B]/10 text-[#D94B4B]",
  bienestar: "bg-[#2E9B71]/10 text-[#2E9B71]",
  consejos: "bg-[#DC6A2C]/10 text-[#DC6A2C]",
  novedades: "bg-[#238AD4]/10 text-[#238AD4]",
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

      {/* ─── Hero — misma estructura que el resto de la web ─── */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <Image
          src="/assets/blog/blogg1.png"
          alt="Blog PREME"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 sm:px-8 pb-14 md:pb-20">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 text-[#33BAF0] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#33BAF0]" />
              Editorial PREME
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">
              Viví con Bienestar
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-lg">
              Prevención, hábitos y guías prácticas con el respaldo de nuestros
              profesionales. Contenido para acompañarte todos los días.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Category Filter — sobre fondo suave ─── */}
      <section className="bg-[#f5f8fa]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {CHIPS_ORDER.map((cat) => {
              const active = activeCat === cat;
              const label = cat === "todos" ? "Todas" : CAT_LABEL[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={[
                    "px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200",
                    active
                      ? CHIP_ACTIVE[cat]
                      : "bg-white text-[#092f57]/60 ring-1 ring-[#092f57]/8 hover:ring-[#092f57]/20",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Featured + Sidebar — fondo blanco ─── */}
      {featured && (
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-12 gap-6 lg:gap-10">
              {/* Featured */}
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
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${CAT_BADGE_BG[featured.category]} backdrop-blur-sm bg-white/90`}
                    >
                      <span className={CAT_COLOR[featured.category]}>
                        {CAT_LABEL[featured.category]}
                      </span>
                    </span>
                    {featured.reading && (
                      <span className="text-white/80 text-xs font-medium">
                        {featured.reading} de lectura
                      </span>
                    )}
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092f57] mb-2 leading-snug group-hover:text-[#33BAF0] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed line-clamp-2 max-w-2xl text-sm sm:text-base">
                  {featured.excerpt}
                </p>
                {featured.author && (
                  <p className="mt-3 text-xs font-semibold text-[#092f57]/40 uppercase tracking-wider">
                    {featured.author}
                  </p>
                )}
              </Link>

              {/* Sidebar */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:gap-8">
                {sidebar.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="group flex flex-col"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width:1024px) 33vw, 100vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5 ${CAT_COLOR[post.category]}`}
                    >
                      {CAT_LABEL[post.category]}
                    </span>
                    <h3 className="text-lg font-bold text-[#092f57] leading-snug group-hover:text-[#33BAF0] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Article Grid — fondo suave, misma paleta que planes ─── */}
      {grid.length > 0 && (
        <section id="listado" className="py-14 md:py-20 bg-[#f5f8fa]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092f57] mb-3 tracking-tight">
                Más artículos
              </h2>
              <p className="text-gray-500 text-base sm:text-lg">
                Explorá todas nuestras notas sobre salud y bienestar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {grid.map((post, i) => (
                <Link
                  key={`${post.href}-${i}`}
                  href={post.href}
                  className="group bg-white rounded-2xl overflow-hidden ring-1 ring-black/5 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-[0.15em] ${CAT_COLOR[post.category]}`}
                      >
                        {CAT_LABEL[post.category]}
                      </span>
                      {post.date && (
                        <>
                          <span className="text-gray-300">·</span>
                          <span className="text-xs text-gray-400">
                            {new Date(post.date).toLocaleDateString("es-AR", {
                              day: "numeric",
                              month: "short",
                            })}
                          </span>
                        </>
                      )}
                      {post.reading && (
                        <>
                          <span className="text-gray-300">·</span>
                          <span className="text-xs text-gray-400">
                            {post.reading}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-[#092f57] leading-snug mb-2 group-hover:text-[#33BAF0] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    {post.author && (
                      <p className="mt-3 text-xs font-medium text-gray-400">
                        {post.author}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Load more */}
          {canLoadMore && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisible((v) => v + 9)}
                className="inline-flex items-center gap-2 bg-[#092f57] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#0a3d6e] transition-colors text-sm"
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
        </section>
      )}

      {/* ─── Newsletter CTA — misma estructura que PromoBanner ─── */}
      <section className="py-12 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center bg-[#051b33]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#33BAF0]/15 blur-[100px] rounded-full -translate-y-1/3 translate-x-1/4" />
          </div>
          <div className="relative z-10 flex-1 px-8 sm:px-12 md:px-16 py-12 md:py-16">
            <span className="text-[#33BAF0] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Newsletter
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              Bienestar en tu{" "}
              <span className="text-[#33BAF0]">bandeja de entrada</span>
            </h2>
            <p className="text-white/60 max-w-md text-base leading-relaxed">
              Recibí nuestra selección mensual de artículos, guías prácticas y
              consejos médicos exclusivos.
            </p>
          </div>
          <div className="relative z-10 w-full md:w-auto md:min-w-[320px] px-8 sm:px-12 md:pr-16 pb-12 md:py-16">
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#33BAF0] transition-all text-sm"
              />
              <button className="w-full bg-[#33BAF0] text-white font-bold py-3.5 rounded-xl hover:bg-[#1a9fd8] transition-colors text-sm">
                Suscribirme
              </button>
              <p className="text-white/25 text-[10px] text-center">
                Al suscribirte, aceptás nuestra Política de Privacidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFab />
      <Footer />
    </>
  );
}
