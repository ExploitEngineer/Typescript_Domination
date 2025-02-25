// INFO: Interfaces
interface User {
    name: string,
    email: string,
    password: number,
    gender?: string // ? means optional
}

function getDataOfUser(obj: User) {
    return 0;
}
getDataOfUser({
    name: "abdul rafay",
    email: "newemail@gamil.com",
    password: 1234
})


// INFO: Extendeing Interfaces
interface Admin extends User {
    admin: boolean;
}

function abcd(obj: Admin) {
    obj.admin
}


interface Abcd {
    name: string;
}

interface Abcd {
    email: string;
}

function abcd1(obj: Abcd) {
}


// INFO: Type Aliases
type value = string | number | null;
let car: value;

function fun1(obj: value) {
    console.log("hello");
}
