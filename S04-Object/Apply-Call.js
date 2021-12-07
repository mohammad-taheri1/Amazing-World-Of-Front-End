function Circle(radius) {
    this.radius = radius;
    this.move = function (){
        console.log("move");
    }
    return this;
}

const obj = {
    name: "mamad",
    family: "taheri",
    socialNumber: 123,
};

// const circleTest = Circle.call(obj,5);
const circleTest = Circle.apply(obj,[5]);

console.log(circleTest);