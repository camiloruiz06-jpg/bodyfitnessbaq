"use client";

import { useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { HiClock } from "react-icons/hi";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import FondoFoto from "@/components/FondoFoto";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
import { servicios } from "@/data/servicios";

// Mapa por búsqueda de dirección (no requiere API key)
const mapaSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.direccion}, Colombia`
)}&output=embed`;

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [interes, setInteres] = useState("");
  const [mensaje, setMensaje] = useState("");

  function enviarWhatsApp(e) {
    e.preventDefault();
    const texto = [
      `¡Hola! Soy ${nombre.trim() || "…"}.`,
      interes ? `Me interesa: ${interes}.` : null,
      mensaje.trim() ? mensaje.trim() : null,
    ]
      .filter(Boolean)
      .join(" ");
    window.open(whatsappLink(texto), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 bg-carbon/50 px-4 py-20"
    >
      {/* Foto del gym de fondo (guardar como public/gym/contacto.jpg) */}
      <FondoFoto src="/gym/contacto.jpg" opacidad={0.18} />
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionTitle kicker="Visítanos o escríbenos">
          Ubicación y <span className="brochazo">contacto</span>
        </SectionTitle>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mapa + datos */}
          <Reveal>
            <div className="flex h-full flex-col gap-5">
              <iframe
                src={mapaSrc}
                title={`Mapa de ${site.nombreCompleto} en ${site.direccion}`}
                className="h-72 w-full border border-borde lg:h-80"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <ul className="space-y-3 text-gris-texto">
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="shrink-0 text-rojo" aria-hidden="true" />
                  {site.direccion}
                </li>
                <li className="flex items-center gap-3">
                  <HiClock className="shrink-0 text-rojo" aria-hidden="true" />
                  {site.horarioResumen}
                </li>
                <li>
                  <a
                    href={site.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-rojo"
                  >
                    <FaInstagram className="shrink-0 text-rojo" aria-hidden="true" />
                    {site.instagram.usuario}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Formulario → WhatsApp */}
          <Reveal delay={0.15}>
            <form
              onSubmit={enviarWhatsApp}
              className="flex h-full flex-col gap-4 border border-borde bg-negro p-6 sm:p-8"
            >
              <p className="text-gris-texto">
                Cuéntanos qué necesitas y te respondemos por WhatsApp:
              </p>

              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-bold uppercase tracking-wide text-hueso">
                  Tu nombre
                </span>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  placeholder="¿Cómo te llamas?"
                  className="border border-borde bg-carbon px-4 py-3 text-hueso placeholder:text-gris-texto/60 focus:border-rojo focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-bold uppercase tracking-wide text-hueso">
                  ¿Qué te interesa?
                </span>
                <select
                  value={interes}
                  onChange={(e) => setInteres(e.target.value)}
                  className="border border-borde bg-carbon px-4 py-3 text-hueso focus:border-rojo focus:outline-none"
                >
                  <option value="">Selecciona una opción…</option>
                  {servicios.map((s) => (
                    <option key={s.id} value={s.nombre}>
                      {s.nombre}
                    </option>
                  ))}
                  <option value="Precios y planes">Precios y planes</option>
                  <option value="Otro">Otro</option>
                </select>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-bold uppercase tracking-wide text-hueso">
                  Mensaje (opcional)
                </span>
                <textarea
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  rows={4}
                  placeholder="Escríbenos tu pregunta…"
                  className="resize-none border border-borde bg-carbon px-4 py-3 text-hueso placeholder:text-gris-texto/60 focus:border-rojo focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="mt-auto flex items-center justify-center gap-3 bg-rojo px-6 py-4 font-bold uppercase tracking-wide text-hueso transition-colors hover:bg-rojo-oscuro"
              >
                <FaWhatsapp className="text-xl" aria-hidden="true" />
                Enviar por WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
