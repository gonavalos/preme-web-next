import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";
import PlanCard, { type PlanCardProps } from "./components/PlanCard";
import planesData from "../data/planes.json";
import Hero from "./components/Hero";
import PromoDebit from "./components/PromoDebit";
import BenefitsGrid from "./components/BenefitsGrid";
import TrustedProviders from "./components/TrustedProviders";
import AppBanner from "./components/AppBanner";
import BlogCarousel from "./components/BlogCarousel";
import StaggerReveal from "./components/StaggerReveal";

/* ---------- Tipado del JSON y adaptación a <PlanCard /> ---------- */
type PlanJSON = {
  id: number;
  icon?: string;
  image?: string;
  headerImageSrc?: string;
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
  const planesJson = (Array.isArray(planesData)
    ? (planesData as PlanJSON[])
    : ((planesData as { Plan?: PlanJSON[] }).Plan ?? [])) as PlanJSON[];

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

  return (
    <>
      <Navbar />
      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 2. PROMO DÉBITO */}
        <PromoDebit />

        {/* 3. BENEFICIOS */}
        <BenefitsGrid />

        {/* 4. LOGO RIBBON PRESTADORES */}
        <TrustedProviders />

        {/* 5. PLANES */}
        <section className="py-16 md:py-[120px]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              <p className="text-caption text-brand-secondary mb-3">NUESTROS PLANES</p>
              <h2 className="heading-section text-brand-primary">Encontrá el plan perfecto para vos</h2>
              <p className="text-lead mt-4">Libre elección de prestadores, acceso directo a todas las prestaciones</p>
            </div>

            <StaggerReveal
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8"
              stagger={0.12}
              distance={40}
              duration={0.7}
              start="top 80%"
            >
              {planes.map((plan, idx) => (
                <PlanCard key={idx} {...plan} />
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* 6. CREDENCIAL DIGITAL */}
        <AppBanner />

        {/* 7. BLOG */}
        <section className="py-14 lg:py-16">
          <BlogCarousel />
        </section>
      </main>

      <WhatsAppFab />
      <Footer />
    </>
  );
}
