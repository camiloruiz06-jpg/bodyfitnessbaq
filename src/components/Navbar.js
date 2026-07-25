"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "@/components/Logo";
import { whatsappLink, mensajes } from "@/lib/whatsapp";
import { site as siteEstatico } from "@/data/site";

const enlaces = [
  { href: "#inicio", texto: "Inicio" },
  { href: "#promos", texto: "Promos" },
  { href: "#servicios", texto: "Servicios" },
  { href: "#planes", texto: "Planes" },
  { href: "#horarios", texto: "Horarios" },
  { href: "#contacto", texto: "Contacto" },
];

export default function Navbar({ site = siteEstatico }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-negro/85 backdrop-blur border-b border-borde">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
        aria-label="Navegación principal"
      >
        <a href="#inicio" className="shrink-0" aria-label="Ir al inicio">
          <Logo tamano="h-10" />
        </a>

        {/* Enlaces en escritorio */}
        <ul className="hidden lg:flex items-center gap-6">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a
                href={e.href}
                className="text-sm font-semibold uppercase tracking-wide text-hueso/90 hover:text-rojo transition-colors"
              >
                {e.texto}
              </a>
            </li>
          ))}
          <li>
            <a
              href={whatsappLink(mensajes.inscripcion, site.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-rojo hover:bg-rojo-oscuro transition-colors text-hueso font-bold uppercase text-sm px-4 py-2"
            >
              <FaWhatsapp aria-hidden="true" /> Inscríbete
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa en móvil */}
        <button
          type="button"
          className="lg:hidden text-hueso text-3xl p-1"
          onClick={() => setAbierto(!abierto)}
          aria-expanded={abierto}
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        >
          {abierto ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {abierto && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-borde bg-carbon"
          >
            <ul className="flex flex-col px-4 py-2">
              {enlaces.map((e) => (
                <li key={e.href}>
                  <a
                    href={e.href}
                    onClick={() => setAbierto(false)}
                    className="block py-3 font-semibold uppercase tracking-wide text-hueso/90 hover:text-rojo border-b border-borde/50 last:border-0"
                  >
                    {e.texto}
                  </a>
                </li>
              ))}
              <li className="py-3">
                <a
                  href={whatsappLink(mensajes.inscripcion, site.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-rojo text-hueso font-bold uppercase px-4 py-3"
                >
                  <FaWhatsapp aria-hidden="true" /> Inscríbete
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
