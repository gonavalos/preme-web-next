import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5493512006002"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-20 right-4 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-200"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
