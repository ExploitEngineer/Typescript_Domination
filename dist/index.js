"use strict";
/* let a: string = '1';
a = '10';

function add(a: number, b: number) {
    return a + b;
}
console.log(add(1, 2)); */
let num = 1234_234_3534;
let num1 = 123443434342534255n;
console.log('num:', num);
console.log('num1:', num1);
let character = 'Code with me!';
const isAvailable = true;
console.log(character);
console.log(isAvailable);
let val = undefined;
let val1 = null;
let user;
console.log(user); // undefined
let obj = {
    name: 'Abc',
    age: 17
};
obj = { ...obj, phone: 234323424 };
console.log(obj);
// INFO: any type
let numVal;
numVal = 1;
numVal = 'a';
function testAnyType(val) {
    console.log(val);
}
// INFO: Arrays
let numArray = [1, 2, 3, 4];
let charArray = ['a', 'whoami', 'coding'];
charArray.forEach(val => val.includes('a'));
numArray.forEach(num => num.toFixed(2));
// INFO: Tuples
let arr = [1, 'Alice'];
console.log(arr);
let coordinates3D = [10, 20, 30]; // (x, y, z) axis
console.log(coordinates3D);
let response = [200, "Success"]; // http-response
response.push('Codng'); // drawback of tuple in ts
console.log(response);
// INFO: enum
// PascalCase
var Color;
(function (Color) {
    // APP_NAME = 'my_app_name',
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
console.log(Color.Blue);
let color = Color.Green;
console.log(color);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let size = Size.Large;
console.log(size);
