// /app/blog/alergias-verano/page.tsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Alergias en verano: recaudos para tu bienestar | PREME",
  description:
    "Conocé las alergias más comunes del verano, sus síntomas y cómo prevenirlas para disfrutar la temporada sin complicaciones.",
};

export default function AlergiasVerano() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/assets/blog/alergias-verano/hero.jpg"
          alt="Paisaje de verano con flores y cielo despejado"
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
            Alergias en verano: <br /> recaudos para tu bienestar
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-xl leading-relaxed">
            El sol, el polen y las piletas pueden traer molestias inesperadas.
            Aprendé a prevenir las alergias más comunes de la temporada.
          </p>
        </div>
      </section>

      {/* ===== BLOQUE 1 ===== */}
      <section className="relative bg-white py-20 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-14 md:gap-16">
          {/* Texto */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#0D2A53] mb-5 leading-snug">
              El verano también tiene sus alertas
            </h2>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-4">
              Pensamos en alergias y automáticamente las asociamos al otoño o la
              primavera. Pero el verano tiene sus propios disparadores: el
              <strong> polen de gramíneas, la exposición solar intensa, las
              picaduras de insectos</strong> y hasta el <strong>cloro de las
              piletas</strong> pueden provocar reacciones alérgicas.
            </p>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              Conocer los factores de riesgo y actuar a tiempo es la mejor
              estrategia para disfrutar la temporada sin sobresaltos.
            </p>
          </div>

          {/* Imagen con profundidad */}
          <div className="relative md:w-1/2 flex justify-center">
            <div className="absolute -inset-3 bg-[#D94B4B]/10 blur-2xl rounded-3xl" />
            <div className="relative z-10">
              <Image
                src="/assets/blog/alergias-verano/img1.jpg"
                alt="Persona aplicándose protector solar"
                width={640}
                height={460}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FRASE DESTACADA ===== */}
      <section className="py-24 bg-gradient-to-r from-[#FDEAEA] to-[#FBF5F5] text-center relative overflow-hidden">
        <p className="max-w-3xl mx-auto text-2xl sm:text-3xl font-semibold text-[#D94B4B] leading-snug">
          &ldquo;Prevenir es mucho más simple que tratar una reacción alérgica.&rdquo;
        </p>
        <p className="text-[#0D2A53]/60 mt-3 text-sm">— Equipo Médico PREME</p>
      </section>

      {/* ===== BLOQUE 2 ===== */}
      <section className="relative bg-white py-28 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen izquierda */}
          <div className="relative md:-mt-20">
            <div className="absolute -inset-4 bg-[#FDEAEA] blur-2xl rounded-full" />
            <Image
              src="/assets/blog/alergias-verano/img2.jpg"
              alt="Niño jugando en una pileta al aire libre"
              width={700}
              height={800}
              className="rounded-3xl shadow-xl relative z-10"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0D2A53] mb-5">Síntomas que debés conocer</h3>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-3">
              Las alergias de verano pueden manifestarse de formas variadas.
              Algunas señales frecuentes son:
            </p>
            <ul className="list-disc pl-6 text-[#0D2A53]/80 space-y-2">
              <li>Estornudos, congestión nasal y ojos llorosos por el polen.</li>
              <li>Erupciones, enrojecimiento o ampollas por exposición solar.</li>
              <li>Hinchazón y picazón intensa tras picaduras de insectos.</li>
              <li>Irritación en ojos y piel después de nadar en piletas con cloro.</li>
              <li>Urticaria o dermatitis de contacto con plantas o arena.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BLOQUE 3 — TIPS ===== */}
      <section className="py-20 px-6 sm:px-10 bg-[#FBF5F5]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0D2A53] text-center mb-10">
            Consejos para un verano sin alergias
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="col-span-2 relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/assets/blog/alergias-verano/img3.jpg"
                alt="Persona usando anteojos de sol y sombrero"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-center">
                <h4 className="font-bold text-[#0D2A53] mb-2">Protección solar</h4>
                <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                  Usá protector FPS 50+, lentes de sol con filtro UV y ropa
                  liviana que cubra la piel. Evitá exponerte entre las 11 y las 16 h.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-center">
                <h4 className="font-bold text-[#0D2A53] mb-2">Kit antialergia</h4>
                <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                  Llevá siempre antihistamínicos, repelente de insectos y una
                  crema calmante. Consultá a tu médico sobre el más adecuado.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <p className="text-[#0D2A53]/80 leading-relaxed mb-3">
              <strong>En la pileta:</strong> enjuagate con agua dulce después de
              nadar, usá antiparras y aplicá crema hidratante para minimizar la
              irritación del cloro. Si tenés piel sensible, optá por piletas de
              agua salada cuando sea posible.
            </p>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              <strong>¿Cuándo consultar a un especialista?</strong> Si las
              reacciones son recurrentes, intensas o afectan tu respiración, es
              momento de visitar a un alergista. Una evaluación profesional puede
              hacer toda la diferencia.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 text-center bg-gradient-to-b from-[#FDEAEA] to-white">
        <h4 className="text-3xl font-bold text-[#0D2A53] mb-4">
          Disfrutá el verano con tranquilidad
        </h4>
        <p className="text-[#0D2A53]/70 mb-8">
          Con prevención y atención, las alergias no tienen por qué arruinar tu temporada.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-full bg-[#D94B4B] text-white font-semibold px-8 py-3 hover:bg-[#C13E3E] transition"
        >
          Ver más artículos
        </Link>
      </section>

      <Footer />
    </>
  );
}
