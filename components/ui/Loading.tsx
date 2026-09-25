export default function Loading() {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-[#ccff00]" />
        <p className="text-sm text-[#8d96a6]">
          Loading workouts…
        </p>
      </div>
    </div>
  );
}