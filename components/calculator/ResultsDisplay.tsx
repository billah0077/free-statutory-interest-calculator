import {
  BANK_OF_ENGLAND_BASE_RATE_PERCENT,
  BANK_OF_ENGLAND_RATE_LAST_UPDATED,
  STATUTORY_INTEREST_RATE_PERCENT,
} from "@/constants/rates";
import type { CalculationResult } from "@/types/calculator";

type ResultsDisplayProps = {
  result: CalculationResult | null;
};

const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

function formatCurrency(value: number): string {
  return currencyFormatter.format(value);
}

export function ResultsDisplay({ result }: ResultsDisplayProps) {
  if (!result) {
    return (
      <section
        aria-live="polite"
        role="status"
        className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-950 px-6 py-7 text-slate-100"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
          Live output
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          Enter invoice details above to calculate what is owed.
        </h2>
        <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
          You will see the overdue days, statutory interest, compensation, and
          the full legal claim here as soon as all three fields are valid.
        </p>
      </section>
    );
  }

  if (!result.isOverdue) {
    return (
      <section
        aria-live="polite"
        role="status"
        className="rounded-[2rem] border border-slate-200 bg-white/85 px-6 py-7 shadow-[0_24px_80px_rgba(20,33,61,0.08)] backdrop-blur"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Result
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
          This invoice is not yet overdue.
        </h2>
        <p className="mt-4 max-w-md text-sm leading-6 text-slate-700">
          Statutory interest and fixed compensation do not apply until the due
          date has passed. Once it becomes overdue, the calculator will show the
          claim value automatically.
        </p>
      </section>
    );
  }

  return (
    <section
      aria-live="polite"
      role="status"
      className="rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-7 text-slate-50 shadow-[0_24px_80px_rgba(20,33,61,0.18)] transition-opacity duration-300"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
        Result
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-white/6 p-4">
          <p className="text-sm text-slate-300">Days overdue</p>
          <p className="mt-2 text-3xl font-semibold tabular-nums">
            {result.daysOverdue}
          </p>
        </div>
        <div className="rounded-2xl bg-white/6 p-4">
          <p className="text-sm text-slate-300">Daily interest</p>
          <p className="mt-2 text-3xl font-semibold tabular-nums">
            {formatCurrency(result.dailyInterest)}
          </p>
        </div>
        <div className="rounded-2xl bg-white/6 p-4">
          <p className="text-sm text-slate-300">Interest accrued</p>
          <p className="mt-2 text-3xl font-semibold tabular-nums">
            {formatCurrency(result.interestAccrued)}
          </p>
        </div>
        <div className="rounded-2xl bg-white/6 p-4">
          <p className="text-sm text-slate-300">Fixed compensation</p>
          <p className="mt-2 text-3xl font-semibold tabular-nums">
            {formatCurrency(result.fixedCompensation)}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-[1.75rem] bg-amber-300 px-5 py-5 text-slate-950">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
          Total legal claim
        </p>
        <p className="mt-3 text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
          {formatCurrency(result.totalLegalClaim)}
        </p>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-300">
        Based on {STATUTORY_INTEREST_RATE_PERCENT}% annual interest
        {" "}({BANK_OF_ENGLAND_BASE_RATE_PERCENT}% Bank of England base rate +
        {" "}8%), last updated {BANK_OF_ENGLAND_RATE_LAST_UPDATED}.
      </p>
    </section>
  );
}
