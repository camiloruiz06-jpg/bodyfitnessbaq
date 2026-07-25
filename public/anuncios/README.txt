CARPETA DE ANUNCIOS / PROMOS (carrusel de la página)
====================================================

El carrusel acepta dos tipos de anuncio (se configuran en el
archivo  src/data/anuncios.js  — ahí están los ejemplos):

A) IMÁGENES TUYAS:
   1. Guarda la imagen aquí, por ejemplo:
          anuncio-1.jpg
          promo-enero.png
   2. Agrégala a la lista en src/data/anuncios.js:
          { imagen: "/anuncios/anuncio-1.jpg", alt: "Descripción" },

B) PUBLICACIONES DE INSTAGRAM (fotos, videos o reels):
   No hay que guardar nada aquí — solo copia el link del post
   y agrégalo en src/data/anuncios.js:
          { instagram: "https://www.instagram.com/p/ABC123xyz/" },

El carrusel pasa solo cada 5 segundos, tiene flechas y puntitos,
y al llegar al último vuelve a empezar. Para QUITAR un anuncio,
borra su bloque de src/data/anuncios.js.
