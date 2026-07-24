import { HiClock } from "react-icons/hi";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import FondoFoto from "@/components/FondoFoto";
import { site } from "@/data/site";

export default function Horarios() {
  return (
    <section
      id="horarios"
      className="relative scroll-mt-20 bg-carbon/50 px-4 py-20"
    >
      {/* Foto del gym de fondo (guardar como public/gym/horarios.jpg) */}
      <FondoFoto src="/gym/horarios.jpg" opacidad={0.25} />
      <div className="relative z-10 mx-auto max-w-3xl">
        <SectionTitle kicker="Te esperamos">
          Nuestros <span className="brochazo">horarios</span>
        </SectionTitle>

        <Reveal>
          <div className="divide-y divide-borde border border-borde bg-negro">
            {site.horarios.map((horario) => (
              <div
                key={horario.dias}
                className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="flex items-center gap-3 font-bold uppercase tracking-wide text-hueso">
                  <HiClock className="text-xl text-rojo" aria-hidden="true" />
                  {horario.dias}
                </p>
                {horario.cerrado ? (
                  <p className="titulo-display text-xl text-rojo">Cerrado</p>
                ) : (
                  <div className="text-right">
                    {horario.bloques.map((bloque) => (
                      <p key={bloque} className="text-gris-texto">
                        {bloque}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
