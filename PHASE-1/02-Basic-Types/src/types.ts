// INFO: Basic Types

// number
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xff;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let username: string = "rafay";
let greeting: string = `Hello, ${username}`;

// boolean
let isOnline: boolean = true;
let isAdmin: boolean = false;

// null
let emptyValue: null = null;

// undefined
let notAssigned: undefined = undefined;

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

// void
function logMessage(): void {
  console.log("Logged");
}
