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
    <footer className="bg-[#0D2A53] text-white">
      {/* Menos padding lateral y altura contenida */}
      <div className="mx-auto max-w-9/10 px-3 py-8 xl:px-6">
        {/* LAYOUT 3 COLUMNAS */}
        <div className="flex flex-col items-center gap-20 xl:flex-row xl:items-start xl:gap-14 xl:relative ">
          {/* Col 1: Logo + redes (fijo) */}
          <div className="flex-none w-[150px] text-center xl:text-left">
            <Image
              src="/logoPreme3.png"
              alt="PREME Medicina Privada"
              width={150}
              height={33}
              priority
              className="h-auto w-auto mx-auto xl:mx-0"
            />

            {/* Redes (compacto) */}
            <div className="mt-3  bottom-3 flex justify-center xl:justify-start gap-2 xl:relative xl:left-4">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition"
              >
                <FaFacebookF className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition"
              >
                <FaInstagram className="h-3.5 w-3.5" />
              </a>
              <a
                href="#"
                aria-label="Twitter/X"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition"
              >
                <FaTwitter className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Información (crece) */}
          <div className="grow xl:relative xl:left-20">
            <div
              className="
                grid grid-cols-1 gap-8 text-center
                sm:grid-cols-3
                xl:grid-cols-4 xl:text-left
              "
            >
                            {/* Enlaces rápidos */}
              <div>
                <h4 className="text-lg font-semibold mb-3 border-b border-[#33BAF0] inline-block pb-1">
                  Enlaces Rápidos
                </h4>
                <ul className="space-y-2 text-white/90">
                  <li>
                    <Link href="/" className="hover:text-[#33BAF0]">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/planes" className="hover:text-[#33BAF0]">
                      Planes de Salud
                    </Link>
                  </li>
                  <li>
                    <Link href="/prestadores" className="hover:text-[#33BAF0]">
                      Cartilla Médica
                    </Link>
                  </li>
                  <li>
                    <Link href="/beneficios" className="hover:text-[#33BAF0]">
                      Beneficios
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacto" className="hover:text-[#33BAF0]">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contacto */}
              <div className="xl:relative xl:right-10">
                <h4 className="text-lg font-semibold mb-3 border-b border-[#33BAF0] inline-block pb-1">
                  Contacto
                </h4>
                <ul className="space-y-3 text-white/90 text-sm">
                  <li className="flex items-center justify-center xl:justify-start gap-3">
                    <FaMapMarkerAlt className="shrink-0" />
                    <span>Av. Colón 795 (esq. Urquiza) – Córdoba</span>
                  </li>
                  <li className="flex items-center justify-center xl:justify-start gap-3">
                    <FaPhoneAlt className="shrink-0" />
                    <span>
                      (351) 7040891
                      <br />
                      <span className="text-white/70 text-xs">
                        Atención Afiliados
                      </span>
                    </span>
                  </li>
                    <li className="flex items-center justify-center xl:justify-start gap-3">
                    <FaPhoneAlt className="shrink-0" />
                    <span>
                      (351) 5503660
                      <br />
                      <span className="text-white/70 text-xs">
                        Autorizaciones
                      </span>
                    </span>
                  </li>
                    <li className="flex items-center justify-center xl:justify-start gap-3">
                    <FaPhoneAlt className="shrink-0" />
                    <span>
                      (351) 5947628
                      <br />
                      <span className="text-white/70 text-xs">
                        Atención Prestadores
                      </span>
                    </span>
                  </li>
                    <li className="flex items-center justify-center xl:justify-start gap-3">
                    <FaPhoneAlt className="shrink-0" />
                    <span>
                      (351) 2006002
                      <br />
                      <span className="text-white/70 text-xs">
                        Atención Comercialización
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center justify-center xl:justify-start gap-3">
                    <FaEnvelope className="shrink-0" />
                    <a
                      href="mailto:preme@preme.com.ar"
                      className="hover:text-[#33BAF0]"
                    >
                      preme@preme.com.ar
                    </a>
                  </li>
                </ul>
              </div>
              

              {/* Información legal */}
              <div>
                <h4 className="text-lg font-semibold mb-3 border-b border-[#33BAF0] inline-block pb-1">
                  Información Legal
                </h4>
                <ul className="space-y-2 text-white/90">
                  <li>
                    <Link href="/terminos" className="hover:text-[#33BAF0]">
                      Términos y Condiciones
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacidad" className="hover:text-[#33BAF0]">
                      Política de Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/trabaja-con-nosotros"
                      className="hover:text-[#33BAF0]"
                    >
                      Trabajá con nosotros
                    </Link>
                  </li>
                </ul>
              </div>

{/* Col 3: Medalla (solo visible en XL; oculta en lg y menores) */}
<div className="hidden xl:flex flex-none w-[140px] items-center justify-self-center justify-center xl:relative xl:right-18 xl:bottom-15 flex-col xl:items-end">
  <Image
    src="/assets/n22.png"
    alt="1° prepaga de CBA — +40 años de trayectoria"
    width={90}
    height={90}
    priority
    className="h-auto w-[140px]"
  />
</div>
          
            </div>
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