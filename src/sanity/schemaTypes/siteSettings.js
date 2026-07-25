import { defineType, defineField } from "sanity";

// Configuración general del sitio (documento único)
export default defineType({
  name: "siteSettings",
  title: "Configuración del sitio",
  type: "document",
  fields: [
    defineField({
      name: "whatsapp",
      title: "WhatsApp",
      description:
        "Solo números, empezando por 57. Ejemplo: 573008945143",
      type: "string",
      validation: (rule) =>
        rule.regex(/^57\d{10}$/, {
          name: "número colombiano",
          invert: false,
        }).warning("Debe ser 57 + 10 dígitos, sin espacios ni +"),
    }),
    defineField({
      name: "direccion",
      title: "Dirección",
      type: "string",
    }),
    defineField({
      name: "instagramUrl",
      title: "Enlace de Instagram",
      type: "url",
    }),
    defineField({
      name: "instagramUsuario",
      title: "Usuario de Instagram",
      description: "Con el arroba. Ejemplo: @bodyfitnessbq",
      type: "string",
    }),
    defineField({
      name: "lvBloques",
      title: "Horario de Lunes a Viernes",
      description:
        "Cada bloque tiene hora de inicio y fin en formato 24 horas. Las medias horas van con .5 (ejemplo: 14.5 = 2:30 p.m.)",
      type: "array",
      of: [{ type: "bloqueHorario" }],
    }),
    defineField({
      name: "sabadoBloques",
      title: "Horario de Sábados",
      description: "Igual que el anterior. Domingos y festivos siempre cerrado.",
      type: "array",
      of: [{ type: "bloqueHorario" }],
    }),
  ],
  preview: {
    prepare: () => ({ title: "⚙️ Configuración del sitio" }),
  },
});

// Un bloque de horario (inicio y fin)
export const bloqueHorario = defineType({
  name: "bloqueHorario",
  title: "Bloque de horario",
  type: "object",
  fields: [
    defineField({
      name: "desde",
      title: "Desde (hora 24h)",
      description: "Ejemplo: 5 = 5:00 a.m., 14.5 = 2:30 p.m.",
      type: "number",
      validation: (rule) => rule.required().min(0).max(24),
    }),
    defineField({
      name: "hasta",
      title: "Hasta (hora 24h)",
      description: "Ejemplo: 11 = 11:00 a.m., 20 = 8:00 p.m.",
      type: "number",
      validation: (rule) => rule.required().min(0).max(24),
    }),
  ],
  preview: {
    select: { desde: "desde", hasta: "hasta" },
    prepare: ({ desde, hasta }) => ({ title: `${desde}h – ${hasta}h` }),
  },
});
