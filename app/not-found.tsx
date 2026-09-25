import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-fitlog flex min-h-[70vh] items-center justify-center text-center">

      <div>
        <p className="text-sm font-bold tracking-[0.3em] text-[#ccff00]">
          404
        </p>

        <h1 className="display-font mt-3 text-6xl uppercase">
          PAGE NOT FOUND
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#858e9d]">
          The workout or page you are looking for
          does not exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-md bg-[#ccff00] px-6 py-3 text-sm font-bold text-black"
        >
          Back to Home
        </Link>
      </div>

    </section>
  );
}