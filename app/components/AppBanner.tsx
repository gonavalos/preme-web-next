import Image from "next/image";

export default function AppBanner() {
  return (
    <section className="relative overflow-visible py-8 md:py-12">
      {/* Franja gris detrás: sólo md+ para que el mockup “salga” por arriba/abajo */}
      <div className="absolute inset-x-0 top-1/2 hidden h-[520px] -translate-y-1/2 bg-[#f5f5f5] md:block" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        {/* IZQUIERDA: mockup (debajo en mobile) */}
        <div className="order-2 flex justify-center md:order-1 md:justify-start md:-mt-10 md:-mb-10">
          <Image
            src="/assets/credencialpreme.png"
            alt="App PREME con credencial digital"
            width={560}
            height={880}
            priority
            className="h-auto w-[78%] max-w-[420px] drop-shadow-2xl md:w-full md:max-w-[520px]"
          />
        </div>

        {/* DERECHA: texto (arriba en mobile) */}
        <div className="order-1 rounded-2xl bg-[#f5f5f5] p-6 text-center md:order-2 md:bg-transparent md:p-0 md:text-left">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Tené siempre a mano
          </h2>
          <h3 className="mt-1 text-3xl font-bold text-[#33BAF0] md:text-4xl">
            tu Credencial Digital
          </h3>

          <ul className="mt-6 space-y-3 text-base text-gray-700 md:text-lg">
            {[
              "Práctica, rápida y segura.",
              "Amigable con el medioambiente.",
              "Funciona sin conexión.",
              "Cartilla, turnos y credencial al instante.",
              "Compartila con tu grupo familiar.",
            ].map((t, i) => (
              <li key={i} className="flex justify-center gap-3 md:justify-start">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                  ✓
                </span>
                {t}
              </li>
            ))}
            <li className="mt-4 flex items-center justify-center gap-3 md:justify-start">
              <Image
                src="/assets/downloadappstore.svg"
                alt="Descargar en App Store"
                width={150}
                height={46}
                className="h-auto w-[150px]"
              />
              <Image
                src="/assets/downloadgooglechrome.svg"
                alt="Descargar en Google Play"
                width={170}
                height={50}
                className="h-auto w-[170px]"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}