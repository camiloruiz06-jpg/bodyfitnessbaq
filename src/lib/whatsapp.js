import { site } from "@/data/site";

// Helper central de WhatsApp: TODOS los botones/CTAs del sitio
// deben usar esta función para generar el link.
export function whatsappLink(mensaje) {
  const base = `https://wa.me/${site.whatsapp}`;
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
