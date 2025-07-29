// Generics
// Generic functions
function abcd<H>(a: H, b: string, c: number): void {
  console.log(a, b, c);
}
abcd<string>("hello", "pudi", 4);

function log<T>(value: T): void {
  console.log(value);
}
log<string>("hey");

function fn<T>(a: T, b: T): T {
  console.log(a, b);
  return "hey" as T;
}
fn<string>("hey", "hello");

// Generic interfaces
interface Halua<T> {
  name: string;
  age: number;
  key: T;
}

function func(obj: Halua<string>): void {
  console.log(obj);
}
func({ name: "whoami", age: 25, key: "sdkfsjdkd" });

// Generic classes
class BottleMaker<T> {
  constructor(public key: T) {}
}
let b1 = new BottleMaker("hey");
console.log(b1);
