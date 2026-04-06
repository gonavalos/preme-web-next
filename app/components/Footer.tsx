import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#061a33] text-white">
      {/* Menos padding lateral y altura contenida */}
      <div className="mx-auto max-w-9/10 px-3 py-8 xl:px-6">
        {/* LAYOUT 3 COLUMNAS — logo y medalla alineados arriba */}
        <div className="flex flex-col items-center gap-12 xl:flex-row xl:items-start xl:gap-10">
          {/* Col 1: Logo + redes */}
          <div className="flex-none w-[140px] text-center xl:text-left pt-1">
            <Image
              src="/logoPreme3.png"
              alt="PREME Medicina Privada"
              width={140}
              height={31}
              priority
              className="h-auto w-auto mx-auto xl:mx-0"
            />
            <div className="mt-3 flex justify-center xl:justify-start gap-2">
              <a href="#" aria-label="Facebook" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition">
                <FaFacebookF className="h-3.5 w-3.5" />
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition">
                <FaInstagram className="h-3.5 w-3.5" />
              </a>
              <a href="#" aria-label="Twitter/X" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition">
                <FaTwitter className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Información (crece) */}
          <div className="grow">
            <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 xl:text-left">
              {/* Enlaces rápidos */}
              <div>
                <h4 className="text-lg font-semibold mb-3 border-b border-[#33BAF0] inline-block pb-1">
                  Enlaces Rápidos
                </h4>
                <ul className="space-y-2 text-white/90">
                  <li><Link href="/" className="hover:text-[#33BAF0]">Inicio</Link></li>
                  <li><Link href="/planes" className="hover:text-[#33BAF0]">Planes de Salud</Link></li>
                  <li><Link href="/prestadores" className="hover:text-[#33BAF0]">Cartilla Médica</Link></li>
                  <li><Link href="/beneficios" className="hover:text-[#33BAF0]">Beneficios</Link></li>
                  <li><Link href="/contacto" className="hover:text-[#33BAF0]">Contacto</Link></li>
                </ul>
              </div>

              {/* Contacto */}
              <div>
                <h4 className="text-lg font-semibold mb-3 border-b border-[#33BAF0] inline-block pb-1">
                  Contacto
                </h4>
                <ul className="space-y-2.5 text-white/90 text-sm">
                  <li className="flex items-center justify-center xl:justify-start gap-3">
                    <FaMapMarkerAlt className="shrink-0" />
                    <span>Av. Colón 795 – Córdoba</span>
                  </li>
                  <li className="flex items-start justify-center xl:justify-start gap-3">
                    <FaPhoneAlt className="shrink-0 mt-0.5" />
                    <div className="text-xs leading-relaxed">
                      <span>(351) 7040891</span> <span className="text-white/50">Afiliados</span><br />
                      <span>(351) 5503660</span> <span className="text-white/50">Autorizaciones</span><br />
                      <span>(351) 2006002</span> <span className="text-white/50">Comercial</span>
                    </div>
                  </li>
                  <li className="flex items-center justify-center xl:justify-start gap-3">
                    <FaEnvelope className="shrink-0" />
                    <a href="mailto:preme@preme.com.ar" className="hover:text-[#33BAF0]">preme@preme.com.ar</a>
                  </li>
                </ul>
              </div>

              {/* Información legal */}
              <div>
                <h4 className="text-lg font-semibold mb-3 border-b border-[#33BAF0] inline-block pb-1">
                  Información Legal
                </h4>
                <ul className="space-y-2 text-white/90">
                  <li><Link href="/terminos" className="hover:text-[#33BAF0]">Términos y Condiciones</Link></li>
                  <li><Link href="/privacidad" className="hover:text-[#33BAF0]">Política de Privacidad</Link></li>
                  <li><Link href="/trabaja-con-nosotros" className="hover:text-[#33BAF0]">Trabajá con nosotros</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Col 3: Medalla — alineada con logo */}
          <div className="hidden xl:flex flex-none w-[120px] pt-1 justify-center">
            <Image
              src="/assets/n11v2.png"
              alt="1° prepaga de CBA — +40 años de trayectoria"
              width={100}
              height={150}
              priority
              className="h-auto w-[100px] drop-shadow-lg"
            />
          </div>
        </div>

        {/* SEPARADOR + BLOQUE OBLIGATORIO */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-white/70 text-sm space-y-3">
          <div className="text-xs leading-relaxed text-white/80">
            <p className="font-medium">Superintendencia de Servicios de Salud</p>
            <p>Órgano de Control de Obras Sociales y entidades de Medicina Prepaga</p>
            <p>
              <a
                href="tel:+54080022272583"
                className="underline decoration-white/30 underline-offset-4 hover:text-[#33BAF0]"
              >
                0800-222-SALUD (72583)
              </a>{" "}
              |{" "}
              <a
                href="https://www.sssalud.gob.ar"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-white/30 underline-offset-4 hover:text-[#33BAF0]"
              >
                www.sssalud.gob.ar
              </a>{" "}
              | R.N.E.M.P. 113236
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}