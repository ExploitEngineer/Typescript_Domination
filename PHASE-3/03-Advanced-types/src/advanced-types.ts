/*
1. Mapped Types
Constructs new types by transforming keys in T
*/
type Flags = { darkMode: boolean; beta: boolean };

// Make all values 'string' instead of 'boolean'
type Stringified<T> = {
  [K in keyof T]: string;
};

type StringFlags = Stringified<Flags>;

/*
2. Conditional Types
Ternary types that depend on whether a type extends another.
*/
type IsString<T> = T extends string ? true : false;
type A = IsString<"hello">;
type B = IsString<42>;

// Discriminated union narrowing
type Flatten<T> = T extends Array<infer U> ? U : T;

type X = Flatten<string[]>; // string
type Y = Flatten<number>; // number

/*
3. Template Literal Types
Allows string manipulation at the type level.
*/
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<"click">;
type HoverEvent = EventName<"hover">;

// Combining Multiple Strings:
type Lang = "en" | "fr";
type Page = "home" | "about";

type Route = `/pages/${Lang}/${Page}`;

/*
4. Key Remapping with as
Mapped types can rename keys using as.
*/
type PrefixProps<T> = {
  [K in keyof T as `data${K & string}`]: T[K];
};

type Props = { id: number; role: string };
type DataProps = PrefixProps<Props>;

// Filtering keys Dynamically:
type RemovePrivate<T> = {
  [K in keyof T as K extends `__${string}` ? never : K]: T[K];
};

type Model = {
  id: number;
  __internalId: string;
  name: string;
};

type PublicModel = RemovePrivate<Model>;
