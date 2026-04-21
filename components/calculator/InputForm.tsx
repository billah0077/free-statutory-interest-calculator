"use client";

type InputFormProps = {
  invoiceAmount: string;
  dueDate: string;
  todayDate: string;
  errors: {
    invoiceAmount?: string;
    dueDate?: string;
    todayDate?: string;
  };
  onInvoiceAmountChange: (value: string) => void;
  onDueDateChange: (value: string) => void;
  onTodayDateChange: (value: string) => void;
};

export function InputForm({
  invoiceAmount,
  dueDate,
  todayDate,
  errors,
  onInvoiceAmountChange,
  onDueDateChange,
  onTodayDateChange,
}: InputFormProps) {
  return (
    <section
      aria-labelledby="calculator-inputs-title"
      className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_24px_80px_rgba(20,33,61,0.08)] backdrop-blur"
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
          Invoice details
        </p>
        <h2
          id="calculator-inputs-title"
          className="mt-3 text-2xl font-semibold tracking-tight text-slate-950"
        >
          Enter the numbers that matter.
        </h2>
      </div>

      <div className="space-y-5">
        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-800"
            htmlFor="invoiceAmount"
          >
            Invoice amount
          </label>
          <div className="flex items-center rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 transition focus-within:border-amber-700 focus-within:bg-white">
            <span className="mr-3 text-lg font-semibold text-slate-500">GBP</span>
            <input
              id="invoiceAmount"
              name="invoiceAmount"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={invoiceAmount}
              onChange={(event) => onInvoiceAmountChange(event.target.value)}
              onInput={(event) =>
                onInvoiceAmountChange(
                  (event.target as HTMLInputElement).value,
                )
              }
              aria-invalid={Boolean(errors.invoiceAmount)}
              aria-describedby="invoiceAmount-help invoiceAmount-error"
              className="w-full border-none bg-transparent text-lg font-medium text-slate-900 outline-none"
              placeholder="22000"
            />
          </div>
          <p id="invoiceAmount-help" className="mt-2 text-sm text-slate-600">
            Use the invoice principal before interest or compensation.
          </p>
          {errors.invoiceAmount ? (
            <p
              id="invoiceAmount-error"
              className="mt-2 text-sm text-rose-700"
            >
              {errors.invoiceAmount}
            </p>
          ) : null}
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-800"
            htmlFor="dueDate"
          >
            Due date
          </label>
          <input
            id="dueDate"
            name="dueDate"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            value={dueDate}
            onChange={(event) => onDueDateChange(event.target.value)}
            onInput={(event) =>
              onDueDateChange((event.target as HTMLInputElement).value)
            }
            aria-invalid={Boolean(errors.dueDate)}
            aria-describedby="dueDate-help dueDate-error"
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-lg font-medium text-slate-900 outline-none transition focus:border-amber-700 focus:bg-white"
            placeholder="YYYY-MM-DD or DD/MM/YYYY"
          />
          <p id="dueDate-help" className="mt-2 text-sm text-slate-600">
            Interest starts after this date has passed.
          </p>
          {errors.dueDate ? (
            <p id="dueDate-error" className="mt-2 text-sm text-rose-700">
              {errors.dueDate}
            </p>
          ) : null}
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-medium text-slate-800"
            htmlFor="todayDate"
          >
            Today&apos;s date
          </label>
          <input
            id="todayDate"
            name="todayDate"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            value={todayDate}
            onChange={(event) => onTodayDateChange(event.target.value)}
            onInput={(event) =>
              onTodayDateChange((event.target as HTMLInputElement).value)
            }
            aria-invalid={Boolean(errors.todayDate)}
            aria-describedby="todayDate-help todayDate-error"
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-lg font-medium text-slate-900 outline-none transition focus:border-amber-700 focus:bg-white"
            placeholder="YYYY-MM-DD or DD/MM/YYYY"
          />
          <p id="todayDate-help" className="mt-2 text-sm text-slate-600">
            Adjust this only if you need to calculate for another day.
          </p>
          {errors.todayDate ? (
            <p id="todayDate-error" className="mt-2 text-sm text-rose-700">
              {errors.todayDate}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
