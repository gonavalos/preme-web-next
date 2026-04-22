import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";
import PlanCard, { type PlanCardProps } from "./components/PlanCard";
import planesData from "../data/planes.json";
import Hero from "./components/Hero";
import QuickAccess from "./components/QuickAccess";
import TrustSection from "./components/TrustSection";
import PromoBanner from "./components/PromoBanner";
import AppBanner from "./components/AppBanner";
import BlogCarousel from "./components/BlogCarousel";
import BenefitsSlider from "./components/BenefitsSlider";
import StickyCtaBar from "./components/StickyCtaBar";
import SectionHeader from "./components/SectionHeader";

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
        {/* 1. Hero — conversión directa */}
        <Hero />

        {/* 2. Quick Access */}
        <QuickAccess />

        {/* 3. Planes — lo más importante, arriba */}
        <section className="py-16 md:py-24 bg-[#f5f8fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <SectionHeader
              kicker="Nuestros planes"
              title="Planes diseñados para"
              titleItalic="tu vida."
              description="Elegí la cobertura que mejor se adapta. Un asesor te ayuda gratis."
              align="split"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
              {planes.map((plan, idx) => (
                <PlanCard key={idx} {...plan} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Confianza — logos + stats */}
        <TrustSection />

        {/* 5. Promo banner */}
        <PromoBanner />

        {/* 6. App credencial */}
        <AppBanner />

        {/* 7. Beneficios */}
        <section className="py-14 md:py-20 bg-white overflow-hidden">
          <BenefitsSlider />
        </section>

        {/* 8. Blog — al final, menor protagonismo */}
        <BlogCarousel />
      </main>

      <WhatsAppFab />
      <StickyCtaBar />
      <Footer />
    </>
  );
}
