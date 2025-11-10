// /components/ContactChannels.tsx
"use client";

import Link from "next/link";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

type Channel = {
  title: string;
  desc: string;
  action: string;
  href: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
  color: string;
};

const channels: Channel[] = [
  {
    title: "Atención Afiliados",
    desc: "Consultas generales y orientación personalizada.",
    action: "Llamar",
    href: "tel:3517040891",
    badge: "(351) 7040891",
    icon: FaPhone,
    color: "#33BAF0", // azul institucional
  },
  {
    title: "WhatsApp",
    desc: "Contactanos directamente por mensaje.",
    action: "Abrir chat",
    href: "https://wa.me/5493512006002?text=Hola%20PREME%2C%20quisiera%20hacer%20una%20consulta",
    badge: "+54 9 351 2006002",
    icon: FaWhatsapp,
    external: true,
    color: "#25D366", // verde WhatsApp
  },
  {
    title: "Email",
    desc: "Consultas, trámites y convenios.",
    action: "Enviar email",
    href: "mailto:preme@preme.com.ar",
    badge: "preme@preme.com.ar",
    icon: FaEnvelope,
    color: "#0D2A53", // azul profundo institucional
  },
  {
    title: "Oficina Central",
    desc: "Av. Colón 795 (esq. Urquiza) – Córdoba.",
    action: "Ver mapa",
    href: "#mapa",
    badge: "Cómo llegar",
    icon: FaMapMarkerAlt,
    color: "#6B7280", // gris neutro
  },
];

export default function ContactChannels() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 items-stretch">
        {channels.map((c, i) => {
          const Icon = c.icon;
          return (
            <article
              key={i}
              className="flex h-full flex-col rounded-xl border border-black/10 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f5f9] text-[#092f57]">
                  <Icon className="text-base" />
                </span>
                <h4 className="text-base font-semibold text-[#092f57]">
                  {c.title}
                </h4>
              </div>

              <p className="mt-3 text-sm text-gray-600">{c.desc}</p>
              {c.badge && (
                <div className="mt-2 text-sm font-medium text-[#092f57]">
                  {c.badge}
                </div>
              )}

              {/* Botón inferior */}
              <div className="mt-auto pt-4">
                <Link
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="inline-flex w-full h-10 items-center justify-center rounded-lg text-white hover:brightness-110 transition"
                  style={{ backgroundColor: c.color }}
                >
                  {c.action}
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-5 text-center text-sm text-gray-500">
        Horario de atención: Lunes a viernes, 9 a 18 h.
      </p>
    </>
  );
}