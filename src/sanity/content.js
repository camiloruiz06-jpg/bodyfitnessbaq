// ============================================================
// Lectores de contenido: intentan traer los datos desde Sanity
// (el panel /studio) y si no hay nada, usan los archivos de
// src/data/ como respaldo. La web nunca se rompe.
// ============================================================

import { cache } from "react";
import { sanityFetch, urlFor } from "./client";
import { site as siteEstatico } from "@/data/site";
import { anuncios as anunciosEstaticos } from "@/data/anuncios";
import { planes as planesEstaticos } from "@/data/planes";
import { servicios as serviciosEstaticos } from "@/data/servicios";

// 14.5 → "2:30 p.m." · 5 → "5:00 a.m."
function formatHora(h) {
  const horas = Math.floor(h);
  const minutos = Math.round((h - horas) * 60);
  const sufijo = horas >= 12 ? "p.m." : "a.m.";
  let h12 = horas % 12;
  if (h12 === 0) h12 = 12;
  return `${h12}:${String(minutos).padStart(2, "0")} ${sufijo}`;
}

// 14.5 → "2:30pm" (versión corta para el resumen del footer)
function formatHoraCorta(h) {
  const horas = Math.floor(h);
  const minutos = Math.round((h - horas) * 60);
  const sufijo = horas >= 12 ? "pm" : "am";
  let h12 = horas % 12;
  if (h12 === 0) h12 = 12;
  return minutos ? `${h12}:${String(minutos).padStart(2, "0")}${sufijo}` : `${h12}${sufijo}`;
}

const rangoTexto = ([desde, hasta]) => `${formatHora(desde)} – ${formatHora(hasta)}`;
const rangoCorto = ([desde, hasta]) =>
  `${formatHoraCorta(desde)}–${formatHoraCorta(hasta)}`;

// ---- Configuración del sitio (contacto, horarios) ----
export const getSite = cache(async () => {
  const s = await sanityFetch(`*[_type == "siteSettings"][0]`, {}, null);
  if (!s) return siteEstatico;

  const lv = (s.lvBloques || []).map((b) => [b.desde, b.hasta]);
  const sab = (s.sabadoBloques || []).map((b) => [b.desde, b.hasta]);
  const hayBloques = lv.length > 0 || sab.length > 0;

  return {
    ...siteEstatico,
    whatsapp: s.whatsapp ?? siteEstatico.whatsapp,
    direccion: s.direccion ?? siteEstatico.direccion,
    instagram: {
      usuario: s.instagramUsuario ?? siteEstatico.instagram.usuario,
      url: s.instagramUrl ?? siteEstatico.instagram.url,
    },
    horarios: hayBloques
      ? [
          { dias: "Lunes a Viernes", bloques: lv.map(rangoTexto) },
          { dias: "Sábados", bloques: sab.map(rangoTexto) },
          { dias: "Domingos y festivos", bloques: [], cerrado: true },
        ]
      : siteEstatico.horarios,
    horarioResumen: hayBloques
      ? `L–V: ${lv.map(rangoCorto).join(" y ")} · Sáb: ${sab
          .map(rangoCorto)
          .join(" y ")}`
      : siteEstatico.horarioResumen,
    bloquesSemana: hayBloques
      ? { lunesAViernes: lv, sabado: sab }
      : siteEstatico.bloquesSemana,
  };
});

// ---- Anuncios / promos del carrusel ----
export const getAnuncios = cache(async () => {
  const docs = await sanityFetch(
    `*[_type == "anuncio"] | order(coalesce(orden, 999) asc)`,
    {},
    null
  );
  if (!docs || docs.length === 0) return anunciosEstaticos;

  return docs
    .map((d) => {
      if (d.instagram) return { instagram: d.instagram };
      if (d.imagen) {
        return {
          imagen: urlFor(d.imagen).width(1400).url(),
          alt: d.titulo || "Anuncio de Gimnasio Body Fitness",
          link: d.link || undefined,
        };
      }
      return null; // anuncio sin imagen ni instagram: se ignora
    })
    .filter(Boolean);
});

// ---- Planes y precios ----
export const getPlanes = cache(async () => {
  const docs = await sanityFetch(
    `*[_type == "plan"] | order(coalesce(orden, 999) asc)`,
    {},
    null
  );
  if (!docs || docs.length === 0) return planesEstaticos;

  return docs.map((d) => ({
    id: d._id,
    nombre: d.nombre,
    precio: d.precio,
    periodo: d.periodo || "",
    destacado: !!d.destacado,
  }));
});

// ---- Servicios ----
export const getServicios = cache(async () => {
  const docs = await sanityFetch(
    `*[_type == "servicio"] | order(coalesce(orden, 999) asc)`,
    {},
    null
  );
  if (!docs || docs.length === 0) return serviciosEstaticos;

  return docs.map((d) => ({
    id: d._id,
    nombre: d.nombre,
    descripcion: d.descripcion || "",
    icono: d.icono || "pesas",
  }));
});
