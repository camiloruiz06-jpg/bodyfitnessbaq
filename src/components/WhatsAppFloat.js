import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink, mensajes } from "@/lib/whatsapp";

// Botón flotante de WhatsApp visible en toda la página
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(mensajes.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-lg shadow-black/40 transition-transform hover:scale-110"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
