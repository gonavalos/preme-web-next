// /app/contacto/page.tsx
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MapCard from "../components/MapCard";
import ContactForm from "../components/ContactForm";
import ContactChannels from "../components/ContactChannels";

export default function ContactoPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[40vh] sm:h-[48vh] md:h-[56vh]">
        <Image
          src="/assets/hero/contacto.png"
          alt="Contacto PREME"
          fill
          priority
          className="object-cover object-[50%_60%] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
            <div className="max-w-2xl text-white">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide">
                Contacto
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
                Estamos para ayudarte
              </h1>
              <p className="mt-3 text-base md:text-lg text-white/90">
                Escribinos o acercate a nuestra sede. Respondemos rápido.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#form"
                  className="rounded-lg px-5 py-3 text-white font-semibold"
                  style={{ backgroundColor: "#33BAF0" }}
                >
                  Escribinos
                </a>
                <a
                  href="#mapa"
                  className="rounded-lg border border-white/60 px-5 py-3 text-white hover:bg-white/10"
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <main className="mx-auto max-w-7xl px-4 md:px-6 py-12">
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#092f57]">Contacto</h2>
          <div className="mx-auto mt-3 mb-8 h-1 w-24 bg-[#33BAF0]" />
          <p className="text-gray-600">Elegí el canal que prefieras. ¡Te leemos!</p>
        </header>

        {/* Fila superior: Form + Canales */}
        <section className="mt-8 grid gap-8 md:grid-cols-2 items-start">
          {/* Formulario */}
          <div
            id="form"
            className="rounded-2xl border border-black/10 bg-white p-6 md:p-7 shadow-sm h-full flex flex-col"
          >
            <h3 className="text-lg font-semibold text-[#092f57]">Escribinos</h3>
            <div className="mt-4 flex-1">
              <ContactForm />
            </div>
          </div>

          {/* Canales de atención */}
          <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-7 shadow-sm h-full">
            <h3 className="text-lg font-semibold text-[#092f57]">Canales de atención</h3>
            <div className="mt-2 mb-6 h-1 w-16 bg-[#33BAF0]" />
            <ContactChannels />
          </div>
        </section>
      </main>

      {/* MAPA full-width (fuera del contenedor) */}
      <section id="mapa" className="mt-12">
        {/* -mx-* elimina el padding lateral del body en móviles si lo hubiera */}
        <div className="-mx-0">
          <MapCard
            variant="wide"
            address="Av. Colón 795, Córdoba, Argentina"
            query="PREME Medicina Privada, Av. Colón 795, Córdoba, Argentina"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}