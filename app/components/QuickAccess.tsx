import Link from "next/link";
import { FaStethoscope, FaLaptopMedical, FaClipboardList, FaMobileAlt } from "react-icons/fa";

const items = [
  { icon: FaStethoscope, label: "Cartilla Médica", href: "/prestadores" },
  { icon: FaLaptopMedical, label: "Gestiones Online", href: "/contacto" },
  { icon: FaClipboardList, label: "Nuestros Planes", href: "/planes" },
  { icon: FaMobileAlt, label: "Credencial Digital", href: "#app-preme" },
];

export default function QuickAccess() {
  return (
    <section className="relative z-20 -mt-7 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/8 border border-gray-100/80 px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-1 sm:gap-4">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex items-center gap-2.5 sm:gap-3 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl hover:bg-[#092f57]/5 transition-all flex-1 justify-center"
          >
            <item.icon className="text-[#33BAF0] text-lg sm:text-xl shrink-0" />
            <span className="text-[#092f57] font-semibold text-xs sm:text-sm group-hover:text-[#33BAF0] transition-colors whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
