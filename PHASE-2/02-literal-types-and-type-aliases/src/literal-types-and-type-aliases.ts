/*
INFO: Literal Types & Type Aliases
- Literal Types restrict a variable to a specific string, number, or boolean value.
- Type Aliases create reusable, named custom types.
*/

// String, Number, Boolean Literals
// string literal
type YesNo = "yes" | "no";

// number literal
type StatusCode = 200 | 404 | 500;

// Boolean literal
type Truthy = true;

// Usage
const response: StatusCode = 404;
const answer: YesNo = "yes";
const flag: Truthy = true;

// Practical Exmaple
type Direction = "left" | "right" | "center";
function move(dir: Direction): void {
  console.log(`Moving to ${dir}`);
}
move("left");
move("center");
// move('up'); // Error: type "up" is not assignable to type "Direction"

// Advanced - Enforcing Literal Types via as const
const directions = ["left", "right", "center"] as const;
type NewDirection = (typeof directions)[number];

function align(dir: NewDirection) {
  return `Aligning to ${dir}`;
}

// Type Aliases for Constant Mapping
type Role = "admin" | "user";
const permissions: Record<Role, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read"],
};
