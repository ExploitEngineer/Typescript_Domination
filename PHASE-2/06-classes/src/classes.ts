/*
1. Class Syntax with Types
Type annotations for class properties, methods, and parameters and explicit enforceable.
*/
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(msg: string): void {
    console.log(`${msg}, I'm ${this.name}`);
  }
}

// With shorthand constructor property declaration
class NewUser {
  constructor(public name: string, private age: number) {}
}

/*
2. Access Modifiers & Readonly
public - Default, accessible anywhere
private - Accessible only within the class
protected - Accessible in class & sublcasses
readonly - Can only be assigned once (on init)
*/

class BankAccount {
  public readonly id: string;
  protected balance: number;
  private pin: string;

  constructor(id: string, balance: number, pin: string) {
    this.id = id;
    this.balance = balance;
    this.pin = pin;
  }

  protected getBalance(): number {
    return this.balance;
  }
}

/*
3. Constructor & Property Initialization
Supports optional parameters, default values, and strict initialization checks (-- strictPropertyInitialization):
*/

class Config {
  timeout: number;
  retryCount: number;

  constructor(timeout = 1000, retryCount = 3) {
    this.timeout = timeout;
    this.retryCount = retryCount;
  }
}
// Enforce immutability:
class Immutable {
  readonly createdAt = new Date();
}

/*
4. Inheritance & implements
- extends: Inherit from base class
- implements: Enforce structure from interface
*/

interface Serializable {
  serialize(): string;
}

class Base {
  constructor(protected id: string) {}
}

class Product extends Base implements Serializable {
  constructor(id: string, public price: number) {
    super(id);
  }

  serialize(): string {
    return JSON.stringify({ id: this.id, price: this.price });
  }
}
