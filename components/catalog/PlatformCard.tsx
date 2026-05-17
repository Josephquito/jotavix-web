import Image from "next/image";
import Link from "next/link";
import { Platform } from "@/data/types";

interface Props {
  platform: Platform;
}

export default function PlatformCard({ platform }: Props) {
  const visiblePlans = platform.plans.filter((p) => p.visible);
  const minPrice = Math.min(...visiblePlans.map((p) => p.price));

  return (
    <Link
      href={`/${platform.slug}`}
      className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 rounded-2xl overflow-hidden transition-all duration-200"
    >
      <div className="relative aspect-video bg-white/5 flex items-center justify-center">
        <Image
          src={platform.image}
          alt={platform.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-sm mb-1">{platform.name}</h2>
        <p className="text-white/50 text-xs mb-3">
          {visiblePlans.length} {visiblePlans.length === 1 ? "plan" : "planes"}{" "}
          disponibles
        </p>
        <div className="flex items-center justify-between">
          <span className="text-red-400 font-bold text-lg">
            ${minPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}
