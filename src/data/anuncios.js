// ============================================================
// ANUNCIOS / PROMOS DEL CARRUSEL  ⭐ (sección principal)
//
// El carrusel acepta DOS tipos de anuncio (puedes mezclarlos):
//
// A) UNA IMAGEN TUYA (flyer, promo, foto):
//    1. Guarda la imagen en  public/anuncios/  (ej: anuncio-1.jpg)
//    2. Agrega a la lista:
//         {
//           imagen: "/anuncios/anuncio-1.jpg",
//           alt: "texto que describe la promo",
//           link: "https://...",   // OPCIONAL: a dónde lleva al tocarla
//         },
//
// B) UNA PUBLICACIÓN DE INSTAGRAM (foto, video o reel):
//    1. Abre la publicación en Instagram y copia el link, ej:
//         https://www.instagram.com/p/ABC123xyz/
//         https://www.instagram.com/reel/DEF456uvw/
//    2. Agrega a la lista:
//         { instagram: "https://www.instagram.com/p/ABC123xyz/" },
//
// CÓMO QUITAR UN ANUNCIO: borra su bloque de la lista.
// El orden de la lista es el orden del carrusel. Si la lista queda
// vacía, la página muestra un aviso elegante (no se rompe).
// ============================================================

export const anuncios = [
  {
    imagen: "/anuncios/anuncio-4.jpg",
    alt: "Sé tu mejor versión — ¡inscríbete hoy en Gimnasio Body Fitness!",
  },
  {
    imagen: "/anuncios/anuncio-1.jpg",
    alt: "Promoción entrena en compañía: 2 personas por $160.000, solo clientes nuevos",
  },
  {
    imagen: "/anuncios/anuncio-6.jpg",
    alt: "Entrená con propósito — Gimnasio Body Fitness",
  },
  {
    imagen: "/anuncios/anuncio-5.jpg",
    alt: "Sé mejor que ayer",
  },
  {
    imagen: "/anuncios/anuncio-2.jpg",
    alt: "Modo fútbol: hoy juega la selección Colombia",
  },
  {
    imagen: "/anuncios/anuncio-3.jpg",
    alt: "Feliz Día del Padre de parte de Gimnasio Body Fitness",
  },
  // 👈 CAMBIAR: para agregar más, sigue los ejemplos:
  // { imagen: "/anuncios/anuncio-7.jpg", alt: "Descripción de la promo" },
  // { instagram: "https://www.instagram.com/p/ABC123xyz/" },
];
