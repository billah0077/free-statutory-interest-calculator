import {
  BANK_OF_ENGLAND_BASE_RATE_PERCENT,
  BANK_OF_ENGLAND_RATE_LAST_UPDATED,
} from "@/constants/rates";

export function Footer() {
  return (
    <footer className="border-t border-slate-900/10 bg-white/55">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            PayForce
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-700">
            Professional late payment recovery tools for UK businesses that
            need a precise, defensible starting point before escalation.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold text-slate-900">Legal disclaimer</p>
          <p className="text-sm leading-6 text-slate-700">
            This calculator provides an estimate based on the Late Payment of
            Commercial Debts (Interest) Act 1998 using a Bank of England base
            rate of {BANK_OF_ENGLAND_BASE_RATE_PERCENT}% last updated{" "}
            {BANK_OF_ENGLAND_RATE_LAST_UPDATED}. It does not constitute legal
            advice. For dispute-specific matters, consult a qualified solicitor.
          </p>
        </div>
      </div>
    </footer>
  );
}
