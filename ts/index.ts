/* let a: string = '1';
a = '10';

function add(a: number, b: number) {
    return a + b;
}
console.log(add(1, 2)); */

let num: number = 1234_234_3534;
let num1: bigint = 123443434342534255n;
console.log('num:', num);
console.log('num1:', num1);

let character: string = 'Code with me!';
const isAvailable: boolean = true;
console.log(character);
console.log(isAvailable);

let val: undefined = undefined;
let val1: null = null;

let user;
console.log(user); // undefined

let obj: object = {
    name: 'Abc',
    age: 17
};

obj = { ...obj, phone: 234323424 };
console.log(obj);

// INFO: any type
let numVal: any;
numVal = 1;
numVal = 'a';

function testAnyType(val: any) {
    console.log(val);
}

// INFO: Arrays
let numArray: number[] = [1, 2, 3, 4];
let charArray: string[] = ['a', 'whoami', 'coding'];
charArray.forEach(val => val.includes('a'));
numArray.forEach(num => num.toFixed(2));

// INFO: Tuples
let arr: [number, string] = [1, 'Alice'];
console.log(arr);

let coordinates3D: [number, number, number] = [10, 20, 30]; // (x, y, z) axis
console.log(coordinates3D);

let response: [number, string] = [200, "Success"]; // http-response
response.push('Codng'); // drawback of tuple in ts
console.log(response)

// INFO: enum

// PascalCase
enum Color {
    // APP_NAME = 'my_app_name',
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
console.log(Color.Blue);

let color: Color = Color.Green;
console.log(color);

enum Size {
    Small = 1,
    Medium,
    Large
}
let size: Size = Size.Large;
console.log(size);

// INFO: unkown type
let notSure: unknown = 'a';
if (typeof (notSure) === 'number') {
    notSure.toFixed(2);
} else if (typeof (notSure) === 'string') {
    notSure.length;
}

// INFO: never type
function infiniteLoop(): never {
    while (true) {
        // Do something enlessly
        console.log('Again!');
    }
}

function throwError(message: string): never {
    throw new Error(message);
};

// void type
function logMessage(message: string): void {
    console.log(message);
}
logMessage('Print this Message');


// INFO: type inference
let username = 'Rafay';

// INFO: type assertions
let someValue: any = "Hello World";
let len: number = (someValue as string).length;
console.log(len);

// INFO: union types
let id: string | number; // id can ethier be string or number
id = 'abc';
id = 123;

function printId(id: string | number): void {
    console.log(`id: ${id}`);
}
printId('Hi welcome!');
printId(1234);

// INFO: tpye narrowing
function printIdFn(id: string | number) {
    if (typeof id === 'string') {
        console.log(`id is a string: ${id.toUpperCase()}`);
    } else {
        console.log(`id is a number: ${id}`);
    }
}
printIdFn(1);

// INFO: interface
interface Person {
    name: string;
    age: number;
    greet(): void;
}

let person: Person = {
    name: 'abc',
    age: 10,
    greet() {
        console.log('Hi');
    }
};

person.greet();

// INFO: Interface with function types
interface MathOp {
    (a: number, b: number): number;
}

const add: MathOp = (x, y) => x + y;
const subtract: MathOp = (x, y) => x - y;

console.log('add 2 numbers: ', add(1, 2));
console.log('subtract 2 numbers: ', subtract(5, 4));


// INFO: Type Alias
// type AliasName = TypeDefinition; // syntax
type UserID = string;

let userId: UserID = 'abc';

type Person2 = {
    name: string;
    age: number;
};

let person1: Person2 = {
    name: 'abc',
    age: 12
}
console.log(person1.name);

type ID = string | number;

let userId1: ID = 'abc';
let orderId: ID = 101;


// INFO: Interface vs Type alias
interface User {
    name: string;
    phone: number;
}

interface Customer extends User {
    address: string;
}

let myCustomer: Customer = {
    name: 'x',
    phone: 1234,
    address: 'abc'
}

type Vehicle = {
    name: string;
    model: string;
}

// & -> intersectoins types
type Car = Vehicle & {
    isElectric: boolean;
}

let myCar: Car = {
    name: 'BMW',
    model: "don't know",
    isElectric: true
}

type MathOp1 = (a: number, b: number) => number;
let add1: MathOp1 = (x, y) => x + y;
console.log(add1(2, 2));

type Status = "active" | "inactive" | "pending";

let userStatus: Status = 'active';

type Tree = {
    value: string;
    children: Tree[];
}

let tree: Tree = {
    value: 'root',
    children: [
        {
            value: 'child1',
            children: [{ value: 'grandChild', children: [] }]
        }
    ]
}

// INFO: intersetion types
let config: { server: string; port: number } & { secure: boolean; timeout: number } = {
    server: 'localhost',
    port: 8000,
    secure: true,
    timeout: 5000
};

