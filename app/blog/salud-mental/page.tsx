// /app/blog/salud-mental/page.tsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cuidar tu salud mental es parte de tu bienestar | PREME",
  description:
    "La salud mental importa tanto como la física. Conocé las señales de alerta, los beneficios de la terapia y cómo PREME te acompaña en el camino.",
};

export default function SaludMental() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/assets/blog/salud-mental/hero.jpg"
          alt="Persona meditando en un espacio tranquilo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-20 left-8 sm:left-16 text-white max-w-2xl z-10">
          <span className="inline-block mb-3 bg-[#2E9B71]/80 text-xs font-semibold px-3 py-1 rounded-full">
            BIENESTAR
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Cuidar tu salud mental <br /> es parte de tu bienestar
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-xl leading-relaxed">
            Hablar de lo que sentís no es debilidad. Es el primer paso para
            estar bien de verdad. Te contamos cómo cuidarte por dentro.
          </p>
        </div>
      </section>

      {/* ===== BLOQUE 1 ===== */}
      <section className="relative bg-white py-20 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-14 md:gap-16">
          {/* Texto */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#0D2A53] mb-5 leading-snug">
              ¿Por qué la salud mental importa tanto como la física?
            </h2>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-4">
              Muchas veces priorizamos el cuerpo y dejamos la mente para después.
              Pero la realidad es que <strong>no hay salud completa sin bienestar
              emocional</strong>. El estrés crónico, la ansiedad y la tristeza
              sostenida afectan tu sistema inmune, tu descanso y hasta tu corazón.
            </p>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              Reconocer que necesitás ayuda no es un signo de fragilidad, sino de
              inteligencia emocional. Y hoy existen herramientas accesibles para
              acompañarte en ese proceso.
            </p>
          </div>

          {/* Imagen con profundidad */}
          <div className="relative md:w-1/2 flex justify-center">
            <div className="absolute -inset-3 bg-[#2E9B71]/10 blur-2xl rounded-3xl" />
            <div className="relative z-10">
              <Image
                src="/assets/blog/salud-mental/img1.jpg"
                alt="Persona escribiendo en un diario personal"
                width={640}
                height={460}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FRASE DESTACADA ===== */}
      <section className="py-24 bg-gradient-to-r from-[#EAF8EE] to-[#F8FBF9] text-center relative overflow-hidden">
        <p className="max-w-3xl mx-auto text-2xl sm:text-3xl font-semibold text-[#2E9B71] leading-snug">
          "Pedir ayuda es un acto de valentía, no de debilidad."
        </p>
        <p className="text-[#0D2A53]/60 mt-3 text-sm">— Equipo de Bienestar PREME</p>
      </section>

      {/* ===== BLOQUE 2 ===== */}
      <section className="relative bg-white py-28 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen izquierda */}
          <div className="relative md:-mt-20">
            <div className="absolute -inset-4 bg-[#EAF8EE] blur-2xl rounded-full" />
            <Image
              src="/assets/blog/salud-mental/img2.jpg"
              alt="Sesión de terapia en un ambiente cálido"
              width={700}
              height={800}
              className="rounded-3xl shadow-xl relative z-10"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0D2A53] mb-5">Señales de que necesitás prestar atención</h3>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-3">
              No siempre es obvio. A veces el malestar emocional se disfraza de
              cansancio, irritabilidad o dolores físicos. Estas señales merecen
              tu atención:
            </p>
            <ul className="list-disc pl-6 text-[#0D2A53]/80 space-y-2">
              <li>Ansiedad constante o preocupación que no podés frenar.</li>
              <li>Dificultad para dormir o descansar bien.</li>
              <li>Sensación de agotamiento emocional permanente.</li>
              <li>Aislarte de personas que antes disfrutabas ver.</li>
              <li>Cambios bruscos en el apetito o en el humor.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BLOQUE 3 — TIPS ===== */}
      <section className="py-20 px-6 sm:px-10 bg-[#F8FBF9]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0D2A53] text-center mb-10">
            Hábitos que cuidan tu mente cada día
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="col-span-2 relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/assets/blog/salud-mental/img3.jpg"
                alt="Grupo de amigos compartiendo al aire libre"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-center">
                <h4 className="font-bold text-[#0D2A53] mb-2">Mové el cuerpo</h4>
                <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                  El ejercicio libera endorfinas y reduce el cortisol. Con 30
                  minutos de caminata ya hacés una diferencia enorme.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-center">
                <h4 className="font-bold text-[#0D2A53] mb-2">Conectá con otros</h4>
                <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                  Las relaciones sociales son un factor protector clave. No te
                  aísles: un mate compartido puede cambiar tu día.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <p className="text-[#0D2A53]/80 leading-relaxed mb-3">
              <strong>La terapia funciona.</strong> Hablar con un profesional te
              da herramientas concretas para manejar el estrés, entender tus
              emociones y construir una vida más equilibrada. No es solo para
              momentos de crisis: es una inversión en tu bienestar a largo plazo.
            </p>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              <strong>PREME te acompaña.</strong> Nuestros planes incluyen
              cobertura en sesiones de psicología para que accedas al
              acompañamiento que necesitás, sin barreras. Porque cuidar tu mente
              es cuidar tu salud integral.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 text-center bg-gradient-to-b from-[#EAF8EE] to-white">
        <h4 className="text-3xl font-bold text-[#0D2A53] mb-4">
          Estar bien por dentro se nota por fuera
        </h4>
        <p className="text-[#0D2A53]/70 mb-8">
          No dejes tu salud mental para después. El momento de cuidarte es ahora.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-full bg-[#2E9B71] text-white font-semibold px-8 py-3 hover:bg-[#26835F] transition"
        >
          Ver más artículos
        </Link>
      </section>

      <Footer />
    </>
  );
}
