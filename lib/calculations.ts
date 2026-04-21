import {
  FIXED_COMPENSATION_HIGH,
  FIXED_COMPENSATION_LOW,
  FIXED_COMPENSATION_MID,
  STATUTORY_INTEREST_RATE,
} from "@/constants/rates";
import { differenceInCalendarDays } from "@/lib/date";
import type { CalculationResult, CalculatorInputs } from "@/types/calculator";

function roundCurrency(value: number): number {
  return Math.round(value * 100) / 100;
}

function sanitizeInvoiceAmount(invoiceAmount: number): number {
  if (!Number.isFinite(invoiceAmount) || invoiceAmount <= 0) {
    return 0;
  }

  return invoiceAmount;
}

export function getDaysOverdue(dueDate: Date, todayDate: Date): number {
  return Math.max(0, differenceInCalendarDays(dueDate, todayDate));
}

export function getDailyInterest(invoiceAmount: number): number {
  const sanitizedInvoiceAmount = sanitizeInvoiceAmount(invoiceAmount);

  if (sanitizedInvoiceAmount === 0) {
    return 0;
  }

  return sanitizedInvoiceAmount * STATUTORY_INTEREST_RATE / 365;
}

export function getInterestAccrued(
  invoiceAmount: number,
  daysOverdue: number,
): number {
  const sanitizedDaysOverdue = Math.max(0, Math.trunc(daysOverdue));

  if (sanitizedDaysOverdue === 0) {
    return 0;
  }

  return getDailyInterest(invoiceAmount) * sanitizedDaysOverdue;
}

export function getFixedCompensation(invoiceAmount: number): number {
  const sanitizedInvoiceAmount = sanitizeInvoiceAmount(invoiceAmount);

  if (sanitizedInvoiceAmount === 0) {
    return 0;
  }

  if (sanitizedInvoiceAmount < 1000) {
    return FIXED_COMPENSATION_LOW;
  }

  if (sanitizedInvoiceAmount < 10000) {
    return FIXED_COMPENSATION_MID;
  }

  return FIXED_COMPENSATION_HIGH;
}

export function calculateStatutoryInterest(
  inputs: CalculatorInputs,
): CalculationResult {
  const invoiceAmount = sanitizeInvoiceAmount(inputs.invoiceAmount);
  const daysOverdue = getDaysOverdue(inputs.dueDate, inputs.todayDate);
  const isOverdue = daysOverdue > 0;
  const dailyInterest = getDailyInterest(invoiceAmount);
  const interestAccrued = isOverdue
    ? getInterestAccrued(invoiceAmount, daysOverdue)
    : 0;
  const fixedCompensation =
    isOverdue && invoiceAmount > 0 ? getFixedCompensation(invoiceAmount) : 0;
  const totalLegalClaim = invoiceAmount + interestAccrued + fixedCompensation;

  return {
    invoiceAmount: roundCurrency(invoiceAmount),
    daysOverdue,
    isOverdue,
    annualInterestRate: STATUTORY_INTEREST_RATE,
    dailyInterest: roundCurrency(dailyInterest),
    interestAccrued: roundCurrency(interestAccrued),
    fixedCompensation,
    totalLegalClaim: roundCurrency(totalLegalClaim),
  };
}
