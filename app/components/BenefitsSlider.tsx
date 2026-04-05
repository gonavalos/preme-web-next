"use client";

import { useState } from "react";

const BENEFITS = [
  {
    title: "Libre elección de prestadores",
    desc: "Elegí libremente dentro de la cartilla sin necesidad de derivación previa.",
  },
  {
    title: "Acceso directo a todas las prestaciones",
    desc: "Usá tu credencial digital y accedé sin órdenes.",
  },
  {
    title: "Estudios sin autorización",
    desc: "Los estudios de baja complejidad se realizan sin autorización previa.",
  },
  {
    title: "Autorizaciones online a cargo de prestadores",
    desc: "Cada autorización la realiza tu prestador, y nuestro equipo de asesores está disponible para orientarte en todo momento.",
  },
  {
    title: "App Preme",
    desc: "Descargá la app y gestioná tus turnos, autorizaciones y beneficios.",
  },
  {
    title: "Atención personalizada",
    desc: "Te acompañamos desde la adhesión hasta cada consulta.",
  },
];

export default function BenefitsSlider() {
  const [index, setIndex] = useState(0);
  const visible = 2; // Mostrar 2 por vez
  const totalSlides = Math.ceil(BENEFITS.length / visible);
  const start = index * visible;
  const shown = BENEFITS.slice(start, start + visible);

  return (
    <section className="max-w-5xl mx-auto mt-10 relative">
      {/* Contenedor de cards */}
      <div
        key={index}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ease-out"
      >
        {shown.map((item, i) => (
          <div
            key={i}
            className="flex flex-col p-5 md:p-6 rounded-2xl bg-white border border-[#33BAF0]/10 
                       shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#33BAF0]/10 border border-[#33BAF0]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#33BAF0"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-[15px] md:text-[17px] font-semibold text-[#092f57]">
                {item.title}
              </h4>
            </div>
            <p className="text-gray-700 text-[14px] md:text-[15px] leading-snug">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Líneas de navegación */}
      <div className="flex justify-center items-center gap-6 mt-8">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[3.5px] w-18 rounded-full transition-all ${
              i === index ? "bg-[#33BAF0]" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}