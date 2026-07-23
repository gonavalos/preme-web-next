import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaGraduationCap,
  FaBrain,
  FaGlasses,
  FaCheck,
  FaWhatsapp,
  FaIdCard,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Red de beneficios · PREME Salud",
  description:
    "Convenios exclusivos para afiliados PREME: cursos y talleres, atención psicológica online y descuentos en ópticas.",
  alternates: { canonical: "/beneficios" },
};

const WA_LINK =
  "https://api.whatsapp.com/send?phone=5493512006002&text=Hola%2C%20soy%20afiliado%20PREME%20y%20quiero%20info%20sobre%20beneficios.";

type Beneficio = {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  title: string;
  subtitle?: string;
  items: string[];
  accent: string;
};

const beneficios: Beneficio[] = [
  {
    key: "cursos",
    icon: FaGraduationCap,
    label: "Cursos y talleres",
    title: "Preparación para el parto, posparto y bienestar",
    subtitle: "Modalidad presencial y virtual.",
    items: [
      "Preparación física para el parto y posparto.",
      "Técnicas de respiración y relajación.",
      "Mejora de la postura, fuerza y movilidad.",
      "Participación de la pareja o acompañante.",
    ],
    accent: "#33BAF0",
  },
  {
    key: "psicologia",
    icon: FaBrain,
    label: "Consultorios privados",
    title: "Atención psicológica online",
    subtitle: "Para adolescentes, adultos y adultos mayores.",
    items: [
      "Sesiones desde cualquier lugar, con mayor comodidad.",
      "Herramientas para gestionar estrés, ansiedad y conflictos.",
      "Seguimiento profesional adaptado a cada necesidad.",
    ],
    accent: "#864D8D",
  },
  {
    key: "opticas",
    icon: FaGlasses,
    label: "Ópticas",
    title: "Aranceles preferenciales en tu red de ópticas",
    items: [
      "Cristales orgánicos blancos con filtro azul y antirreflejo 100%.",
      "Elegí el marco de tu preferencia 100%.",
      "Podés sumar adicionales como multifocal, bluelight o fotocromáticos.",
      "Aranceles preferenciales exclusivos en lentes de contacto y de sol.",
    ],
    accent: "#68AE26",
  },
];

// Logos de ópticas asociadas (usar filenames existentes; si no están, se ocultan)
const opticasLogos = [
  { name: "Óptica 1", src: "/assets/beneficios/optica-1.png" },
  { name: "Óptica 2", src: "/assets/beneficios/optica-2.png" },
  { name: "Óptica 3", src: "/assets/beneficios/optica-3.png" },
  { name: "Óptica 4", src: "/assets/beneficios/optica-4.png" },
];

export default function BeneficiosPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#092f57] text-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#864D8D]/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 -bottom-24 h-96 w-96 rounded-full bg-[#33BAF0]/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-20 md:py-28">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#33BAF0]" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase">
                Beneficios
              </span>
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] font-extrabold leading-[1.05] tracking-tight max-w-3xl text-balance">
              Red de{" "}
              <em className="font-medium italic text-[#33BAF0] [font-family:Georgia,serif]">
                beneficios.
              </em>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Convenios exclusivos para afiliados PREME. Formación, salud mental
              y descuentos pensados para vos y tu familia.
            </p>
          </div>
        </section>

        {/* 3 TARJETAS PRINCIPALES */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {beneficios.map((b) => {
              const Icon = b.icon;
              return (
                <article
                  key={b.key}
                  className="flex flex-col rounded-2xl border border-black/[0.06] bg-white p-7 shadow-[0_4px_24px_rgba(9,47,87,0.05)] hover:shadow-[0_12px_40px_rgba(9,47,87,0.1)] transition-shadow duration-300"
                >
                  <div
                    className="h-12 w-12 rounded-xl grid place-items-center mb-5"
                    style={{ backgroundColor: `${b.accent}15`, color: b.accent }}
                  >
                    <Icon className="text-xl" />
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5"
                    style={{ color: b.accent }}
                  >
                    {b.label}
                  </span>
                  <h2 className="text-xl font-extrabold text-[#092f57] tracking-tight leading-tight mb-2">
                    {b.title}
                  </h2>
                  {b.subtitle && (
                    <p className="text-sm text-gray-600 mb-4">{b.subtitle}</p>
                  )}
                  <ul className="mt-2 space-y-2.5 text-sm text-gray-700">
                    {b.items.map((it, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <FaCheck
                          className="mt-1 shrink-0 text-xs"
                          style={{ color: b.accent }}
                        />
                        <span className="leading-snug">{it}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* ÓPTICAS — logos + credencial */}
        <section className="bg-[#f5f8fa] border-y border-black/[0.06]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#68AE26]">
                  Ópticas asociadas
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#092f57] tracking-tight leading-tight">
                  Presentá tu credencial y accedé a{" "}
                  <em className="font-medium italic text-[#68AE26] [font-family:Georgia,serif]">
                    aranceles preferenciales.
                  </em>
                </h2>
                <div className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-white border border-black/[0.06] px-5 py-4 shadow-sm">
                  <div className="h-10 w-10 rounded-xl bg-[#68AE26]/15 text-[#68AE26] grid place-items-center">
                    <FaIdCard className="text-lg" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#68AE26]">
                      Acceso inmediato
                    </p>
                    <p className="text-sm text-[#092f57] font-semibold">
                      Con tu credencial digital PREME
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {opticasLogos.map((o) => (
                  <div
                    key={o.name}
                    className="aspect-video rounded-2xl bg-white border border-black/[0.06] grid place-items-center p-6 shadow-sm"
                  >
                    <span className="text-xs text-gray-400 font-semibold tracking-wide">
                      {o.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#092f57] tracking-tight leading-tight">
            ¿Querés conocer todos los convenios?
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Escribinos por WhatsApp y te asesoramos sobre los beneficios
            disponibles según tu plan.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#20bd5a] transition-colors"
            >
              <FaWhatsapp className="text-lg" />
              Hablar con un asesor
            </a>
            <Link
              href="/planes"
              className="inline-flex items-center gap-2 bg-white border border-[#092f57]/15 text-[#092f57] font-semibold px-6 py-3 rounded-xl hover:bg-[#092f57]/5 transition-colors"
            >
              Ver planes
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
