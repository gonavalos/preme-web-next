// /app/blog/grasas-saludables/page.tsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Grasas saludables: las aliadas de tu bienestar | PREME",
  description:
    "Descubrí cuáles son las grasas buenas, cómo incorporarlas a tu dieta diaria y por qué son esenciales para tu salud cardiovascular y cerebral.",
};

export default function GrasasSaludables() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/assets/blog/grasas-saludables/h1.png"
          alt="Aceite de oliva, palta y frutos secos"
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
            Grasas saludables: <br /> las aliadas de tu bienestar
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-xl leading-relaxed">
            No todas las grasas son iguales. Algunas son esenciales para tu energía,
            tu cerebro y tu corazón. Te contamos cómo elegirlas e incorporarlas.
          </p>
        </div>
      </section>

   {/* ===== BLOQUE 1 ===== */}
<section className="relative bg-white py-20 px-6 sm:px-10">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-14 md:gap-16">
    {/* Texto */}
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-[#0D2A53] mb-5 leading-snug">
        Entender las grasas: amigas o enemigas
      </h2>
      <p className="text-[#0D2A53]/80 leading-relaxed mb-4">
        Escuchar la palabra “grasa” puede generar rechazo. Pero en realidad,
        son uno de los nutrientes más importantes para mantener la salud del cuerpo.
        Las <strong>grasas saludables</strong> aportan energía, ayudan a absorber vitaminas
        y son parte fundamental del funcionamiento celular.
      </p>
      <p className="text-[#0D2A53]/80 leading-relaxed">
        La clave está en distinguir las buenas de las malas: elegir aceites naturales,
        frutos secos y pescados ricos en omega-3 antes que productos ultraprocesados o frituras.
      </p>
    </div>

    {/* Imagen con profundidad */}
    <div className="relative md:w-1/2 flex justify-center">
      <div className="absolute -inset-3 bg-[#2E9B71]/10 blur-2xl rounded-3xl" />
      <div className="relative z-10">
        <Image
          src="/assets/blog/grasas-saludables/aceite-oliva.png"
          alt="Aceite de oliva extra virgen"
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
          “Las grasas saludables no se evitan, se eligen.”
        </p>
        <p className="text-[#0D2A53]/60 mt-3 text-sm">— Equipo de Nutrición PREME</p>
      </section>

      {/* ===== BLOQUE 2 ===== */}
      <section className="relative bg-white py-28 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen izquierda */}
          <div className="relative md:-mt-20">
            <div className="absolute -inset-4 bg-[#EAF8EE] blur-2xl rounded-full" />
            <Image
              src="/assets/blog/grasas-saludables/avocado.png"
              alt="Palta fresca"
              width={700}
              height={800}
              className="rounded-3xl shadow-xl relative z-10"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0D2A53] mb-5">Fuentes naturales que te cuidan</h3>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-3">
              Incorporar grasas saludables no requiere grandes cambios. Solo sumar opciones naturales:
              <strong> aceite de oliva, palta, frutos secos</strong> o <strong>pescados azules</strong>.
              Estos alimentos aportan ácidos grasos esenciales, antioxidantes y vitaminas.
            </p>
            <ul className="list-disc pl-6 text-[#0D2A53]/80 space-y-2">
              <li>Aceite de oliva en crudo sobre ensaladas o tostadas.</li>
              <li>Palta en desayunos o meriendas.</li>
              <li>Frutos secos naturales como colación diaria.</li>
              <li>Pescado azul dos veces por semana.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== GALERÍA ===== */}
      <section className="py-20 px-6 sm:px-10 bg-[#F8FBF9]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0D2A53] text-center mb-10">
            Ejemplos de grasas saludables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="col-span-2 relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/assets/blog/grasas-saludables/salmon.png"
                alt="Salmón con verduras"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-6">
              <div className="relative h-[190px] rounded-3xl overflow-hidden">
                <Image
                  src="/assets/blog/grasas-saludables/frutos-secos.png"
                  alt="Frutos secos naturales"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[190px] rounded-3xl overflow-hidden">
                <Image
                  src="/assets/blog/grasas-saludables/tostadas.png"
                  alt="Tostadas con palta"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 text-center bg-gradient-to-b from-[#EAF8EE] to-white">
        <h4 className="text-3xl font-bold text-[#0D2A53] mb-4">
          Tu bienestar empieza en la cocina 🌿
        </h4>
        <p className="text-[#0D2A53]/70 mb-8">
          Elegí calidad y equilibrio. No se trata de eliminar, sino de nutrir con inteligencia.
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