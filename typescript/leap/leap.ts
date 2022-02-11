export function isLeap(year: number): boolean {
  if (divisibleBy(year, 4) && !divisibleBy(year, 100)) {
    return true;
  }

  return (divisibleBy(year, 400) && divisibleBy(year, 100));
}

function divisibleBy(number: number, divider: number): boolean {
  return number % divider == 0;
}