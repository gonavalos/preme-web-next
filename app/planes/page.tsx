// /app/planes/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import planesData from "../../data/planes.json";

type PlanJSON = {
  id: number;
  nombre: string;
  descripcion: string;
  beneficios: string[];
  color?: string;
  highlight?: string;
  buttonColor?: string;
  headerImageSrc?: string;
  image?: string;          // fallback si no hay headerImageSrc
  imageAlt?: string;
};

type PlanView = {
  id: number;
  title: string;
  subtitle: string;
  benefits: string[];
  color: string;
  cta: string;
  heroSrc: string;
  heroAlt: string;
};

// ---------- helpers ----------
function hexToRgb(hex: string) {
  const m = hex.replace("#", "").match(/^([0-9a-f]{6})$/i);
  if (!m) return null;
  const int = parseInt(m[1], 16);
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}
function rgba(hex: string, a: number) {
  const rgb = hexToRgb(hex);
  if (!rgb) return `rgba(51,186,240,${a})`; // fallback brand celeste
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`;
}

// ---------- contenido ampliado por plan ----------
type Section = { title: string; items?: string[]; body?: string };

type PlanDetail =
  | {
      // Planes simples
      kind: "simple";
      intro?: string;
      sections: Section[];
    }
  | {
      // Plan Joven con dos variantes
      kind: "young";
      intro: string;
      variants: {
        key: "joven_maximo" | "joven_integral";
        label: string;
        sections: Section[];
      }[];
    };

// Texto reusado
const JOVEN_INTRO =
  "El Plan Joven es un plan creado para jóvenes solteros menores de 30 años, sin carga de familia. Puede elegirse como Joven Máximo o Joven Integral según el aporte. Cobertura completa, de ágil y fácil acceso pensada para personas independientes.";

// Map de contenido por nombre de plan (title normalizado en minúsculas)
const EXPANDED: Record<string, PlanDetail> = {
  "plan joven": {
    kind: "young",
    intro: JOVEN_INTRO,
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

  "plan coral": {
    kind: "simple",
    intro:
      "Plan pensado para quienes buscan cobertura amplia y sólida con valores accesibles. Cubre necesidades al 100% con coseguros en ambulatorio y libre acceso a los prestadores de cartilla.",
    sections: [
      {
        title: "Acceso a la Cobertura",
        items: [
          "Libre elección de prestadores dentro de la cartilla de plan Coral, sin derivación previa.",
          "Acceso a todas las prestaciones solo con credencial, con coseguros en ambulatorio.",
          "Possibilidad de no pagar coseguro en prestador específico.",
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

  "plan integral": {
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

  "plan máximo": {
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

// ---------- Componentes UI locales ----------
function Accordion({
  title,
  color,
  children,
  defaultOpen = false,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl ring-1 ring-black/5 bg-white overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 md:px-6 py-4 md:py-5 text-left"
      >
        <span className="font-semibold text-[#092f57]">{title}</span>
        <span
          className="inline-flex h-6 w-6 items-center justify-center rounded-full text-white text-sm"
          style={{ backgroundColor: color }}
        >
          {open ? "−" : "+"}
        </span>
      </button>
      {open && <div className="px-4 md:px-6 pb-5">{children}</div>}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((t, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-sm text-gray-800">{t}</span>
        </li>
      ))}
    </ul>
  );
}

// ---------- Página ----------
export default function PlanesPage() {
  // Normalizamos planes desde JSON
  const planes: PlanView[] = useMemo(() => {
    const raw: PlanJSON[] = Array.isArray(planesData)
      ? (planesData as PlanJSON[])
      : ((planesData as { Plan?: PlanJSON[] }).Plan ?? []);
    return raw.map((p) => ({
      id: p.id,
      title: p.nombre,
      subtitle: p.descripcion,
      benefits: p.beneficios ?? [],
      color: p.color ?? "#33BAF0",
      cta: p.buttonColor ?? p.color ?? "#33BAF0",
      heroSrc: p.headerImageSrc || p.image || "/banner.png",
      heroAlt: p.imageAlt || p.nombre,
    }));
  }, []);

  const [active, setActive] = useState(0);
  const current = planes[active];

  // clave para buscar contenido ampliado
  const key = (current?.title || "").trim().toLowerCase();
  const detail = EXPANDED[key];

  // sub-variant para Plan Joven
  const [youngVar, setYoungVar] = useState<"joven_maximo" | "joven_integral">("joven_maximo");

  return (
    <>
      <Navbar />

      {/* HERO con imagen del plan seleccionado */}
      <section className="relative w-full h-[52vh] md:h-[60vh]">
        <Image
          src={current?.heroSrc || "/banner.png"}
          alt={current?.heroAlt || "Plan PREME"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[top_85%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/0" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 md:px-6 w-full">
            <div className="max-w-2xl text-white">
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: current?.cta || "#33BAF0" }}
              >
                {current?.title}
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
                Cobertura pensada para vos
              </h1>
              <p className="mt-3 text-base md:text-lg text-white/90">{current?.subtitle}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#detalle"
                  className="rounded-lg px-5 py-3 text-white font-semibold"
                  style={{ backgroundColor: current?.cta || "#33BAF0" }}
                >
                  Ver detalles del plan
                </a>
                <a
                  href="/contacto"
                  className="rounded-lg border border-white/60 px-5 py-3 text-white hover:bg-white/10"
                >
                  Quiero asesoramiento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SWITCHER de planes */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4">
          <div className="mx-auto max-w-3xl flex flex-wrap justify-center gap-8 md:gap-3">
            {planes.map((p, i) => {
              const isActive = i === active;
              const inactiveBg = rgba(p.cta, 0.12);
              const inactiveBorder = rgba(p.cta, 0.35);
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setActive(i);
                    // reset sub-variante si veníamos de Joven
                    setYoungVar("joven_maximo");
                  }}
                  aria-pressed={isActive}
                  className={[
                    "rounded-lg border font-semibold transition",
                    "px-4 md:px-4 py-1 md:py-3 text-base md:text-lg",
                    isActive ? "text-white" : "text-[#092f57] hover:brightness-105",
                  ].join(" ")}
                  style={{
                    backgroundColor: isActive ? p.cta : inactiveBg,
                    borderColor: isActive ? p.cta : inactiveBorder,
                  }}
                >
                  {p.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETALLE del plan seleccionado */}
      <section id="detalle" className="mx-auto max-w-7xl px-4 md:px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Ficha de beneficios “rápidos” (lo que ya tenías) */}
          <article className="rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden">
            <div
              className="h-2"
              style={{ background: `linear-gradient(90deg, ${current?.color} 0%, #ffffff 100%)` }}
            />
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold" style={{ color: current?.color }}>
                {current?.title}
              </h2>
              <p className="mt-1 text-gray-700">{current?.subtitle}</p>

              {current?.benefits?.length > 0 && (
                <>
                  <h3 className="mt-6 mb-2 font-semibold text-[#092f57]">Beneficios destacados</h3>
                  <ul className="space-y-3 text-sm text-gray-800">
                    {current.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                          ✓
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`/formulario-landing?plan=${encodeURIComponent(current?.title || "")}`}
                  className="rounded-lg px-5 py-3 text-white font-semibold"
                  style={{ backgroundColor: current?.cta || "#33BAF0" }}
                >
                  Elegir este plan
                </a>
                <a
                  href="/prestadores"
                  className="rounded-lg border border-gray-300 px-5 py-3 text-gray-800 hover:bg-white"
                >
                  Ver cartilla
                </a>
              </div>
            </div>
          </article>

          {/* Imagen contextual del plan */}
          <div className="relative h-[280px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden ring-1 ring-black/5">
            <Image
              src={current?.heroSrc || "/banner.png"}
              alt={current?.heroAlt || "Plan PREME"}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0" />
          </div>
        </div>

        {/* Secciones ampliadas */}
        <div className="mt-10 space-y-6">
          {detail ? (
            detail.kind === "young" ? (
              <>
                {detail.intro && (
                  <div className="rounded-xl bg-[#f7f9fb] p-5 ring-1 ring-black/5 text-sm text-gray-800">
                    {detail.intro}
                  </div>
                )}

                {/* Switch interno de variantes */}
                <div className="flex flex-wrap gap-3 mb-2">
                  {detail.variants.map((v) => {
                    const activeVar = v.key === youngVar;
                    const bg = activeVar ? current?.cta : rgba(current?.cta || "#33BAF0", 0.12);
                    const br = activeVar ? current?.cta : rgba(current?.cta || "#33BAF0", 0.35);
                    return (
                      <button
                        key={v.key}
                        onClick={() => setYoungVar(v.key)}
                        className={[
                          "rounded-lg border px-3 py-2 text-sm font-semibold transition",
                          activeVar ? "text-white" : "text-[#092f57] hover:brightness-105",
                        ].join(" ")}
                        style={{ backgroundColor: bg, borderColor: br as string }}
                      >
                        {v.label}
                      </button>
                    );
                  })}
                </div>

                {/* Acordeones de la variante seleccionada */}
                {detail.variants
                  .find((v) => v.key === youngVar)!
                  .sections.map((s, i) => (
                    <Accordion key={i} title={s.title} color={current?.cta || "#33BAF0"} defaultOpen={i === 0}>
                      {s.body && <p className="text-sm text-gray-700">{s.body}</p>}
                      {s.items && <BulletList items={s.items} />}
                    </Accordion>
                  ))}
              </>
            ) : (
              <>
                {detail.intro && (
                  <div className="rounded-xl bg-[#f7f9fb] p-5 ring-1 ring-black/5 text-sm text-gray-800">
                    {detail.intro}
                  </div>
                )}
                {detail.sections.map((s, i) => (
                  <Accordion key={i} title={s.title} color={current?.cta || "#33BAF0"} defaultOpen={i === 0}>
                    {s.body && <p className="text-sm text-gray-700">{s.body}</p>}
                    {s.items && <BulletList items={s.items} />}
                  </Accordion>
                ))}
              </>
            )
          ) : (
            // Fallback si no hubiera contenido ampliado para algún plan
            <div className="rounded-xl bg-[#f7f9fb] p-5 ring-1 ring-black/5 text-sm text-gray-700">
              Próximamente publicaremos el detalle ampliado de este plan.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}