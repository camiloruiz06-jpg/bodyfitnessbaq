// ============================================================
// PLANES Y PRECIOS
// 👈 FALTA: el cliente aún no pasa los precios reales.
//    Cuando los tenga, reemplazar los "$XX.XXX" de abajo.
//    Si un plan no existe, simplemente bórralo de la lista.
// ============================================================

export const planes = [
  {
    id: "diario",
    nombre: "Pase del día",
    precio: "$XX.XXX", // 👈 CAMBIAR: precio real
    periodo: "por día",
    detalles: ["Acceso a todas las zonas", "Sin compromiso"],
    destacado: false,
  },
  {
    id: "mensual",
    nombre: "Mensualidad",
    precio: "$XX.XXX", // 👈 CAMBIAR: precio real
    periodo: "por mes",
    detalles: [
      "Acceso ilimitado al gimnasio",
      "Clases de rumbaterapia",
      "Clases de boxeo",
    ],
    destacado: true, // el plan destacado se resalta en rojo
  },
  {
    id: "trimestral",
    nombre: "Trimestre",
    precio: "$XX.XXX", // 👈 CAMBIAR: precio real
    periodo: "por 3 meses",
    detalles: ["Todo lo de la mensualidad", "Mejor precio por mes"],
    destacado: false,
  },
];
