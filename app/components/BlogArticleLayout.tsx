// /app/components/BlogArticleLayout.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type Category = "salud" | "bienestar" | "guias";

type Props = {
  category: Category;
  title: string;
  excerpt: string;
  coverSrc: string;
  coverAlt?: string;
  readMin?: number;
  date?: string;
  children: React.ReactNode;
};

// 🎨 Paleta acordada:
// SALUD = rojo pastel (tono profesional)
// BIENESTAR = verde (tono cercano)
// GUÍAS = naranja (tips prácticos tipo “urgencia vs guardia”, “preparación para análisis”)
const STYLES: Record<
  Category,
  { badge: string; bgGradient: string; btn: string; label: string; accent: string }
> = {
  salud: {
    badge: "bg-[#D94B4B] text-white",
    bgGradient: "from-[#FFE1E1] via-[#FFF0F0] to-[#FFF7F7]",
    btn: "from-[#F07171] to-[#D94B4B]",
    label: "SALUD",
    accent: "#D94B4B",
  },
  bienestar: {
    badge: "bg-[#2E9B71] text-white",
    bgGradient: "from-[#D9F2E2] via-[#EAF8EE] to-[#F5FBF8]",
    btn: "from-[#3CB989] to-[#2E9B71]",
    label: "BIENESTAR",
    accent: "#2E9B71",
  },
  guias: {
    badge: "bg-[#DC6A2C] text-white",
    bgGradient: "from-[#FFE5D0] via-[#FFF2E5] to-[#FFF9F5]",
    btn: "from-[#F28B50] to-[#DC6A2C]",
    label: "GUÍAS",
    accent: "#DC6A2C",
  },
};

export default function BlogArticleLayout({
  category,
  title,
  excerpt,
  coverSrc,
  coverAlt,
  readMin = 4,
  date,
  children,
}: Props) {
  const s = STYLES[category];

  return (
    <article className="mx-auto max-w-3xl px-4 pb-16">
      {/* Breadcrumb */}
      <nav className="pt-6 pb-3 text-sm text-gray-500">
        <Link href="/blog" className="hover:text-[#33BAF0] transition-colors">
          Blog
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span>{s.label}</span>
      </nav>

      {/* Encabezado */}
      <header className="flex flex-col gap-3">
        <span className={`self-start text-[11px] font-semibold px-3 py-1 rounded-full ${s.badge}`}>
          {s.label}
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0D2A53] leading-tight tracking-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-gray-700">{excerpt}</p>

        <div className="text-sm text-gray-500">
          {date && <span>{new Date(date).toLocaleDateString("es-AR")}</span>}
          {date && <span className="mx-2">•</span>}
          <span>{readMin} min de lectura</span>
        </div>
      </header>

      {/* Imagen de portada */}
      <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/5">
        <div className={`relative aspect-[16/9] bg-gradient-to-b ${s.bgGradient}`}>
          <Image
            src={coverSrc}
            alt={coverAlt || title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="prose prose-neutral max-w-none mt-10 prose-p:text-gray-700 prose-h2:text-[#0D2A53] prose-h3:text-[#0D2A53] prose-h4:text-[#0D2A53] prose-strong:text-[#0D2A53] prose-a:text-[#33BAF0]">
        {children}
      </div>

      {/* CTA inferior */}
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-white font-semibold shadow-md hover:opacity-95 transition-all bg-gradient-to-b ${s.btn}`}
        >
          Ver más artículos
        </Link>
      </div>
    </article>
  );
}