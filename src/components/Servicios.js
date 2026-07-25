import { FaDumbbell, FaMusic } from "react-icons/fa";
import { GiBoxingGlove } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import FondoFoto from "@/components/FondoFoto";
import { servicios as serviciosEstaticos } from "@/data/servicios";
import { site as siteEstatico } from "@/data/site";
import { whatsappLink, mensajes } from "@/lib/whatsapp";

const iconos = {
  pesas: FaDumbbell,
  baile: FaMusic,
  boxeo: GiBoxingGlove,
};

export default function Servicios({
  servicios = serviciosEstaticos,
  whatsapp = siteEstatico.whatsapp,
}) {
  return (
    <section
      id="servicios"
      className="relative scroll-mt-20 bg-carbon/50 px-4 py-20"
    >
      {/* Foto del gym de fondo (guardar como public/gym/servicios.jpg) */}
      <FondoFoto src="/gym/servicios.jpg" opacidad={0.2} />
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionTitle kicker="Lo que ofrecemos">
          Nuestros <span className="brochazo">servicios</span>
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-3">
          {servicios.map((servicio, i) => {
            const Icono = iconos[servicio.icono] || FaDumbbell;
            return (
              <Reveal key={servicio.id} delay={i * 0.12}>
                <article className="group flex h-full flex-col border border-borde bg-negro p-8 transition-colors hover:border-rojo">
                  <Icono
                    className="text-5xl text-rojo transition-transform group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <h3 className="titulo-display mt-5 text-2xl text-hueso">
                    {servicio.nombre}
                  </h3>
                  <p className="mt-3 flex-1 text-gris-texto">
                    {servicio.descripcion}
                  </p>
                  <a
                    href={whatsappLink(mensajes.servicio(servicio.nombre), whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-bold uppercase text-rojo hover:underline"
                  >
                    <FaWhatsapp aria-hidden="true" /> Más información
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
