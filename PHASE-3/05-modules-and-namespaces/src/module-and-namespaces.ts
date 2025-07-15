/*
Modules & Namespaces in Typescript
TypeScript supports ES Modules and Namespaces as two distint modularization strategies. Use ES Modules for modern, file-based modular code. Use Namespaces for internal, script-based modularization-mostly in legacy or ambient scenarios.
*/

/*
1. ES Modules in Typescript
Each file with top-level import/export is treated as a module. TypeScript compiles ES module syntax into various module targets (CommonJS, ESNext, etc.) depending on tsconfig.json.
*/

// File-based Modules
// user.ts
export interface User {
  id: number;
  name: string;
}

export function getUser(id: number): User {
  return { id, name: "Rafay" };
}

// main.ts
// import {getUser, User} from "./user";

const u: User = getUser(1);

/*
2. import / export Syntax
TypeScript supports all standard ES module forms:
*/
export const A = 1;
export function B() {}
export type C = string;

/*
3. Ambient Declarations (declare)
declare is used to describe types or values that exist elsewhere (typically at runtime), without providing implementation. Crutial for typing external JS or global APIs.
*/
declare module "foo" {
  export function bar(): void;
}

import { bar } from "foo";
bar();
