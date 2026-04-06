// /components/BlogCarousel.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Post = {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  category: string;
  categoryColor: string;
};

const posts: Post[] = [
  {
    title:
      "Grasas saludables: dónde encontrarlas y cómo sumarlas a tu semana",
    excerpt:
      "Descubrí cómo pequeños cambios en tu dieta pueden generar un impacto masivo en tu rendimiento físico y mental.",
    image: "/assets/blog/grasas-saludables/h1.png",
    href: "/blog/grasas-saludables",
    category: "Bienestar",
    categoryColor: "text-[#2E9B71]",
  },
  {
    title: "La ciencia detrás de una rutina de sueño perfecta",
    excerpt:
      "Dormir mejor impacta en tu energía y tu ánimo. Rutinas previas, luz y temperatura recomendadas.",
    image: "/assets/blog/descanso-reparador/h1.png",
    href: "/blog/descanso-reparador",
    category: "Consejos",
    categoryColor: "text-[#DC6A2C]",
  },
  {
    title: "Cerebro joven y ágil: hábitos que mantienen tu mente activa",
    excerpt:
      "Ejercicios, descanso y alimentación que favorecen la memoria y la concentración a cualquier edad.",
    image: "/assets/blog/cerebro-joven-agil/1.png",
    href: "/blog/cerebro-joven",
    category: "Salud",
    categoryColor: "text-[#D94B4B]",
  },
];

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
  const featured = posts[0];
  const sidebar = posts.slice(1);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header — mismo estilo que las demás secciones de la home */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092f57] mb-3 tracking-tight">
            Editorial Bienestar
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Perspectivas expertas sobre una vida plena y saludable.
          </p>
        </div>

        {/* Grid: Featured 8 cols + Sidebar 4 cols */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* Featured */}
          <Link
            href={featured.href}
            className="col-span-12 lg:col-span-8 group"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-5">
              <ImgWithFallback
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(min-width:1024px) 66vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.15em] ${featured.categoryColor}`}
                  >
                    {featured.category}
                  </span>
                </span>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#092f57] mb-2 leading-snug group-hover:text-[#33BAF0] transition-colors">
              {featured.title}
            </h3>
            <p className="text-gray-500 leading-relaxed line-clamp-2 max-w-2xl text-sm sm:text-base">
              {featured.excerpt}
            </p>
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
                  <ImgWithFallback
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="(min-width:1024px) 33vw, 100vw"
                  />
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5 ${post.categoryColor}`}
                >
                  {post.category}
                </span>
                <h4 className="text-lg font-bold text-[#092f57] leading-snug group-hover:text-[#33BAF0] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA — ver todos */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#092f57] font-bold border-b-2 border-[#092f57]/15 pb-1 hover:border-[#092f57] transition-all text-sm"
          >
            Ver todas las notas
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
