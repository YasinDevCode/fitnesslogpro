"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Clock3,
  Flame,
  Star,
  Check,
  X,
} from "lucide-react";

import { PlanWorkout, Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface Props {
  workout: PlanWorkout | Workout;
  type: "plan" | "saved";
}

export default function PlanWorkoutCard({
  workout,
  type,
}: Props) {
  const {
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useFitLog();

  const isPlanWorkout =
    type === "plan" &&
    "done" in workout;

  const done =
    isPlanWorkout
      ? workout.done
      : false;

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-[#29303b] bg-[#14171d] p-4 md:flex-row md:items-center">

      {/* Thumbnail */}
      <div className="relative h-[90px] w-full shrink-0 overflow-hidden rounded-lg md:w-[145px]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="145px"
        />
      </div>

      {/* Information */}
      <div className="min-w-0 flex-1">

        <h3 className="display-font text-xl uppercase">
          {workout.name}
        </h3>

        <p className="mt-1 text-xs text-[#7f8795]">
          {workout.equipment}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[#8d96a6]">

          <span className="flex items-center gap-1">
            <Clock3 size={14} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={14} />
            {workout.rating}
          </span>

        </div>

      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2">

        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-[#3d4653] px-4 py-2 text-xs text-white hover:bg-[#1b2028]"
        >
          View Details
        </Link>

        {type === "plan" && (
          <button
            onClick={() =>
              markAsDone(workout.id)
            }
            disabled={done}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold ${
              done
                ? "bg-[#39403c] text-[#9da59f]"
                : "bg-[#ccff00] text-black"
            }`}
          >
            <Check size={14} />

            {done
              ? "Done"
              : "Mark as Done"}
          </button>
        )}

        <button
          onClick={() =>
            type === "plan"
              ? removeFromPlan(workout.id)
              : removeFromSaved(workout.id)
          }
          className="rounded-full p-2 text-[#77808e] hover:bg-[#20252d] hover:text-white"
          aria-label="Remove workout"
        >
          <X size={18} />
        </button>

      </div>
    </div>
  );
}