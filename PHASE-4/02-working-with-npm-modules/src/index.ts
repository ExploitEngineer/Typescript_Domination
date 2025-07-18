/*
INFO: Type Declarations in TypeScript with npm modules
.d.ts Files
Declaration files (.d.ts) describes the shape of code (types, interfaces, etc.) without implementation. They enable type checking and Intellisence for JavaScript or 3rd-party modules in TypeScript
*/

/*
Creating Custom .d.ts for JS modules
If you're using a JS library or internal module with no types:
/types
    - my-lib/
        - index.d.ts

types/my-lib/index.d.ts
*/

// Usage
import { doSomething } from "my-lib";

const result: number = doSomething("data");
console.log(result);

/*
Installing @types packages for Type support
Many npm libraries ship without TypeScript types. You can install the types separately from Definitely Typed.

npm install --save-dev @types/lodash

import _ from "lodash";

const nums: number[] = [1, 2, 3];
const doubled: number[] = _.map(nums, n => n * 2)
*/
