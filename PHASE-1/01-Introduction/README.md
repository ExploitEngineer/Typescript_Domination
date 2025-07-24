# What is TypeScript ?

TypeScript is a programming language developed and maintained by Microsoft. It is a superset of JavaScript, meaning any valid JavaScript code is also a valid TypeScript code - but TypeScript adds optional static Typing interfaces, and advanced tooling features.

# Why use TypeScript over JavaScript ?

TypeScript ia an open-source programming language developed by Microsoft. It is a superset of JavaScript that adds optional static typing and compiles to plain JavaScript, enabling improved code quality, maintainability, and tooling support in modern web and software development.

# TypeScript vs JavaScript

TypeScript is a superset of JavaScript that adds optional static typing, allowing developers to define variable types and catch errors during development. It requires a compilation step to convert TypeScript code into standard JavaScript, which browsers can run.

JavaScript is a dynamic, interpreted programming language used primarily for web development. It does not include built-in static type checking and is executed directly by browsers or runtime environments like Node.js.

# What is `tsc` ?

tsc stands for TypeScript Compiler. It's the tool that transpiles `.ts` files into `.js` files, which browser or Node.js can understand.

Install TypeScript

```
npm install -g typescript
tsc --version
cd project
tsc --init

```

# What is `tsconfig.json ?`

This file tells the TypeScript compiler how to compile your project. It controls options like:

- which files to include/exclude
- What ECMAScript version to output
- Module system (CommonJS, ESNext, etc.)
- Whether to allow JS files, strict typing, etc.

# Compiling TypeScript Files

```
tsc

```

to automatically recompile when you change .ts files

```
tsc --watch
```

# TypeScript vs JavaScript

**TypeScript** is a superset of **JavaScript** that adds optional type annotations and other features such as interfaces, classes, and namespaces. JavaScript is a dynamically-typed language that is primarly used for _`client-side`_ web development and can also be used for _`server-side`_ development.

Here are few key differences between **TypeScript** and **JavaScript**:

- **Types:** has optional type annotations while JavaScript is dynamically-typed. This means that in TypeScript, you can specify the data type of variables, parameters, and return values, which can help catch type-related errors at compile-time.

- **Syntax:** TypeScript extends JavaScript syntax with features like interfaces, classes, and namespaces. This provides a more robust and organized structure for large-scale projects.

- **Tooling:** TypeScript has better tooling support, such as better editor integration, type checking, and code refactoring.

- **Backwards Compatibility:** TypeScript is fully compatible with existing JavaScript code, which means you can use TypeScript in any JavaScript environment.

# TS/JS Interoperability

TypeScript and JavaScript have full interoperability, meaning you can use TypeScript code in JavaScript projects and vice versa. TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.

You can use JavaScript libraries in TypeScript projects by either including the JavaScript files directly or using type definitions for the library. Type definitions provide type information for JavaScript libraries, making it easier to use them in TypeScript.

On the other hand, you can use TypeScript code in JavaScript projects by simply compiling the TypeScript code into JavaScript. The generated JavaScript code can be used in any JavaScript environment, and it will work the same way as regular JavaScript code.

TypeScript's compiler also supports type checking for plain JavaScript code by adding the `// @ts-check` comment at the top of a file. This allows the compiler to validate types by inspecting the JSDoc comments:

```
// @ts-check

/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
  return a + b;
}
```

# Install and Configure

To install and configure TypeScript in your project, you need to perform the following steps:

- Initialize npm in your project directory by running the following command:

```
npm init
```

- Install TypeScript as a project dependency by running the following command:

```
npm install --save-dev typescript
```

- Create a `tsconfig.json` file in your project directory to specify the compiler options for building your project. For exmaple:

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commmonjs"
    "strict": true,
    "outDir": "./dist"
    "rootDir": "./src"
  },
  "exclude": ["node_modules"]
}
```

- Compile your TypeScript code using the following command:

```
npx tsc
```

NOTE: You can also compile individual TypeScript files by secifying the file path after the tsc command. For example:

```
npx tsx ./src/index.ts
```

And you're all set! You can now start writing TypeScript code in your project.

# tsc

`tsc` is the command line tool for the TypeScript compiler. It compiles TypeScript code into JavaScript code, making it compatible with the browser or any JavaScript runtime environment.

You can use the `tsc` command to compile your TypeScript code by running the following command in your terminal or command prompt:

```
tsc
```

This command will compile all TypeScript files in your project that are specified in your `tsconfig.json` file. If you want to compile a specific TypeScript file, you can specify the file name after the `tsc` command, like this:

```
tsc index.ts
```

The `tsc` command has several options and flags that you can use to customize the compilation process. For example, you can use the `--target` option to specify the version of JavaScript to compile to, or the `--outDir` option to specify the output directory for the compiled JavaScript files.

You can run `tsc --help` to see a list of all the available options and flags.
