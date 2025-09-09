// /app/prestadores/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartillaFilter from "../components/CartillaFilter";
import data from "../../data/prestadores.json";

type Prestador = {
  id: number;
  nombre: string;
  tipo: string;
  especialidades: string[];
  plan: string[];
  provincia: string;
  ciudad: string;
  direccion: string;
  telefono: string;
};

const HERO_SRC = "/assets/hero/cartillav2.png"; // poné acá el nombre que uses en /public

export default function PrestadoresPage() {
  const [items, setItems] = useState<Prestador[]>(data as Prestador[]);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[42vh] md:h-[56vh] w-full overflow-hidden">
        <Image
          src={HERO_SRC}
          alt="Cartilla y red de prestadores PREME"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[top_80%]" // un poquito desplazada a la izquierda
        />
        {/* veladura para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Cartilla médica
            </h1>
            <p className="mt-3 text-base md:text-lg text-white/90">
              Buscá por plan, especialidad y ubicación. Encontrá el profesional indicado.
            </p>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <main className="mx-auto max-w-7xl px-4 py-12">
        <header className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#092f57]">Buscador de prestadores</h2>
          <div className="mx-auto mt-3 mb-8 h-1 w-24 bg-[#33BAF0]" />
          <p className="text-gray-600">
            Filtrá por plan, especialidad, provincia y ciudad. Próximamente: geolocalización por radio.
          </p>
        </header>

        <section className="mt-8">
          <CartillaFilter onResults={setItems} />
        </section>

        {/* RESULTADOS */}
        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((p) => (
            <article key={p.id} className="rounded-2xl border border-black/5 bg-white p-5">
              <h3 className="text-xl font-bold text-[#092f57]">{p.nombre}</h3>
              <p className="text-sm text-gray-600">
                {p.tipo} • {p.especialidades.join(", ")}
              </p>
              <p className="mt-2 text-sm text-gray-700">{p.direccion}</p>
              <p className="text-sm text-gray-700">
                {p.ciudad}, {p.provincia}
              </p>
              <p className="mt-1 text-sm text-gray-700">Tel: {p.telefono}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.plan.map((pl) => (
                  <span
                    key={pl}
                    className="rounded-full bg-[#f1f5f9] px-3 py-1 text-xs text-[#092f57] ring-1 ring-black/5"
                  >
                    {pl}
                  </span>
                ))}
              </div>
            </article>
          ))}

          {items.length === 0 && (
            <div className="col-span-full rounded-xl border border-dashed p-10 text-center text-gray-500">
              No encontramos resultados con esos filtros.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}