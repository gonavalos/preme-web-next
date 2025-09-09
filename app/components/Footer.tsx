// /app/components/Footer.tsx
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
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* En mobile: todo centrado. En md+: alineado a la izquierda */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left items-start">
          {/* Marca + descripción */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-10 text-center md:text-left items-start">
            <Image
              src="/logoPreme3.png"
              alt="PREME"
              width={200}
              height={60}
              className="mx-auto md:mx-0 h-auto w-auto"
              priority
            />
            <div>
      {/*      <p className="mt-4 text-white/80 max-w-sm mx-auto md:mx-0">
              Más de 35 años brindando servicios de salud de calidad, cuidando
              a las familias argentinas con profesionalismo y calidez humana.
            </p>

            <div className="mt-5 flex justify-center md:justify-start gap-4">
              <a className="rounded-full bg-white/10 p-2 hover:bg-white/15" aria-label="Facebook" href="#">
                <FaFacebookF />
              </a>
              <a className="rounded-full bg-white/10 p-2 hover:bg-white/15" aria-label="Instagram" href="#">
                <FaInstagram />
              </a>
              <a className="rounded-full bg-white/10 p-2 hover:bg-white/15" aria-label="Twitter/X" href="#">
                <FaTwitter />
              </a>
            </div>*/}
          </div>
</div>
          {/* Enlaces */}
          <div>
            <h4 className="text-lg font-semibold mb-3 relative inline-block after:block after:h-0.5 after:w-12 after:bg-[#33BAF0] after:mx-auto md:after:mx-0">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#33BAF0]">Inicio</Link></li>
              <li><Link href="/planes" className="hover:text-[#33BAF0]">Planes</Link></li>
              <li><Link href="/prestadores" className="hover:text-[#33BAF0]">Prestadores</Link></li>
              <li><a href="#beneficios" className="hover:text-[#33BAF0]">Beneficios</a></li>
              <li><Link href="/contacto" className="hover:text-[#33BAF0]">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-3 relative inline-block after:block after:h-0.5 after:w-12 after:bg-[#33BAF0] after:mx-auto md:after:mx-0">
              Contacto
            </h4>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="shrink-0" /> Av. Colón 795, Córdoba
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaPhoneAlt className="shrink-0" /> (0351)-421 7997
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="shrink-0" /> info@preme.com.ar
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-3 relative inline-block after:block after:h-0.5 after:w-12 after:bg-[#33BAF0] after:mx-auto md:after:mx-0">
              Información Legal
            </h4>
            <ul className="space-y-2">
              <li><Link href="/terminos" className="hover:text-[#33BAF0]">Términos y Condiciones</Link></li>
              <li><Link href="/privacidad" className="hover:text-[#33BAF0]">Política de Privacidad</Link></li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} PREME Medicina Privada. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}