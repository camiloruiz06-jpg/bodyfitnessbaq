import { defineType, defineField } from "sanity";

// Un anuncio/promo del carrusel de la página principal
export default defineType({
  name: "anuncio",
  title: "Anuncio / Promo",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      description:
        "Descripción corta del anuncio (se usa como texto alternativo)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "imagen",
      title: "Imagen",
      description: "Sube aquí el flyer o imagen de la promo",
      type: "image",
    }),
    defineField({
      name: "instagram",
      title: "O enlace de publicación de Instagram",
      description:
        "Si prefieres mostrar un post/reel de Instagram en vez de una imagen, pega aquí el enlace (y deja la imagen vacía)",
      type: "url",
    }),
    defineField({
      name: "link",
      title: "Enlace al tocar la imagen (opcional)",
      description: "A dónde lleva el anuncio si alguien lo toca",
      type: "url",
    }),
    defineField({
      name: "orden",
      title: "Orden (1 = primero)",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Orden",
      name: "ordenAsc",
      by: [{ field: "orden", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "titulo", subtitle: "orden", media: "imagen" },
  },
});
