// INFO: Classes
class Device {
    name = "lg";
    price = 12000;
    category = "digital";
}
let d1 = new Device();
let d2 = new Device();

class Bottle {
    radius = 120;
    price = 20;
    color = "white"
}
let b1 = new Bottle();


// INFO: Constructors
class BottleMaker {
    constructor(public name: string, public price: number) { }
}
let bm1 = new BottleMaker("Milton", 1200);
