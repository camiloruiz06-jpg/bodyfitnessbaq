"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaLock } from "react-icons/fa";
import { HiClock } from "react-icons/hi";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import FondoFoto from "@/components/FondoFoto";
import { site as siteEstatico } from "@/data/site";

// ¿Está abierto el gym en este momento? (según la hora del visitante)
function estaAbierto(bloquesSemana) {
  const ahora = new Date();
  const dia = ahora.getDay(); // 0=domingo, 6=sábado
  const hora = ahora.getHours() + ahora.getMinutes() / 60;

  let bloques = [];
  if (dia >= 1 && dia <= 5) bloques = bloquesSemana.lunesAViernes || [];
  else if (dia === 6) bloques = bloquesSemana.sabado || [];

  return bloques.some(([inicio, fin]) => hora >= inicio && hora < fin);
}

// Aviso en vivo "Abierto / Cerrado ahora"
function EstadoAhora({ bloquesSemana }) {
  // Empieza en null para no chocar con el renderizado del servidor
  const [abierto, setAbierto] = useState(null);

  useEffect(() => {
    const revisar = () => setAbierto(estaAbierto(bloquesSemana));
    revisar();
    const timer = setInterval(revisar, 60_000);
    return () => clearInterval(timer);
  }, [bloquesSemana]);

  if (abierto === null) return null;

  return (
    <div className="mb-10 flex justify-center">
      <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-rojo/50 bg-rojo/10 px-5 py-2 text-center text-xs font-bold uppercase tracking-widest text-rojo sm:text-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rojo opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rojo" />
        </span>
        {abierto ? "Abiertos ahora — ¡ven a entrenar!" : "Cerrados ahora"}
      </span>
    </div>
  );
}

// El primer bloque del día se muestra como "Mañana" y el segundo
// como "Tarde". Los horarios llegan por props (del panel de Sanity)
// o salen de src/data/site.js como respaldo.
const decoracionBloques = [
  { icono: FaSun, etiqueta: "Mañana" },
  { icono: FaMoon, etiqueta: "Tarde" },
];

export default function Horarios({
  horarios = siteEstatico.horarios,
  bloquesSemana = siteEstatico.bloquesSemana,
}) {
  const tarjetas = horarios.map((horario) => ({
    dias: horario.dias,
    cerrado: !!horario.cerrado,
    bloques: horario.bloques.map((horas, i) => ({
      ...decoracionBloques[i % decoracionBloques.length],
      horas,
    })),
  }));

  return (
    <section
      id="horarios"
      className="relative scroll-mt-20 bg-carbon/50 px-4 py-20"
    >
      {/* Foto del gym de fondo (public/gym/horarios.jpg) */}
      <FondoFoto src="/gym/horarios.jpg" opacidad={0.25} />
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionTitle kicker="Te esperamos">
          Nuestros <span className="brochazo">horarios</span>
        </SectionTitle>

        <EstadoAhora bloquesSemana={bloquesSemana} />

        <div className="grid gap-6 md:grid-cols-3">
          {tarjetas.map((tarjeta, i) => (
            <Reveal key={tarjeta.dias} delay={i * 0.12}>
              <article
                className={`flex h-full flex-col border bg-negro/90 p-7 text-center transition-colors ${
                  tarjeta.cerrado
                    ? "border-borde"
                    : "border-borde hover:border-rojo"
                }`}
              >
                <HiClock
                  className="mx-auto text-3xl text-rojo"
                  aria-hidden="true"
                />
                <h3 className="titulo-display mt-3 text-2xl text-hueso">
                  {tarjeta.dias}
                </h3>
                <div
                  className="mx-auto mt-3 h-1 w-12 bg-rojo"
                  style={{ transform: "skewX(-18deg)" }}
                  aria-hidden="true"
                />

                {tarjeta.cerrado ? (
                  <div className="mt-6 flex flex-1 flex-col items-center justify-center gap-2">
                    <FaLock className="text-2xl text-rojo" aria-hidden="true" />
                    <p className="titulo-display text-3xl text-rojo">Cerrado</p>
                    <p className="text-sm text-gris-texto">
                      Día de descanso: ¡recupera energía!
                    </p>
                  </div>
                ) : (
                  <ul className="mt-6 space-y-3">
                    {tarjeta.bloques.map((bloque) => (
                      <li
                        key={bloque.etiqueta}
                        className="flex items-center gap-3 border border-borde bg-carbon px-4 py-3 text-left"
                      >
                        <bloque.icono
                          className="shrink-0 text-lg text-rojo"
                          aria-hidden="true"
                        />
                        <span>
                          <span className="block text-xs font-bold uppercase tracking-widest text-gris-texto">
                            {bloque.etiqueta}
                          </span>
                          <span className="font-semibold text-hueso">
                            {bloque.horas}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-gris-texto">
            ¿Dudas con los horarios de clases? Escríbenos por WhatsApp.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
