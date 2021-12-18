// import { name, sayHi } from "./app.js";

// console.log(name);

// sayHi();

class Vehicle {
    constructor(color, model){
        this.color = color;
        this.model = model;
    }
    spegoed(){
        console.log(this.model + " goes ");
    }
}

class Car extends Vehicle {
    constructor(speed, color, model){
        super(color, model);
        this.speed = speed;
    }

    speed() {
        console.log("I go fast")
    }
}

const car1 = new Car(190, "red", "Pride");

console.log(car1);