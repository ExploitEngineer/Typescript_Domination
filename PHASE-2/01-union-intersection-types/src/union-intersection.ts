/*
INFO: Union & Intersection Types
- Union (|): A type that can be one of several types.
- Intersection (&): A type that must satisfy all consituent types simultaneously.
*/

// Union Type - type A = string | number
type A = string | number;

function format(value: A): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

// valid usages
const a1: A = "hello";
const a2: A = 42;

// Intersection Type - type B = {x: number} & {y: number}
type B = { x: number } & { y: number };

function sumCoords(coord: B): number {
  return coord.x + coord.y;
}

const point: B = { x: 10, y: 20 }; // must have both x and y

// Advanced Intersection Use - Merging Concerns
type WithId = { id: string };
type WithTimestamps = { createdAt: Date; updatedAt: Date };

type Entry = WithId & WithTimestamps;

const user: Entry = {
  id: "abc123",
  createdAt: new Date(),
  updatedAt: new Date(),
};
