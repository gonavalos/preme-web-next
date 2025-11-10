// /app/blog/descanso-reparador/page.tsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Descanso reparador: dormí mejor, viví mejor | PREME",
  description:
    "Rutina y ambiente ideales para mejorar la calidad del sueño: luz, temperatura, horarios y hábitos que sí ayudan.",
};

export default function DescansoReparador() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/assets/blog/descanso-reparador/h1.png"
          alt="Dormitorio con luz cálida y cama ordenada"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-20 left-8 sm:left-16 max-w-2xl text-white z-10">
          <span className="inline-block mb-3 bg-[#2E9B71]/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
            BIENESTAR
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Descanso reparador:<br/> dormí mejor, viví mejor
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-xl leading-relaxed">
            Ajustes simples en tu rutina y ambiente pueden transformar tu energía y tu ánimo.
          </p>
        </div>
      </section>

      {/* BLOQUE 1 */}
      <section className="relative bg-white py-28 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-[#0D2A53] mb-4">
              La base: regularidad y entorno
            </h2>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              Establecer horarios consistentes (acostarse y levantarse) y diseñar un ambiente con
              <strong> luz tenue</strong>, <strong>temperatura fresca</strong> y <strong>pantallas fuera</strong>
              una hora antes, mejora notablemente la calidad del sueño.
            </p>
          </div>

          <div className="relative md:-mt-24">
            <div className="absolute -inset-4 bg-[#2E9B71]/10 blur-2xl rounded-full" />
            <Image
              src="/assets/blog/descanso-reparador/luz-tenue.png"
              alt="Luz tenue en dormitorio"
              width={700}
              height={500}
              className="rounded-3xl shadow-xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* FRASE DESTACADA */}
      <section className="relative overflow-hidden bg-[#EAF8EE]">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/assets/blog/descanso-reparador/bg-quote.png"
            alt=""
            fill
            className="object-contain object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/65 via-white/35 to-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#EAF8EE]/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 py-24 sm:py-28 text-center px-6">
          <p className="mx-auto max-w-3xl text-2xl sm:text-3xl font-semibold leading-snug text-[#2E9B71] drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
            “Dormir bien es el mejor multiplicador de energía y foco para tu día.”
          </p>
        </div>
      </section>

      {/* BLOQUE 2 */}
      <section className="relative bg-white py-28 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative md:-mt-20">
            <div className="absolute -inset-4 bg-[#EAF8EE] blur-2xl rounded-full" />
            <Image
              src="/assets/blog/descanso-reparador/rutina-noche.png"
              alt="Rutina de noche relajante"
              width={700}
              height={500}
              className="rounded-3xl shadow-xl relative z-10"
            />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-[#0D2A53] mb-4">Rutina previa</h3>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              Bajá la intensidad: ducha tibia, respiración, lectura ligera. Evitá comidas copiosas
              y cafeína por la tarde-noche. Un ritual de 20–30 minutos le “avisa” al cuerpo que es hora de descansar.
            </p>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-20 px-6 sm:px-10 bg-[#F8FBF9]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0D2A53] text-center mb-10">
            Claves prácticas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="col-span-2 relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <Image src="/assets/blog/descanso-reparador/cama-fresca.png" alt="Cama fresca" fill className="object-cover" />
            </div>
            <div className="grid gap-6">
              <div className="relative h-[190px] rounded-3xl overflow-hidden">
                <Image src="/assets/blog/descanso-reparador/sin-pantallas.png" alt="Sin pantallas" fill className="object-cover" />
              </div>
              <div className="relative h-[190px] rounded-3xl overflow-hidden">
                <Image src="/assets/blog/descanso-reparador/respiracion.png" alt="Respiración" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-b from-[#EAF8EE] to-white">
        <h4 className="text-3xl font-bold text-[#0D2A53] mb-4">Dormí mejor desde hoy</h4>
        <p className="text-[#0D2A53]/70 mb-8">Cambiá 1 hábito por vez y sostenelo 2 semanas.</p>
        <Link href="/blog" className="inline-flex items-center justify-center rounded-full bg-[#2E9B71] text-white font-semibold px-8 py-3 hover:bg-[#26835F] transition">
          Ver más artículos
        </Link>
      </section>

      <Footer />
    </>
  );
}