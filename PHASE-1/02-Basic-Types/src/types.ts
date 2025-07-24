// INFO: TypesScript Types

// NOTE: 1. Primitive Types

// boolean - boolean is a primitive data type in Typescript that represents a boolean value i.e. either true or false. Given below is an example of a boolean variable declaration:
let isOnline: boolean = true;
let isAdmin: boolean = false;
let isTrue: boolean = true;
let isFalse: boolean = false;

// number - It is a primitive data type in TypeScript that represents numeric values. It includes both integer and floating-pint values.
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xff;
let binary: number = 0b1010;
let octal: number = 0o744;

// string - It is a primitive data type in TypeScript that represents textual data. It is a set of elements of the 16-bit Unicode character set.
let username: string = "rafay";
let personName: string = "John Doe";
let greeting: string = `Hello, ${username}`;

// void - represents the return value of functions which don't return a value. It's the inferred type any time a function doesn't have any return statements, or doesn't return any explicit value from those return statements:
function logMessage(): void {
  console.log("Logged");
}

function noop(): void {
  return;
}

/*
JavaScript has two primitive values used to signal absent or uninitialized value: null (absent) and undefined (uninitialized).

TypeScript has two corresponding types by the same names. How these types behave depends on whether you have the strictNullChecks option on.

With strictNullChecks off, values that might be null or undefined can still be accessed normally, and the values null and undefined can be assigned to a property of any type. This is similar to how languages without null checks (e.g. C#, Java) behave. The lack of checking for these values tends to be a major source of bugs; TypeScript always recommend people turn strictNullChecks on if it’s practical to do so in the codebase.

With strictNullChecks on, when a value is null or undefined, you will need to test for those values before using methods or properties on that value. Just like checking for undefined before using an optional property, we can use narrowing to check for values that might be null:
*/
let notAssigned: undefined = undefined;

function doSomething(x: string | null) {
  if (x === null) {
    // do something
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

// null
let emptyValue: null = null;

// NOTE: 2. Object Types

// Interface - Typescript allows you to specifically type an object using an interface that can be reused by multiple objects.
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return `Hello ` + person.name;
}

// Class - In TypeScript, a class is a blueprint for creating objects with specific properties and methods. Classes are a fundamental concept in object-oriented programming.
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
  }
}

// Enum - Enums is not a type-level extension of JavaScript. It allows a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distint cases. TypeScript provides both numeric and string-based enums. Enums lets you define a set of named constants, used for finite, known choices.
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// Array - To specify the type of an array like [1, 2, 3], you can use the syntax number[]; this syntax works for any type (e.g. string[] is an array of strings, and so on). you may also see this written as Array<number>, which means the same thing.
const numbers: number[] = [1, 2, 3];

// Tuple - A tuple is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
type StringNumberPair = [string, number];
const pair: StringNumberPair = ["Hello", 42];

const first = pair[0];
const second = pair[1];

// Object - to define an object type, we simply list its properties and their types.
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's of y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// NOTE: Top Types

// UnKnown - unknown is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn't assignable to anything but itself and any without a type assertion or a control flow based narrowing. Likewise, no operations are premitted on an unknown without first asserting or narrowing to a more specific type.
let inputValue: unknown = "test";
inputValue = 123;
inputValue = {};

// Need to check type before using it
if (typeof inputValue === "string") {
  console.log(inputValue.toUpperCase());
}

function f1(a: any) {
  a.b(); // OK
}

function f2(a: unknown) {
  // Error: property 'b' does not exist on type 'unknown'
  // a.b();
}

// any
let randomData: any = 42;
randomData = "hello";
randomData = true;
randomData.run(); // No error, even if run() doesn't exist

// NOTE: Bottom Types

// Never - the never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true. The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Every any isn't assignable to never.
function throwError(): never {
  throw new Error("This never returns");
}

function infiniteLoop(): never {
  while (true) {}
}

// function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop1(): never {
  while (true) {}
}
