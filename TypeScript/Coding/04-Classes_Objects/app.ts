// Access Modifiers
class BottleMaker {
  private halua: string = "halua";
  protected age: number = 10;
  constructor(public name: string) {}

  getData(): void {
    console.log(this.halua);
  }
}

class MetalBottleMaker extends BottleMaker {
  constructor(name: string) {
    super(name);
  }

  getValue(): void {
    console.log(this.name /* this.halua */); // cannot access here due to private
    this.age = 22;
  }
}

let b1 = new BottleMaker("Milton");
