import { getFeatured } from "@/lib/catalog";
import FeaturedCarousel from "@/components/catalog/FeaturedCarousel";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import Link from "next/link";

export default function Home() {
  const featured = getFeatured();

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Hero */}
      <div className="text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
          Disfruta de tus <span className="text-red-500">plataformas</span>{" "}
          favoritas
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-6 md:mb-8">
          Compra tus cuentas de Netflix, Spotify, Disney+ y más, planes desde
          $1.00.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/productos"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 md:px-8 py-3 rounded-full transition-colors text-sm md:text-base"
          >
            Ver más productos
          </Link>
        </div>
      </div>

      {/* Productos destacados */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Productos destacados</h2>
        <FeaturedCarousel platforms={featured} />
      </div>

      <WhatsAppWidget />
    </div>
  );
}
