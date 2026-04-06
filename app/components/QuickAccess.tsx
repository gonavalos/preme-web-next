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
    <section className="relative z-20 -mt-8 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/8 border border-gray-100/80 px-6 sm:px-10 md:px-14 py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex flex-col items-center gap-3 px-4 py-5 sm:py-6 rounded-xl hover:bg-[#092f57]/5 transition-all duration-200"
          >
            <item.icon className="text-[#33BAF0] text-2xl sm:text-3xl shrink-0" />
            <span className="text-[#092f57] font-semibold text-xs sm:text-sm group-hover:text-[#33BAF0] transition-colors text-center">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
