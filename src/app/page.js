import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Anuncios from "@/components/Anuncios";
import Servicios from "@/components/Servicios";
import Planes from "@/components/Planes";
import Horarios from "@/components/Horarios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getSite, getAnuncios, getPlanes, getServicios } from "@/sanity/content";

export default async function Home() {
  // Trae el contenido editable desde el panel (/studio).
  // Si el panel está vacío o falla, usa los datos de src/data/.
  const [site, anuncios, planes, servicios] = await Promise.all([
    getSite(),
    getAnuncios(),
    getPlanes(),
    getServicios(),
  ]);

  return (
    <>
      <Navbar site={site} />
      <main>
        <Hero site={site} />
        <Anuncios anuncios={anuncios} site={site} />
        <Servicios servicios={servicios} whatsapp={site.whatsapp} />
        <Planes planes={planes} whatsapp={site.whatsapp} />
        <Horarios
          horarios={site.horarios}
          bloquesSemana={site.bloquesSemana}
        />
        <Contacto site={site} servicios={servicios} />
      </main>
      <Footer site={site} />
      <WhatsAppFloat numero={site.whatsapp} />
    </>
  );
}
