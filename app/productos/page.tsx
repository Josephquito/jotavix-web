import { getCatalog } from "@/lib/catalog";
import PlatformGrid from "@/components/catalog/PlatformGrid";

export default function Productos() {
  const platforms = getCatalog();

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <PlatformGrid platforms={platforms} />
    </div>
  );
}
