/*
INFO: Enums in TypeScript
TypeScript enum defines a set of named constants, either numeric or string-based. They are real objects at runtime, unlike union types which are type-only and erased at compile time.
*/

/*
INFO: 1. Numeric Enums (Default)
Default behavior: auto-incremented from 0.
*/
enum Status {
  pending, // 0
  InProgress, // 1
  Completed, // 2
}

// Reserve mapping exists for numeric enums
const s: Status = Status.Completed; // 2
const name1: string = Status[2]; // "Completed"

// Explicit assignment:
enum NewStatus {
  Pending = 1,
  InProcessing = 5,
  Completed, // 6 (auto-incremented from previous)
}

/*
INFO: 2. String Enums
No reverse mapping. Values must be explicitly defined.
*/
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
const d: Direction = Direction.Left; // "LEFT"

/*
INFO: 3. Enum vs Union Types
1. Enum
- Exists at runtime
- Usable as objects
- Reverse mapping (only for numeric enums)
- Can be iterated and checked dynamically
*/
enum Role {
  Admin,
  User,
  Guest,
}
function hasAccess(role: Role) {
  if (role === Role.Admin) return true;
  return false;
}

/*
2. Union Type
- Type-only (erased at compile time)
- Narrower, safer typing
- Enforces exact values
- Better for pattern matching with exhaustive checks
*/
type YourRole = "admin" | "user" | "guest";
function hasCodeAccess(role: YourRole) {
  switch (role) {
    case "admin":
      return true;
    case "user":
    case "guest":
      return false;
    default:
      const _exhaustive: never = role; // triggers on invalid value
      return _exhaustive;
  }
}
