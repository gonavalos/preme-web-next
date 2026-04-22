// /components/BlogCarousel.tsx — Homepage blog: compact editorial ticker

import Image from "next/image";
import Link from "next/link";
import { articles } from "../../data/blog-articles";

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

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "short",
  });
}

export default function BlogCarousel() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const picks = sorted.slice(0, 4);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header compacto */}
        <div className="flex items-end justify-between gap-4 mb-8 md:mb-10 pb-5 border-b border-[#092f57]/10">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-6 h-px bg-[#33BAF0]" />
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#33BAF0]">
                Notas PREME
              </span>
            </div>
            <h2 className="font-editorial text-[#092f57] font-medium leading-[1.05] tracking-tight text-[clamp(1.5rem,2.5vw,2rem)]">
              Últimas <em className="italic text-[#33BAF0]">lecturas.</em>
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#092f57] hover:text-[#33BAF0] transition-colors shrink-0 pb-1"
          >
            <span className="hidden sm:inline">Ver todas</span>
            <span className="sm:hidden">Ver más</span>
            <svg
              className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
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

        {/* Grid compacto 4 cols — aspecto 5:4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {picks.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-[6px] bg-gray-100 mb-3.5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority={i === 0}
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              {/* Meta row: categoría · tiempo */}
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] mb-2">
                <span className={CAT_COLOR[post.category]}>
                  {CAT_LABEL[post.category]}
                </span>
                <span className="text-gray-300">·</span>
                <span className="text-gray-500 font-medium tracking-normal normal-case text-[11px]">
                  {post.reading}
                </span>
              </div>

              {/* Título Fraunces compacto */}
              <h3 className="font-editorial text-[17px] md:text-[18px] font-medium leading-[1.2] text-[#092f57] group-hover:text-[#33BAF0] transition-colors line-clamp-2 mb-1.5">
                {post.title}
              </h3>

              {/* Fecha en Fraunces italic sutil */}
              <div className="font-editorial italic text-[12px] text-gray-400">
                {fmtDate(post.date)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
