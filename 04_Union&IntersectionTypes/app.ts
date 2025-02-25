// INFO: Union Types
let user: string | number;
// let user: string & number; intersection will never goona work like that


// INFO: Intersection Types
type newUser = {
    name: string;
    email: string;
}

type admin = newUser & {
    getDetails(user: string): void
}

function mainFuntion(a: admin) {
    a.getDetails
}
