import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jotavix Streaming — Cuentas de Netflix, Spotify y más en Ecuador",
    template: "%s — Jotavix Streaming",
  },
  description:
    "Compra cuentas de streaming en Ecuador al mejor precio. Netflix, Spotify, Disney+, Max, Prime Video, Crunchyroll, Canva, ChatGPT y más. Planes desde $1. Atención inmediata por WhatsApp.",
  keywords: [
    "cuentas netflix ecuador",
    "netflix barato ecuador",
    "spotify ecuador",
    "disney plus ecuador",
    "cuentas streaming ecuador",
    "streaming barato ecuador",
    "cuentas streaming cuenca",
    "netflix cuenca",
    "spotify cuenca",
    "comprar netflix ecuador",
    "cuentas compartidas ecuador",
    "streaming precio ecuador",
    "max hbo ecuador",
    "prime video ecuador",
    "crunchyroll ecuador",
    "canva pro ecuador",
    "chatgpt ecuador",
  ],
  authors: [{ name: "Jotavix Streaming" }],
  creator: "Jotavix Streaming",
  metadataBase: new URL("https://jotavix.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jotavix Streaming — Cuentas de Netflix, Spotify y más en Ecuador",
    description:
      "Compra cuentas de streaming en Ecuador al mejor precio. Planes desde $1. Atención inmediata por WhatsApp.",
    url: "https://jotavix.com",
    siteName: "Jotavix Streaming",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jotavix Streaming — Cuentas de streaming en Ecuador",
    description:
      "Netflix, Spotify, Disney+, Max y más. Planes desde $1. Atención por WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Jotavix Streaming",
              url: "https://jotavix.com",
              description:
                "Venta de cuentas de streaming en Ecuador. Netflix, Spotify, Disney+, Max, Prime Video y más.",
              telephone: "+593979988113",
              address: {
                "@type": "PostalAddress",
                addressCountry: "EC",
                addressRegion: "Azuay",
                addressLocality: "Cuenca",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+593979988113",
                contactType: "sales",
                availableLanguage: "Spanish",
                contactOption: "TollFree",
              },
              sameAs: ["https://wa.me/593979988113"],
            }),
          }}
        />
      </head>
      <body className={`${geist.className} bg-black text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
