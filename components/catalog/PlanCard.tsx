import { Plan } from "@/data/types";

interface Props {
  plan: Plan;
  selected: boolean;
  onClick: () => void;
}

export default function PlanCard({ plan, selected, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-2xl p-4 flex flex-col gap-1 transition-all duration-200 border ${
        selected
          ? "border-red-500 bg-red-500/10"
          : "border-white/10 bg-white/5 hover:border-white/30"
      }`}
    >
      <h3 className="font-semibold text-sm">{plan.name}</h3>
      <span className="text-red-400 font-bold text-xl">
        ${plan.price.toFixed(2)}
      </span>
    </div>
  );
}
