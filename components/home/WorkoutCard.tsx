import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Flame,
  Star,
} from "lucide-react";

import { Workout } from "@/types/workout";

interface Props {
  workout: Workout;
}

export default function WorkoutCard({ workout }: Props) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden rounded-xl border border-[#29303b] bg-[#14171d] transition hover:-translate-y-1 hover:border-[#526070]"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-4">

        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="display-font text-xl uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-1 text-xs text-[#737c8b]">
          {workout.equipment}
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-[#242a34] pt-3 text-xs text-[#8d96a6]">

          <span className="flex items-center gap-1">
            <Clock3 size={13} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={13} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={13} />
            {workout.rating}
          </span>

        </div>
      </div>
    </Link>
  );
}