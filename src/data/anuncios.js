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
  // 👈 CAMBIAR: agregar aquí las promos reales. Ejemplos:
  // { imagen: "/anuncios/anuncio-1.jpg", alt: "Promo 2x1 de enero" },
  // { instagram: "https://www.instagram.com/p/ABC123xyz/" },
];
