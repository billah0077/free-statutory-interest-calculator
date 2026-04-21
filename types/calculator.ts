export interface CalculatorInputs {
  invoiceAmount: number;
  dueDate: Date;
  todayDate: Date;
}

export interface CalculationResult {
  invoiceAmount: number;
  daysOverdue: number;
  isOverdue: boolean;
  annualInterestRate: number;
  dailyInterest: number;
  interestAccrued: number;
  fixedCompensation: number;
  totalLegalClaim: number;
}
