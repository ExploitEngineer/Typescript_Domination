/*
1. Partial <T>
Creates a type with all properties of T set to optional.
*/
type User = { id: number; name: string; email: string };
type UserUpdate = Partial<User>;

const patchUser = (id: number, update: UserUpdate) => {};
patchUser(1, { name: "Alice" });

/*
2. Required <T>
Opposite of Partial<T>: makes all properties required.
*/
type Config = { host?: string; port?: number };
type StrictConfig = Required<Config>;

const load = (cfg: StrictConfig) => cfg.host + cfg.port;

/*
3. Readonly<T>
Makes all properties of T immutable.
*/
type State = { count: number };
const state: Readonly<State> = { count: 0 };

// state.count++; // Error: Cannot assign to 'count'

/*
4. Record<K, T>
Constructs a type with keys from K and value of type T.
*/
type Role = "admin" | "user" | "guest";
type Permissions1 = Record<Role, boolean>;

const perms: Permissions1 = {
  admin: true,
  user: true,
  guest: true,
};

/*
5. Pick<T, K>
Creates a subtype by selecting specific keys from T.
*/
type FullUser = { id: number; name: string; email: string };
type PublicUser = Pick<FullUser, "id" | "name">;

const user: PublicUser = { id: 1, name: "Alice" };

/*
6. Omit<T, K>
Creates a subtype by excluding specific keys from T.
*/
type PrivateUser = Omit<FullUser, "email">;
const user1: PrivateUser = { id: 1, name: "Bob" };

/*
7. Exclude<T, U>
Removes from T those types that are asssignable to U.
*/
type Status = "pending" | "success" | "error";
type ErrorFree = Exclude<Status, "error">;

/*
8. Extract<T, U>
Opposite of Exclude: gets only the types from T that are assignable to U.
*/
type NewEvent = "click" | "hover" | "focus";
type NewMouseEvent = Extract<NewEvent, "click" | "hover">;

/*
9. ReturnType<T>
Infers the return type of a function.
*/
const createUser1 = () => ({ id: 1, name: "Rafay" });
type NewUser = ReturnType<typeof createUser1>;

/*
10. Parameters<T>
Extracts a tuple type of a function's parameters.
*/
function sendEmail(to: string, subject: string, body?: string) {}
type Args = Parameters<typeof sendEmail>;

/*
11. InstanceType<T>
Gets the type of an instance of a class constructor.
*/
class Logger {
  log(msg: string) {}
}
type LoggerInstace = InstanceType<typeof Logger>;
