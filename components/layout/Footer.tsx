import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#20252e] bg-[#0d0f13]">
      <div className="container-fitlog flex min-h-[100px] flex-col items-center justify-between gap-4 py-6 md:flex-row">

        <div className="flex items-center gap-2 font-black">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-[#ccff00] text-black">
            <Dumbbell size={17} />
          </div>

          FITLOG
        </div>

        <p className="text-center text-sm text-[#7f8795]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}