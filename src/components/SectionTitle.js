import Reveal from "@/components/Reveal";

// Título de sección estilo cartel de gym: kicker rojo + titular grande
export default function SectionTitle({ kicker, children, id }) {
  return (
    <Reveal className="mb-10 text-center">
      {kicker && (
        <p className="text-rojo font-bold tracking-[0.3em] uppercase text-sm mb-2">
          {kicker}
        </p>
      )}
      <h2
        id={id}
        className="titulo-display text-4xl sm:text-5xl md:text-6xl text-hueso"
      >
        {children}
      </h2>
      <div
        className="mx-auto mt-4 h-1.5 w-24 bg-rojo"
        style={{ transform: "skewX(-18deg)" }}
        aria-hidden="true"
      />
    </Reveal>
  );
}
