export function move<T>(arr: T[], from: number, to: number): T[] {
  const result = arr.slice()

  result.splice(to, 0, result.splice(from, 1)[0])
  return result
}
