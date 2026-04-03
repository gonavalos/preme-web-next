// /app/blog/chequeos-preventivos/page.tsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Chequeos preventivos: por qué hacerlos una vez al año | PREME",
  description:
    "Descubrí qué incluye un chequeo preventivo, por qué es clave hacerlo anualmente y cómo Preme cubre todos los estudios sin autorización previa.",
};

export default function ChequeosPreventivos() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/assets/blog/chequeos-preventivos/hero.jpg"
          alt="Consulta médica preventiva"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-20 left-8 sm:left-16 text-white max-w-2xl z-10">
          <span className="inline-block mb-3 bg-[#D94B4B]/80 text-xs font-semibold px-3 py-1 rounded-full">
            PREVENCIÓN
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Chequeos preventivos: <br /> por qué hacerlos una vez al año
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-xl leading-relaxed">
            La prevención salva vidas. Un chequeo anual puede detectar problemas
            a tiempo y mantenerte saludable por más tiempo.
          </p>
        </div>
      </section>

      {/* ===== BLOQUE 1 ===== */}
      <section className="relative bg-white py-20 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-14 md:gap-16">
          {/* Texto */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#0D2A53] mb-5 leading-snug">
              ¿Qué incluye un chequeo preventivo?
            </h2>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-4">
              Un chequeo preventivo es un conjunto de <strong>estudios y evaluaciones</strong> que
              permiten conocer el estado general de tu salud, incluso cuando no tenés
              síntomas. La idea es detectar cualquier problema en etapa temprana,
              cuando todavía es fácil de tratar.
            </p>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              Generalmente incluye <strong>análisis de sangre y orina</strong>, control de
              presión arterial, electrocardiograma, evaluación de visión, control
              odontológico y, según la edad, estudios más específicos como mamografías,
              densitometría o PSA.
            </p>
          </div>

          {/* Imagen con profundidad */}
          <div className="relative md:w-1/2 flex justify-center">
            <div className="absolute -inset-3 bg-[#D94B4B]/10 blur-2xl rounded-3xl" />
            <div className="relative z-10">
              <Image
                src="/assets/blog/chequeos-preventivos/img1.jpg"
                alt="Análisis de sangre en laboratorio"
                width={640}
                height={460}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FRASE DESTACADA ===== */}
      <section className="py-24 bg-gradient-to-r from-[#FDE8E8] to-[#FFF5F5] text-center relative overflow-hidden">
        <p className="max-w-3xl mx-auto text-2xl sm:text-3xl font-semibold text-[#D94B4B] leading-snug">
          &ldquo;La mejor medicina es la que se aplica antes de que la necesites.
          Prevenir es cuidarte de verdad.&rdquo;
        </p>
        <p className="text-[#0D2A53]/60 mt-3 text-sm">— Equipo Médico PREME</p>
      </section>

      {/* ===== BLOQUE 2 ===== */}
      <section className="relative bg-white py-28 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen izquierda */}
          <div className="relative md:-mt-20">
            <div className="absolute -inset-4 bg-[#FDE8E8] blur-2xl rounded-full" />
            <Image
              src="/assets/blog/chequeos-preventivos/img2.jpg"
              alt="Médico realizando un electrocardiograma"
              width={700}
              height={800}
              className="rounded-3xl shadow-xl relative z-10"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0D2A53] mb-5">
              ¿Qué estudios según tu edad?
            </h3>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-3">
              Las recomendaciones varían según la etapa de la vida. Acá te dejamos
              una guía orientativa para que sepas qué priorizar en tu próximo chequeo.
            </p>
            <ul className="list-disc pl-6 text-[#0D2A53]/80 space-y-2">
              <li><strong>18 a 30 años:</strong> análisis de sangre, control de presión, examen de visión y vacunas al día.</li>
              <li><strong>30 a 45 años:</strong> sumá electrocardiograma, control de tiroides y glucemia en ayunas.</li>
              <li><strong>45 a 60 años:</strong> incluí colonoscopía, mamografía/PSA, densitometría y fondo de ojo.</li>
              <li><strong>Más de 60 años:</strong> chequeo cardiológico completo, evaluación cognitiva y control articular.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BLOQUE 3 — BENEFICIOS ===== */}
      <section className="py-20 px-6 sm:px-10 bg-[#FFF5F5]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0D2A53] text-center mb-10">
            ¿Por qué la prevención salva vidas?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D94B4B]/10 flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-bold text-[#0D2A53] mb-2">Detección temprana</h4>
              <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                Muchas enfermedades no dan síntomas al principio. Un análisis
                de rutina puede detectar problemas antes de que avancen.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D94B4B]/10 flex items-center justify-center">
                <span className="text-2xl">💪</span>
              </div>
              <h4 className="font-bold text-[#0D2A53] mb-2">Mejor calidad de vida</h4>
              <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                Saber que estás bien te da tranquilidad. Y si hay algo para
                corregir, podés actuar a tiempo y con mejores resultados.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D94B4B]/10 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-bold text-[#0D2A53] mb-2">Sin autorización previa</h4>
              <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                Con Preme, todos los estudios preventivos están cubiertos
                y no necesitás autorización previa. Sacá turno directo desde la app.
              </p>
            </div>
          </div>
          <p className="text-center text-[#0D2A53]/70 mt-8 max-w-2xl mx-auto">
            Desde la <strong>app de Preme</strong> podés agendar tu chequeo preventivo anual
            en pocos pasos. Elegí el centro médico más cercano, seleccioná la fecha
            y listo. Sin trámites, sin esperas.
          </p>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 text-center bg-gradient-to-b from-[#FDE8E8] to-white">
        <h4 className="text-3xl font-bold text-[#0D2A53] mb-4">
          No esperes a sentirte mal para cuidarte
        </h4>
        <p className="text-[#0D2A53]/70 mb-8">
          Agendá tu chequeo preventivo anual con Preme. Tu salud futura empieza hoy.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-full bg-[#D94B4B] text-white font-semibold px-8 py-3 hover:bg-[#B83D3D] transition"
        >
          Ver más artículos
        </Link>
      </section>

      <Footer />
    </>
  );
}
