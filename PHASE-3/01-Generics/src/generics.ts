/*
Generics in TypeScript
Powerful type-safe abstractions using T and constraints.
*/

/*
1. Generic Functions
Generic parameter T enables type inference and reuse.
*/
function identify<T>(value: T): T {
  return value;
}
const str = identify("hello"); // T inferred as string
const num = identify<number>(42);

// can accept multiple type params:
function marge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}
const merged = marge({ name: "rafay" }, { age: 25 }); // inferred as {name: string} & {age: number}

/*
2. Generic Interfaces & Classes
*/
// - interfaces
interface ApiResponse<T> {
  data: T;
  status: number;
}
const res: ApiResponse<string[]> = {
  data: ["ok", "fail"],
  status: 200,
};

// - classes
class Box<T> {
  constructor(private value: T) {}

  get(): T {
    return this.value;
  }
}
const numBox = new Box<number>(123);
const strBox = new Box<string>("hello");

/*
3. Constrainst: <T extends ...>
Restrict T to types that satisfy a shape:
*/
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
getLength("hello");
getLength([1, 2, 3]);
getLength({ length: 10 });
// getLength(42); // number doesn't have length

/*
4. Default Generic Types
Assign default if type param not specified
*/
type Result<T = string> = {
  data: T;
  success: boolean;
};
const res1: Result = {
  data: "OK",
  success: true,
};

// Also works with generic functions and classes:
class State<T = boolean> {
  constructor(public value: T) {}
}

const s = new State(0); // T inferred as boolean
