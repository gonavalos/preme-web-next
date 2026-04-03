// /app/blog/deshidratacion/page.tsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Deshidratación: señales que tu cuerpo te envía | PREME",
  description:
    "Conocé los síntomas de la deshidratación, cuánta agua necesitás por día y tips prácticos para mantenerte hidratado en el calor cordobés.",
};

export default function Deshidratacion() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/assets/blog/deshidratacion/hero.jpg"
          alt="Vaso de agua fresca con rodajas de limón"
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
            Deshidratación: <br /> señales que tu cuerpo te envía
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-xl leading-relaxed">
            El calor cordobés pone a prueba tu hidratación. Aprendé a reconocer
            las señales y a cuidarte antes de que sea tarde.
          </p>
        </div>
      </section>

      {/* ===== BLOQUE 1 ===== */}
      <section className="relative bg-white py-20 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-14 md:gap-16">
          {/* Texto */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#0D2A53] mb-5 leading-snug">
              ¿Qué es la deshidratación y por qué importa?
            </h2>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-4">
              La deshidratación ocurre cuando tu cuerpo pierde más líquido del que
              recibe. No hace falta estar en el desierto: con las temperaturas de
              Córdoba en verano, <strong>perder agua sin darte cuenta</strong> es
              más común de lo que pensás.
            </p>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              Un cuerpo deshidratado no puede regular la temperatura, transportar
              nutrientes ni eliminar toxinas de forma eficiente. Por eso, mantenerte
              hidratado es uno de los hábitos más simples y poderosos para tu salud.
            </p>
          </div>

          {/* Imagen con profundidad */}
          <div className="relative md:w-1/2 flex justify-center">
            <div className="absolute -inset-3 bg-[#D94B4B]/10 blur-2xl rounded-3xl" />
            <div className="relative z-10">
              <Image
                src="/assets/blog/deshidratacion/img1.jpg"
                alt="Persona tomando agua al aire libre"
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
          &ldquo;Cuando sentís sed, tu cuerpo ya lleva rato pidiéndote agua.&rdquo;
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
              src="/assets/blog/deshidratacion/img2.jpg"
              alt="Frutas frescas ricas en agua"
              width={700}
              height={800}
              className="rounded-3xl shadow-xl relative z-10"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0D2A53] mb-5">Señales que no podés ignorar</h3>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-3">
              Tu cuerpo te avisa antes de que la situación se vuelva grave. Prestá
              atención a estas <strong>señales tempranas de deshidratación</strong>:
            </p>
            <ul className="list-disc pl-6 text-[#0D2A53]/80 space-y-2">
              <li>Dolor de cabeza persistente, sobre todo en días de calor.</li>
              <li>Boca seca y labios agrietados.</li>
              <li>Orina oscura o con olor fuerte.</li>
              <li>Cansancio y falta de concentración sin razón aparente.</li>
              <li>Mareos o sensación de aturdimiento al levantarte.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BLOQUE 3 — TIPS ===== */}
      <section className="py-20 px-6 sm:px-10 bg-[#FBF5F5]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0D2A53] text-center mb-10">
            Tips para mantenerte hidratado
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="col-span-2 relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/assets/blog/deshidratacion/img3.jpg"
                alt="Infusiones y aguas saborizadas naturales"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-center">
                <h4 className="font-bold text-[#0D2A53] mb-2">Frutas aliadas</h4>
                <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                  Sandía, melón, naranja y pepino tienen más de un 90 % de agua.
                  Sumalas a tu día como snack o en ensaladas.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-center">
                <h4 className="font-bold text-[#0D2A53] mb-2">Infusiones frías</h4>
                <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                  Prepará tereré, agua con menta y limón o té frío sin azúcar.
                  Es más fácil tomar líquido cuando tiene sabor.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <p className="text-[#0D2A53]/80 leading-relaxed mb-3">
              <strong>¿Cuánta agua necesitás?</strong> La recomendación general es
              de al menos <strong>2 litros por día</strong>, pero en verano o si
              hacés actividad física, ese número puede subir a 3 o más. Usá
              alarmas en el celular o llevá siempre una botella reutilizable.
            </p>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              <strong>¿Cuándo es peligrosa?</strong> Si notás confusión, ritmo
              cardíaco acelerado, fiebre o dejás de orinar, consultá a un médico
              de forma urgente. La deshidratación severa puede requerir
              hidratación intravenosa.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 text-center bg-gradient-to-b from-[#FDEAEA] to-white">
        <h4 className="text-3xl font-bold text-[#0D2A53] mb-4">
          Tu salud empieza por un vaso de agua
        </h4>
        <p className="text-[#0D2A53]/70 mb-8">
          No esperes a sentir sed. Hidratarte es la forma más simple de cuidarte cada día.
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
