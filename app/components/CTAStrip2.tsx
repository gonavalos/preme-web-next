// /components/CTAStrip2.tsx
import { FaWhatsapp, FaAmbulance } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const ITEMS = [
  {
    icon: FaAmbulance,
    iconColor: "text-[#33BAF0]",
    title: "Urgencias",
    subtitle: "ECCO · 0810 888 3226",
    href: "tel:08108883226",
  },
  {
    icon: FaWhatsapp,
    iconColor: "text-green-400",
    title: "Atención Afiliados",
    subtitle: "351 704 0891",
    href: "https://wa.me/5493517040891",
  },
  {
    icon: MdInfoOutline,
    iconColor: "text-[#33BAF0]",
    title: "Información",
    subtitle: "0810 777 7997",
    href: "tel:08107777997",
  },
  {
    icon: FaWhatsapp,
    iconColor: "text-green-400",
    title: "Asesor Comercial",
    subtitle: "351 200 6002",
    href: "https://wa.me/5493512006002",
  },
];

export default function CTAStrip2() {
  return (
    <section className="bg-[#0D2A53] text-white">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {ITEMS.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center gap-2.5 py-6 md:py-8 hover:bg-white/5 transition-colors"
          >
            <item.icon className={`text-2xl md:text-3xl ${item.iconColor}`} />
            <p className="font-bold text-sm md:text-base tracking-wide leading-tight">{item.title}</p>
            <p className="text-xs md:text-sm text-white/70">{item.subtitle}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
