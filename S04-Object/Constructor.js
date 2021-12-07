function Circle(radius) {
    this.radius = radius;
    this.move = function (){
        console.log("move");
    }
    return this;
}

const circle1 = new Circle(18);
const circle2 = new Circle(6);
