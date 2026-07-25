// Datos de conexión a Sanity (se leen de las variables de entorno;
// si no están, usa los valores del proyecto directamente)
export const apiVersion = "2024-01-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "eitd1kh4";
