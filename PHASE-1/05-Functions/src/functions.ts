// TypeScript Functions

/*
INFO: 1. Function Types
Defines the shape of functions - parameters & return type.
*/
// Function type annotation
function greet(name: string): string {
  return `Hello, ${name}`;
}

// Function expression with type
const log: (msg: string) => void = function (msg) {
  console.log(msg);
};

// Function tpye alias
type MathOp = (a: number, b: number) => number;
const add: MathOp = (x, y) => x + y;

/*
INFO: 2. Optional & Default Parameters
Optional parameters use ?. Default parameters must follow required ones unless explicitly assigned.
*/
function getUser(id: number, includeDetails?: boolean): string {
  return includeDetails ? `User ${id} with details` : `User ${id}`;
}

function multiply(a: number, b: number = 2): number {
  return a * b;
}

getUser(1);
getUser(1, true);
multiply(3);

/*
INFO: 3. Rest Parameters
Allows multiple arguments as an array.
*/
function sumAll(...nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
}
sumAll(1, 2, 3, 4); // 10

/*
INFO: 4. Return Type Annotations
Explicitly declares the return type. Recommended for public APIs.
*/
function square(n: number): number {
  return n * n;
}

function noReturn(): void {
  console.log("no return value");
}

/*
INFO: 5. Arrow Functions with Types
Type annotations for parameters and return value.
*/
const divide = (a: number, b: number): number => a / b;

const logMessage: (msg: string) => void = (msg) => {
  console.log(msg);
};
