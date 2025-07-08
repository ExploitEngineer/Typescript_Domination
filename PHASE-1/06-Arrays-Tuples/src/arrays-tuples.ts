// TypeScript: Arrays & Tuples

/*
INFO: 1. Typed Arrays (number[], string[], etc.)
Explicitly define the type of elements an array can hold.
*/
const scores: number[] = [90, 85, 100];
const tags: string[] = ["typescript", "js", "dev"];
const flags: boolean[] = [true, false, true];
// socres.push("high"); Error

/*
INFO: 2. Generic Array Type: Array<T>
Alternative syntax for typed arrays.
*/
const ids: Array<number> = [101, 102, 103];
const names: Array<string> = ["Rafay", "Ali", "Sara"];
// Equivalent to:
// let ids: number[] = [101, 102, 103];

/*
INFO: 3. Tuples: Fixed-Length & Ordered Types
Defines a fixed structure with known types per position.
*/
const user: [string, number] = ["rafay", 25];

// Access in type-safe
const username = user[0]; // string
const age = user[1]; // number

/*
INFO: 4. Readonly Arrays and Tuples
Immutable collections that disallow mutation.
*/
const readonlyArr: readonly number[] = [1, 2, 3];
// readonlyArr.push(4); Error: push does not exist

const readonlyTuple: readonly [string, number] = ['admin', 1];
// readonlyTuple[0] = 'user'; Error

const config = ['dark', 100] as const;
// Inferred as: readonly ['dark', 100]
