"use client";

import Image from "next/image";
import Link from "next/link";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const { plan, saved } = useFitLog();
  const planCount = plan.length;
  const savedCount = saved.length;

  return (
    <header className="sticky top-0 z-50 border-b border-[#242832] bg-[#090b0f]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12">

        {/* Logo + FITLOG */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="FitLog Home"
        >
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={42}
            height={42}
            priority
            className="h-10 w-10 object-contain"
          />
            <span className="text-xl font-black tracking-tight text-white">
             FITLOG
           </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">

          <Link
            href="/#library"
            className="text-sm font-bold uppercase tracking-wide text-[#929aa8] transition hover:text-[#ccff00]"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#929aa8] transition hover:text-[#ccff00]"
          >
            My Plan

            {planCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[10px] font-black text-black">
                {planCount}
              </span>
            )}
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#929aa8] transition hover:text-[#ccff00]"
          >
            Saved

            {savedCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[10px] font-black text-black">
                {savedCount}
              </span>
            )}
          </Link>

        </nav>

        {/* Mobile My Plan */}
        <Link
          href="/my-plan"
          className="flex items-center gap-2 rounded-md border border-[#303641] px-3 py-2 text-xs font-bold uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00] md:hidden"
        >
          My Plan

          {planCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[10px] font-black text-black">
              {planCount}
            </span>
          )}
        </Link>

      </div>
    </header>
  );
}