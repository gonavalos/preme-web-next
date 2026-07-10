import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-[#092f57] bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero/insti5.avif')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#092f57]/75" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Unite a PREME hoy
        </h2>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Sumate a la red de salud más prestigiosa de Córdoba y empezá a vivir
          con la tranquilidad que buscás.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/formulario-landing"
            className="inline-flex items-center justify-center gap-2 bg-[#33BAF0] text-white px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:shadow-[0_0_40px_rgba(51,186,240,0.4)] hover:scale-[1.03] transition-all duration-300"
          >
            Quiero asociarme ahora
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-[#092f57] transition-all duration-300"
          >
            Hablar con un asesor
          </Link>
        </div>
      </div>
    </section>
  );
}
