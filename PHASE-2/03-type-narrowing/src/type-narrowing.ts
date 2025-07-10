/*
INFO: Type Narrowing
Type narrowing refines a union type into a more specific type using runtime checks. TypeScirpt uses control flow analysis with:
- typeof (for primitvies)
- instanceof (for class instance)
- in (for object property existence)
- Custom Type Guards
- Discriminated Unions
*/

// typeof, instanceof, in Narrowing
type Input = string | number | Date | { x: number };
function handle(input: Input): void {
  if (typeof input === "string") {
    input.toUpperCase();
  } else if (typeof input === "number") {
    input.toFixed(2);
  } else if (input instanceof Date) {
    input.getFullYear();
  } else if ("x" in input) {
    input.x.toFixed();
  }
}

// Custom Type Guards
type A = { kind: "a"; value: string };
type B = { kind: "b"; count: number };
type AB = A | B;

function isA(data: AB): data is A {
  return data.kind === "a";
}

function func(data: AB) {
  if (isA(data)) {
    data.value.toUpperCase();
  } else {
    data.count.toFixed();
  }
}

/*
INFO: Discriminated Unions
Discriminated unions use a common discriminator field to enable precise narrowing.
*/
type Square = { type: "square"; size: number };
type Circle = { type: "circle"; radius: number };
type Shape = Square | Circle;

function area(shape: Shape): number {
  switch (shape.type) {
    case "square":
      return shape.size ** 2;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}
