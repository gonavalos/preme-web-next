// /app/institucional/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import JobForm from "../components/JobForm";
import {
  FaUserMd, FaHeartbeat, FaShieldAlt, FaClock, FaStethoscope, FaGlobeAmericas,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Institucional | PREME Medicina Privada",
  description:
    "Conocé PREME: nuestra misión, visión y valores. Equipo médico, cobertura y cultura. Sumate a trabajar con nosotros.",
  alternates: { canonical: "/institucional" },
  openGraph: {
    title: "Institucional | PREME",
    description:
      "Nuestra misión es cuidar a las familias argentinas con excelencia médica y calidez humana.",
    url: "/institucional",
    images: [{ url: "/assets/hero/institucionalv2.png" }],
  },
};

const values = [
  { title: "Misión", text: "Brindar servicios de salud de calidad con foco en prevención y acompañamiento integral." },
  { title: "Visión", text: "Ser la cobertura preferida por las familias argentinas por innovación y cercanía." },
  { title: "Valores", text: "Ética, calidez humana, excelencia clínica, accesibilidad y transparencia." },
];

const diferenciales = [
  { icon: FaUserMd, title: "Equipo de excelencia", text: "Profesionales de primer nivel en múltiples especialidades." },
  { icon: FaClock, title: "24/7", text: "Urgencias y telemedicina disponibles todo el día." },
  { icon: FaStethoscope, title: "Telemedicina", text: "Consultas virtuales seguras y simples." },
  { icon: FaShieldAlt, title: "Cobertura integral", text: "Ambulatorio, internación, farmacia y más." },
  { icon: FaGlobeAmericas, title: "Cobertura nacional", text: "Red de prestadores en varias provincias." },
  { icon: FaHeartbeat, title: "Prevención", text: "Programas y chequeos para cada etapa de la vida." },
];

export default function InstitucionalPage() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PREME Medicina Privada",
    url: "https://www.preme.com.ar/",
    logo: "https://www.preme.com.ar/logoPreme.png",
  };

  const pageLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Institucional | PREME",
    description:
      "Conocé PREME: misión, visión, valores, equipo médico y oportunidades laborales.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.preme.com.ar/" },
        { "@type": "ListItem", position: 2, name: "Institucional", item: "https://www.preme.com.ar/institucional" },
      ],
    },
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[52vh] md:h-[60vh]">
        <Image
          src="/assets/hero/insti5.png"
          alt="Equipo médico de PREME"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/0" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 md:px-6 w-full">
            <div className="max-w-2xl text-white">
              <span className="inline-block rounded-full bg-[#33BAF0] px-3 py-1 text-xs font-semibold">
                PREME Medicina Privada
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
                Cuidamos tu salud
              </h1>
              <p className="mt-3 text-white/90">
                Más de 35 años acompañando a las familias.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/prestadores" className="rounded-lg bg-[#33BAF0] px-5 py-3 font-semibold text-white">
                  Ver cartilla
                </Link>
                <Link href="/planes" className="rounded-lg border border-white/70 px-5 py-3 text-white hover:bg-white/10">
                  Conocé los planes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#092f57]">Nuestra empresa</h2>
            <div className="mt-2 mb-6 h-1 w-20 bg-[#33BAF0]" />
            <p className="text-gray-700">
              Nacimos con el propósito de ofrecer una cobertura médica confiable, moderna y humana.
              Invertimos en innovación, prevención y una red federal de prestadores para estar donde nos necesites.
            </p>
            <p className="mt-3 text-gray-700">
              Nuestro modelo pone a la persona en el centro: trabajamos junto a pacientes y familias para
              acompañarlos en cada etapa de la vida.
            </p>
          </div>

          <div className="relative h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden rounded-2xl ring-1 ring-black/5">
            <Image
              src="/assets/trabaja.png"
              alt="Profesionales de la salud"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN / VALORES */}
      <section className="bg-[#f7f9fb]">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
                <h3 className="text-xl font-bold text-[#092f57]">{v.title}</h3>
                <p className="mt-2 text-gray-700">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIALES */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12" id="diferenciales">
        <h2 className="text-3xl font-bold text-[#092f57] text-center">Qué nos distingue</h2>
        <div className="mx-auto mt-2 mb-8 h-1 w-20 bg-[#33BAF0]" />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {diferenciales.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white p-6">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#e6f6fd] text-[#33BAF0]">
                <Icon />
              </div>
              <h3 className="text-lg font-semibold text-[#092f57]">{title}</h3>
              <p className="mt-1 text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>


      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />

      <Footer />
    </>
  );
}