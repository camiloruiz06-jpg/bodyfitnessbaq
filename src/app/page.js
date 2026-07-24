import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Anuncios from "@/components/Anuncios";
import Servicios from "@/components/Servicios";
import Planes from "@/components/Planes";
import Horarios from "@/components/Horarios";
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
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
