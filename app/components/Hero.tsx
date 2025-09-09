// /components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate w-full h-[70vh] md:h-[80vh] flex items-center justify-center md:justify-start overflow-hidden">
      <Image
        src="/assets/hero/bannerv4.png"
        alt="Familia sonriendo en el living"
        fill
        priority
        quality={95}
        sizes="100vw"
        // movemos un poquito el encuadre hacia la derecha para liberar espacio a la izquierda
        className="object-cover  select-none"
        // si agregaste el tiny blur:
        placeholder="blur"
        blurDataURL="/assets/hero/banner2.png"
      />

      {/* Gradiente para legibilidad del texto (corregido: faltaba bg/pos) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      {/* Vignette suave arriba/abajo para disimular artefactos de escalado */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            ¿Querés asociarte?
          </h1>
          <p className="text-lg md:text-xl mb-10">
            Contratá la mejor cobertura médica para vos y tu familia.
          </p>
        <a
          href="/contacto"
          className="hidden md:inline-block bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-brand-blue-hover"
        >
          Afiliate ahora
        </a>

        <button
          type="button"
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
        </button>
        </div>
      </div>
    </section>
  );
}