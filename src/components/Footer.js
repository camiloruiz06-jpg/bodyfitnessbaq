import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { HiClock } from "react-icons/hi";
import Logo from "@/components/Logo";
import { site as siteEstatico } from "@/data/site";
import { whatsappLink, mensajes } from "@/lib/whatsapp";

export default function Footer({ site = siteEstatico }) {
  // El resumen de horario se parte en líneas (una por cada tramo)
  const lineasHorario = site.horarioResumen.split("·").map((t) => t.trim());

  return (
    // pb extra en móvil para que el botón flotante de WhatsApp
    // no tape el contenido del pie de página
    <footer className="border-t border-borde bg-negro px-4 pb-28 pt-12 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-3 md:text-left">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Logo tamano="h-14" />
          <p className="titulo-display text-lg text-hueso">
            Tu único límite eres <span className="text-rojo">TÚ</span>
          </p>
        </div>

        <div className="space-y-4 text-gris-texto">
          <div>
            <p className="mb-1 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-hueso md:justify-start">
              <FaMapMarkerAlt className="text-rojo" aria-hidden="true" />
              Dirección
            </p>
            <p>{site.direccion}</p>
          </div>
          <div>
            <p className="mb-1 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-hueso md:justify-start">
              <HiClock className="text-rojo" aria-hidden="true" />
              Horario
            </p>
            {lineasHorario.map((linea) => (
              <p key={linea}>{linea}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-start">
          <p className="text-xs font-bold uppercase tracking-widest text-hueso">
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
              href={whatsappLink(mensajes.general, site.whatsapp)}
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
        © {new Date().getFullYear()} {site.nombreCompleto} · {site.ciudad}
      </p>
    </footer>
  );
}
