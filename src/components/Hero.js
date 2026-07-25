"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import Logo from "@/components/Logo";
import FondoFoto from "@/components/FondoFoto";
import { site as siteEstatico } from "@/data/site";
import { whatsappLink, mensajes } from "@/lib/whatsapp";

export default function Hero({ site = siteEstatico }) {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 text-center"
    >
      {/* Foto del gym de fondo (guardar como public/gym/hero.jpg) */}
      <FondoFoto src="/gym/hero.jpg" opacidad={0.45} />

      {/* Manchas rojas decorativas (como los brochazos del flyer) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-rojo/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-rojo/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Logo tamano="h-24 sm:h-28" className="mx-auto" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="titulo-display relative z-10 mt-8 max-w-4xl text-5xl sm:text-7xl md:text-8xl"
      >
        Tu único límite
        <br />
        <span className="text-rojo">eres TÚ</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mt-6 max-w-xl text-lg text-hueso/85"
      >
        Gimnasio · Rumbaterapia · Boxeo en {site.ciudad.split(",")[0]}.
        Entrena duro, siéntete mejor y alcanza tu mejor versión.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="relative z-10 mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <a
          href={whatsappLink(mensajes.inscripcion, site.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-rojo px-8 py-4 text-lg font-bold uppercase tracking-wide text-hueso transition-transform hover:scale-105 hover:bg-rojo-oscuro"
        >
          <FaWhatsapp className="text-2xl" aria-hidden="true" />
          Inscríbete / Escríbenos
        </a>
        <a
          href="#servicios"
          className="flex items-center gap-2 border-2 border-hueso/40 px-8 py-4 text-lg font-bold uppercase tracking-wide text-hueso transition-colors hover:border-rojo hover:text-rojo"
        >
          Ver servicios <HiArrowDown aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}
