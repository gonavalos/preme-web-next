// /app/blog/rosacea/page.tsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Rosácea: tips para cuidar tu piel | PREME",
  description:
    "Conocé qué es la rosácea, cuáles son sus desencadenantes y cómo cuidar tu piel con una rutina diaria. Preme cubre consultas dermatológicas.",
};

export default function Rosacea() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src="/assets/blog/rosacea/hero.jpg"
          alt="Cuidado de la piel y dermatología"
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
            Rosácea: tips para <br /> cuidar tu piel
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-xl leading-relaxed">
            La rosácea afecta a millones de personas. Con los cuidados correctos,
            podés reducir los brotes y mantener tu piel saludable todos los días.
          </p>
        </div>
      </section>

      {/* ===== BLOQUE 1 ===== */}
      <section className="relative bg-white py-20 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-14 md:gap-16">
          {/* Texto */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#0D2A53] mb-5 leading-snug">
              ¿Qué es la rosácea?
            </h2>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-4">
              La rosácea es una <strong>condición crónica de la piel</strong> que provoca
              enrojecimiento, pequeños vasos sanguíneos visibles y, en algunos casos,
              granitos en la zona de la cara. Suele afectar mejillas, nariz, frente y mentón.
            </p>
            <p className="text-[#0D2A53]/80 leading-relaxed">
              Aunque no tiene cura definitiva, se puede <strong>controlar muy bien</strong> con
              una rutina adecuada y el acompañamiento de un dermatólogo. Conocer tus
              desencadenantes es el primer paso para reducir los brotes.
            </p>
          </div>

          {/* Imagen con profundidad */}
          <div className="relative md:w-1/2 flex justify-center">
            <div className="absolute -inset-3 bg-[#D94B4B]/10 blur-2xl rounded-3xl" />
            <div className="relative z-10">
              <Image
                src="/assets/blog/rosacea/img1.jpg"
                alt="Rostro con signos de rosácea leve"
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
          "La piel habla. Escucharla y cuidarla es el mejor tratamiento que existe."
        </p>
        <p className="text-[#0D2A53]/60 mt-3 text-sm">— Equipo de Dermatología PREME</p>
      </section>

      {/* ===== BLOQUE 2 ===== */}
      <section className="relative bg-white py-28 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen izquierda */}
          <div className="relative md:-mt-20">
            <div className="absolute -inset-4 bg-[#FDE8E8] blur-2xl rounded-full" />
            <Image
              src="/assets/blog/rosacea/img2.jpg"
              alt="Protector solar y productos dermatológicos"
              width={700}
              height={800}
              className="rounded-3xl shadow-xl relative z-10"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0D2A53] mb-5">
              Desencadenantes y rutina diaria
            </h3>
            <p className="text-[#0D2A53]/80 leading-relaxed mb-3">
              Hay factores que pueden empeorar la rosácea. Identificarlos te ayuda a
              prevenir brotes y mantener la piel más calma. Además, una rutina simple
              pero constante marca una gran diferencia.
            </p>
            <ul className="list-disc pl-6 text-[#0D2A53]/80 space-y-2">
              <li><strong>Sol:</strong> usá protector solar SPF 50+ todos los días, incluso en invierno.</li>
              <li><strong>Calor extremo:</strong> evitá saunas, baños muy calientes y bebidas hirviendo.</li>
              <li><strong>Comidas picantes:</strong> las especias fuertes pueden generar enrojecimiento.</li>
              <li><strong>Estrés:</strong> practicá técnicas de relajación como respiración profunda o yoga.</li>
              <li><strong>Alcohol:</strong> reducí el consumo, especialmente de vino tinto.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BLOQUE 3 — TIPS ===== */}
      <section className="py-20 px-6 sm:px-10 bg-[#FFF5F5]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0D2A53] text-center mb-10">
            Tu rutina de cuidado en 4 pasos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D94B4B]/10 flex items-center justify-center">
                <span className="text-2xl">1</span>
              </div>
              <h4 className="font-bold text-[#0D2A53] mb-2">Limpieza suave</h4>
              <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                Usá un limpiador sin jabón, con pH neutro. Evitá frotar
                y secá con toques suaves.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D94B4B]/10 flex items-center justify-center">
                <span className="text-2xl">2</span>
              </div>
              <h4 className="font-bold text-[#0D2A53] mb-2">Hidratación</h4>
              <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                Elegí cremas hipoalergénicas, sin perfume ni alcohol.
                La piel hidratada resiste mejor los brotes.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D94B4B]/10 flex items-center justify-center">
                <span className="text-2xl">3</span>
              </div>
              <h4 className="font-bold text-[#0D2A53] mb-2">Protección solar</h4>
              <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                SPF 50+ mineral es ideal para pieles sensibles.
                Reaplicá cada 2 horas si estás al aire libre.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D94B4B]/10 flex items-center justify-center">
                <span className="text-2xl">4</span>
              </div>
              <h4 className="font-bold text-[#0D2A53] mb-2">Consultá al dermatólogo</h4>
              <p className="text-[#0D2A53]/70 text-sm leading-relaxed">
                Un profesional puede indicarte tratamientos específicos.
                Con Preme, tus consultas dermatológicas están cubiertas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 text-center bg-gradient-to-b from-[#FDE8E8] to-white">
        <h4 className="text-3xl font-bold text-[#0D2A53] mb-4">
          Tu piel merece atención profesional
        </h4>
        <p className="text-[#0D2A53]/70 mb-8">
          Con Preme tenés acceso a dermatólogos y especialistas. No dejes pasar los síntomas.
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
