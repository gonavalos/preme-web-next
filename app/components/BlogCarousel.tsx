// /components/BlogCarousel.tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = { title: string; excerpt: string; image: string; href: string };

const slides: Slide[] = [
  { title: "Tecnología revoluciona las cirugías", excerpt: "Innovación en quirófano para mejorar resultados y acortar recuperaciones.", image: "/assets/blog/blog1.png", href: "/blog/tecnologia-cirugias" },
  { title: "Nuevo centro diagnóstico", excerpt: "Equipamiento de última generación para estudios rápidos y precisos.", image: "/assets/blog/blog2.png", href: "/blog/centro-diagnostico" },
  { title: "Donaciones de órganos", excerpt: "Cómo ser donante y por qué tu decisión puede salvar vidas.", image: "/assets/blog/blog3.png", href: "/blog/donaciones-organos" },
  { title: "Nueva App", excerpt: "Cartilla, turnos y credencial al instante.", image: "/assets/blog/blog2.png", href: "/blog/nueva-app" },
  { title: "Nueva Web", excerpt: "Mejor performance y SEO con Next.js.", image: "/assets/blog/blog1.png", href: "/blog/nueva-web" },
];

export default function BlogCarousel() {
  // Desktop scroller
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollByCards = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" });
  };

  // Mobile "ver más"
  const [mobileCount, setMobileCount] = useState(1);
  const canLoadMore = mobileCount < slides.length;

  const Card = ({ post, i }: { post: Slide; i: number }) => (
    <article
      className="rounded-2xl bg-white ring-1 ring-black/10 hover:ring-black/15 transition flex flex-col h-[400px] md:h-[360px] w-full md:w-[320px] shrink-0"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 320px"
          priority={i === 0}
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
        <h3 className="text-[17px] font-bold text-[#0D2A53]">{post.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-gray-600">{post.excerpt}</p>

        <div className="mt-auto pt-5 flex justify-center">
          <Link
            href={post.href}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[#33BAF0] px-4 text-white hover:opacity-95 transition"
          >
            Ver más
          </Link>
        </div>
      </div>
    </article>
  );

  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-[#0D2A53]">NOVEDADES Y CONSEJOS</h2>
        <div className="mx-auto mt-2 h-1 w-24 bg-[#33BAF0]" />
      </div>

      {/* ===== MOBILE (md:hidden): 1 card + “Ver más” apiladas ===== */}
      <div className="md:hidden">
        <div className="flex flex-col gap-6">
          {slides.slice(0, mobileCount).map((post, i) => (
            <Card key={i} post={post} i={i} />
          ))}
        </div>

        {canLoadMore && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setMobileCount((n) => Math.min(n + 1, slides.length))}
              className="rounded-lg bg-[#01c8ff] px-6 py-3 text-white hover:opacity-95 transition"
            >
              Ver más publicaciones
            </button>
          </div>
        )}
      </div>

      {/* ===== DESKTOP / TABLET (md+): carrusel 3-column + logo fijo ===== */}
      <div className="hidden md:grid items-start gap-6 lg:grid-cols-4">
        <div className="relative lg:col-span-3">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent" />

          <div
            ref={scrollerRef}
            className="blog-scroll flex gap-6 overflow-x-auto scroll-smooth py-2 px-1"
            style={{ scrollPadding: "1rem" }}
          >
            {slides.map((post, i) => (
              <Card key={i} post={post} i={i} />
            ))}
          </div>

          <button
            aria-label="Anterior"
            onClick={() => scrollByCards("left")}
            className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2
                       items-center justify-center rounded-lg bg-white/90 ring-1 ring-black/10
                       hover:bg-white shadow-sm md:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button
            aria-label="Siguiente"
            onClick={() => scrollByCards("right")}
            className="absolute right-0 top-1/2 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2
                       items-center justify-center rounded-lg bg-white/90 ring-1 ring-black/10
                       hover:bg-white shadow-sm md:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <aside className="hidden items-center justify-center lg:flex">
          <Image
            src="/logoPreme5.png"
            alt="PREME"
            width={240}
            height={240}
            className="select-none opacity-[0.80]"
          />
        </aside>
      </div>

      <div className="mt-8 py-4 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-lg bg-[#01c8ff] px-6 py-3 text-white hover:opacity-95 transition"
        >
          Ir al blog
        </Link>
      </div>
    </section>
  );
}