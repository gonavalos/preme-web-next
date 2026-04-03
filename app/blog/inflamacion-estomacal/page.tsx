// /app/blog/inflamacion-estomacal/page.tsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Inflamación por comer en exceso: cómo aliviar el malestar | PREME",
  description:
    "Descubrí por qué comer de más genera hinchazón, qué hacer para aliviar el malestar rápidamente y cuándo consultar a un gastroenterólogo.",
};

export default function InflamacionEstomacal() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/assets/blog/inflamacion-estomacal/hero.jpg"
          alt="Malestar estomacal y salud digestiva"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-20 left-8 sm:left-16 text-white max-w-2xl z-10">
          <span className="inline-block mb-3 bg-[#D94B4B]/80 text-xs font-semibold px-3 py-1 rounded-full">
            SALUD
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Inflamación por comer <br /> en exceso: cómo aliviarte
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-xl leading-relaxed">
            Todos alguna vez comimos de más. Aprendé por qué se produce la hinchazón,
            cómo aliviarla rápido y cuándo es momento de consultar a un especialista.
          </p>
        </div>
      </section>

      {/* ===== BLOQUE 1 ===== */}
      <section className="relative bg-white py-20 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-14 md:gap-16">
          {/* Texto */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#0D2A53] mb-5 leading-snug">
              ¿Por qué nos hinchamos al comer de más?
            </h2>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-4">
              Cuando comemos en exceso, el estómago se distiende más de lo habitual.
              Esto genera una <strong>sensación de pesadez, hinchazón abdominal</strong> y,
              en muchos casos, gases y malestar general. El sistema digestivo necesita
              más tiempo y esfuerzo para procesar esa cantidad de alimento.
            </p>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              Además, comer rápido o hablar mucho mientras comemos hace que traguemos
              aire, lo que aumenta la distensión. Las comidas muy grasas o con mucha
              fibra también pueden agravar la situación.
            </p>
          </div>

          {/* Imagen con profundidad */}
          <div className="relative md:w-1/2 flex justify-center">
            <div className="absolute -inset-3 bg-[#D94B4B]/10 blur-2xl rounded-3xl" />
            <div className="relative z-10">
              <Image
                src="/assets/blog/inflamacion-estomacal/img1.jpg"
                alt="Persona con malestar abdominal"
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
          &ldquo;Escuchar a tu cuerpo es el primer paso para cuidar tu digestión.
          Comé despacio, disfrutá cada bocado.&rdquo;
        </p>
        <p className="text-[#0D2A53]/60 mt-3 text-sm">— Equipo de Gastroenterología PREME</p>
      </section>

      {/* ===== BLOQUE 2 ===== */}
      <section className="relative bg-white py-28 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen izquierda */}
          <div className="relative md:-mt-20">
            <div className="absolute -inset-4 bg-[#FDE8E8] blur-2xl rounded-full" />
            <Image
              src="/assets/blog/inflamacion-estomacal/img2.jpg"
              alt="Infusión de hierbas para aliviar la digestión"
              width={700}
              height={800}
              className="rounded-3xl shadow-xl relative z-10"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0D2A53] mb-5">
              Alivio rápido: qué hacer cuando te pasaste
            </h3>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-3">
              Si ya comiste de más, no te preocupes. Hay algunas acciones simples que
              ayudan a acelerar la digestión y reducir el malestar de forma natural.
            </p>
            <ul className="list-disc pl-6 text-[#0D2A53]/80 space-y-2">
              <li><strong>Infusión digestiva:</strong> tomá un té de manzanilla, menta o jengibre tibio.</li>
              <li><strong>Caminata suave:</strong> caminar 15-20 minutos ayuda a mover el sistema digestivo.</li>
              <li><strong>Evitá acostarte:</strong> esperá al menos 2 horas antes de ir a dormir.</li>
              <li><strong>Comidas livianas después:</strong> al día siguiente, optá por frutas, caldos y alimentos blandos.</li>
              <li><strong>Hidratación:</strong> tomá agua en pequeños sorbos durante las horas siguientes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BLOQUE 3 — CUÁNDO CONSULTAR ===== */}
      <section className="py-20 px-6 sm:px-10 bg-[#FFF5F5]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0D2A53] text-center mb-10">
            ¿Cuándo es momento de consultar al médico?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D94B4B]/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#D94B4B]">!</span>
              </div>
              <h4 className="font-bold text-[#0D2A53] mb-2">Dolor intenso o persistente</h4>
              <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                Si el dolor abdominal no cede después de unas horas o se vuelve
                muy fuerte, consultá a un profesional.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D94B4B]/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#D94B4B]">!</span>
              </div>
              <h4 className="font-bold text-[#0D2A53] mb-2">Episodios frecuentes</h4>
              <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                Si la hinchazón se repite seguido, puede indicar intolerancia
                alimentaria, síndrome de intestino irritable u otra condición.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D94B4B]/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-[#D94B4B]">!</span>
              </div>
              <h4 className="font-bold text-[#0D2A53] mb-2">Otros síntomas asociados</h4>
              <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                Fiebre, vómitos, sangrado o pérdida de peso sin razón son señales
                para hacer una consulta médica urgente.
              </p>
            </div>
          </div>
          <p className="text-center text-[#0D2A53]/70 mt-8 max-w-2xl mx-auto">
            Con Preme, tenés acceso a <strong>gastroenterólogos</strong> y especialistas del
            aparato digestivo. Podés sacar turno desde la app o hacer una teleconsulta.
          </p>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 text-center bg-gradient-to-b from-[#FDE8E8] to-white">
        <h4 className="text-3xl font-bold text-[#0D2A53] mb-4">
          Tu digestión también es parte de tu salud
        </h4>
        <p className="text-[#0D2A53]/70 mb-8">
          Cuidá lo que comés y cómo lo comés. Y si algo no anda bien, consultá con un profesional.
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
