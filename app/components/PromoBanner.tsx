import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="py-12 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
      <div
        className="relative rounded-[2rem] overflow-hidden h-[380px] sm:h-[420px] flex items-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero/home/promo.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#051b33]/80" />

        {/* Content */}
        <div className="relative z-10 px-8 sm:px-12 md:px-20 lg:px-24">
          <span className="text-[#33BAF0] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 block">
            Oportunidad Única
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            30% OFF{" "}
            <span className="font-normal italic text-[#33BAF0]/90">
              los primeros 3 meses
            </span>
          </h2>
          <p className="text-white/75 max-w-md mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
            Afiliate con débito automático y obtené 10% adicional del mes 4 al 12.
            Válido para nuevas adhesiones.
          </p>
          <Link
            href="/formulario-landing"
            className="inline-flex items-center justify-center gap-2 bg-[#33BAF0] text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl hover:shadow-xl hover:shadow-[#33BAF0]/30 hover:scale-[1.03] transition-all duration-300 text-sm sm:text-base"
          >
            Solicitar Beneficio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
