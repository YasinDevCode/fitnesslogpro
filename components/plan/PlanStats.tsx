"use client";

import {useFitLog} from "@/context/FitLogContext";

export default function PlanStats(){
  const { plan } = useFitLog();

  const minutes = plan.reduce(
    (total, item) => total + item.duration,
    0
  );

  const calories = plan.reduce(
    (total, item) => total + item.caloriesBurned,
    0
  );

  return (
    <div className="grid overflow-hidden rounded-2xl border border-[#29303b] bg-[#14171d] md:grid-cols-3">

      <div className="p-6 md:border-r md:border-[#29303b]">
        <p className="text-xs text-[#8b94a3]">
          Exercises
        </p>

        <p className="mt-1 text-4xl font-black text-[#ccff00]">
          {plan.length}
        </p>
      </div>

      <div className="p-6 md:border-r md:border-[#29303b]">
        <p className="text-xs text-[#8b94a3]">
          Minutes
        </p>

        <p className="mt-1 text-4xl font-black">
          {minutes}
        </p>
      </div>

      <div className="p-6">
        <p className="text-xs text-[#8b94a3]">
          Calories
        </p>

        <p className="mt-1 text-4xl font-black">
          {calories}
        </p>
      </div>

    </div>
  );
}