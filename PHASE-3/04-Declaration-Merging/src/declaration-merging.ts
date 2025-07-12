/*
INFO: Declaration Merging in TypeScript
Declaration merging occurs when the TypeScript compiler combines seperate declarations with the same name into a single declaration. That is most commonly seen with interfaces, namespaces, and through module augmentation.
*/

/*
1. Interface Merging
When multiple interfaces with the same name are declared in the same scope, TypeScript merges their members into a single interface.
*/
interface User {
  id: number;
}

interface User {
  name: string;
}

// Final merged type:
const user: User = {
  id: 1,
  name: "Rafay",
};

/*
Merging with Method Overloads
When interfaces define method overloads, the order matters. Later declarations are placed before earlier ones.
*/
interface Logger {
  log(message: string): void;
}

interface Logger {
  log(error: Error): void; // appears first in overload resolution
}

interface Logger {
  log(error: Error): void;
  log(message: string): void;
}

/*
2. Module Augmentation
Used to extend modules after they've been defined, especially useful for modifying third-party modules without direct modification.
*/

import "express";

declare module "express" {
  interface Request {
    userId?: string;
  }
}
