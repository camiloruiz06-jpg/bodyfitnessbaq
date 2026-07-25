"use client";

import { useEffect, useState } from "react";

const RUTA_LOGO = "/brand/logo.png";

// Muestra el logo oficial (public/brand/logo.png) si el archivo existe.
// Si no existe todavía, muestra un logo de TEXTO con el mismo estilo:
// badge "GIMNASIO" en rojo + "Body Fitness" en letra script.
export default function Logo({ className = "", tamano = "h-12" }) {
  const [hayImagen, setHayImagen] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = RUTA_LOGO;
    img.onload = () => setHayImagen(true);
  }, []);

  if (hayImagen) {
    return (
      <img
        src={RUTA_LOGO}
        alt="Logo Gimnasio Body Fitness"
        className={`${tamano} aspect-square w-auto rounded-full object-cover ring-2 ring-rojo/70 ${className}`}
      />
    );
  }

  return (
    <span
      className={`inline-flex flex-col items-center leading-none ${className}`}
    >
      <span className="bg-rojo text-hueso text-[10px] font-bold tracking-[0.35em] px-2 py-0.5 uppercase">
        Gimnasio
      </span>
      <span
        className="text-rojo text-3xl mt-1"
        style={{ fontFamily: "var(--font-script), cursive" }}
      >
        Body Fitness
      </span>
    </span>
  );
}
