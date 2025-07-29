// Access Modifiers
class BottleMaker {
  private halua: string = "halua";
  protected age: number = 10;
  constructor(
    public name: string,
    public readonly greet?: string,
  ) {}

  getData(): void {
    console.log(this.halua);
  }
}

class MetalBottleMaker extends BottleMaker {
  constructor(name: string, greet: string) {
    super(name, greet);
  }

  getValue(): void {
    console.log(this.name /* this.halua */); // cannot access here due to private
    this.age = 22;
  }
}

let b1 = new BottleMaker("Milton");

// Getters and Setters
class User {
  constructor(
    public _name: string,
    public _age: number,
  ) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

let user = new User("abdul rafay", 17);
user.name = "whoami";

// Static Methods
class Sherry {
  public static version: number = 1.0;

  static getRandomNumber() {
    return Math.random();
  }
}

Sherry.version;
Sherry.getRandomNumber();

// Abstract classes & methods
class Payment {
  constructor(
    protected amount: number,
    protected account: number,
  ) {}
  isPaymentValid(amount: number) {
    return this.amount > 0;
  }
}

class Paytm extends Payment {}
