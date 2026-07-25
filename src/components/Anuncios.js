"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiSpeakerphone } from "react-icons/hi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { anuncios } from "@/data/anuncios";
import { site } from "@/data/site";
import { whatsappLink, mensajes } from "@/lib/whatsapp";

const INTERVALO_MS = 5000; // las imágenes pasan solas cada 5 segundos

export default function Anuncios() {
  const [actual, setActual] = useState(0);
  const [direccion, setDireccion] = useState(1);
  const [pausado, setPausado] = useState(false);
  const total = anuncios.length;

  const irA = useCallback(
    (indice, dir) => {
      setDireccion(dir);
      setActual(((indice % total) + total) % total);
    },
    [total]
  );

  const siguiente = useCallback(() => irA(actual + 1, 1), [actual, irA]);
  const anterior = useCallback(() => irA(actual - 1, -1), [actual, irA]);

  // Autoplay (se pausa al pasar el mouse por encima; los embeds de
  // Instagram no avanzan solos por si están viendo un video)
  useEffect(() => {
    if (total < 2 || pausado) return;
    if (anuncios[actual]?.instagram) return;
    const timer = setInterval(siguiente, INTERVALO_MS);
    return () => clearInterval(timer);
  }, [siguiente, total, pausado, actual]);

  return (
    <section id="promos" className="scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle kicker="No te lo pierdas">
          Anuncios y <span className="brochazo">promos</span>
        </SectionTitle>

        {total === 0 ? (
          <PlaceholderSinAnuncios />
        ) : (
          <Reveal>
            <div
              className="relative mx-auto max-w-3xl select-none"
              onMouseEnter={() => setPausado(true)}
              onMouseLeave={() => setPausado(false)}
            >
              <div className="relative h-[420px] overflow-hidden border border-borde bg-carbon md:h-[500px]">
                <AnimatePresence initial={false} custom={direccion} mode="popLayout">
                  <motion.div
                    key={actual}
                    custom={direccion}
                    initial={{ x: direccion > 0 ? "100%" : "-100%", opacity: 0.4 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direccion > 0 ? "-100%" : "100%", opacity: 0.4 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    drag={total > 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.6}
                    onDragEnd={(_, info) => {
                      // Swipe en móvil
                      if (info.offset.x < -70) siguiente();
                      else if (info.offset.x > 70) anterior();
                    }}
                    className="absolute inset-0"
                  >
                    <SlideAnuncio anuncio={anuncios[actual]} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Flechas */}
              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={anterior}
                    aria-label="Anuncio anterior"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-negro/70 p-2 text-3xl text-hueso transition-colors hover:bg-rojo"
                  >
                    <HiChevronLeft aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={siguiente}
                    aria-label="Anuncio siguiente"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-negro/70 p-2 text-3xl text-hueso transition-colors hover:bg-rojo"
                  >
                    <HiChevronRight aria-hidden="true" />
                  </button>
                </>
              )}

              {/* Puntitos de navegación */}
              {total > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  {anuncios.map((a, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => irA(i, i > actual ? 1 : -1)}
                      aria-label={`Ir al anuncio ${i + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        i === actual ? "w-8 bg-rojo" : "w-2.5 bg-borde hover:bg-hueso/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function SlideAnuncio({ anuncio }) {
  // Publicación de Instagram (foto, video o reel) como embed oficial
  if (anuncio.instagram) {
    const base = anuncio.instagram.endsWith("/")
      ? anuncio.instagram
      : `${anuncio.instagram}/`;
    return (
      <iframe
        src={`${base}embed`}
        title="Publicación de Instagram de Gimnasio Body Fitness"
        className="h-full w-full border-0 bg-carbon"
        loading="lazy"
        allowFullScreen
        allow="encrypted-media"
      />
    );
  }

  const imagen = (
    <img
      src={anuncio.imagen}
      alt={anuncio.alt || "Anuncio de Gimnasio Body Fitness"}
      className="h-full w-full object-contain"
      draggable={false}
    />
  );

  if (anuncio.link) {
    return (
      <a
        href={anuncio.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full"
        aria-label={anuncio.alt || "Ver anuncio"}
      >
        {imagen}
      </a>
    );
  }
  return imagen;
}

// Si todavía no hay anuncios cargados, la sección no se rompe:
// muestra este aviso elegante con CTAs.
function PlaceholderSinAnuncios() {
  return (
    <Reveal>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 border border-dashed border-borde bg-carbon/60 px-6 py-16 text-center">
        <HiSpeakerphone className="text-5xl text-rojo" aria-hidden="true" />
        <p className="titulo-display text-2xl text-hueso">
          Muy pronto nuevas promos
        </p>
        <p className="max-w-md text-gris-texto">
          Mientras tanto, síguenos en Instagram para no perderte ningún anuncio
          o escríbenos directamente por WhatsApp.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-hueso/40 px-6 py-3 font-bold uppercase text-hueso transition-colors hover:border-rojo hover:text-rojo"
          >
            <FaInstagram aria-hidden="true" /> {site.instagram.usuario}
          </a>
          <a
            href={whatsappLink(mensajes.promo)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-rojo px-6 py-3 font-bold uppercase text-hueso transition-colors hover:bg-rojo-oscuro"
          >
            <FaWhatsapp aria-hidden="true" /> Escríbenos
          </a>
        </div>
      </div>
    </Reveal>
  );
}
