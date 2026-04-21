import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-900/10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-amber-200">
            PF
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              PayForce
            </p>
            <p className="text-sm font-medium text-slate-900">
              UK Late Payment Recovery
            </p>
          </div>
        </Link>

        <Link
          href="/signup"
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-slate-900 bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:px-5"
        >
          Start free trial
        </Link>
      </div>
    </header>
  );
}
