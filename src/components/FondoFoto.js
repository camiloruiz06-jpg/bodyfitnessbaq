"use client";

import { useEffect, useState } from "react";

// Foto de fondo para una sección, con capa oscura encima para que
// el texto siga siendo legible. Si el archivo no existe todavía,
// no muestra nada (la sección queda con el fondo oscuro normal).
//
// Uso: la sección padre debe tener `relative` y el contenido `relative z-10`.
//   <FondoFoto src="/gym/hero.jpg" />
export default function FondoFoto({ src, opacidad = 0.35 }) {
  const [hayImagen, setHayImagen] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setHayImagen(true);
  }, [src]);

  if (!hayImagen) return null;

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
        style={{ opacity: opacidad }}
      />
      {/* Degradado para fundir la foto con el fondo negro */}
      <div className="absolute inset-0 bg-gradient-to-b from-negro via-negro/40 to-negro" />
    </div>
  );
}
