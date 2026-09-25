"use client";

import Image from "next/image";
import Link from "next/link";
import{
  ArrowLeft,
  Bookmark,
  CalendarPlus,
} from "lucide-react";

import {useEffect, useState} from "react";

import {Workout} from "@/types/workout";
import { getWorkout } from "@/lib/api";
import { useFitLog } from "@/context/FitLogContext";

import SpecRow from "./SpecRow";
import Loading from "@/components/ui/Loading";

interface Props{
  id: string;
}

export default function WorkoutDetails({
  id,
}: Props){
  const [workout, setWorkout] = useState<Workout | null>(
    null
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useFitLog();

  useEffect(() => {
    async function loadWorkout(){
      try {
        const data = await getWorkout(id);
        setWorkout(data);
      } catch {
        setError("Workout not found");
      } finally {
        setLoading(false);
      }
    }

    loadWorkout();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error || !workout) {
    return (
      <section className="container-fitlog py-24 text-center">
        <h1 className="display-font text-4xl">
          WORKOUT NOT FOUND
        </h1>

        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold text-black"
        >
          Back to workouts
        </Link>
      </section>
    );
  }

  const alreadyPlanned = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);

  return (
    <section className="container-fitlog py-8">

      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-[#8d96a6] hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to library
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">

        {/* IMAGE */}
        <div className="relative min-h-[450px] overflow-hidden rounded-2xl border border-[#29303b] lg:min-h-[720px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
            sizes="50vw"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center">

          <h1 className="display-font text-4xl uppercase leading-tight sm:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#929aa8]">
            {workout.description}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-4 py-1.5 text-xs font-bold text-black"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-7 overflow-hidden rounded-xl border border-[#29303b] bg-[#14171d]">
            <SpecRow
              label="Equipment"
              value={workout.equipment}
            />

            <SpecRow
              label="Difficulty"
              value={workout.difficulty}
            />

            <SpecRow
              label="Sets"
              value={workout.sets}
            />

            <SpecRow
              label="Reps"
              value={workout.reps}
            />

            <SpecRow
              label="Duration"
              value={`${workout.duration} min`}
            />

            <SpecRow
              label="Calories"
              value={`${workout.caloriesBurned} kcal`}
            />

            <SpecRow
              label="Rating"
              value={workout.rating}
            />
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="display-font text-2xl uppercase">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map(
                (instruction, index) => (
                  <li
                    key={instruction}
                    className="flex gap-3 text-sm leading-6 text-[#c4cad3]"
                  >
                    <span className="font-bold text-[#ccff00]">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            <button
              onClick={() => addToPlan(workout)}
              disabled={alreadyPlanned}
              className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${
                alreadyPlanned
                  ? "cursor-not-allowed bg-[#3a3f47] text-[#8c95a3]"
                  : "bg-[#ccff00] text-black hover:brightness-90"
              }`}
            >
              <CalendarPlus size={17} />

              {alreadyPlanned
                ? "Already in today's plan"
                : "Add to today's plan"}
            </button>

            <button
              onClick={() => saveWorkout(workout)}
              disabled={alreadySaved}
              className={`inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-bold ${
                alreadySaved
                  ? "border-[#3a3f47] text-[#717987]"
                  : "border-[#3d4653] text-white hover:bg-[#171b22]"
              }`}
            >
              <Bookmark size={17} />

              {alreadySaved
                ? "Saved"
                : "Save for later"}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}