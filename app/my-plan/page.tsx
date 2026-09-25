"use client";

import { useMemo, useState } from "react";

import { useFitLog } from "@/context/FitLogContext";

import PlanStats from "@/components/plan/PlanStats";
import PlanTabs from "@/components/plan/PlanTabs";
import PlanWorkoutCard from "@/components/plan/PlanWorkoutCard";
import EmptyPlan from "@/components/plan/EmptyPlan";
import SortDropdown from "@/components/ui/SortDropdown";

export default function MyPlanPage(){
  const {
    plan,
    saved,
  } = useFitLog();

  const [activeTab, setActiveTab] =
    useState<"plan" | "saved">("plan");

  const [sortBy, setSortBy] =
    useState<
      "duration" | "calories" | "rating"
    >("duration");

  const currentList = useMemo(()=>{
    const list =
      activeTab === "plan"
        ? [...plan]
        : [...saved];

    return list.sort((a, b)=>{
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories"){
        return a.caloriesBurned - b.caloriesBurned;
      }

      return a.rating - b.rating;
    });
  }, [activeTab, plan, saved, sortBy]);

  return (
    <section className="container-fitlog py-10">

      {/* Header */}
      <div className="mb-7">
        <h1 className="display-font text-4xl uppercase">
          MY PLAN
        </h1>

        <p className="mt-1 text-sm text-[#8b94a3]">
          Cap of five lifts for today. Finish them,
          then load more.
        </p>
      </div>

      {/* Stats */}
      <PlanStats />

      {/*Controls*/}
      <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <PlanTabs
          active={activeTab}
          onChange={setActiveTab}
        />

        <SortDropdown
          value={sortBy}
          onChange={setSortBy}
        />

      </div>

      {/* List */}
      <div className="mt-6 space-y-4">

        {currentList.length === 0?(
          <EmptyPlan />
        ) : (
          currentList.map((workout) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              type={activeTab}
            />
          ))
        )}

      </div>

    </section>
  );
}