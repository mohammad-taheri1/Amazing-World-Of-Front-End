class Vehicle {
    constructor(_color = "black", _model = "benz"){
        this.color = _color,
        this.model = _model
    }

    go() {
        console.log("I go");
    }
}

class Car extends Vehicle {
    constructor(_color, _model, _speed) {
        super(_color, _model);
        this.speed = _speed;
    }

    speed(){
        console.log("i go fastt!!!!!!!");
    }
}

const vehicle1 = new Vehicle();
console.log(vehicle1);

const car1 = new Car('yellow', 'renault', 220);
console.log(car1)
