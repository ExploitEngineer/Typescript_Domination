# tsconfig.json - Core Concepts

The `tsconfig.json` file configures how TypeScript compiles your code. Key fields:

1. `include`: Array of file paths/globs to compile.
2. `exclude`: Array of the file paths/globs to ignore.
3. `compilerOptions`: Main compiler behavior config (type checking, emit, etc.)

## `include` / `exclude`

```
{
  "include": ["src/**/*"], // Include all .ts/ .tsx in src/
  "exclude": ["node_modules", "dist"] // Exclude these from compilation
}
```

- If neither is specified, defaults:
  - `include`: all TS files in the folder and subfolders.
  - `exclude`: `node_modules`.

## `compilerOptions`

`strict`
Enables all strict type-checking options. Equivalent to enabling:

```
{
  "compilerOptions": {
   "strict": true,
   // expands to:
   "strictNullChecks": true,
   "noImplicitAny": true,
   "strictBindCallApply": true,
   "strictFunctionTypes": true,
   "strictPropertyInitialization": true,
   "alwaysStrict": true
  }
}
```

`target`
Sets the ECMAScript version TS outputs.

```
{
    "compilerOptions": {
      "target": "ES2022" // ESNext, ES6, ES2015, etc.
  }
}
```

- Affects: output syntax (e.g., async/await support, class fields)

`module`
Defines the module system for output JS files.

```
{
    "compilerOptions": {
      "module": "ESNext" // CommonJS, ES6, AMD, etc.
  }
}
```

- Common in:
  - Node.js -> `CommonJS` / `NodeNext`
  - ESM projects -> `ESNext`

`lib`
Specifies ambient types to include

```
{
    "compilerOptions": {
      "lib": ["ES2021", "DOM", "DOM.Iterable"]
  }
}
```

- Controls the global types available (e.g., `Promise`, `fetch`, `Window`, etc.)
- Excludes unused libs for leaner type checking.

## Example: Strict Modern Config for a Node ESM Project

```
{
    "compilerOptions": {
     "target": "ES2022",
     "module": "ESNext",
     "moduleResolution": "NodeNext",
     "lib": ["ES2022"],
     "strict": true,
     "esModuleInterop": true,
     "skipLibCheck": true,
     "outDir": "dist",
     "rootDir": "src"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```
