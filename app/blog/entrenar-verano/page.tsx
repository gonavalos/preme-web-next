// /app/blog/entrenar-verano/page.tsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Entrenar en verano: tips para cuidar tu salud | PREME",
  description:
    "Descubrí los mejores horarios, actividades y cuidados para entrenar en verano sin poner en riesgo tu salud.",
};

export default function EntrenarVerano() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/assets/blog/entrenar-verano/hero.jpg"
          alt="Persona corriendo al amanecer en un parque"
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
            Entrenar en verano: <br /> tips para cuidar tu salud
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-xl leading-relaxed">
            El calor no es excusa para frenar, pero sí para entrenar con
            inteligencia. Te damos las claves para moverte seguro.
          </p>
        </div>
      </section>

      {/* ===== BLOQUE 1 ===== */}
      <section className="relative bg-white py-20 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-14 md:gap-16">
          {/* Texto */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#0D2A53] mb-5 leading-snug">
              Elegí el momento justo para moverte
            </h2>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-4">
              En verano, el horario lo cambia todo. Entrenar bajo el sol del
              mediodía no solo es incómodo, sino que puede ser peligroso. Los
              mejores momentos para hacer actividad física son las
              <strong> primeras horas de la mañana</strong> (antes de las 9) o
              <strong> al atardecer</strong> (después de las 19).
            </p>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              Estos horarios te permiten disfrutar de temperaturas más
              agradables, menor radiación UV y un rendimiento mucho mejor. Tu
              cuerpo te lo va a agradecer.
            </p>
          </div>

          {/* Imagen con profundidad */}
          <div className="relative md:w-1/2 flex justify-center">
            <div className="absolute -inset-3 bg-[#2E9B71]/10 blur-2xl rounded-3xl" />
            <div className="relative z-10">
              <Image
                src="/assets/blog/entrenar-verano/img1.jpg"
                alt="Reloj marcando temprano con fondo de amanecer"
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
          &ldquo;Entrenar bien en verano no es hacer más, es hacer con cabeza.&rdquo;
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
              src="/assets/blog/entrenar-verano/img2.jpg"
              alt="Persona hidratándose durante el ejercicio"
              width={700}
              height={800}
              className="rounded-3xl shadow-xl relative z-10"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0D2A53] mb-5">Hidratación y señales de alerta</h3>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-3">
              Cuando entrenás con calor, tu cuerpo pierde líquido mucho más
              rápido. La hidratación no es opcional: es parte del entrenamiento.
              Y tenés que conocer las <strong>señales de golpe de calor</strong>:
            </p>
            <ul className="list-disc pl-6 text-[#0D2A53]/80 space-y-2">
              <li>Bebé agua antes, durante y después de cada sesión.</li>
              <li>Si sentís mareos, náuseas o dejás de transpirar, frená de inmediato.</li>
              <li>Piel enrojecida y caliente al tacto: señal de alerta seria.</li>
              <li>Confusión o desorientación: buscá sombra y pedí ayuda.</li>
              <li>Sumá bebidas con electrolitos si entrenás más de una hora.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BLOQUE 3 — ACTIVIDADES ===== */}
      <section className="py-20 px-6 sm:px-10 bg-[#F8FBF9]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0D2A53] text-center mb-10">
            Actividades ideales para el verano
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="col-span-2 relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/assets/blog/entrenar-verano/img3.jpg"
                alt="Persona nadando en una pileta al aire libre"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-center">
                <h4 className="font-bold text-[#0D2A53] mb-2">Natación</h4>
                <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                  Ejercicio completo que trabaja todo el cuerpo sin impacto
                  articular. Ideal para refrescarte mientras entrenás.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-center">
                <h4 className="font-bold text-[#0D2A53] mb-2">Yoga al aire libre</h4>
                <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                  Conectá con tu cuerpo y la naturaleza. A primera hora de la
                  mañana, es una experiencia que renueva cuerpo y mente.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <p className="text-[#0D2A53]/80 leading-relaxed mb-3">
              <strong>Caminatas al atardecer:</strong> una opción accesible y
              efectiva. 30 a 45 minutos de caminata activa mejoran tu
              cardiovascular, tu ánimo y tu descanso nocturno. Elegí recorridos
              con sombra y llevá siempre tu botella de agua.
            </p>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              <strong>No te olvides del protector solar.</strong> Aunque no vayas
              a la playa, si entrenás al aire libre tu piel recibe radiación UV.
              Aplicá protector FPS 50+ media hora antes de salir y reponelo cada
              dos horas. Tu piel también necesita que la cuides.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 text-center bg-gradient-to-b from-[#EAF8EE] to-white">
        <h4 className="text-3xl font-bold text-[#0D2A53] mb-4">
          Mové el cuerpo, cuidá tu salud
        </h4>
        <p className="text-[#0D2A53]/70 mb-8">
          El verano es para disfrutar. Entrená con inteligencia y hacé que cada sesión sume.
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
