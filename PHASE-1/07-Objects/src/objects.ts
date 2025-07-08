// TypeScript: Objects

/*
INFO: 1. Object Type Definitions
Explicitly declare the shape of an object using type annotations.
*/
const user: {
  id: number;
  username: string;
  isAdmin: boolean;
} = {
  id: 1,
  username: "rafay",
  isAdmin: true,
};

// using a reusable type alias:
type User = {
  id: number;
  username: string;
  isAdmin: Boolean;
};
const u1: User = { id: 2, username: "ali", isAdmin: false };

/*
INFO: 2. Optional & Readonly Properties
? marks optional as optional.
readonly prevents reassignment after initailization.
*/
type Profile = {
  readonly id: number;
  name: string;
  bio?: string; // optional
};
const p: Profile = { id: 1, name: "rafay" };
// p.id = 2; Error: Cannot assign to 'id'
// p.bio = 'dev'; Optional property can be added

/*
INFO: 3. Index Signatures
Allow dynamic keys with consistent value types.
*/
type UserMap = {
  [username: string]: number; // all keys are strings, values are numbers
};

const onlineUsers: UserMap = {
  rafay: 1,
  ali: 2,
  sara: 3,
};

// combining concepts
type Settings = {
  readonly id: string;
  theme: "dark" | "light";
  options?: {
    layout: string;
  };
  [key: string]: any; // index signature allows extra dynamic props
};

const s: Settings = {
  id: "abc123",
  theme: "dark",
  debug: true, // allowed due to index signature
};
