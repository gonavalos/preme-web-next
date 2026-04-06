import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { articles, getArticleBySlug } from "../../../data/blog-articles";

const CATEGORY_COLORS: Record<string, { badge: string; accent: string }> = {
  salud: { badge: "bg-[#D94B4B]", accent: "#D94B4B" },
  bienestar: { badge: "bg-[#2E9B71]", accent: "#2E9B71" },
  consejos: { badge: "bg-[#DC6A2C]", accent: "#DC6A2C" },
  novedades: { badge: "bg-[#238AD4]", accent: "#238AD4" },
};

export function generateStaticParams() {
  return articles
    .filter((a) => !a.hasCustomPage)
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.hasCustomPage) return {};
  return {
    title: `${article.title} | PREME`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.hasCustomPage) return notFound();

  const colors = CATEGORY_COLORS[article.category] ?? CATEGORY_COLORS.salud;
  const dateFormatted = new Date(article.date).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[45vh] sm:h-[50vh] w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
        <div className="absolute bottom-10 sm:bottom-16 left-6 sm:left-12 max-w-3xl text-white z-10">
          <span
            className={`inline-block mb-3 ${colors.badge} text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider`}
          >
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            {article.title}
          </h1>
          <div className="mt-3 flex items-center gap-3 text-sm text-white/70">
            <span>{article.author}</span>
            <span>·</span>
            <span>{dateFormatted}</span>
            <span>·</span>
            <span>{article.reading} de lectura</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 sm:py-16 px-6 sm:px-8">
        <div
          className="mx-auto max-w-3xl prose prose-lg prose-headings:text-[#092f57] prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-[#092f57] prose-a:text-[#33BAF0]"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* Back to blog */}
      <section className="pb-16 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-[#092f57] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#0a3d6e] transition-colors"
        >
          <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          Ver más artículos
        </Link>
      </section>

      <Footer />
    </>
  );
}
