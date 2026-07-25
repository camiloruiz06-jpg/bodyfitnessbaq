import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectId, dataset } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { deskStructure, singletonTypes } from "./src/sanity/structure";

export default defineConfig({
  name: "default",
  title: "Body Fitness — Panel",
  projectId,
  dataset,
  basePath: "/studio",

  plugins: [structureTool({ structure: deskStructure }), visionTool()],

  schema: { types: schemaTypes },

  document: {
    // En los documentos únicos, ocultamos crear/borrar/duplicar
    actions: (input, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? input.filter(
            ({ action }) =>
              !["unpublish", "delete", "duplicate"].includes(action)
          )
        : input,
  },
});
