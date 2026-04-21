import {
  calculateStatutoryInterest,
  getDaysOverdue,
  getFixedCompensation,
} from "@/lib/calculations";

describe("getFixedCompensation", () => {
  it("returns 40 for invoices below 1000", () => {
    expect(getFixedCompensation(999.99)).toBe(40);
  });

  it("returns 70 for invoices from 1000 up to 9999.99", () => {
    expect(getFixedCompensation(1000)).toBe(70);
    expect(getFixedCompensation(9999.99)).toBe(70);
  });

  it("returns 100 for invoices from 10000 upward", () => {
    expect(getFixedCompensation(10000)).toBe(100);
  });
});

describe("getDaysOverdue", () => {
  it("returns 0 when the due date is today", () => {
    const today = new Date("2026-04-09T09:00:00+06:00");

    expect(getDaysOverdue(today, today)).toBe(0);
  });

  it("returns 0 when the due date is in the future", () => {
    const dueDate = new Date("2026-04-10T00:00:00+06:00");
    const todayDate = new Date("2026-04-09T00:00:00+06:00");

    expect(getDaysOverdue(dueDate, todayDate)).toBe(0);
  });

  it("ignores time-of-day and uses calendar days", () => {
    const dueDate = new Date("2026-04-01T23:55:00+06:00");
    const todayDate = new Date("2026-04-02T00:05:00+06:00");

    expect(getDaysOverdue(dueDate, todayDate)).toBe(1);
  });
});

describe("calculateStatutoryInterest", () => {
  it("matches the stated formula for a 22000 GBP invoice overdue by 45 days", () => {
    const result = calculateStatutoryInterest({
      invoiceAmount: 22000,
      dueDate: new Date("2026-02-23T00:00:00+06:00"),
      todayDate: new Date("2026-04-09T00:00:00+06:00"),
    });

    expect(result.daysOverdue).toBe(45);
    expect(result.dailyInterest).toBeCloseTo(7.08, 2);
    expect(result.interestAccrued).toBeCloseTo(318.7, 2);
    expect(result.fixedCompensation).toBe(100);
    expect(result.totalLegalClaim).toBeCloseTo(22418.7, 2);
  });

  it("returns a not overdue state with zero interest and compensation", () => {
    const result = calculateStatutoryInterest({
      invoiceAmount: 1500,
      dueDate: new Date("2026-04-09T00:00:00+06:00"),
      todayDate: new Date("2026-04-09T18:30:00+06:00"),
    });

    expect(result.isOverdue).toBe(false);
    expect(result.daysOverdue).toBe(0);
    expect(result.interestAccrued).toBe(0);
    expect(result.fixedCompensation).toBe(0);
    expect(result.totalLegalClaim).toBe(1500);
  });

  it("handles decimal invoice amounts", () => {
    const result = calculateStatutoryInterest({
      invoiceAmount: 1234.56,
      dueDate: new Date("2026-03-10T00:00:00+06:00"),
      todayDate: new Date("2026-04-09T00:00:00+06:00"),
    });

    expect(result.daysOverdue).toBe(30);
    expect(result.fixedCompensation).toBe(70);
    expect(result.interestAccrued).toBeCloseTo(11.92, 2);
  });

  it("handles large invoice amounts", () => {
    const result = calculateStatutoryInterest({
      invoiceAmount: 500000,
      dueDate: new Date("2025-04-09T00:00:00+06:00"),
      todayDate: new Date("2026-04-09T00:00:00+06:00"),
    });

    expect(result.daysOverdue).toBe(365);
    expect(result.interestAccrued).toBeCloseTo(58750, 2);
    expect(result.fixedCompensation).toBe(100);
    expect(result.totalLegalClaim).toBeCloseTo(558850, 2);
  });
});
