"use client";

import { useState } from "react";
import { Plan } from "@/data/types";
import PlanCard from "./PlanCard";

interface Props {
  plans: Plan[];
  platformName: string;
}

export default function PlanList({ plans, platformName }: Props) {
  const visiblePlans = plans.filter((p) => p.visible);
  const [selected, setSelected] = useState<Plan>(visiblePlans[0]);

  const message = encodeURIComponent(
    `Hola, quiero comprar ${platformName} - ${selected.name}`,
  );

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: `comprar_${platformName}_${selected.name}`,
      });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {visiblePlans.map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            selected={selected.name === plan.name}
            onClick={() => setSelected(plan)}
          />
        ))}
      </div>

      <a
        href={`https://wa.me/593979988113?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full text-center transition-colors text-sm"
      >
        Comprar por WhatsApp
      </a>
    </div>
  );
}
