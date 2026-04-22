// /components/BlogCarousel.tsx — Homepage blog: minimal editorial duo

import Image from "next/image";
import Link from "next/link";
import { articles } from "../../data/blog-articles";

const CAT_LABEL: Record<string, string> = {
  salud: "Salud",
  bienestar: "Bienestar",
  consejos: "Consejos",
  novedades: "Novedades",
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
  const picks = sorted.slice(0, 2);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header minimal editorial */}
        <div className="grid gap-6 md:gap-10 md:grid-cols-[1fr_auto] items-end mb-14 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#33BAF0]" />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#33BAF0]">
                Editorial
              </span>
            </div>
            <h2 className="font-editorial text-[#092f57] font-medium leading-[0.95] tracking-tight text-balance text-[clamp(2.5rem,5.5vw,4.25rem)]">
              Para leer con{" "}
              <em className="italic text-[#33BAF0]">calma.</em>
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#092f57] hover:text-[#33BAF0] transition-colors self-end pb-2"
          >
            Ver todas las notas
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>

        {/* Editorial duo */}
        <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-2">
          {picks.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group block ${i === 1 ? "md:mt-20" : ""}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 mb-6 md:mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority={i === 0}
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />

                {/* Floating meta badge — top */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] text-[#092f57]">
                    {CAT_LABEL[post.category]}
                  </span>
                  <span className="bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-semibold text-white tracking-wide">
                    {post.reading}
                  </span>
                </div>

                {/* Subtle date at bottom */}
                <div className="absolute bottom-5 left-5 font-editorial italic text-[13px] text-white drop-shadow-md">
                  {fmtDate(post.date)}
                </div>
              </div>

              {/* Title in Fraunces */}
              <h3 className="font-editorial text-[#092f57] font-medium leading-[1.08] tracking-tight text-[clamp(1.5rem,2.5vw,2rem)] mb-3 group-hover:text-[#33BAF0] transition-colors text-balance">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-500 leading-relaxed text-[15px] md:text-base max-w-[52ch] mb-5 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Hairline + "Leer" link */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#092f57]/10">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#092f57] group-hover:text-[#33BAF0] transition-colors">
                  Leer nota
                </span>
                <svg
                  className="w-3.5 h-3.5 text-[#33BAF0] transition-transform duration-300 group-hover:translate-x-1"
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
