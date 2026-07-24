import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { HiClock } from "react-icons/hi";
import Logo from "@/components/Logo";
import { site } from "@/data/site";
import { whatsappLink, mensajes } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-borde bg-negro px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 text-center sm:text-left md:grid-cols-3">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <Logo tamano="h-14" />
          <p className="titulo-display text-lg text-hueso">
            Tu único límite eres <span className="text-rojo">TÚ</span>
          </p>
        </div>

        <div className="space-y-3 text-gris-texto">
          <p className="flex items-center justify-center gap-3 sm:justify-start">
            <FaMapMarkerAlt className="shrink-0 text-rojo" aria-hidden="true" />
            {site.direccion}
          </p>
          <p className="flex items-center justify-center gap-3 sm:justify-start">
            <HiClock className="shrink-0 text-rojo" aria-hidden="true" />
            {site.horarioResumen}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:items-start">
          <p className="font-bold uppercase tracking-widest text-hueso">
            Síguenos
          </p>
          <div className="flex gap-4">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Body Fitness"
              className="border border-borde p-3 text-xl text-hueso transition-colors hover:border-rojo hover:text-rojo"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href={whatsappLink(mensajes.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Body Fitness"
              className="border border-borde p-3 text-xl text-hueso transition-colors hover:border-rojo hover:text-rojo"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <p className="mt-10 border-t border-borde pt-6 text-center text-sm text-gris-texto">
        © {new Date().getFullYear()} {site.nombreCompleto} — {site.ciudad}.
        Todos los derechos reservados.
      </p>
    </footer>
  );
}
