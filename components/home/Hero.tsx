import Image from "next/image";
import Link from "next/link";
import { ArrowDown }from "lucide-react";

export default function Hero(){
  return (
    <section className="container-fitlog pt-8">
      <div className="overflow-hidden rounded-2xl border border-[#29303b] bg-[#14171d]">

        <div className="grid min-h-[325px] items-center md:grid-cols-[1.25fr_0.75fr]">

          {/* Left Content */}
          <div className="p-8 md:p-12">

            <p className="mb-4 text-xs font-bold tracking-widest text-[#ccff00]">
              WORKOUT LIBRARY
            </p>

            <h1 className="display-font max-w-[650px] text-4xl uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
              TRAIN WITH INTENT.
              <br />
              LOG EVERY SET.
            </h1>

            <p className="mt-5 max-w-[600px] text-sm leading-6 text-[#929aa8]">
              FitLog is a dark, no-nonsense gym companion:
              pick a lift, lock it into today&apos;s plan,
              and watch the week&apos;s work add up.
            </p>

            <Link
              href="#library"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-black text-black transition hover:brightness-90"
            >
              BROWSE WORKOUTS
              <ArrowDown size={15} />
            </Link>

          </div>

          {/* Banner */}
          <div className="relative flex min-h-[325px] items-center justify-center">
            <Image
              src="/banner.png"
              alt="FitLog workout banner"
              width={350}
              height={350}
              priority
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}