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
    <section className="relative z-20 -mt-7 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/8 border border-gray-100/80 p-2.5 sm:px-10 sm:py-5 grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-4">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex flex-col sm:flex-row items-center justify-center text-center gap-1.5 sm:gap-3 px-2 sm:px-5 py-3 sm:py-4 rounded-xl hover:bg-[#092f57]/5 transition-all duration-200"
          >
            <item.icon className="text-[#33BAF0] text-xl sm:text-2xl shrink-0" />
            <span className="text-[#092f57] font-semibold text-xs sm:text-sm group-hover:text-[#33BAF0] transition-colors leading-tight">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
