import { FaWhatsapp } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { planes } from "@/data/planes";
import { whatsappLink, mensajes } from "@/lib/whatsapp";

export default function Planes() {
  return (
    <section id="planes" className="scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Tarifas 2025">
          Planes y <span className="brochazo">precios</span>
        </SectionTitle>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {planes.map((plan, i) => (
            <Reveal key={plan.id} delay={(i % 3) * 0.1}>
              <article
                className={`relative flex h-full flex-col border p-8 ${
                  plan.destacado
                    ? "border-rojo bg-carbon shadow-[0_0_40px_rgba(224,32,32,0.15)]"
                    : "border-borde bg-negro"
                }`}
              >
                {plan.destacado && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rojo px-3 py-1 text-xs font-bold uppercase tracking-widest text-hueso">
                    Más popular
                  </span>
                )}
                <h3 className="titulo-display text-2xl text-hueso">
                  {plan.nombre}
                </h3>
                <p className="mt-4 flex-1">
                  <span className="titulo-display text-4xl text-rojo">
                    {plan.precio}
                  </span>
                  {plan.periodo && (
                    <span className="ml-2 text-sm text-gris-texto">
                      {plan.periodo}
                    </span>
                  )}
                </p>
                <a
                  href={whatsappLink(mensajes.plan(plan.nombre))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 flex items-center justify-center gap-2 px-4 py-3 font-bold uppercase transition-colors ${
                    plan.destacado
                      ? "bg-rojo text-hueso hover:bg-rojo-oscuro"
                      : "border-2 border-hueso/40 text-hueso hover:border-rojo hover:text-rojo"
                  }`}
                >
                  <FaWhatsapp aria-hidden="true" /> Inscríbete
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-gris-texto">
            Tarifas 2025 · Escríbenos por WhatsApp si tienes dudas sobre lo que
            incluye cada plan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
