import { defineType, defineField } from "sanity";

// Un servicio del gimnasio (Gimnasio, Rumbaterapia, Boxeo…)
export default defineType({
  name: "servicio",
  title: "Servicio",
  type: "document",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "descripcion",
      title: "Descripción",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "icono",
      title: "Ícono",
      type: "string",
      options: {
        list: [
          { title: "Pesas 🏋️", value: "pesas" },
          { title: "Baile 💃", value: "baile" },
          { title: "Boxeo 🥊", value: "boxeo" },
        ],
        layout: "radio",
      },
      initialValue: "pesas",
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
    select: { title: "nombre", subtitle: "icono" },
  },
});
