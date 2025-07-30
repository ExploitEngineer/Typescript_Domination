# ⚔️ TypeScript Domination

Welcome to **TypeScript Domination** – your ultimate resource to master TypeScript from the ground up like a true engineer, hacker, or developer.

This repository follows a **phase-wise roadmap**, covering everything from beginner to advanced real-world TypeScript concepts. Whether you're coming from JavaScript or diving straight into TS, this guide is designed to build your knowledge incrementally and practically.

---

## 📘 About the Project

This repository is structured around a detailed, multi-phase roadmap for mastering **TypeScript**. You’ll not only learn syntax and theory but also real-world usage patterns, tooling, and integration with modern frameworks like React.

Each phase focuses on a core set of skills, building up your TypeScript expertise in a clean, organized, and hands-on manner.

---


## 🚀 Roadmap Overview

The roadmap is divided into **5 Phases**:

---

### 🧹 PHASE 1: Fundamentals

1. **Introduction**

   * What is TypeScript?
   * Why use TypeScript over JavaScript?
   * TypeScript vs JavaScript
   * Setting up a TypeScript Project (`tsc`, `tsconfig.json`)

2. **Basic Types**

   * `number`, `string`, `boolean`
   * `null`, `undefined`, `any`
   * `unknown`, `never`, `void`

3. **Type Inference & Annotation**

   * Explicit vs Implicit Typing
   * Best Practices for Annotation

4. **Variables & Constants**

   * `let`, `const` with Type Annotations
   * Type safety and reassignment

5. **Functions**

   * Function Types
   * Optional & Default Parameters
   * Rest Parameters
   * Return Type Annotations
   * Arrow functions with Types

6. **Arrays & Tuples**

   * Typed Arrays (`number[]`, `string[]`)
   * Generic Array Type: `Array<T>`
   * Tuples (`[string, number]`)
   * Readonly Arrays and Tuples

7. **Objects**

   * Object Type Definitions
   * Optional & Readonly Properties
   * Index Signatures

8. **Enums**

   * Numeric Enums
   * String Enums
   * Enum vs Union Types

---

### ✨ PHASE 2: Intermediate Concepts

1. **Union & Intersection Types**

   * `type A = string | number`
   * `type B = {x: number} & {y: number}`

2. **Literal Types & Type Aliases**

   * String, Number, Boolean Literals
   * `type Direction = 'left' | 'right' | 'center'`

3. **Type Narrowing**

   * `typeof`, `instanceof`, `in` operators
   * Custom Type Guards
   * Discriminated Unions

4. **Interfaces**

   * Creating & Extending Interfaces
   * Interface vs Type
   * Optional and Readonly Modifiers

5. **Functions Advanced**

   * Function Overloads
   * `this` parameter
   * Call Signatures in Types/Interfaces

6. **Working with Classes**

   * Class syntax with Types
   * Public / Private / Protected / Readonly
   * Constructors & Property Initialization
   * Inheritance and `implements`

---

### 💡 PHASE 3: Advanced Types

1. **Generics**

   * Generic Functions
   * Generic Interfaces & Classes
   * Constraints with `<T extends>`
   * Default Generic Types

2. **Utility Types**

   * `Partial`, `Required`, `Readonly`, `Record`
   * `Pick`, `Omit`, `Exclude`, `Extract`
   * `ReturnType`, `Parameters`, `InstanceType`

3. **Advanced Types**

   * Mapped Types
   * Conditional Types (`T extends U ? X : Y`)
   * Template Literal Types
   * Key Remapping with `as`

4. **Declaration Merging**

   * Interface Merging
   * Module Augmentation

5. **Modules & Namespaces**

   * ES modules in TS
   * `import` / `export` syntax
   * Ambient Declarations (`declare`)

6. **Error Handling**

   * Typing `try` / `catch`
   * Custom Error Classes

---

### 🛋️ PHASE 4: Tooling & Integration

1. **Configuration**

   * `tsconfig.json` Options
   * `include`, `exclude`, `compilerOptions`
   * `strict`, `target`, `module`, `lib`

2. **Working with npm & Modules**

   * Type Declarations Files (`.d.ts`)
   * Installing `@types` packages
   * Type definitions for 3rd-party libraries

3. **TypeScript with JavaScript**

   * Migration strategies
   * JSDoc annotations to assist JS with TS

4. **TypeScript + React**

   * Typing Functional Components
   * Props & State with Interfaces
   * `React.FC` vs `VoidFunctionComponent`
   * Event Handlers with TS
   * Using Generics in Components
   * Typing `useRef`, `useReducer`, `useContext`

5. **Linting & Formatting**

   * ESLint for TypeScript (`@typescript-eslint`)
   * Prettier with TypeScript
   * Rules for code quality

---

### 🛠️ PHASE 5: Expert Concepts

1. **Advanced Typing Techniques**

   * Type-level Programming
   * Recursive Types
   * Branded Types (opaque types)
   * Polymorphic `this` types

2. **Type Safety & Contracts**

   * Preventing `any`
   * Compile-time safety with proper constraints
   * Avoiding overuse of `unknown`

3. **Monorepos & TypeScript**

   * Project References
   * Composite Projects
   * Managing Types across packages

4. **Build & Deployment**

   * TypeScript with Webpack / Vite
   * Type Checking in CI/CD
   * `tsc` vs Babel with TS

5. **Testing with TypeScript**

   * Writing Tests in Jest + TS
   * Typing Mocks and Stubs
   * Types for Unit & Integration Test

6. **Patterns & Best Practices**

   * Domain-driven Types
   * Avoiding Type Inference Pitfalls
   * Favoring Composition over Inheritance
   * Safe API Integration with `zod` / `io-ts`

---

## 🌐 Repository Structure (Coming Soon)

```
TypeScript_Domination/
├── phase-1-fundamentals/
├── phase-2-intermediate/
├── phase-3-advanced-types/
├── phase-4-tooling/
├── phase-5-expert/
├── README.md
└── tsconfig.json
```

---

## 🙌 Contributing

If you'd like to contribute, fix typos, or add examples, feel free to submit a PR or open an issue.

---

## 👀 Stay Connected

* Author: [ExploitEngineer](https://github.com/ExploitEngineer)
* Repo: [TypeScript\_Domination](https://github.com/ExploitEngineer/Typescript_Domination.git)

---

## 🌟 License

This project is licensed under the MIT License.

---

> “Mastering TypeScript isn't just about knowing types – it's about writing safer, scalable, and smarter code.”
