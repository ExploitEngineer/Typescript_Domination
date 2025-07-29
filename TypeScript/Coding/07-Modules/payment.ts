export function addPayment(val: number): void {
  console.log(val);
}
export function getDetails<T>(val: T): T {
  return val;
}

export default class Payment {
  constructor(public num: number) {}
}
