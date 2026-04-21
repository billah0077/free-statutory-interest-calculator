import Link from "next/link";

type CTABannerProps = {
  visible: boolean;
};

export function CTABanner({ visible }: CTABannerProps) {
  if (!visible) {
    return null;
  }

  return (
    <section className="rounded-[2rem] border border-amber-300/70 bg-amber-100 px-6 py-6 text-slate-950 shadow-[0_18px_40px_rgba(214,166,59,0.22)]">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-900">
        Next step
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight">
        PayForce can handle this legal claim automatically.
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-800">
        No solicitor needed. No spreadsheet. No manual interest updates. Use
        PayForce to turn this calculation into a professional collection flow.
      </p>
      <Link
        href="/signup"
        className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Get early access
      </Link>
    </section>
  );
}
