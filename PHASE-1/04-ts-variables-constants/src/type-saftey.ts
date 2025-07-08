/*
INFO: 1. let and const with Type Annotations
Type annotations explicitly declare a variable's type. This enhances readability and enforces type saftey.
*/

// Explicit type annotations with `let`
let username: string = "rafay";
let userAge: number = 25;
let isAdmin: boolean = false;

// `const` with type annotation (inferred from value is preferred if literal)
const PI: number = 3.14159;
const API_KEY: string = "1234-ABCD";

// Arrays and tuples
let role: string[] = ["admin", "editor"];
const coordinates: [number, number] = [40.7128, -74.006];

/*
INFO: 2. Type Saftey and Reassignment
TypeScript enforces variable type after declaration; reassignment must match the original type.
*/
let score: number = 100;
score = 95; // valid

// with union types
let value: string | number = "100";
value = 100; // allowed due to union

// Constants are immutable
const MY_NAME: string = "Rafay";
