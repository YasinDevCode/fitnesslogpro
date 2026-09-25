import Link from "next/link";

export default function EmptyPlan(){
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#303742] bg-[#101217] p-8 text-center">

      <h2 className="display-font text-3xl uppercase">
        NOTHING HERE YET
      </h2>

      <p className="mt-2 text-sm text-[#858e9d]">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-[#ccff00] px-7 py-3 text-sm font-bold text-black shadow-[0_0_25px_rgba(204,255,0,0.18)]"
      >
        Go to workouts
      </Link>

    </div>
  );
}