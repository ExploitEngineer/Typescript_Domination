// Type Assertion
// TYpe casting

let a: any = 12;
a as string;
(<number>a).toFixed(2);

// Non-null assertion operator
let value: null | undefined | string;
value = "hey";
value!;
