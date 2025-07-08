/*
INFO: Explicit Typing (Annotation)
You declare the type manually. Use when clarity, saftey, or API contracts matter.
*/

let id: number = 42;
let uesrname: string = "rafay";
let isActive: boolean = true;
let tags: string[] = ["ts", "dev"];
let user: { id: number; name: string } = { id: 1, name: "Rafay" };

/*
INFO: Implicit Typing (Type Inference)
TypeScript infers the type from the assigned value. Use when types are abvious and local.
*/
let score = 99; // inferred as number
let title = "TypeScript"; // inferred as string
let valid = false; // inferred as boolean
let roles = ["admin", "user"]; // inferred as string[]

// Function Explicit Return + Param Types
function multiply(a: number, b: number): number {
  return a * b;
}

// Function: Implicit Return Type (based on return expression)
const greet = (name: string) => `Hello, ${name}`;

// Best Practice: Explicit Param Types + Inferred Return
const toUpper = (input: string) => input.toUpperCase();

// Best Practice: Type Annotations for Objects
type Product = {
  id: number;
  title: string;
  price: number;
};

const book: Product = {
  id: 101,
  title: "Clean Code",
  price: 29.99,
};

// Best Practice: Let inference work for simple values, annotate complex structures
let port = 3000; // inferred
const config: { port: number; useTLS: boolean } = { port: 443, useTLS: true };

// Best Practice: Avoid `any`, prefer unknown or precise types
function parse(json: string): unknown {
  return JSON.parse(json);
}
