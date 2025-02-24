export function nonNullish(value: unknown) {
  return value !== null && value !== undefined
}

export function required(value: unknown) {
  return Boolean(value)
}

export function isFutureDate(date: Date | string): boolean {
  const inputDate = new Date(date);
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);

  return inputDate > today;
}
