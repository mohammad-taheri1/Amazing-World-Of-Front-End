// const x = 30;
// const y = 40;

// const color = "red";

// function getArea() {
//     return x * y;
// }
 

// ***********************************************
// Getter && setter

// class Car {
//     constructor(_x){
//         this.x = _x
//     }
//     get square(){
//         return this.x * this.x;
//     }
//     set square(number){
//         this.x = Math.sqrt(number);
//     }
// }

// const newObj1 = new Car(5);
 

// ***********************************************
// آشنایی با کلاسها و وراثت
class Shape{
    constructor(_color){
        console.log("A new Shape Created");
        this.color=_color;
    }
}

class RectAngle extends Shape{
    constructor(_x,_y,_color){
        super(_color);
        console.log("A new ReactAngle Created");
        this.x = _x;
        this.y = _y;
    }

    getArea() {
        return this.x + this.y
    }

    printDescription(){
        console.log(`this rectangle is ${this.x} * ${this.y}`)
    }
}

const aaa = new RectAngle(10,20,"black");
const bbb = new RectAngle(15,25,"red");
console.log(aaa);
console.log(bbb);