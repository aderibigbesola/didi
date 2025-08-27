import Link from "next/link";

export default function Programs() {
  return (
    <div className="flex h-svh w-svw flex-col items-center justify-center gap-4">
      <h1 className="text-5xl">Coming Soon</h1>
      <p>
        Return to the{" "}
        <Link
          href="/"
          className="hover:text-brand-primary-normal font-bold underline"
        >
          Home
        </Link>{" "}
        page
      </p>
    </div>
  );
}
