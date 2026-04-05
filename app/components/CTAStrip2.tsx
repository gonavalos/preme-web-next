// /components/CTAStrip.tsx
import { FaPhoneAlt, FaWhatsapp, FaAmbulance } from "react-icons/fa";
import { FaRegHospital } from "react-icons/fa6"; // ícono tipo ambulancia/hospital
import { MdInfoOutline } from "react-icons/md";

export default function CTAStrip2() {
  return (
    <section className="backdrop-blur-md bg-gray-900/80 text-white py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
      {/* URGENCIAS Y EMERGENCIAS */}
      <div className="flex flex-col items-center">
        <FaAmbulance className="text-4xl mb-2 text-[#01c8ff]" />
        <p className="font-bold text-lg tracking-wide">URGENCIAS Y EMERGENCIAS</p>
        <p className="text-[15px] font-semibold text-gray-200">ECCO · 0810 888 3226</p>
      </div>

      {/* ATENCIÓN A AFILIADOS */}
      <div className="flex flex-col items-center">
        <FaWhatsapp className="text-4xl mb-2 text-green-400" />
        <p className="font-bold text-lg tracking-wide">ATENCIÓN A AFILIADOS</p>
        <p className="text-[15px] font-semibold text-gray-200">351 704 0891</p>
      </div>

      {/* INFORMACIÓN */}
      <div className="flex flex-col items-center">
        <MdInfoOutline className="text-4xl mb-2 text-[#01c8ff]" />
        <p className="font-bold text-lg tracking-wide">INFORMACIÓN</p>
        <p className="text-[15px] font-semibold text-gray-200">0810 777 7997</p>
      </div>

      {/* ASESOR COMERCIAL */}
      <div className="flex flex-col items-center">
        <FaWhatsapp className="text-4xl mb-2 text-green-400" />
        <p className="font-bold text-lg tracking-wide">ASESOR COMERCIAL</p>
        <p className="text-[15px] font-semibold text-gray-200">351 200 6002</p>
      </div>
    </section>
  );
}