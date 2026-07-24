import { FaInstagram } from "react-icons/fa";
import { HiPhotograph } from "react-icons/hi";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { instagramPosts } from "@/data/gallery";
import { site } from "@/data/site";

export default function Galeria() {
  return (
    <section id="galeria" className="scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Así se vive el gym">
          <span className="brochazo">Galería</span>
        </SectionTitle>

        {instagramPosts.length === 0 ? (
          <PlaceholderGaleria />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instagramPosts.map((url, i) => (
              <Reveal key={url} delay={(i % 3) * 0.1}>
                {/* Embed oficial de Instagram (no requiere acceso a la cuenta) */}
                <iframe
                  src={`${url.endsWith("/") ? url : `${url}/`}embed`}
                  title={`Publicación de Instagram ${i + 1} de ${site.nombreCompleto}`}
                  className="h-[480px] w-full border border-borde bg-carbon"
                  loading="lazy"
                  allowFullScreen
                />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={0.15} className="mt-10 text-center">
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-hueso/40 px-8 py-4 font-bold uppercase tracking-wide text-hueso transition-colors hover:border-rojo hover:text-rojo"
          >
            <FaInstagram className="text-xl" aria-hidden="true" />
            Ver más en Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// Si aún no hay links de publicaciones, se muestra esta cuadrícula
// de relleno (no se rompe el diseño).
function PlaceholderGaleria() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className="flex h-64 flex-col items-center justify-center gap-3 border border-dashed border-borde bg-carbon/60 text-center">
            <HiPhotograph className="text-4xl text-rojo" aria-hidden="true" />
            <p className="px-6 text-sm text-gris-texto">
              Muy pronto fotos del gym. Síguenos en Instagram para ver más.
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
