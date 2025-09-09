// /components/CTAStrip.tsx
import { FaPhoneAlt, FaWhatsapp, FaInfoCircle, FaRegHandshake } from "react-icons/fa";

export default function CTAStrip() {
  return (
    <section className="bg-[#01c8ff] text-white py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
      <div className="flex flex-col items-center">
        <FaPhoneAlt className="text-3xl mb-2" />
        <p className="font-bold">URGENCIAS Y EMERGENCIAS</p>
        <p>0800-777-7800</p>
      </div>
      <div className="flex flex-col items-center">
        <FaWhatsapp className="text-3xl mb-2" />
        <p className="font-bold">ASISTENTE EN WHATSAPP</p>
        <p>351-2006002</p>
      </div>
      <div className="flex flex-col items-center">
        <FaInfoCircle className="text-3xl mb-2" />
        <p className="font-bold">INFORMACIÓN 24 H</p>
        <p>0800-555-7000</p>
      </div>
      <div className="flex flex-col items-center">
        <FaRegHandshake className="text-3xl mb-2" />
        <p className="font-bold">ATENCIÓN DE VENTAS</p>
        <p>0810-333-2244</p>
      </div>
    </section>
  );
}