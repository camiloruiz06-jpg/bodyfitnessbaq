import { defineType, defineField } from "sanity";

// Un plan/tarifa del gimnasio
export default defineType({
  name: "plan",
  title: "Plan / Tarifa",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre del plan",
      description: "Ejemplo: 1 Mes, 15 Días, Por Sesión",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "precio",
      title: "Precio",
      description: "Con el signo pesos. Ejemplo: $100.000",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "periodo",
      title: "Nota pequeña (opcional)",
      description: "Ejemplo: por mes, ahorras $20.000",
      type: "string",
    }),
    defineField({
      name: "destacado",
      title: "¿Plan destacado? (etiqueta 'Más popular')",
      description: "Solo uno debería estar marcado",
      type: "boolean",
      initialValue: false,
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
    select: { title: "nombre", subtitle: "precio" },
  },
});
