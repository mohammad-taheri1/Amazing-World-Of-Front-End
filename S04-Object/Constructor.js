function Circle(radius) {
    this.radius = radius;
    this.move = function (){
        console.log("move");
    }
    return this;
}

const circle1 = new Circle(18);