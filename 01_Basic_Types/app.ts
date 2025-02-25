// Basic Types
// Primitive Types (number, string, boolean)
let a = 11;
let b = "hi";
let c = true;

// Arrays
let arr = [1, 2, 3, "whoami", { name: "abdul" }];

// Tuples
let arr2: [string, number, boolean] = ["whoami", 12, true];

// Enums (enumerations)
enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}
UserRoles.ADMIN // admin

enum StatusCodes {
    ABANDONED = "abandoned status code 500",
    NOTFOUND = "not found status code 404"
}
StatusCodes.NOTFOUND // not found status code 404

// Any, Undefined, Never
let e;
e = 12;
e = "hi";

// Unknown
let d: unknown;
d = 12;
d = "rafay";

// NOTE: what is the differnce between any and unknown. so actually the any code fails the 12 and when we say like e. then we get all the method related to string if you do it unknown you ca use any value but you have to use it specifecialy like first you have to check that the typeof d = string then do this you have to check again and again for unknown

// Void (we use void when function doesn't return anything and if returning some datatype then you have to mention that)
function abcd(): void {
    console.log('hey');
}

function fun(): number {
    return 12;
}

// Null
let g: null;

// undefined
let abc: undefined;

// Never
function infiniteFun(): never {
    while (true) {
        console.log("Infinite Loop");
    }
}
abcd();
console.log("hey");
