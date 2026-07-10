import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaFileAlt,
  FaIdCard,
  FaStethoscope,
  FaClipboardCheck,
  FaGift,
  FaWhatsapp,
} from "react-icons/fa";

export const metadata = {
  title: "Para Afiliados · PREME Salud",
  description:
    "Toda la información y servicios para afiliados de PREME: coseguros, credencial digital, cartilla, autorizaciones y beneficios.",
};

type Card = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  href: string;
  cta: string;
  accent: string;
  external?: boolean;
};

const cards: Card[] = [
  {
    icon: FaFileAlt,
    title: "Coseguros",
    desc: "Valores vigentes por plan. Documentos oficiales con fecha de publicación.",
    href: "/coseguros",
    cta: "Ver documentos",
    accent: "#33BAF0",
  },
  {
    icon: FaIdCard,
    title: "Credencial digital",
    desc: "Llevá tu credencial siempre en el celular. Accedé desde la app PREME.",
    href: "#app-preme",
    cta: "Descargar app",
    accent: "#092f57",
  },
  {
    icon: FaStethoscope,
    title: "Cartilla médica",
    desc: "Buscá prestadores, farmacias y centros por especialidad o ciudad.",
    href: "/prestadores",
    cta: "Buscar prestadores",
    accent: "#33BAF0",
  },
  {
    icon: FaClipboardCheck,
    title: "Autorizaciones",
    desc: "Las gestiona el prestador. Si necesitás ayuda, escribinos por WhatsApp.",
    href: "https://api.whatsapp.com/send?phone=5493515503660&text=Hola%2C%20necesito%20ayuda%20con%20una%20autorizaci%C3%B3n.",
    cta: "WhatsApp Autorizaciones",
    accent: "#25D366",
    external: true,
  },
  {
    icon: FaGift,
    title: "Beneficios y descuentos",
    desc: "50% en farmacias, programa de beneficios y descuentos exclusivos PREME.",
    href: "/#beneficios",
    cta: "Ver beneficios",
    accent: "#E05A4F",
  },
  {
    icon: FaWhatsapp,
    title: "Atención al afiliado",
    desc: "Consultas, trámites, asesoramiento. Horario de atención de 9 a 17 hs.",
    href: "/contacto",
    cta: "Contactar",
    accent: "#092f57",
  },
];

export default function AfiliadosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* HERO con imagen */}
        <section className="relative w-full h-[52vh] md:h-[58vh] min-h-[420px] overflow-hidden">
          <Image
            src="/assets/hero/afiliados.avif"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Overlay para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#092f57]/85 via-[#092f57]/55 to-[#092f57]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092f57]/40 to-transparent" />

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
              <div className="max-w-2xl text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 mb-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#33BAF0]" />
                  <span className="text-xs font-semibold tracking-[0.18em] uppercase">
                    Para Afiliados
                  </span>
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight mb-5 text-balance">
                  Toda tu información{" "}
                  <em className="font-medium italic text-[#33BAF0] [font-family:Georgia,serif]">
                    en un solo lugar.
                  </em>
                </h1>
                <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
                  Coseguros, credencial digital, cartilla, autorizaciones y
                  beneficios — todo lo que necesitás como afiliado de PREME.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grid de cards */}
        <section className="py-16 md:py-20 bg-[#f5f8fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {cards.map((card) => {
                const Icon = card.icon;
                const wrapperProps = card.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    {...wrapperProps}
                    className="group flex flex-col rounded-2xl bg-white border border-black/[0.06] p-6 md:p-7 hover:border-[#33BAF0]/40 hover:shadow-[0_12px_40px_rgba(9,47,87,0.10)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div
                      className="h-12 w-12 rounded-xl grid place-items-center mb-5 transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: `${card.accent}15`, color: card.accent }}
                    >
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#092f57] tracking-tight leading-tight mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">
                      {card.desc}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                      style={{ color: card.accent }}
                    >
                      {card.cta}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Bloque inferior — soporte */}
            <div className="mt-12 md:mt-16 rounded-2xl bg-white border border-black/[0.06] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h4 className="text-lg font-bold text-[#092f57] tracking-tight">
                  ¿No encontrás lo que buscás?
                </h4>
                <p className="text-sm text-gray-600 mt-1.5">
                  Escribinos por WhatsApp y un asesor te ayuda.
                </p>
              </div>
              <Link
                href="https://api.whatsapp.com/send?phone=5493512006002&text=Hola%2C%20soy%20afiliado%20PREME%20y%20necesito%20ayuda."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#20bd5a] transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                Hablar con un asesor
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
