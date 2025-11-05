// /components/CTAStrip.tsx
import { FaPhoneAlt, FaWhatsapp, FaInfoCircle, FaAmbulance } from "react-icons/fa";

export default function CTAStrip() {
  return (
    <section className="bg-[#01c8ff] text-white py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
      {/* URGENCIAS Y EMERGENCIAS */}
      <div className="flex flex-col items-center">
        <FaAmbulance className="text-4xl mb-2" />
        <p className="font-bold text-lg">URGENCIAS Y EMERGENCIAS</p>
        <p className="text-[15px] font-semibold">ECCO · 0810 888 3226</p>
      </div>

      {/* ATENCIÓN A AFILIADOS */}
      <div className="flex flex-col items-center">
        <FaWhatsapp className="text-4xl mb-2" />
        <p className="font-bold text-lg">ATENCIÓN A AFILIADOS</p>
        <p className="text-[15px] font-semibold">351 704 0891</p>
      </div>

      {/* INFORMACIÓN */}
      <div className="flex flex-col items-center">
        <FaInfoCircle className="text-4xl mb-2" />
        <p className="font-bold text-lg">INFORMACIÓN</p>
        <p className="text-[15px] font-semibold">0810 777 7997</p>
      </div>

      {/* ASESOR COMERCIAL */}
      <div className="flex flex-col items-center">
        <FaWhatsapp className="text-4xl mb-2" />
        <p className="font-bold text-lg">ASESOR COMERCIAL</p>
        <p className="text-[15px] font-semibold">351 200 6002</p>
      </div>
    </section>
  );
}