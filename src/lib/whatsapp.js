import { site } from "@/data/site";

// Helper central de WhatsApp: TODOS los botones/CTAs del sitio
// deben usar esta función para generar el link.
// `numero` es opcional: si no se pasa, usa el de src/data/site.js
// (los componentes pasan el número que viene del panel de Sanity).
export function whatsappLink(mensaje, numero = site.whatsapp) {
  const base = `https://wa.me/${numero}`;
  if (!mensaje) return base;
  return `${base}?text=${encodeURIComponent(mensaje)}`;
}

// Mensajes pre-llenados según el contexto del botón
export const mensajes = {
  inscripcion:
    "¡Hola! 💪 Quiero inscribirme en Gimnasio Body Fitness. ¿Me dan información?",
  precios: "¡Hola! Quiero saber los precios de los planes del gimnasio.",
  plan: (plan) => `¡Hola! 💪 Quiero inscribirme en el plan "${plan}".`,
  servicio: (servicio) =>
    `¡Hola! Quiero más información sobre ${servicio} en Body Fitness.`,
  promo: "¡Hola! Vi una promo en la página y quiero más información.",
  general: "¡Hola! Quiero más información sobre Gimnasio Body Fitness.",
};
