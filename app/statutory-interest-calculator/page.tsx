import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorCard } from "@/components/calculator/CalculatorCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

const canonicalUrl =
  "https://free-statutory-interest-calculator.vercel.app/statutory-interest-calculator";

const faqItems = [
  {
    question: "How is UK statutory interest calculated?",
    answer:
      "For late commercial payments, statutory interest is calculated using the invoice amount multiplied by the annual statutory rate, divided by 365, then multiplied by the number of overdue days.",
  },
  {
    question: "What is the current statutory interest rate in the UK?",
    answer:
      "For this calculator MVP, the statutory annual rate is 11.75%, made up of 8% plus a Bank of England base rate of 3.75%.",
  },
  {
    question: "Can I charge statutory interest on any unpaid invoice?",
    answer:
      "No. This calculator is intended for late B2B commercial payments. Whether a claim applies depends on the commercial relationship, contract terms, and the dispute context.",
  },
  {
    question: "What is the fixed compensation for late payment?",
    answer:
      "The fixed statutory compensation is 40 GBP for invoices below 1,000 GBP, 70 GBP for invoices from 1,000 GBP up to 9,999.99 GBP, and 100 GBP for invoices of 10,000 GBP or more.",
  },
  {
    question: "Do I need a solicitor to claim statutory interest?",
    answer:
      "Not always. Many businesses first calculate the claim themselves and send a professional payment demand. Complex disputes or court action may still justify legal advice.",
  },
] as const;

export const metadata: Metadata = {
  title: "Free UK Statutory Interest Calculator | PayForce",
  description:
    "Calculate statutory interest on overdue commercial invoices in the UK under the Late Payment of Commercial Debts (Interest) Act 1998.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Free UK Statutory Interest Calculator | PayForce",
    description:
      "Calculate statutory interest on overdue commercial invoices in the UK under the Late Payment of Commercial Debts (Interest) Act 1998.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function StatutoryInterestCalculatorPage() {
  return (
    <>
      <JsonLdSchema canonicalUrl={canonicalUrl} faqs={[...faqItems]} />
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_right,rgba(20,33,61,0.12),transparent_32%),radial-gradient(circle_at_left,rgba(214,166,59,0.24),transparent_28%)]" />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-800">
                Free calculator
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                UK late payment interest calculator for commercial invoices.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Calculate statutory interest, fixed compensation, and the full
                legal claim under the Late Payment of Commercial Debts
                (Interest) Act 1998 in one place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-slate-800">
                  Based on the Late Payment Act 1998
                </span>
                <span className="rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-slate-800">
                  Free, no account required
                </span>
              </div>
            </div>
          </div>
        </section>

        <CalculatorCard />

        <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <article className="rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-[0_24px_80px_rgba(20,33,61,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              What the law says
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              What is the Late Payment Act 1998?
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
              <p>
                The Late Payment of Commercial Debts (Interest) Act 1998 gives
                UK businesses a statutory route to charge interest when another
                business pays late. It is designed for commercial invoices,
                which is why this calculator is framed around overdue B2B
                payments rather than consumer debt.
              </p>
              <p>
                The core rule is straightforward: once an invoice is overdue,
                interest can accrue at 8% above the Bank of England base rate.
                For this MVP calculator, that produces an annual rate of 11.75%
                using a base rate of 3.75%. The daily amount is then calculated
                from the invoice value and the number of overdue days.
              </p>
              <p>
                The Act also allows fixed compensation for the cost of chasing
                payment. The current tiers used here are 40 GBP for invoices
                below 1,000 GBP, 70 GBP for invoices from 1,000 GBP up to
                9,999.99 GBP, and 100 GBP for invoices of 10,000 GBP or more.
                The calculator combines that compensation with accrued interest
                so you can see the total legal claim in one number.
              </p>
              <p>
                This page is a practical starting point, not legal advice. It
                helps you understand the value of a potential claim quickly, so
                you can decide whether to send a formal reminder yourself or use
                PayForce to automate the next step.
              </p>
            </div>
          </article>

          <aside className="rounded-[2rem] border border-slate-900/10 bg-slate-950 p-8 text-slate-50 shadow-[0_24px_80px_rgba(20,33,61,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              Why it matters
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              One number changes the conversation.
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
              <p>
                A vague overdue invoice is easy for a debtor to ignore. A clear
                principal, accrued interest, and statutory compensation figure
                is much harder to dismiss.
              </p>
              <p>
                This is the exact moment PayForce is designed for: moving from
                manual uncertainty to a professional, automated recovery path.
              </p>
              <Link
                id="payforce-cta"
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-200"
              >
                See how PayForce handles it
              </Link>
            </div>
          </aside>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:py-10">
          <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-[0_24px_80px_rgba(20,33,61,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Common questions about statutory interest.
            </h2>
            <div className="mt-8 space-y-4">
              {faqItems.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-slate-950">
                    <span>{faq.question}</span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="rounded-[2rem] border border-slate-900 bg-slate-950 px-8 py-10 text-white shadow-[0_24px_80px_rgba(20,33,61,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              From calculator to action
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              PayForce turns this calculation into a professional recovery
              workflow.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Track invoices, calculate interest automatically, and move from
              reminder to formal claim without rebuilding the numbers every day.
            </p>
            <Link
              href="/signup"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-amber-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              Start with PayForce
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
