// Functions
// Function types
// Optional and default Parameters
// Rest Parameters
// Overloads

function abcd(name: string, cb: (value: string) => void): void {
  cb("hi");
  console.log(name);
}

abcd("harsh", (value: string, age?: number): void => {
  console.log(value, age);
});

function greet(
  name: string,
  age?: number,
  gender: string = "not to be disclosed",
): void {
  console.log(`Welcome, ${name} ${age} ${gender}`);
}
greet("whoami", 17);

function func(...args: number[]): void {
  console.log(args);
}

func(10, 20, 30, 40, 50);

// ts func signature (function overloading)
function fn(a: string): void;
function fn(a: string, b: number): number;

function fn(a: any, b?: any) {
  if (typeof a === "string" && typeof b === undefined) {
    console.log("hey");
  }
  if (typeof a === "string" && typeof b === "number") {
    return 123;
  } else throw new Error("something is wrong");
}
