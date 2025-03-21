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
