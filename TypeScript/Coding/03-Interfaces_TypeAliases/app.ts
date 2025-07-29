// Interfaces and Type Aliases

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

function getDataOfUser(obj: User): void {
  console.log(obj.email);
}

// extends interfaces
interface Admin extends User {
  admin: boolean;
}

function abcd(obj: Admin) {
  obj.admin = true;
  console.log(obj);
}

// Type Aliases
type value = string | number | null;
let a: value = "hi";

// Union
let b: string | null;

// Intersection
type Person = {
  name: string;
  email: string;
};

type Human = User & {
  getDetails(user: string): void;
};

function func(a: Human): void {
  console.log(a.name);
}
