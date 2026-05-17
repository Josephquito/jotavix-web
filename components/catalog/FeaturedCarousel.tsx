"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { Platform } from "@/data/types";
import { useEffect, useRef } from "react";

interface Props {
  platforms: Platform[];
}

export default function FeaturedCarousel({ platforms }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: false,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !emblaApi) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta > 0) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollPrev();
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [emblaApi]);

  if (!platforms || platforms.length === 0) return null;

  return (
    <div ref={containerRef}>
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex gap-4">
          {platforms.map((platform) => {
            const visiblePlans = platform.plans.filter((p) => p.visible);
            const minPrice = Math.min(...visiblePlans.map((p) => p.price));

            return (
              <Link
                key={platform.slug}
                href={`/${platform.slug}`}
                className="flex-none w-64 group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <div className="relative aspect-video">
                  <Image
                    src={platform.image}
                    alt={platform.name}
                    fill
                    sizes="256px"
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-white/50 text-xs mb-3">
                    {visiblePlans.length}{" "}
                    {visiblePlans.length === 1 ? "plan" : "planes"} disponibles
                  </p>
                  <span className="text-red-400 font-bold text-lg">
                    ${minPrice.toFixed(2)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
