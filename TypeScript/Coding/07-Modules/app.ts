// Modules
// Exporting and Importing modules
// Default exports

import Payment, { getDetails, addPayment } from "./payment";

addPayment(20);
getDetails<string>("abdul rafay");
getDetails<number>(17);

let a = new Payment(12);
console.log(a);
