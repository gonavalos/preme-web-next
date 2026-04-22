// /components/BlogCarousel.tsx — Magazine spread (editorial layout)

import Image from "next/image";
import Link from "next/link";
import { articles } from "../../data/blog-articles";

// ─── Category palette ─────────────────────────────────────
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

// ─── Author pool (mock — hasta tener autores reales) ──────
function authorFor(category: string) {
  const pool: Record<string, { name: string; role: string; initials: string }> = {
    salud: {
      name: "Dra. Elena Valdés",
      role: "Directora de Bienestar PREME",
      initials: "EV",
    },
    bienestar: {
      name: "Lic. Marco Rossi",
      role: "Nutrición & Deporte",
      initials: "MR",
    },
    consejos: {
      name: "Equipo PREME",
      role: "Editorial",
      initials: "PM",
    },
    novedades: {
      name: "Redacción PREME",
      role: "Novedades",
      initials: "RP",
    },
  };
  return pool[category] ?? pool.consejos;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
  });
}

export default function BlogCarousel() {
  // Orden descendente por fecha
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featured = sorted[0];
  const sidebar = sorted.slice(1, 5); // 4 en el índice lateral
  const more = sorted.slice(5, 8); // 3 en "más lecturas"

  // Edition meta (derivar del featured o hardcode editorial)
  const featuredDate = new Date(featured.date);
  const mes = featuredDate.toLocaleDateString("es-AR", { month: "long" });
  const mesCap = mes.charAt(0).toUpperCase() + mes.slice(1);
  const edicionNum = 12; // editorial tracking number

  const featAuthor = authorFor(featured.category);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* ─── MASTHEAD ─── */}
        <header className="pb-6 md:pb-8 mb-10 md:mb-14 border-b-2 border-[#092f57]">
          <div className="flex items-center justify-between gap-4 mb-5 md:mb-7">
            <span className="font-editorial italic text-[13px] text-gray-500 tracking-wide">
              Edición {edicionNum} · {mesCap} {featuredDate.getFullYear()}
            </span>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#092f57] hover:text-[#33BAF0] transition-colors"
            >
              Ver archivo
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
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
          <h2 className="font-editorial text-[#092f57] font-medium leading-[0.92] tracking-tight text-[clamp(3rem,8vw,6rem)] text-balance">
            Notas de <em className="italic text-[#33BAF0]">bienestar.</em>
          </h2>
        </header>

        {/* ─── SPREAD: Featured + Sidebar ─── */}
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1.55fr_1fr] mb-16 md:mb-24">
          {/* FEATURED EDITORIAL */}
          {featured && (
            <article className="group">
              <Link href={`/blog/${featured.slug}`} className="block">
                {/* Image 16:11 */}
                <div className="relative aspect-[16/11] overflow-hidden rounded-[4px] mb-6 bg-gray-100">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(min-width:1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] text-[#092f57] shadow-sm">
                    ★ Lectura destacada
                  </span>
                </div>

                {/* Meta row */}
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-semibold mb-4">
                  <span className={CAT_COLOR[featured.category]}>
                    {CAT_LABEL[featured.category]}
                  </span>
                  <span className="text-gray-300">·</span>
                  <span className="text-gray-500 normal-case tracking-normal font-normal">
                    {fmtDate(featured.date)}
                  </span>
                  <span className="text-gray-300">·</span>
                  <span className="text-gray-500 normal-case tracking-normal font-normal">
                    {featured.reading} de lectura
                  </span>
                </div>

                {/* Editorial serif title */}
                <h3 className="font-editorial text-[#092f57] font-medium leading-[1.02] tracking-tight text-[clamp(1.75rem,3.5vw,2.75rem)] mb-4 text-balance group-hover:text-[#33BAF0] transition-colors">
                  {featured.title}
                </h3>

                {/* Long excerpt */}
                <p className="text-gray-600 leading-relaxed text-[16px] md:text-[17px] max-w-[62ch] mb-6">
                  {featured.excerpt} {featured.more}
                </p>
              </Link>

              {/* Author byline */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-200">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#33BAF0] to-[#092f57] grid place-items-center text-white font-bold text-xs shrink-0">
                  {featAuthor.initials}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-[#092f57] leading-tight">
                    {featAuthor.name}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5">
                    {featAuthor.role}
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* SIDEBAR INDEX — También en esta edición */}
          <aside>
            <div className="sticky top-24">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#092f57] mb-5 pb-3 border-b border-[#092f57]/15">
                También en esta edición
              </h4>
              <ul>
                {sidebar.map((post, i) => (
                  <li
                    key={post.slug}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex gap-4 py-5 items-start"
                    >
                      {/* Number */}
                      <span className="font-editorial text-[22px] text-gray-300 font-medium leading-none pt-1 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div
                          className={`text-[9px] font-bold uppercase tracking-[0.2em] mb-1.5 ${CAT_COLOR[post.category]}`}
                        >
                          {CAT_LABEL[post.category]}
                        </div>
                        <h5 className="font-editorial text-[17px] leading-[1.2] text-[#092f57] group-hover:text-[#33BAF0] transition-colors line-clamp-2 font-medium">
                          {post.title}
                        </h5>
                        <div className="text-[11px] text-gray-400 mt-1.5">
                          {post.reading}
                        </div>
                      </div>

                      {/* Thumbnail */}
                      <div className="relative w-16 h-16 rounded-[3px] overflow-hidden shrink-0 bg-gray-100">
                        <Image
                          src={post.image}
                          alt=""
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* ─── MÁS LECTURAS (separator + 3 col grid) ─── */}
        {more.length > 0 && (
          <div>
            <div className="flex items-center gap-5 mb-10 md:mb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#092f57] shrink-0">
                Más lecturas
              </span>
              <span className="flex-1 h-px bg-[#092f57]/15" />
              <Link
                href="/blog"
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#33BAF0] hover:text-[#092f57] transition-colors shrink-0"
              >
                Todas →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {more.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] mb-5 bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div
                    className={`text-[9px] font-bold uppercase tracking-[0.22em] mb-2 ${CAT_COLOR[post.category]}`}
                  >
                    {CAT_LABEL[post.category]}
                  </div>
                  <h3 className="font-editorial text-[#092f57] font-medium leading-[1.15] text-[22px] group-hover:text-[#33BAF0] transition-colors line-clamp-3 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
