// ============================================================
// PLANES Y PRECIOS — Tarifas 2025 (del flyer oficial del gym)
// 👈 CAMBIAR aquí cuando el gym actualice las tarifas.
// Si un plan no existe más, simplemente bórralo de la lista.
// "destacado: true" resalta esa tarjeta en rojo.
// ============================================================

export const planes = [
  {
    id: "sesion",
    nombre: "Por Sesión",
    precio: "$10.000",
    periodo: "una visita",
    destacado: false,
  },
  {
    id: "quincena",
    nombre: "15 Días",
    precio: "$80.000",
    periodo: "media mensualidad",
    destacado: false,
  },
  {
    id: "mes1",
    nombre: "1 Mes",
    precio: "$100.000",
    periodo: "por mes",
    destacado: true, // el más popular
  },
  {
    id: "mes2",
    nombre: "2 Meses",
    precio: "$180.000",
    periodo: "ahorras $20.000",
    destacado: false,
  },
  {
    id: "mes3",
    nombre: "3 Meses",
    precio: "$240.000",
    periodo: "ahorras $60.000",
    destacado: false,
  },
  {
    id: "mes6",
    nombre: "6 Meses",
    precio: "$450.000",
    periodo: "ahorras $150.000",
    destacado: false,
  },
];
