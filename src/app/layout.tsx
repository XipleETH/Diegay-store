import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://diegay.store";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DIEGAY · Estudio & Tienda de Música — Bandola, Cuerdas y Clases",
    template: "%s · DIEGAY Estudio de Música",
  },
  description:
    "Tienda de música y estudio dirigido por Diego, bandolista campeón. Instrumentos, cuerdas y accesorios, además de clases en vivo y videos grabados. Recorre nuestro estudio en un tour 3D inmersivo.",
  keywords: [
    "tienda de música",
    "bandola",
    "instrumentos andinos",
    "cuerdas para bandola",
    "tiple",
    "guitarra",
    "accesorios de música",
    "clases de música en vivo",
    "cursos de bandola online",
    "luthería",
  ],
  authors: [{ name: "DIEGAY Estudio de Música" }],
  creator: "Diego — Bandolista",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "DIEGAY Estudio de Música",
    title: "DIEGAY · Estudio & Tienda de Música",
    description:
      "Instrumentos, cuerdas y accesorios, clases en vivo y un tour 3D por el estudio del bandolista Diego.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIEGAY · Estudio & Tienda de Música",
    description:
      "Recorre el estudio en 3D, compra instrumentos y aprende con clases en vivo.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-bg text-foreground antialiased">
        <div className="studio-grain" />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
