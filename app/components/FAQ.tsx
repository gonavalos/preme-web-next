"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "¿Qué cubre Preme?",
    a: "Preme ofrece cobertura integral según el plan que elijas: consultas médicas, internación, cirugías, estudios, medicamentos con descuentos de hasta el 100%, urgencias 24/7, telemedicina y más. Todos los planes incluyen acceso a nuestra red de prestadores líderes.",
  },
  {
    q: "¿Cómo me afilio a Preme?",
    a: "Podés afiliarte 100% online desde nuestro formulario. Completás tus datos, elegís el plan que más te conviene y un asesor te contacta para finalizar el proceso. También podés acercarte a nuestras oficinas en Av. Colón 795, Córdoba.",
  },
  {
    q: "¿Puedo agregar a mi familia?",
    a: "Sí, todos nuestros planes permiten incluir a tu grupo familiar. Podés sumar a tu cónyuge e hijos con condiciones especiales y compartir la credencial digital desde la app.",
  },
  {
    q: "¿Tienen app móvil?",
    a: "Sí, la app Preme está disponible para iOS y Android. Desde la app podés acceder a tu credencial digital, gestionar turnos y autorizaciones, buscar prestadores con geolocalización y consultar tu cuenta corriente.",
  },
  {
    q: "¿Cuál es la red de prestadores?",
    a: "Contamos con una red de más de 2.800 prestadores en 540 localidades, incluyendo centros de referencia como Sanatorio Allende, Hospital Italiano y más. Podés buscar tu prestador desde nuestra cartilla online.",
  },
  {
    q: "¿Tienen cobertura en todo el país?",
    a: "Sí, Preme tiene cobertura a nivel nacional. Además de nuestra red en Córdoba, contamos con prestadores en las principales ciudades del país y un sistema de reintegros para atención fuera de la red.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold text-center text-[#092f57]">
          Preguntas frecuentes
        </h2>
        <div className="mx-auto mt-2 mb-10 h-1 w-20 bg-[#33BAF0]" />

        <div className="divide-y divide-gray-200">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="text-base lg:text-lg font-semibold text-[#0D2A53] group-hover:text-[#33BAF0] transition-colors pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`shrink-0 h-5 w-5 text-[#33BAF0] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
