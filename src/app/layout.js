import { Anton, Inter, Pacifico } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Fuente script para el logo de texto (fallback si no está logo.png)
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
  // Dirección del sitio: con esto los enlaces que se comparten
  // (WhatsApp, Instagram, Facebook) arman bien la imagen de portada
  metadataBase: new URL("https://bodyfitnessbaq.vercel.app"),
  title:
    "Gimnasio Body Fitness | Gimnasio, Rumbaterapia y Boxeo en Barranquilla",
  description:
    "Gimnasio Body Fitness en Barranquilla: pesas y máquinas, rumbaterapia y boxeo. Tu único límite eres TÚ. Visítanos en la Cra 42 # 82A-36 o escríbenos por WhatsApp.",
  keywords: [
    "gimnasio Barranquilla",
    "gym Barranquilla",
    "rumbaterapia",
    "boxeo Barranquilla",
    "Body Fitness",
  ],
  openGraph: {
    title: "Gimnasio Body Fitness — Barranquilla",
    description:
      "Gimnasio • Rumbaterapia • Boxeo. Tu único límite eres TÚ. Cra 42 # 82A-36, Barranquilla.",
    locale: "es_CO",
    type: "website",
    siteName: site.nombreCompleto,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${inter.variable} ${pacifico.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
