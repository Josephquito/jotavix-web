import { getCatalog, getPlatform } from "@/lib/catalog";
import PlanList from "@/components/catalog/PlanList";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const platforms = getCatalog();
  return platforms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) return {};

  const minPrice = Math.min(
    ...platform.plans.filter((p) => p.visible).map((p) => p.price),
  );
  const planNames = platform.plans
    .filter((p) => p.visible)
    .map((p) => p.name)
    .join(", ");

  return {
    title: `${platform.name} en Ecuador — Desde $${minPrice.toFixed(2)}`,
    description: `Compra cuentas de ${platform.name} en Ecuador. Planes disponibles: ${planNames}. Precios desde $${minPrice.toFixed(2)}. Atención inmediata por WhatsApp.`,
    keywords: [
      `${platform.name.toLowerCase()} ecuador`,
      `cuentas ${platform.name.toLowerCase()} ecuador`,
      `${platform.name.toLowerCase()} barato ecuador`,
      `comprar ${platform.name.toLowerCase()} ecuador`,
      `${platform.name.toLowerCase()} precio ecuador`,
      `${platform.name.toLowerCase()} cuenca`,
    ],
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: `${platform.name} en Ecuador — Desde $${minPrice.toFixed(2)}`,
      description: `Compra cuentas de ${platform.name} en Ecuador desde $${minPrice.toFixed(2)}. Atención por WhatsApp.`,
      url: `https://jotavix.com/${slug}`,
      siteName: "Jotavix Streaming",
      locale: "es_EC",
      type: "website",
    },
  };
}

export default async function PlatformPage({ params }: Props) {
  const { slug } = await params;
  const platform = getPlatform(slug);

  if (!platform) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <Link
        href="/productos"
        className="text-white/40 hover:text-white text-sm transition-colors mb-4 inline-block"
      >
        ← Volver al catálogo
      </Link>

      <div className="flex items-center gap-6 mb-4">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src={platform.image}
            alt={platform.name}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-1">{platform.name}</h1>
          <p className="text-white/50 text-sm">
            {platform.plans.filter((p) => p.visible).length} planes disponibles
          </p>
        </div>
      </div>

      <PlanList plans={platform.plans} platformName={platform.name} />
    </div>
  );
}
