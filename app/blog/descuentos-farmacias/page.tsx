// /app/blog/descuentos-farmacias/page.tsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Descuentos en farmacias: hasta 100% con Preme | PREME",
  description:
    "Conocé cómo acceder a descuentos de hasta el 100% en medicamentos con tu plan Preme. Te explicamos cómo usar el beneficio, qué farmacias lo aceptan y más.",
};

export default function DescuentosFarmacias() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/assets/blog/descuentos-farmacias/hero.jpg"
          alt="Farmacia con medicamentos y descuentos Preme"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-20 left-8 sm:left-16 text-white max-w-2xl z-10">
          <span className="inline-block mb-3 bg-[#238AD4]/80 text-xs font-semibold px-3 py-1 rounded-full">
            NOVEDADES
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Descuentos en farmacias: <br /> hasta 100% con Preme
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-xl leading-relaxed">
            Ahorrá en tus medicamentos de todos los días. Con Preme tenés
            descuentos del 50%, 70% y hasta el 100% en farmacias de todo el país.
          </p>
        </div>
      </section>

      {/* ===== BLOQUE 1 ===== */}
      <section className="relative bg-white py-20 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-14 md:gap-16">
          {/* Texto */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#0D2A53] mb-5 leading-snug">
              ¿Cómo funcionan los descuentos?
            </h2>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-4">
              Todos los planes de Preme incluyen <strong>descuentos en medicamentos</strong> que
              van desde el 50% hasta el 100%, dependiendo del tipo de fármaco y tu cobertura.
              Los medicamentos crónicos, ambulatorios y de uso frecuente tienen los mayores
              beneficios.
            </p>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              El descuento se aplica directamente en el mostrador de la farmacia. Solo
              necesitás presentar tu <strong>credencial digital de Preme</strong> desde la app
              o la credencial física, y el sistema calcula automáticamente el porcentaje
              que te corresponde.
            </p>
          </div>

          {/* Imagen con profundidad */}
          <div className="relative md:w-1/2 flex justify-center">
            <div className="absolute -inset-3 bg-[#238AD4]/10 blur-2xl rounded-3xl" />
            <div className="relative z-10">
              <Image
                src="/assets/blog/descuentos-farmacias/img1.jpg"
                alt="Credencial digital Preme en el celular"
                width={640}
                height={460}
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FRASE DESTACADA ===== */}
      <section className="py-24 bg-gradient-to-r from-[#E8F4FD] to-[#F5FAFF] text-center relative overflow-hidden">
        <p className="max-w-3xl mx-auto text-2xl sm:text-3xl font-semibold text-[#238AD4] leading-snug">
          "Cuidar tu salud no tiene que ser caro. Con Preme, tus medicamentos
          cuestan menos o directamente no cuestan nada."
        </p>
        <p className="text-[#0D2A53]/60 mt-3 text-sm">— Equipo PREME</p>
      </section>

      {/* ===== BLOQUE 2 ===== */}
      <section className="relative bg-white py-28 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen izquierda */}
          <div className="relative md:-mt-20">
            <div className="absolute -inset-4 bg-[#E8F4FD] blur-2xl rounded-full" />
            <Image
              src="/assets/blog/descuentos-farmacias/img2.jpg"
              alt="Persona retirando medicamentos en farmacia"
              width={700}
              height={800}
              className="rounded-3xl shadow-xl relative z-10"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0D2A53] mb-5">¿Qué farmacias aceptan Preme?</h3>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-3">
              Preme tiene convenio con las principales cadenas y farmacias independientes
              de todo el país. Podés usar tu beneficio en <strong>Farmacity, Farmacias del Pueblo,
              Farmacia Social Argentina</strong> y miles de locales adheridos en cada provincia.
            </p>
            <ul className="list-disc pl-6 text-[#0D2A53]/80 space-y-2">
              <li>Consultá en la app el listado actualizado de farmacias adheridas.</li>
              <li>Buscá farmacias cercanas usando el mapa interactivo.</li>
              <li>Verificá el porcentaje de descuento antes de ir, desde la sección "Mis beneficios".</li>
              <li>Si tu plan incluye cobertura al 100%, no pagás nada por medicamentos esenciales.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BLOQUE 3 — TIPS ===== */}
      <section className="py-20 px-6 sm:px-10 bg-[#F5FAFF]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0D2A53] text-center mb-10">
            Tips para aprovechar al máximo tus descuentos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#238AD4]/10 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-bold text-[#0D2A53] mb-2">Descargá la app</h4>
              <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                Tu credencial digital está siempre disponible en tu celular.
                No necesitás llevar nada más.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#238AD4]/10 flex items-center justify-center">
                <span className="text-2xl">💊</span>
              </div>
              <h4 className="font-bold text-[#0D2A53] mb-2">Chequeá tus descuentos</h4>
              <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                Desde la app podés ver qué porcentaje te corresponde por cada
                medicamento antes de ir a la farmacia.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#238AD4]/10 flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <h4 className="font-bold text-[#0D2A53] mb-2">Recetas digitales</h4>
              <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                Pedí recetas a través de teleconsulta y retirá tus medicamentos
                con descuento sin hacer filas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 text-center bg-gradient-to-b from-[#E8F4FD] to-white">
        <h4 className="text-3xl font-bold text-[#0D2A53] mb-4">
          Ahorrá en cada compra de farmacia
        </h4>
        <p className="text-[#0D2A53]/70 mb-8">
          Con Preme, tu salud está cubierta. Descubrí todos los beneficios que tenés disponibles.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-full bg-[#238AD4] text-white font-semibold px-8 py-3 hover:bg-[#1B6FAB] transition"
        >
          Ver más artículos
        </Link>
      </section>

      <Footer />
    </>
  );
}
