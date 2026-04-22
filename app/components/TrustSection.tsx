import Image from "next/image";
import SectionHeader from "./SectionHeader";

const logos = [
  { name: "Sanatorio Allende", src: "/assets/prestadores/sanatorio-allende.png" },
  { name: "Clínica Romagosa", src: "/assets/prestadores/romagosa.png" },
  { name: "Oulton", src: "/assets/prestadores/oulton.png" },
  { name: "Hospital Privado", src: "/assets/prestadores/hospital-privado.png" },
  { name: "Reina Fabiola", src: "/assets/prestadores/reina-fabiola.png" },
];

const stats = [
  { value: "13.000+", label: "Afiliados activos" },
  { value: "2.800+", label: "Prestadores en red" },
  { value: "45+", label: "Años de experiencia" },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          kicker="Red de prestadores"
          title="Confían en PREME."
          description="Las instituciones de salud más prestigiosas de Córdoba."
          align="center"
        />

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 mb-14">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={50}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#092f57] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
