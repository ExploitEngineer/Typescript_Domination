"use strict";
// Basic Types
// Primitive Types (number, string, boolean)
let a = 11;
let b = "hi";
let c = true;
// Arrays
let arr = [1, 2, 3, "whoami", { name: "abdul" }];
// Tuples
let arr2 = ["whoami", 12, true];
// Enums (enumerations)
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.ADMIN; // admin
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.NOTFOUND; // not found status code 404
// Any, Undefined, Never
let e;
e = 12;
e = "hi";
// Unknown
let d;
d = 12;
d = "rafay";
// NOTE: what is the differnce between any and unknown. so actually the any code fails the 12 and when we say like e. then we get all the method related to string if you do it unknown you ca use any value but you have to use it specifecialy like first you have to check that the typeof d = string then do this you have to check again and again for unknown
// Void (we use void when function doesn't return anything and if returning some datatype then you have to mention that)
function abcd() {
    console.log('hey');
}
function fun() {
    return 12;
}
// Null
let g;
// undefined
let abc;
// Never
function infiniteFun() {
    while (true) {
        console.log("Infinite Loop");
    }
}
abcd();
console.log("hey");
