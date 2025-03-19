// INFO: Classes
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
    return Device;
}());
var d1 = new Device();
var d2 = new Device();
var Bottle = /** @class */ (function () {
    function Bottle() {
        this.radius = 120;
        this.price = 20;
        this.color = "white";
    }
    return Bottle;
}());
var b1 = new Bottle();
// INFO: Constructors
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
var bm1 = new BottleMaker("Milton", 1200);
