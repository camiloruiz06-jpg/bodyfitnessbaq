// ============================================================
// DATOS GENERALES DEL GIMNASIO
// Todo lo que está marcado con 👈 CAMBIAR se puede editar aquí
// sin tocar ningún componente.
// ============================================================

export const site = {
  nombre: "Body Fitness",
  nombreCompleto: "Gimnasio Body Fitness",
  eslogan: "Tu único límite eres TÚ",
  ciudad: "Barranquilla, Colombia",
  direccion: "Cra 42 # 82A-36, Barranquilla",

  // Número de WhatsApp SIN el signo + (código de país + número)
  whatsapp: "573008945143", // 👈 CAMBIAR si cambia el número

  instagram: {
    usuario: "@bodyfitnessbq",
    url: "https://www.instagram.com/bodyfitnessbq",
  },

  // correo: "contacto@bodyfitness.com", // 👈 FALTA: correo del gym (opcional)

  // ----------------------------------------------------------
  // HORARIOS (confirmados: versión de la bio de Instagram)
  // 👈 CAMBIAR aquí si el gym cambia el horario.
  //    OJO: también hay que cambiarlo en `bloquesSemana` abajo.
  //    (Si el panel /studio tiene horarios cargados, manda el panel.)
  // ----------------------------------------------------------
  horarios: [
    {
      dias: "Lunes a Viernes",
      bloques: ["5:00 a.m. – 12:00 p.m.", "2:30 p.m. – 8:00 p.m."],
    },
    {
      dias: "Sábados",
      bloques: ["7:00 a.m. – 12:00 p.m."],
    },
    {
      dias: "Domingos y festivos",
      bloques: [],
      cerrado: true,
    },
  ],

  // Resumen corto para el footer / contacto
  horarioResumen: "L–V: 5am–12pm y 2:30pm–8pm · Sáb: 7am–12pm",

  // ----------------------------------------------------------
  // Versión numérica de los horarios (para el aviso "Abierto /
  // Cerrado ahora" de la página). Horas en formato 24h; las
  // medias horas van con decimales (14.5 = 2:30 p.m.).
  // 👈 CAMBIAR junto con los horarios de arriba si cambian.
  // ----------------------------------------------------------
  bloquesSemana: {
    lunesAViernes: [
      [5, 12], // 5:00 a.m. – 12:00 p.m.
      [14.5, 20], // 2:30 p.m. – 8:00 p.m.
    ],
    sabado: [
      [7, 12], // 7:00 a.m. – 12:00 p.m.
    ],
    // domingo: cerrado (no hay bloques)
  },
};
