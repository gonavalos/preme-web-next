import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";
import PlanCard, { type PlanCardProps } from "./components/PlanCard";
import planesData from "../data/planes.json";
import Hero from "./components/Hero";
import QuickAccess from "./components/QuickAccess";
import PrestadoresMarquee from "./components/PrestadoresMarquee";
import PromoBanner from "./components/PromoBanner";
import AppBanner from "./components/AppBanner";
import BlogCarousel from "./components/BlogCarousel";
import BenefitsSlider from "./components/BenefitsSlider";

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
        {/* Hero */}
        <Hero />

        {/* Quick Access — barra horizontal */}
        <QuickAccess />

        {/* Prestadores marquee — blanco */}
        <PrestadoresMarquee />

        {/* Plan cards — fondo suave */}
        <section className="py-16 md:py-24 bg-[#f5f8fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092f57] mb-3 tracking-tight">
                Planes diseñados para tu vida
              </h2>
              <p className="text-gray-500 text-base sm:text-lg">
                Elegí la cobertura que mejor se adapta a tus necesidades.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
              {planes.map((plan, idx) => (
                <PlanCard key={idx} {...plan} />
              ))}
            </div>
          </div>
        </section>

        {/* Promo banner — parallax */}
        <PromoBanner />

        {/* App showcase — blanco */}
        <AppBanner />

        {/* Benefits slider — fondo suave */}
        <section className="py-14 md:py-20 bg-[#f5f8fa] overflow-hidden">
          <BenefitsSlider />
        </section>

        {/* Blog editorial — blanco */}
        <BlogCarousel />
      </main>

      <WhatsAppFab />
      <Footer />
    </>
  );
}
