import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobForm from "../components/JobForm";
import { FaHeartbeat, FaUsers, FaChartLine } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Trabajá con nosotros · PREME Medicina Privada",
  description:
    "Sumate al equipo de PREME: completá el formulario y adjuntá tu CV. Buscamos personas con vocación de servicio.",
  alternates: { canonical: "/trabaja-con-nosotros" },
};

const razones = [
  {
    icon: FaHeartbeat,
    title: "Propósito real",
    text: "Trabajás en salud: lo que hacés impacta directo en las familias que confían en PREME.",
  },
  {
    icon: FaUsers,
    title: "Equipo cercano",
    text: "Una organización con +45 años de historia y trato de equipo chico.",
  },
  {
    icon: FaChartLine,
    title: "Crecimiento",
    text: "Capacitación y posibilidades de desarrollo en distintas áreas.",
  },
];

export default function TrabajaConNosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <section className="bg-[#092f57] text-white">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
            <span className="inline-block rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase mb-4">
              Trabajá con nosotros
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-2xl text-balance">
              Sumate al equipo de{" "}
              <em className="font-medium italic text-[#33BAF0] [font-family:Georgia,serif]">
                PREME.
              </em>
            </h1>
            <p className="mt-4 text-white/80 max-w-xl leading-relaxed">
              Buscamos personas con vocación de servicio y ganas de crecer.
              Contanos quién sos y adjuntá tu CV — nuestro equipo revisa todas
              las postulaciones.
            </p>
          </div>
        </section>

        {/* Contenido */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
            {/* Razones */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#092f57] tracking-tight">
                ¿Por qué PREME?
              </h2>
              <div className="mt-2 mb-8 h-1 w-20 bg-[#33BAF0]" />
              <div className="space-y-5">
                {razones.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <div className="h-11 w-11 shrink-0 rounded-xl bg-[#e6f6fd] text-[#33BAF0] grid place-items-center">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#092f57]">{title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-[#f5f8fa] border border-black/[0.06] p-5 text-sm text-gray-600 leading-relaxed">
                También podés enviarnos tu CV directo por mail a{" "}
                <a
                  href="mailto:info@preme.com.ar?subject=Postulaci%C3%B3n%20laboral"
                  className="text-[#33BAF0] font-semibold underline"
                >
                  info@preme.com.ar
                </a>{" "}
                con el asunto “Postulación laboral”.
              </div>
            </div>

            {/* Formulario */}
            <div>
              <JobForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
