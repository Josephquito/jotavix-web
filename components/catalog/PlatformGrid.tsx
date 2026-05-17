import { Platform } from "@/data/types";
import PlatformCard from "./PlatformCard";

interface Props {
  platforms: Platform[];
}

export default function PlatformGrid({ platforms }: Props) {
  return (
    <div
      id="productos"
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {platforms.map((platform) => (
        <PlatformCard key={platform.slug} platform={platform} />
      ))}
    </div>
  );
}
