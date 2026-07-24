CARPETA DE ANUNCIOS / PROMOS (carrusel de la página)
====================================================

1. Guarda aquí las imágenes de las promos, por ejemplo:

       anuncio-1.jpg
       anuncio-2.jpg
       promo-enero.png

2. Luego abre el archivo  src/data/anuncios.js  y agrega cada
   imagen a la lista siguiendo el ejemplo que hay ahí:

       {
         imagen: "/anuncios/anuncio-1.jpg",
         alt: "Descripción de la promo",
         link: "https://...",   // opcional
       },

3. Guarda y listo. El carrusel las muestra rotando cada 5 segundos.

Para QUITAR un anuncio: borra su bloque de src/data/anuncios.js
(y si quieres, borra también la imagen de esta carpeta).
