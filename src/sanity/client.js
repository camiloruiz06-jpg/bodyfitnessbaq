import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // rápido (cache)
});

// Convierte una imagen de Sanity en URL
const builder = imageUrlBuilder({ projectId, dataset });
export const urlFor = (source) => builder.image(source);

// Lee contenido de Sanity. Si algo falla o no hay contenido,
// devuelve `fallback` (así la web NUNCA se rompe).
export async function sanityFetch(query, params = {}, fallback = null) {
  try {
    const data = await client.fetch(query, params, {
      next: { revalidate: 60 }, // revalida cada 60s
    });
    return data ?? fallback;
  } catch (e) {
    console.error("Sanity fetch error:", e?.message);
    return fallback;
  }
}
