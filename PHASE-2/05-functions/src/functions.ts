/*
1. Function Overloads
Function overloads define multiple call signatures for the same function, allowing type-safe variations in arguments and return types.
*/
function parse(input: string): string[];
function parse(input: string, delimiter: string): string[];
function parse(input: string, delimiter?: string): string[] {
  return input.split(delimiter ?? ",");
}

const result1 = parse("a,b,c"); // string[]
const result2 = parse("a|b|c", "|"); // string[]

/*
2. this Parameter
TypeScript allows explicitly typing this in function signatures for method context control, expecially useful in callbacks or class-blound functions.
*/
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

const button: UIElement = {
  addClickListener(onclick) {
    document.addEventListener("click", onclick);
  },
};

button.addClickListener(function (this: void, e) {
  // 'this' is void; cannot use 'this' here
});

// In constract, for class-bound methods:
class Logger {
  log(this: Logger, message: string) {
    console.log(`[$(this.prefix)] ${message}`);
  }
  constructor(private prefix: string) {}
}

/*
3. Call Signatures in Types & Interfaces
Define callable type with explicit parameter/return type definitions using call signatures:
*/
type Formatter = {
  (value: string, upper?: boolean): string;
};
const format: Formatter = (value, upper = false) =>
  upper ? value.toUpperCase() : value.toLowerCase();

// Multiple overloads in call signatures
interface StringManipulator {
  (value: string): string;
  (value: string, times: number): string;
}

const repeat: StringManipulator = (val: string, times?: number) =>
  times ? val.repeat(times) : val.toUpperCase();

// you can also combine call signatures with properties:
interface LogFunction {
  (msg: string): void;
  level: "info" | "warn" | "error";
}

const logger: LogFunction = Object.assign((msg: string) => console.log(msg), {
  level: "info" as const,
});
