const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

export function normalizeToCalendarDay(date: Date): Date {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
}

export function differenceInCalendarDays(fromDate: Date, toDate: Date): number {
  const normalizedFromDate = normalizeToCalendarDay(fromDate);
  const normalizedToDate = normalizeToCalendarDay(toDate);

  return Math.round(
    (normalizedToDate.getTime() - normalizedFromDate.getTime()) /
      MILLISECONDS_PER_DAY,
  );
}
