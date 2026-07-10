// app/formulario-landing/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type PlanName = "Plan Joven" | "Plan Coral" | "Plan Integral" | "Plan Máximo";

type PlanSection = {
  title: string;
  items: string[];
};

type PlanVariant = {
  key: string;
  label: string;
  sections: PlanSection[];
};

type PlanDetail =
  | {
      kind: "young";
      intro: string;
      variants: PlanVariant[];
    }
  | {
      kind: "simple";
      intro: string;
      sections: PlanSection[];
    };

const PLAN_TONES: Record<
  PlanName,
  {
    card: string;
    selectedRing: string;
    pill: string;
    detailBg: string;
    detailRing: string;
    detailAccentText: string;
  }
> = {
  "Plan Joven": {
    card: "bg-white border-[#F79630]/40",
    selectedRing: "ring-[#F79630]",
    pill: "bg-[#F79630]/10 text-[#A25400] border-[#F79630]/40",
    detailBg: "bg-[#FFF5EA]",
    detailRing: "border-[#F79630]/50",
    detailAccentText: "text-[#A25400]",
  },
  "Plan Coral": {
    card: "bg-white border-[#33BAF0]/40",
    selectedRing: "ring-[#33BAF0]",
    pill: "bg-[#33BAF0]/10 text-[#075985] border-[#33BAF0]/40",
    detailBg: "bg-[#EAF7FF]",
    detailRing: "border-[#33BAF0]/50",
    detailAccentText: "text-[#075985]",
  },
  "Plan Integral": {
    card: "bg-white border-[#68AE26]/40",
    selectedRing: "ring-[#68AE26]",
    pill: "bg-[#68AE26]/10 text-[#166534] border-[#68AE26]/40",
    detailBg: "bg-[#F1FBE9]",
    detailRing: "border-[#68AE26]/50",
    detailAccentText: "text-[#166534]",
  },
  "Plan Máximo": {
    card: "bg-white border-[#864D8D]/40",
    selectedRing: "ring-[#864D8D]",
    pill: "bg-[#864D8D]/10 text-[#4C1D95] border-[#864D8D]/40",
    detailBg: "bg-[#F7F1FA]",
    detailRing: "border-[#864D8D]/50",
    detailAccentText: "text-[#4C1D95]",
  },
};

const PLAN_DETAILS: Record<PlanName, PlanDetail> = {
  "Plan Joven": {
    kind: "young",
    intro:
      "Opciones Joven Integral y Joven Máximo, pensadas para quienes buscan alta cobertura en sus primeras etapas laborales o de estudio.",
    variants: [
      {
        key: "joven_maximo",
        label: "Plan Joven Máximo",
        sections: [
          {
            title: "Acceso a la Cobertura",
            items: [
              "Obtené tu credencial en menos de un mes y sin esperas.",
              "Libre elección de prestadores dentro de la cartilla de plan Máximo, sin derivación previa.",
              "Acceso a todas las prestaciones solo con la credencial, sin órdenes, sin coseguros.",
              "Estudios de baja complejidad sin autorización previa.",
              "Autorización online a cargo de los prestadores.",
            ],
          },
          {
            title: "Principales prestaciones con Cobertura 100%",
            items: [
              "Consultas médicas todas las especialidades.",
              "Servicio de urgencias y emergencias 24 hs.",
              "Consultas médicas a domicilio.",
              "Estudios de baja, mediana y alta complejidad.",
              "Tratamientos auxiliares: kinesiología, fonoaudiología, foniatría y fisiatría (25 sesiones/año).",
              "Internaciones clínicas o quirúrgicas (programadas o no).",
              "Terapia Intensiva y Unidad Coronaria.",
              "Medicamentos y descartables en internación.",
              "Prótesis internas permanentes de origen nacional.",
              "Odontología general.",
              "Internaciones psiquiátricas (30 días/año).",
              "Programas especiales, tratamientos oncológicos y trasplantes.",
            ],
          },
          {
            title: "Otras Coberturas",
            items: [
              "Descuento 50% en medicamentos ambulatorios en la red de Farmacias PREME.",
              "Descuento 70% en crónicos (Ley 310) en prestador específico.",
              "Psicología y Psiquiatría (30 sesiones/año) con coseguro.",
              "Ópticas: coberturas con porcentajes variados.",
              "Prótesis odontológicas: 50% de cobertura.",
              "Reintegros por profesionales fuera de cartilla (según normas, valores y topes PREME).",
              "Seguro de sepelio.",
              "Prestadores exclusivos.",
            ],
          },
        ],
      },
      {
        key: "joven_integral",
        label: "Plan Joven Integral",
        sections: [
          {
            title: "Acceso a la Cobertura",
            items: [
              "Obtené tu credencial en menos de un mes y sin esperas.",
              "Libre elección de prestadores dentro de la cartilla de plan Integral, sin derivación previa.",
              "Acceso a todas las prestaciones solo con la credencial, sin órdenes, sin coseguros.",
              "Estudios de baja complejidad sin autorización previa.",
              "Autorización online a cargo de los prestadores.",
            ],
          },
          {
            title: "Principales prestaciones con Cobertura 100%",
            items: [
              "Consultas médicas todas las especialidades.",
              "Servicio de urgencias y emergencias 24 hs.",
              "Estudios de baja, mediana y alta complejidad.",
              "Tratamientos auxiliares: kinesiología, fonoaudiología, foniatría y fisiatría (25 sesiones/año).",
              "Internaciones clínicas o quirúrgicas (programadas o no).",
              "Terapia Intensiva y Unidad Coronaria.",
              "Medicamentos y descartables en internación.",
              "Prótesis internas permanentes de origen nacional.",
              "Odontología general.",
              "Internaciones psiquiátricas (30 días/año).",
              "Programas especiales, tratamientos oncológicos y trasplantes.",
            ],
          },
          {
            title: "Otras Coberturas",
            items: [
              "Consultas médicas a domicilio con coseguro.",
              "Descuento 50% en medicamentos ambulatorios (red PREME).",
              "Descuento 70% en crónicos (Ley 310) en prestador específico.",
              "Psicología y Psiquiatría (30 sesiones/año) con coseguro.",
              "Ópticas: porcentajes variados.",
              "Prótesis odontológicas: 50% de cobertura.",
              "Seguro de sepelio.",
            ],
          },
        ],
      },
    ],
  },
  "Plan Coral": {
    kind: "simple",
    intro:
      "Plan pensado para quienes buscan cobertura amplia y sólida con valores accesibles. Cubre necesidades al 100% con coseguros en ambulatorio y libre acceso a los prestadores de cartilla.",
    sections: [
      {
        title: "Acceso a la Cobertura",
        items: [
          "Libre elección de prestadores dentro de la cartilla de plan Coral, sin derivación previa.",
          "Acceso a todas las prestaciones solo con credencial, con coseguros en ambulatorio.",
          "Posibilidad de no pagar coseguro en prestador específico.",
          "Estudios de baja complejidad sin autorización previa.",
          "Autorización online a cargo de los prestadores.",
        ],
      },
      {
        title: "Principales prestaciones con Cobertura 100%",
        items: [
          "Internaciones clínicas o quirúrgicas (programadas o no).",
          "Cama para acompañante hasta 12 años.",
          "Terapia Intensiva, Unidad Coronaria y Neonatología.",
          "Medicamentos y descartables en internación.",
          "Prótesis internas permanentes de origen nacional.",
          "Partos o cesáreas y Plan Materno Infantil.",
          "Odontología general.",
          "Internaciones psiquiátricas (30 días/año).",
          "Servicio de urgencias y emergencias 24 hs.",
          "Programas especiales, tratamientos oncológicos y trasplantes.",
        ],
      },
      {
        title: "Ambulatorio y Otras Coberturas",
        items: [
          "Consultas médicas todas las especialidades (con coseguro).",
          "Estudios de baja, mediana y alta complejidad (con coseguro).",
          "Sin coseguros en un prestador específico.",
          "Consultas a domicilio con coseguro.",
          "Psicología y Psiquiatría (30 sesiones/año) con coseguro.",
          "Tratamientos auxiliares (25 sesiones/año) con coseguro.",
          "Ecografía translucencia nucal en prestador específico (con coseguro).",
          "50% en medicamentos ambulatorios (red PREME).",
          "70% en crónicos (Ley 310) en prestador específico.",
          "Ópticas sin límite de edad, porcentajes variados.",
        ],
      },
    ],
  },
  "Plan Integral": {
    kind: "simple",
    intro:
      "Cobertura total sin coseguros y libre acceso a todos los prestadores de la cartilla. Desde la consulta hasta procedimientos complejos con cobertura 100%.",
    sections: [
      {
        title: "Acceso a la Cobertura",
        items: [
          "Libre elección de prestadores dentro de la cartilla de plan Integral, sin derivación previa.",
          "Acceso a todas las prestaciones solo con la credencial, sin órdenes ni coseguros.",
          "Estudios de baja complejidad sin autorización previa.",
          "Autorización online a cargo de los prestadores.",
        ],
      },
      {
        title: "Principales prestaciones con Cobertura 100%",
        items: [
          "Consultas médicas todas las especialidades.",
          "Urgencias y emergencias 24 hs.",
          "Estudios de baja, mediana y alta complejidad.",
          "Tratamientos auxiliares: kinesiología, fonoaudiología, foniatría y fisiatría (25 sesiones/año).",
          "Internaciones clínicas o quirúrgicas (programadas o no).",
          "Cama para acompañante hasta los 12 años.",
          "Terapia Intensiva, Unidad Coronaria, Neonatología.",
          "Medicamentos y descartables en internación.",
          "Prótesis internas permanentes de origen nacional.",
          "Partos o cesáreas y Plan Materno Infantil.",
          "Odontología general.",
          "Ecografía translucencia nucal en prestador específico.",
          "Internaciones psiquiátricas (30 días/año).",
          "Programas especiales, tratamientos oncológicos y trasplantes.",
        ],
      },
      {
        title: "Otras Coberturas",
        items: [
          "Consultas médicas a domicilio con coseguro.",
          "50% en medicamentos ambulatorios (red PREME).",
          "70% en crónicos (Ley 310) en prestador específico.",
          "Psicología y Psiquiatría (30 sesiones/año) con coseguro.",
          "Ópticas sin límite de edad, porcentajes variados.",
          "Prótesis odontológicas 50% de cobertura.",
          "Ortodoncia odontológica 50% hasta los 15 años.",
          "Seguro de sepelio.",
        ],
      },
    ],
  },
  "Plan Máximo": {
    kind: "simple",
    intro:
      "Cobertura de máximo alcance para la familia, con 100% en prestaciones, libre acceso a prestadores y reintegros con topes fuera de cartilla.",
    sections: [
      {
        title: "Acceso a la Cobertura",
        items: [
          "Libre elección de prestadores dentro de la cartilla de plan Máximo, sin derivación previa.",
          "Acceso a todas las prestaciones solo con la credencial, sin órdenes ni coseguros.",
          "Estudios de baja complejidad sin autorización previa.",
          "Autorización online a cargo de los prestadores.",
        ],
      },
      {
        title: "Principales prestaciones con Cobertura 100%",
        items: [
          "Consultas médicas todas las especialidades.",
          "Urgencias y emergencias 24 hs.",
          "Consultas médicas a domicilio.",
          "Estudios de baja, mediana y alta complejidad.",
          "Tratamientos auxiliares (25 sesiones/año).",
          "Internaciones clínicas o quirúrgicas (programadas o no).",
          "Cama para acompañante hasta 12 años.",
          "Terapia Intensiva, Unidad Coronaria, Neonatología.",
          "Medicamentos y descartables en internación.",
          "Prótesis internas permanentes de origen nacional.",
          "Partos o cesáreas y Plan Materno Infantil.",
          "Odontología general.",
          "Ecografía 4D y translucencia nucal en prestador específico.",
          "Internaciones psiquiátricas (30 días/año).",
          "Programas especiales, tratamientos oncológicos y trasplantes.",
        ],
      },
      {
        title: "Otras Coberturas",
        items: [
          "50% en medicamentos ambulatorios (red PREME).",
          "70% en crónicos (Ley 310) en prestador específico.",
          "Psicología y Psiquiatría (30 sesiones/año) con coseguro.",
          "Ópticas sin límite de edad, porcentajes variados.",
          "Prótesis odontológicas 50% de cobertura.",
          "Ortodoncia odontológica 50% hasta los 15 años.",
          "Reintegros fuera de cartilla (según normas, valores y topes PREME).",
          "Seguro de sepelio.",
          "Prestadores exclusivos.",
        ],
      },
    ],
  },
};

const PLAN_UPGRADES: Record<PlanName, string[]> = {
  "Plan Joven": [],
  "Plan Coral": [],
  "Plan Integral": [
    "Clinica y Maternidad Del Sol",
    "Sanatorio Aconcagua",
    "Sanatorio Del Salvador",
  ],
  "Plan Máximo": [
    "Sanatorio Allende",
    "Sanatorio Allende Cerro de las Rosas",
  ],
};

const PLAN_BENEFITS_SHORT: Record<PlanName, string[]> = {
  "Plan Joven": [
    "Tu cobertura en el acto.",
    "Consultas médicas sin límite.",
    "100% en anticonceptivos y descuentos en ópticas y farmacias.",
  ],
  "Plan Coral": [
    "100% en internaciones y prótesis nacionales.",
    "Consultas médicas ilimitadas y médico a domicilio.",
    "Descuentos en farmacias desde el 50%.",
  ],
  "Plan Integral": [
    "Sin coseguros en consultas y estudios.",
    "Libre acceso a todos los prestadores.",
    "50% de descuento en prótesis y ortodoncia.",
  ],
  "Plan Máximo": [
    "Incluye Sanatorio Allende y red premium.",
    "Plan abierto con reintegros fuera de cartilla.",
    "Sin órdenes, sin derivación y sin coseguros.",
  ],
};

const planes: {
  id: PlanName;
  title: string;
  desc: string;
  badge: string;
  color: string;
  highlight: string;
}[] = [
  {
    id: "Plan Joven",
    title: "Plan Joven",
    desc: "Ideal para menores de 30 años.",
    badge: "Más popular entre jóvenes",
    color: "#F79630",
    highlight: "Solo con tu recibo de sueldo y sin pagar de más.",
  },
  {
    id: "Plan Coral",
    title: "Plan Coral",
    desc: "Cobertura completa a un costo muy accesible.",
    badge: "Mejor relación precio-calidad",
    color: "#33BAF0",
    highlight: "Red de prestadores nivel 1.",
  },
  {
    id: "Plan Integral",
    title: "Plan Integral",
    desc: "El equilibrio perfecto para tu familia.",
    badge: "Más elegido por familias",
    color: "#68AE26",
    highlight: "TODO lo del Plan Coral y mucho más.",
  },
  {
    id: "Plan Máximo",
    title: "Plan Máximo",
    desc: "La cobertura más completa de PREME.",
    badge: "Premium",
    color: "#864D8D",
    highlight: "Incluye Sanatorio Allende y red premium.",
  },
];

export default function PlanesContactoPage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanName | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    nombre: "",
    tel: "",
    email: "",
    edad: "",
    situacionLaboral: "",
    integrantes: "",
    ciudad: "",
    mensaje: "",
    afiliado: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("/api/preme/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          plan: selectedPlan,
          fuente: "Landing Web PREME - Planes",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error || "Error al enviar el formulario");
      }

      setSuccessMsg("¡Gracias! Un asesor de PREME se contactará con vos en breve.");
      setForm({
        nombre: "",
        tel: "",
        email: "",
        edad: "",
        situacionLaboral: "",
        integrantes: "",
        ciudad: "",
        mensaje: "",
        afiliado: "",
      });
      setSelectedPlan(null);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Ocurrió un error, intentá nuevamente.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Imagen de fondo del hero */}
        <div className="absolute inset-0">
          <Image
            src="/assets/landing/vaa4.avif"
            alt="Madre joven y su hija disfrutando juntas en casa, afiliadas a PREME"
            fill
            priority
            className="object-cover w-full h-full"
            style={{ objectPosition: "right top" }}
          />
          {/* Degradé más concentrado a la izquierda para texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/85 via-sky-900/35 to-sky-900/0" />
        </div>

        {/* Header con logo */}
        <header className="relative z-30 bg-white/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-4 flex items-center">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logoPreme.png"
                alt="PREME"
                width={230}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
          </div>
        </header>

        {/* Contenido del hero */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8 pt-10 pb-16 lg:pt-20 lg:pb-24">
          <div className="space-y-6 text-left max-w-xl text-slate-50">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-3 py-1 text-[11px] font-semibold text-white shadow-md">
              <span className="h-2 w-2 rounded-full bg-white" />
              +45 años cuidando la salud de familias argentinas.
            </span>

            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
                Planes de salud PREME
                <br />
                <span className="text-sky-300">
                  Elegí tu plan de salud y afiliate en minutos.
                </span>
              </h1>
              <p className="text-sm md:text-base text-slate-100/95 max-w-xl">
                Completás tus datos, seleccionás el plan que más se ajuste a tu
                realidad y un asesor de PREME te acompaña en todo el proceso de
                afiliación: coberturas, cartilla, valores y alternativas.
              </p>
            </div>

            <ul className="space-y-2 text-[13px] text-slate-100/90">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300" />
                <span>Amplia Cartilla de prestadores.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300" />
                <span>Proceso de afiliación simple, digital y acompañado.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300" />
                <span>Asesoramiento personalizado sin costo.</span>
              </li>
            </ul>

          </div>
        </div>
      </section>

      {/* SECCIÓN PLANES + FORMULARIO */}
      <section className="bg-[#F5F5F7] py-4 lg:py-14">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 grid gap-8 lg:grid-cols-[1.05fr,1.1fr] items-start">
          {/* Columna izquierda: planes */}
          <div>
            {/* Barra de título */}
            <div className="mb-6">
              <div className="relative overflow-hidden rounded-3xl shadow-lg">
                <div className="relative z-10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between px-5 py-5 md:px-7 md:py-6 bg-gradient-to-r from-sky-900 via-sky-800 to-sky-500 text-slate-50">
                  <div className="max-w-md">
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-1 text-sky-100">
                      Planes pensados para vos
                    </p>
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                      Elegí el plan de interés
                    </h2>
                    <p className="text-[11px] md:text-xs text-slate-100/90 mt-1.5">
                      Podés seleccionar un plan para que el asesor ya sepa qué te
                      interesa, o dejarlo en blanco y que te ayuden a elegir según tu
                      realidad laboral y familiar.
                    </p>
                  </div>

                  <div className="mt-3 md:mt-0 flex flex-col items-start md:items-end text-[11px] gap-1.5">
                    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 font-semibold">
                      4 planes de cobertura PREME
                    </span>
                    <span className="inline-flex items-center gap-1 text-sky-100/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                      Más opciones para distintas etapas de tu vida.
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-y-0 right-[-80px] w-[180px] bg-sky-300/60 transform -skew-x-12" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0">
                  <svg
                    viewBox="0 0 1440 80"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-6 md:h-8"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="#F8FAFC"
                      d="M0,64L48,58.7C96,53,192,43,288,37.3C384,32,480,32,576,37.3C672,43,768,53,864,58.7C960,64,1056,64,1152,64C1248,64,1344,64,1392,64L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cards de planes */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Planes de salud PREME
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Elegí el plan que más se parezca a tu realidad. Siempre podés cambiar luego.
                  </p>
                </div>
                <span className="hidden md:inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] text-slate-600">
                  Podés dejar el plan en blanco y recibir asesoramiento
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {planes.map((plan) => {
                  const isSelected = selectedPlan === plan.id;
                  const tone = PLAN_TONES[plan.id];
                  const shortBenefits = PLAN_BENEFITS_SHORT[plan.id];

                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() =>
                        setSelectedPlan((prev) => (prev === plan.id ? null : plan.id))
                      }
                      className={`group text-left rounded-2xl border p-4 transition-all shadow-sm flex flex-col gap-3 cursor-pointer ${tone.card} ${
                        isSelected
                          ? `${tone.selectedRing} ring-2 ring-offset-1 ring-offset-slate-50`
                          : "border-slate-200 hover:border-slate-300"
                      } hover:shadow-md hover:-translate-y-[1px]`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${tone.pill}`}
                          >
                            {plan.badge}
                          </span>
                          <h3 className="font-semibold text-slate-900 text-base md:text-lg">
                            {plan.title}
                          </h3>
                          <p className="text-xs text-slate-600">{plan.desc}</p>
                          {shortBenefits?.[0] && (
                            <p className="mt-1 text-[11px] text-slate-700">
                              {shortBenefits[0]}
                            </p>
                          )}
                          <p
                            className="mt-1 text-[11px] font-semibold"
                            style={{ color: plan.color }}
                          >
                            {plan.highlight}
                          </p>
                        </div>
                        <div
                          className="h-10 w-10 rounded-full flex items-center justify-center text-[11px] font-semibold text-white shadow-sm shrink-0"
                          style={{ backgroundColor: plan.color }}
                        >
                          {plan.id.replace("Plan ", "")}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] mt-2 text-slate-600">
                        <span>
                          {isSelected
                            ? "Plan seleccionado para tu consulta."
                            : "Hacé clic para elegir este plan."}
                        </span>
                        <span
                          className="font-semibold"
                          style={{ color: plan.color }}
                        >
                          {isSelected ? "Plan elegido" : "Elegir plan"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detalle del plan seleccionado */}
            <div className="mt-6">
              {selectedPlan ? (
                (() => {
                  const details = PLAN_DETAILS[selectedPlan];
                  const upgrades = PLAN_UPGRADES[selectedPlan] || [];
                  const planMeta = planes.find((p) => p.id === selectedPlan)!;
                  const tone = PLAN_TONES[selectedPlan];

                  return (
                    <div
                      className={`rounded-3xl shadow-md border px-4 py-4 md:px-5 md:py-5 ${tone.detailBg} ${tone.detailRing}`}
                    >
                      <div className="mb-4 rounded-2xl border border-slate-200 px-3.5 py-3 bg-white/90">
                        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                          Resumen de coberturas
                        </p>
                        <h3 className="mt-1 text-sm md:text-base font-semibold text-slate-900">
                          {selectedPlan}
                        </h3>
                        {planMeta?.highlight && (
                          <p
                            className={`mt-0.5 text-[11px] font-medium ${tone.detailAccentText}`}
                          >
                            {planMeta.highlight}
                          </p>
                        )}
                        {details.intro && (
                          <p className="mt-1.5 text-[11px] md:text-[12px] leading-relaxed text-slate-700">
                            {details.intro}
                          </p>
                        )}
                      </div>

                      {"variants" in details ? (
                        <div className="grid gap-3 md:grid-cols-2">
                          {details.variants.map((variant) => (
                            <div
                              key={variant.key}
                              className="rounded-2xl bg-white border border-slate-200 px-3.5 py-3 shadow-sm"
                              style={{
                                borderLeftColor: planMeta.color,
                                borderLeftWidth: 4,
                                borderLeftStyle: "solid",
                              }}
                            >
                              <p className="text-[12px] font-semibold text-slate-900 mb-1.5">
                                {variant.label}
                              </p>
                              <ul className="space-y-1 text-[11px] text-slate-700">
                                {variant.sections[0]?.items.slice(0, 5).map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-1.5"
                                  >
                                    <span
                                      className="mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0"
                                      style={{
                                        backgroundColor: planMeta.color,
                                      }}
                                    />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid gap-3 md:grid-cols-2">
                          {details.sections.slice(0, 2).map((section) => (
                            <div
                              key={section.title}
                              className="rounded-2xl bg-white border border-slate-200 px-3.5 py-3 shadow-sm"
                              style={{
                                borderLeftColor: planMeta.color,
                                borderLeftWidth: 4,
                                borderLeftStyle: "solid",
                              }}
                            >
                              <p className="text-[12px] font-semibold text-slate-900 mb-1.5">
                                {section.title}
                              </p>
                              <ul className="space-y-1 text-[11px] text-slate-700">
                                {section.items.slice(0, 5).map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-1.5"
                                  >
                                    <span
                                      className="mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0"
                                      style={{
                                        backgroundColor: planMeta.color,
                                      }}
                                    />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {upgrades.length > 0 && (
                        <div
                          className="mt-4 rounded-2xl border px-3.5 py-3 bg-white/80 space-y-2"
                          style={{ borderColor: planMeta.color }}
                        >
                          <p className="text-[11px] font-semibold text-slate-900">
                            Instituciones y centros médicos destacados en este plan:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {upgrades.map((name) => (
                              <span
                                key={name}
                                className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-medium border bg-slate-50"
                                style={{
                                  borderColor: planMeta.color,
                                }}
                              >
                                <span
                                  className="h-1.5 w-1.5 rounded-full"
                                  style={{ backgroundColor: planMeta.color }}
                                />
                                <span className="text-slate-800">{name}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {(selectedPlan === "Plan Integral" ||
                        selectedPlan === "Plan Máximo") && (
                        <div className="mt-3 text-[11px] text-slate-600">
                          {selectedPlan === "Plan Integral" ? (
                            <span>
                              Ideal si buscás subir de nivel desde un plan con coseguros,
                              pero querés olvidarte de pagar adicionales en consultas y
                              estudios.
                            </span>
                          ) : (
                            <span>
                              Nuestra propuesta más completa: pensada para familias que
                              priorizan prestadores premium, reintegros y la tranquilidad
                              de tener todo cubierto.
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })()
              ) : (
                <div className="rounded-3xl border border-dashed border-slate-200 px-4 py-4 text-xs text-slate-500 bg-white/60">
                  Seleccioná uno de los planes para ver un resumen de coberturas e
                  instituciones destacadas.
                </div>
              )}
            </div>

            <div className="mt-5 rounded-2xl bg-sky-50 px-4 py-3 border border-sky-100 text-xs text-sky-900">
              <p className="font-semibold mb-1">¿No sabés qué plan elegir?</p>
              <p>
                Completá el formulario igual y marcá en comentarios tu situación.
                Un asesor te orienta para encontrar la mejor opción.
              </p>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div>
            <div className="rounded-3xl bg-gradient-to-b from-sky-50/90 via-white to-slate-50 shadow-xl border border-sky-100 p-[1px]">
              <div className="h-full w-full rounded-[22px] bg-white/95 p-6 md:p-7">
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide">
                      Formulario de contacto
                    </p>
                    <span className="inline-flex items-center rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-medium text-sky-700 border border-sky-100">
                      Respuesta rápida de un asesor
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                    Dejanos tus datos y te llamamos
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Un asesor de PREME se comunicará por teléfono o WhatsApp para
                    contarte todo sobre cartilla, coberturas y valores.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Plan seleccionado
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={selectedPlan || ""}
                      placeholder="Podés elegir un plan en la columna izquierda (opcional)"
                      className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      ¿Ya sos afiliado a PREME?
                    </label>
                    <select
                      name="afiliado"
                      value={form.afiliado}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500"
                    >
                      <option value="">Seleccionar</option>
                      <option value="Afiliado actual">Sí, ya soy afiliado</option>
                      <option value="Interesado en afiliarse">
                        No, quiero afiliarme
                      </option>
                    </select>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Nombre y apellido *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500"
                        placeholder="Ej: Juan Pérez"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="tel"
                        value={form.tel}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500"
                        placeholder="Ej: 351 000 0000"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500"
                        placeholder="tuemail@ejemplo.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Edad
                      </label>
                      <input
                        type="number"
                        name="edad"
                        value={form.edad}
                        onChange={handleChange}
                        min={0}
                        className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500"
                        placeholder="Ej: 32"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Situación laboral
                      </label>
                      <select
                        name="situacionLaboral"
                        value={form.situacionLaboral}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500"
                      >
                        <option value="">Seleccionar</option>
                        <option value="Relación de dependencia">
                          Relación de dependencia
                        </option>
                        <option value="Monotributista">Monotributista</option>
                        <option value="Autónomo">Autónomo</option>
                        <option value="Jubilado/Pensionado">
                          Jubilado / Pensionado
                        </option>
                        <option value="Desempleado">Desempleado</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Integrantes del grupo familiar
                      </label>
                      <input
                        type="number"
                        name="integrantes"
                        value={form.integrantes}
                        onChange={handleChange}
                        min={1}
                        className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500"
                        placeholder="Ej: 3"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Ciudad / Localidad
                      </label>
                      <input
                        type="text"
                        name="ciudad"
                        value={form.ciudad}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500"
                        placeholder="Ej: Córdoba Capital"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Comentarios adicionales
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      rows={3}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500"
                      placeholder="Ej: tengo obra social actual, quiero averiguar para cambiarme / sumar a mi familia."
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white px-6 py-2.5 text-sm font-semibold shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? "Enviando..." : "Quiero que me contacten"}
                    </button>
                  </div>

                  <p className="text-[9px] text-slate-500">
                    * Al enviar tus datos, aceptás ser contactado por PREME por
                    teléfono, WhatsApp o correo electrónico. Tus datos se tratarán de
                    forma confidencial.
                  </p>

                  {successMsg && (
                    <p className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-2xl px-3 py-2">
                      {successMsg}
                    </p>
                  )}
                  {errorMsg && (
                    <p className="text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-2xl px-3 py-2">
                      {errorMsg}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}