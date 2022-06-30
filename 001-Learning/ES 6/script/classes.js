class Vehicle {
    constructor(_color = "black", _model = "benz"){
        this.color = _color,
        this.model = _model
    }

    speed() {
        console.log(this);
        console.log("I go fast");
    }
}

const car1 = new Vehicle();
console.log(car1);
// console.log(car1.color);
// console.log(car1.model);

// car1.speed();

console.log("***************************************");

const car2 = new Vehicle("brown");
console.log(car2)

console.log("***************************************");

const car3 = new Vehicle("red", "pride");

console.log(car3);

