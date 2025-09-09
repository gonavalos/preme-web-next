import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";
import PlanCard, { type PlanCardProps } from "./components/PlanCard";
import planesData from "../data/planes.json";
import Hero from "./components/Hero";
import CTAStrip from "./components/CTAStrip";
import AppBanner from "./components/AppBanner";
import BlogCarousel from "./components/BlogCarousel";
import BenefitCard from "./components/BenefitCard";
import {
  FaUserMd,
  FaClock,
  FaGlobeAmericas,
  FaStethoscope,
  FaShieldAlt,
  FaHeartbeat,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

/* ---------- Tipado del JSON y adaptación a <PlanCard /> ---------- */
type PlanJSON = {
  id: number;
  icon?: string;               // compatibilidad (no se usa en la card actual)
  image?: string;              // compat: si existe, lo usamos como header
  headerImageSrc?: string;     // preferido
  headerImageAlt?: string;
  imageAlt?: string;
  nombre: string;
  descripcion: string;
  beneficios: string[];
  color?: string;
  highlight?: string;
  buttonColor?: string;
};

export default function Home() {
  // Soporta array plano o { Plan: [...] }
  const planesJson = (Array.isArray(planesData)
    ? (planesData as PlanJSON[])
    : ((planesData as { Plan?: PlanJSON[] }).Plan ?? [])) as PlanJSON[];

  // Adaptamos al tipo que espera <PlanCard />
  const planes: PlanCardProps[] = planesJson.map((p) => ({
    headerImageSrc: p.headerImageSrc ?? p.image ?? undefined,
    headerImageAlt: p.headerImageAlt ?? p.imageAlt ?? p.nombre,
    title: p.nombre,
    subtitle: p.descripcion,
    benefits: p.beneficios,
    color: p.color ?? "#33BAF0",
    highlight: p.highlight,
    buttonColor: p.buttonColor ?? p.color ?? "#33BAF0",
  }));

  const benefits = [
    { icon: FaUserMd, title: "Red de Prestadores", description: "Más de 100 profesionales médicos de excelencia" },
    { icon: FaClock, title: "Atención 24/7", description: "Emergencias médicas las 24 horas del día" },
    { icon: FaGlobeAmericas, title: "Cobertura Nacional", description: "Atención médica en todo el país" },
    { icon: FaStethoscope, title: "Telemedicina", description: "Consultas médicas virtuales desde tu hogar" },
    { icon: FaShieldAlt, title: "Cobertura Integral", description: "Protección completa para tu familia" },
    { icon: FaHeartbeat, title: "Medicina Preventiva", description: "Chequeos y controles para prevenir enfermedades" },
    { icon: FaUsers, title: "Atención Familiar", description: "Planes especiales para grupos familiares" },
    { icon: FaCertificate, title: "Calidad Certificada", description: "Altos estándares de calidad" },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CTAStrip />

        {/* Planes (lee del JSON, diseño validado) */}
        <section className="py-14  max-w-8/10 mx-auto">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#092f57]">Nuestros Planes</h2>
          <div className="mx-auto mt-1 mb-10 h-1 w-20 bg-[#33BAF0]" />
          </div>
          <div className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {planes.map((plan, idx) => (
              <PlanCard key={idx} {...plan} />
            ))}
          </div>
        </section>

        <AppBanner />


        <section className="py-1">
          <BlogCarousel />
       </section>
        {/*
        <section className="py-16 max-w-9xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">
            Beneficios que nos distinguen
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Servicios de salud de primera calidad con atención personalizada
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <BenefitCard key={i} {...b} />
            ))}
          </div>
        </section>*/}
      </main>

      <WhatsAppFab />
      <div className="py-10"></div>
      <Footer />
    </>
  );
}