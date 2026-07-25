import { FaWhatsapp } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { planes } from "@/data/planes";
import { whatsappLink, mensajes } from "@/lib/whatsapp";

// Lista de tarifas en un solo panel vertical, estilo flyer del gym:
// tarjeta clara, precios en rojo y el plan destacado resaltado.
export default function Planes() {
  return (
    <section id="planes" className="scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Tarifas 2025">
          Planes y <span className="brochazo">precios</span>
        </SectionTitle>

        <Reveal>
          <div className="mx-auto max-w-xl border border-borde bg-hueso shadow-[0_0_60px_rgba(224,32,32,0.12)]">
            {/* Encabezado del panel */}
            <div className="bg-rojo px-6 py-4 text-center">
              <p className="titulo-display text-2xl text-hueso">
                Nuestras tarifas
              </p>
            </div>

            <ul className="divide-y divide-negro/10 px-4 py-2 sm:px-6">
              {planes.map((plan) => (
                <li key={plan.id} className="relative">
                  {plan.destacado && (
                    <span className="absolute -right-2 top-2 bg-rojo px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-hueso sm:-right-3">
                      Más popular
                    </span>
                  )}
                  <a
                    href={whatsappLink(mensajes.plan(plan.nombre))}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Inscríbete: ${plan.nombre}`}
                    className={`flex items-baseline gap-3 px-2 py-4 transition-colors hover:bg-rojo/10 ${
                      plan.destacado ? "bg-rojo/5" : ""
                    }`}
                  >
                    <span className="shrink-0">
                      <span className="block font-bold uppercase tracking-wide text-negro">
                        {plan.nombre}
                      </span>
                      {plan.periodo && (
                        <span className="block text-xs text-negro/50">
                          {plan.periodo}
                        </span>
                      )}
                    </span>
                    {/* Línea punteada como en el flyer */}
                    <span
                      aria-hidden="true"
                      className="mx-1 flex-1 border-b-2 border-dotted border-negro/25"
                    />
                    <span className="titulo-display shrink-0 text-2xl text-rojo sm:text-3xl">
                      {plan.precio}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="px-6 pb-6 pt-2">
              <a
                href={whatsappLink(mensajes.inscripcion)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-rojo px-6 py-4 font-bold uppercase tracking-wide text-hueso transition-colors hover:bg-rojo-oscuro"
              >
                <FaWhatsapp className="text-xl" aria-hidden="true" />
                Inscríbete por WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 text-center text-sm text-gris-texto">
            Tarifas 2025 · Toca cualquier plan para escribirnos por WhatsApp.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
