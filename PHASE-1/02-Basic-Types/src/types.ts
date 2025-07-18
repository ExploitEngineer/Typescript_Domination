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

// any
let randomData: any = 42;
randomData = "hello";
randomData = true;
randomData.run(); // No error, even if run() doesn't exist

// unknown
let inputValue: unknown = "test";
inputValue = 123;
inputValue = {};

// Need to check type before using it
if (typeof inputValue === "string") {
  console.log(inputValue.toUpperCase());
}

// never
function throwError(): never {
  throw new Error("This never returns");
}

function infiniteLoop(): never {
  while (true) {}
}
