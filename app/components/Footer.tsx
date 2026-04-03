import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const QUICK_LINKS = [
  ["Inicio", "/"],
  ["Planes de Salud", "/planes"],
  ["Cartilla Médica", "/prestadores"],
  ["Blog", "/blog"],
  ["Contacto", "/contacto"],
];

const LEGAL_LINKS = [
  ["Términos y Condiciones", "/terminos"],
  ["Política de Privacidad", "/privacidad"],
  ["Trabajá con nosotros", "/institucional/trabaja"],
];

const PHONES = [
  { number: "(351) 704-0891", label: "Atención Afiliados", href: "https://wa.me/5493517040891", icon: FaWhatsapp, iconColor: "text-green-400" },
  { number: "(351) 200-6002", label: "Asesor Comercial", href: "https://wa.me/5493512006002", icon: FaWhatsapp, iconColor: "text-green-400" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D2A53] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-[220px_1fr_1fr_1fr] lg:gap-10 lg:text-left">

          {/* Col 1: Logo + redes */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src="/logoPreme3.png"
              alt="PREME Medicina Privada"
              width={150}
              height={33}
              priority
              className="h-auto w-[150px]"
            />
            <p className="mt-3 text-xs text-white/50 leading-relaxed">
              Medicina privada en Córdoba.<br />
              +40 años cuidando tu salud.
            </p>
            <div className="mt-4 flex gap-2.5">
              <a
                href="https://www.facebook.com/Preme.medicina"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10 hover:bg-[#33BAF0]/25 hover:ring-[#33BAF0]/30 transition-all duration-200"
              >
                <FaFacebookF className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.instagram.com/preme.salud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10 hover:bg-[#33BAF0]/25 hover:ring-[#33BAF0]/30 transition-all duration-200"
              >
                <FaInstagram className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Enlaces */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Enlaces
            </h4>
            <ul className="space-y-2.5 text-[15px]">
              {QUICK_LINKS.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/80 hover:text-[#33BAF0] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contacto */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start justify-center lg:justify-start gap-2.5">
                <FaMapMarkerAlt className="shrink-0 mt-0.5 text-[#33BAF0]" />
                <span className="text-white/80">Av. Colón 795 (esq. Urquiza)<br />Córdoba, Argentina</span>
              </li>
              {PHONES.map((p) => (
                <li key={p.number} className="flex items-center justify-center lg:justify-start gap-2.5">
                  <p.icon className={`shrink-0 ${p.iconColor}`} />
                  <a href={p.href} className="text-white/80 hover:text-white transition-colors">
                    {p.number}
                    <span className="block text-[11px] text-white/50">{p.label}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-center lg:justify-start gap-2.5">
                <FaEnvelope className="shrink-0 text-[#33BAF0]" />
                <a href="mailto:preme@preme.com.ar" className="text-white/80 hover:text-[#33BAF0] transition-colors">
                  preme@preme.com.ar
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal + Medalla */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-[15px]">
              {LEGAL_LINKS.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/80 hover:text-[#33BAF0] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 hidden lg:block">
              <Image
                src="/assets/n11v2.png"
                alt="1° prepaga de CBA — +40 años de trayectoria"
                width={120}
                height={180}
                className="h-auto w-[110px] opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Separador + bloque obligatorio */}
        <div className="mt-8 border-t border-white/10 pt-4 text-center">
          <div className="text-xs leading-relaxed text-white/50">
            <p className="font-medium text-white/70">Superintendencia de Servicios de Salud</p>
            <p>Órgano de Control de Obras Sociales y entidades de Medicina Prepaga</p>
            <p className="mt-1">
              <a href="tel:+54080022272583" className="underline decoration-white/20 underline-offset-4 hover:text-[#33BAF0] transition-colors">
                0800-222-SALUD (72583)
              </a>
              {" · "}
              <a href="https://www.sssalud.gob.ar" target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-4 hover:text-[#33BAF0] transition-colors">
                www.sssalud.gob.ar
              </a>
              {" · R.N.E.M.P. 113236"}
            </p>
          </div>
          <p className="mt-2 text-[11px] text-white/30">
            © {new Date().getFullYear()} PREME Medicina Privada. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
