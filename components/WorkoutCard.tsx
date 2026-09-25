import Image from "next/image";
import Link from "next/link";

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#242832] bg-[#11141a] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]">
      {/* Image */}
      <Link href={`/workout/${workout.id}`}>
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Difficulty */}
          <div className="absolute left-4 top-4">
            <span className="rounded-md bg-black/75 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#ccff00] backdrop-blur">
              {workout.difficulty}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full border border-[#303641] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#929aa8]"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <Link href={`/workout/${workout.id}`}>
          <h2 className="mt-4 line-clamp-1 text-xl font-black uppercase text-white transition group-hover:text-[#ccff00]">
            {workout.name}
          </h2>
        </Link>

        {/* Equipment */}
        <p className="mt-2 line-clamp-1 text-sm text-[#737b89]">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="rounded-md bg-[#181c23] p-3">
            <p className="text-[10px] font-bold uppercase text-[#737b89]">
              TIME
            </p>

            <p className="mt-1 text-sm font-bold text-white">
              {workout.duration} min
            </p>
          </div>

          <div className="rounded-md bg-[#181c23] p-3">
            <p className="text-[10px] font-bold uppercase text-[#737b89]">
              CALORIES
            </p>

            <p className="mt-1 text-sm font-bold text-white">
              {workout.caloriesBurned}
            </p>
          </div>

          <div className="rounded-md bg-[#181c23] p-3">
            <p className="text-[10px] font-bold uppercase text-[#737b89]">
              RATING
            </p>

            <p className="mt-1 text-sm font-bold text-white">
              ★ {workout.rating}
            </p>
          </div>
        </div>

        {/* View Details */}
        <Link
          href={`/workout/${workout.id}`}
          className="mt-5 flex w-full items-center justify-center rounded-lg border border-[#303641] px-4 py-3 text-sm font-black uppercase text-white transition hover:border-[#ccff00] hover:bg-[#ccff00] hover:text-black"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}