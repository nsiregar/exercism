const RESISTOR_COLORS: Record<string, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

export function decodedResistorValue(colors: string[]): string {
  let code: number[] = colors.slice(0, 3).map((color) => {
    return RESISTOR_COLORS[color]
  })
  let zeros: string = '0'.repeat(code[2])
  let value: number = parseInt(`${code[0]}${code[1]}${zeros}`)
  return humanize(value);
}

function humanize(value: number): string {
  let level: number = Math.log10(Math.abs(value)) / 3 | 0;
  let suffix: string[] = ['', 'kilo']

  if (level == 0) {
    return `${value} ohms`;
  }
  let scaled: number = value / Math.pow(10, level * 3);

  return `${scaled} ${suffix[level]}ohms`;
}
