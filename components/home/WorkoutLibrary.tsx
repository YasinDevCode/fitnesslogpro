"use client";

import {useEffect, useState} from "react";
import WorkoutCard from "./WorkoutCard";
import Loading from "@/components/ui/Loading";
import {Workout} from "@/types/workout";
import {getWorkouts} from "@/lib/api";

export default function WorkoutLibrary(){
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadWorkouts(){
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch{
        setError("Failed to load workouts.");
      } finally{
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  return(
    <section
      id="library"
      className="container-fitlog scroll-mt-24 py-16"
    >
      <div className="mb-7">
        <h2 className="display-font text-3xl uppercase sm:text-4xl">
          THE LIBRARY
        </h2>

        <p className="mt-1 text-sm text-[#858e9d]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {loading && <Loading />}

      {error && (
        <div className="rounded-xl border border-red-900 bg-red-950/30 p-6 text-center text-red-300">
          {error}
        </div>
      )}

      {!loading && !error &&(
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout)=>(
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      )}
    </section>
  );
}