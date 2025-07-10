/*
INFO: Interfaces
An interface defines the shape of an object. It can be extended, merged, and used for structural typing. Interfaces are ideal for defining constracts in OOP-like patterns.
*/

// Creating & Extending Interfaces
interface Point {
  x: number;
  y: number;
}

interface Named {
  name: string;
}

interface LabeledPoint extends Point, Named {
  label: string;
}

const lp: LabeledPoint = {
  x: 1,
  y: 2,
  name: "Origin",
  label: "O",
};

// Type alias with union
type ID = string | number;

// Interface can't express union direclty
// interface ID = string | number
type Animal = { legs: number };
interface Dog extends Animal {
  bark(): void;
}

// Optional (?) and Readonly (readonly) Modifiers
interface User {
  readonly id: string;
  name: string;
  email?: string;
}
const u: User = { id: "abc", name: "Alice" };
// u.id = 'def'; Cannot assign to 'id' because if is a read-only property

if (u.email) {
  console.log(u.email.toLowerCase());
}

// Advanced Interface Merging
interface Config {
  debug: boolean;
}

interface Config {
  version: string;
}

// Merged into:
const cfg: Config = {
  debug: true,
  version: "1.0.0",
};
