import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/85 shadow-[0_24px_80px_rgba(20,33,61,0.08)]">
        <div className="border-b border-slate-200/90 px-6 py-8 sm:px-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-800">
                PayForce early access
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Join the PayForce waitlist.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
                If the calculator is useful, the next step is simple: leave your
                details here and use the live Google Form to register interest
                in early access.
              </p>
            </div>

            <Link
              href="/statutory-interest-calculator"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Back to calculator
            </Link>
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="border-b border-slate-200/90 bg-slate-950 px-6 py-8 text-slate-100 lg:border-b-0 lg:border-r lg:px-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-amber-300">
                  What happens next
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  You submit the form, the interest is captured, and the page
                  remains lightweight because the Google Form handles collection
                  directly.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-amber-300">
                  Why this page still matters
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  The calculator page sells the value. This page should reduce
                  friction, keep trust high, and make the embedded form feel
                  intentional rather than bolted on.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">
                  Prefer opening the form directly?
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfTdHvMYqS_Z_IZJF9pc7M1g58XliA4icLvEmRJiJxDur3kHw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                >
                  Open Google Form
                </a>
              </div>
            </div>
          </aside>

          <div className="bg-[linear-gradient(180deg,rgba(247,244,238,0.7),rgba(255,255,255,0.95))] p-3 sm:p-4">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(20,33,61,0.08)]">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfTdHvMYqS_Z_IZJF9pc7M1g58XliA4icLvEmRJiJxDur3kHw/viewform?embedded=true"
                title="PayForce early access form"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="min-h-[72vh] w-full bg-white md:min-h-[1100px]"
              >
                Loading...
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
