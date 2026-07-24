import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Anuncios from "@/components/Anuncios";
import Servicios from "@/components/Servicios";
import Planes from "@/components/Planes";
import Horarios from "@/components/Horarios";
import Galeria from "@/components/Galeria";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Anuncios />
        <Servicios />
        <Planes />
        <Horarios />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
