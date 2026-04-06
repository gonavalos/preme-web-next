// /components/BlogCarousel.tsx — Reduced visual weight, doesn't compete with plans
"use client";

import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Grasas saludables: dónde encontrarlas",
    image: "/assets/blog/grasas-saludables/h1.png",
    href: "/blog/grasas-saludables",
    category: "Bienestar",
  },
  {
    title: "La ciencia detrás de un buen descanso",
    image: "/assets/blog/descanso-reparador/h1.png",
    href: "/blog/descanso-reparador",
    category: "Consejos",
  },
  {
    title: "Cerebro joven: hábitos para la mente",
    image: "/assets/blog/cerebro-joven-agil/1.png",
    href: "/blog/cerebro-joven",
    category: "Salud",
  },
];

export default function BlogCarousel() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#092f57] tracking-tight">
            Notas de Bienestar
          </h2>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#33BAF0] hover:text-[#1a9fd8] transition-colors"
          >
            Ver todas →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-3">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width:640px) 33vw, 100vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#33BAF0] mb-1 block">
                {post.category}
              </span>
              <h3 className="text-base font-bold text-[#092f57] leading-snug group-hover:text-[#33BAF0] transition-colors">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
