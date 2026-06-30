import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";

export const metadata = {
  title: "Coseguros · PREME Salud",
  description:
    "Valores vigentes de coseguros por plan. Documentos públicos de notificación a beneficiarios.",
};

type Documento = {
  plan: string;
  alcance: string;
  archivo: string;
  publishedAt: string;
};

function fileMTime(rel: string): string {
  const abs = path.join(process.cwd(), "public", rel.replace(/^\//, ""));
  try {
    const t = fs.statSync(abs).mtime;
    return t.toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "—";
  }
}

const documentos: Documento[] = [
  {
    plan: "Plan Coral",
    alcance: "Coseguros vigentes",
    archivo: "/coseguros/coseguros-plan-coral.pdf",
    publishedAt: fileMTime("/coseguros/coseguros-plan-coral.pdf"),
  },
  {
    plan: "Plan Integral",
    alcance: "Coseguros vigentes. Aplica también a Plan Joven Integral.",
    archivo: "/coseguros/coseguros-plan-integral.pdf",
    publishedAt: fileMTime("/coseguros/coseguros-plan-integral.pdf"),
  },
  {
    plan: "Plan Máximo",
    alcance: "Coseguros vigentes. Aplica también a Plan Joven Máximo.",
    archivo: "/coseguros/coseguros-plan-maximo.pdf",
    publishedAt: fileMTime("/coseguros/coseguros-plan-maximo.pdf"),
  },
];

export default function CosegurosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-[#f5f8fa]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
            <SectionHeader
              kicker="Información oficial"
              title="Coseguros y documentos importantes."
              description="Acá publicamos los valores vigentes de coseguros por plan, junto con la fecha de publicación de cada documento. Toda variación se notifica con al menos 30 días de anticipación a los beneficiarios."
              align="left"
            />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid gap-4 md:gap-5">
              {documentos.map((doc) => (
                <a
                  key={doc.archivo}
                  href={doc.archivo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 rounded-2xl border border-[#092f57]/10 bg-white p-5 md:p-7 hover:border-[#33BAF0]/40 hover:shadow-[0_8px_28px_rgba(9,47,87,0.08)] transition-all"
                >
                  <div className="flex items-start gap-4 md:gap-5 min-w-0">
                    {/* Ícono PDF */}
                    <div className="shrink-0 h-12 w-12 md:h-14 md:w-14 rounded-xl bg-[#33BAF0]/10 text-[#33BAF0] grid place-items-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-extrabold text-[#092f57] tracking-tight leading-tight">
                        {doc.plan}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 leading-snug">
                        {doc.alcance}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Publicado el {doc.publishedAt} · PDF
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 self-start md:self-auto px-4 py-2.5 rounded-xl bg-[#092f57] text-white text-sm font-semibold group-hover:bg-[#33BAF0] transition-colors">
                    Descargar
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>

            {/* Nota normativa */}
            <div className="mt-10 md:mt-12 rounded-2xl border border-[#092f57]/10 bg-[#f5f8fa] p-6 md:p-8">
              <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-[#33BAF0]">
                Marco normativo
              </h4>
              <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                En cumplimiento del Art. 3° de la Resolución MS N° 1926/2024,
                informamos los valores vigentes de coseguros por plan. Toda
                variación se comunica de manera fehaciente a beneficiarios y
                usuarios con una antelación mínima de TREINTA (30) días.
              </p>
              <p className="mt-3 text-sm text-gray-600">
                ¿Consultas sobre tu plan?{" "}
                <Link href="/contacto" className="font-semibold text-[#33BAF0] hover:underline">
                  Escribinos
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
