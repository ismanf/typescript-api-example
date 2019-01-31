export function add(num1: number, num2: number): number {
  return num1 + num2;
}

export async function addAsync(num1: number, num2: number): Promise<number> {
  return Promise.resolve(num1 + num2);
}
