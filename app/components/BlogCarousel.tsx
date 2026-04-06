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
};

const posts: Post[] = [
  {
    title: "Grasas saludables: dónde encontrarlas y cómo sumarlas a tu semana",
    excerpt:
      "Descubrí cómo pequeños cambios en tu dieta pueden generar un impacto masivo en tu rendimiento físico y mental.",
    image: "/assets/blog/grasas-saludables/h1.png",
    href: "/blog/grasas-saludables",
    category: "Bienestar",
  },
  {
    title: "La ciencia detrás de una rutina de sueño perfecta",
    excerpt:
      "Dormir mejor impacta en tu energía y tu ánimo. Rutinas previas, luz y temperatura recomendadas.",
    image: "/assets/blog/blog2.png",
    href: "/blog/descanso-reparador",
    category: "Consejos",
  },
  {
    title: "Cerebro joven y ágil: hábitos que mantienen tu mente activa",
    excerpt:
      "Ejercicios, descanso y alimentación que favorecen la memoria y la concentración a cualquier edad.",
    image: "/assets/blog/cerebro-joven-agil/1.png",
    href: "/blog/cerebro-joven",
    category: "Salud",
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
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-16 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092f57] tracking-tight">
              Editorial Bienestar
            </h2>
            <p className="text-gray-500 mt-2 text-base sm:text-lg">
              Perspectivas expertas sobre una vida plena y saludable.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-[#092f57] font-bold border-b-2 border-[#092f57] pb-1 hover:text-[#33BAF0] hover:border-[#33BAF0] transition-all text-sm"
          >
            Ver todos los artículos
          </Link>
        </div>

        {/* 3 column editorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {posts.map((post, i) => (
            <Link
              key={post.href}
              href={post.href}
              className={`group block ${i === 1 ? "md:translate-y-10" : ""}`}
            >
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-5 sm:mb-6">
                <ImgWithFallback
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(min-width:768px) 33vw, 100vw"
                  priority={i === 0}
                />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#092f57]">
                  {post.category}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#092f57] mb-2 leading-snug group-hover:text-[#33BAF0] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
