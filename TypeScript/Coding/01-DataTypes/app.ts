/*
Basic Types:

Primitive types (number, stirng, boolean)
Arrays
Tuples
Enums
Any, Unknown, Void, Null, Undefined, Never
*/

let num: number = 10;
let str: string = "Hello!";
let bool: boolean = true;

let arr: (number | { name: string })[] = [1, 2, 3, { name: "rafay" }];
let array: [string, number] = ["whoami", 404];

// Enums (enumerations)
enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}
UserRoles.SUPER_ADMIN;

enum StatusCodes {
  ABANDONED = "abandoned status code 500",
  NOT_FOUND = "not found status code 404",
}
StatusCodes.NOT_FOUND;

// any
let a;
a = 12;
a = "hi";

// unknown
let value: unknown;
a = 12.111;
a = "harsh";

if (typeof value === "string") {
  value.toUpperCase();
} else if (typeof value === "number") {
  value.toFixed(2);
}

// void
function abc(): void {
  console.log("hi");
}

// null
let n: null;

// undefined
let un: undefined;

// never
function abcd(): never {
    while (true) {}
}
