/*
INFO: 1. Typing type / catch blocks
By default, the catch clause assumes unkown type (since TS 4.4). Always narrow or assert the error type inside catch.
*/

// Narrowing with type guards:
function parseJSON(input: string): unknown {
  try {
    return JSON.parse(input);
  } catch (e) {
    if (e instanceof SyntaxError) {
      console.error("Invalid JSON:", e.message);
    } else {
      throw e;
    }
  }
}

// Using type predicates for custom narrowing:
interface CustomErrorShape {
  code: string;
  message: string;
}

function isCustomError(e: unknown): e is CustomErrorShape {
  return typeof e === "object" && e !== null && "code" in e && "message" in e;
}

try {
  throw { code: "E123", message: "Something failed" };
} catch (e) {
  if (isCustomError(e)) {
    console.log(e.code); // safe
  }
}

/*
INFO: 2. Custom Error Classes
Create precise. strongly-typed error classes with custom properties and class-based narrowing.
*/

// Custom error with inheritance:
class ValidationError extends Error {
  constructor(
    public field: string,
    message: string,
  ) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUser(input: { email?: string }) {
  if (!input.email) {
    throw new ValidationError("email", "Email is required");
  }
}

try {
  validateUser({});
} catch (e) {
  if (e instanceof ValidationError) {
    console.error(`Validation failed on ${e.field}: ${e.message}`);
  }
}

// Typed error hierarchy:
abstract class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
  ) {
    super(message);
  }
}

class AuthError extends AppError {
  constructor(message: string) {
    super(message, "AUTH_ERROR");
  }
}

class NotFoundError extends AppError {
  constructor(entity: string) {
    super(`${entity} not found,`, "NOT_FOUND");
  }
}

function getUser(id: number): never {
  throw new NotFoundError("User");
}

try {
  getUser(1);
} catch (e) {
  if (e instanceof AppError) {
    console.error(`[${e.code}] ${e.message}`);
  }
}
