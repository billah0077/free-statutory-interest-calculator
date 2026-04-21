"use client";

import { useState } from "react";

import { calculateStatutoryInterest } from "@/lib/calculations";

import { CTABanner } from "./CTABanner";
import { InputForm } from "./InputForm";
import { ResultsDisplay } from "./ResultsDisplay";

type FieldErrors = {
  invoiceAmount?: string;
  dueDate?: string;
  todayDate?: string;
};

type ParsedInputs = {
  invoiceAmount: number | null;
  dueDate: Date | null;
  todayDate: Date | null;
};

function getTodayDateValue(): string {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = `${currentDate.getMonth() + 1}`.padStart(2, "0");
  const day = `${currentDate.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function parseInvoiceAmount(value: string): number | null {
  const normalizedValue = value.replace(/,/g, "").trim();

  if (!normalizedValue) {
    return null;
  }

  const parsedValue = Number(normalizedValue);

  if (!Number.isFinite(parsedValue) || parsedValue <= 0) {
    return null;
  }

  return parsedValue;
}

function parseDateInput(value: string): Date | null {
  const normalizedValue = value.trim();

  if (!normalizedValue) {
    return null;
  }

  let year: number | null = null;
  let month: number | null = null;
  let day: number | null = null;

  const isoMatch = normalizedValue.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  const slashYearFirstMatch = normalizedValue.match(
    /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/,
  );
  const dayFirstMatch = normalizedValue.match(
    /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/,
  );

  if (isoMatch) {
    year = Number(isoMatch[1]);
    month = Number(isoMatch[2]);
    day = Number(isoMatch[3]);
  } else if (slashYearFirstMatch) {
    year = Number(slashYearFirstMatch[1]);
    month = Number(slashYearFirstMatch[2]);
    day = Number(slashYearFirstMatch[3]);
  } else if (dayFirstMatch) {
    day = Number(dayFirstMatch[1]);
    month = Number(dayFirstMatch[2]);
    year = Number(dayFirstMatch[3]);
  } else {
    return null;
  }

  if (
    year === null ||
    month === null ||
    day === null ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31
  ) {
    return null;
  }

  const parsedDate = new Date(year, month - 1, day);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  if (
    parsedDate.getFullYear() !== year ||
    parsedDate.getMonth() !== month - 1 ||
    parsedDate.getDate() !== day
  ) {
    return null;
  }

  return parsedDate;
}

function getFieldErrors(
  invoiceAmount: string,
  dueDate: string,
  todayDate: string,
): FieldErrors {
  const errors: FieldErrors = {};
  const parsedInvoiceAmount = parseInvoiceAmount(invoiceAmount);

  if (!invoiceAmount) {
    errors.invoiceAmount = "Enter the invoice amount.";
  } else if (parsedInvoiceAmount === null) {
    errors.invoiceAmount = "Invoice amount must be greater than zero.";
  }

  if (!dueDate) {
    errors.dueDate = "Select the invoice due date.";
  } else if (parseDateInput(dueDate) === null) {
    errors.dueDate = "Enter a valid due date.";
  }

  if (!todayDate) {
    errors.todayDate = "Select today's date.";
  } else if (parseDateInput(todayDate) === null) {
    errors.todayDate = "Enter a valid today's date.";
  }

  return errors;
}

function getParsedInputs(
  invoiceAmount: string,
  dueDate: string,
  todayDate: string,
): ParsedInputs {
  return {
    invoiceAmount: parseInvoiceAmount(invoiceAmount),
    dueDate: parseDateInput(dueDate),
    todayDate: parseDateInput(todayDate),
  };
}

export function CalculatorCard() {
  const [invoiceAmount, setInvoiceAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todayDate, setTodayDate] = useState(getTodayDateValue);

  const errors = getFieldErrors(invoiceAmount, dueDate, todayDate);
  const hasErrors = Object.keys(errors).length > 0;
  const parsedInputs = getParsedInputs(invoiceAmount, dueDate, todayDate);

  const result =
    !hasErrors &&
    parsedInputs.invoiceAmount !== null &&
    parsedInputs.dueDate !== null &&
    parsedInputs.todayDate !== null
      ? calculateStatutoryInterest({
          invoiceAmount: parsedInputs.invoiceAmount,
          dueDate: parsedInputs.dueDate,
          todayDate: parsedInputs.todayDate,
        })
      : null;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <InputForm
          invoiceAmount={invoiceAmount}
          dueDate={dueDate}
          todayDate={todayDate}
          errors={errors}
          onInvoiceAmountChange={setInvoiceAmount}
          onDueDateChange={setDueDate}
          onTodayDateChange={setTodayDate}
        />
        <div className="space-y-6">
          <ResultsDisplay result={result} />
          <CTABanner visible={Boolean(result?.isOverdue)} />
        </div>
      </div>
    </section>
  );
}
