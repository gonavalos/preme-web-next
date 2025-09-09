// /components/WhatsAppFab.tsx
import { FaPhoneAlt, FaWhatsapp, FaInfoCircle, FaRegHandshake } from "react-icons/fa";
export default function WhatsAppFab() {
  return (
      <a
        href="https://wa.me/5493512006002"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
      >
        <FaWhatsapp size={35} />
      </a>
  );
}