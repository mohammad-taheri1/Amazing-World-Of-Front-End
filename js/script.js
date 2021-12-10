class Rectangle{
    constructor(_x,_y,_color) {
        this.x = _x;
        this.y = _y;
        this.color = _color;
    }
    get area(){
        return this.x * this.y;
    }
    set area(a){
        this.x = Math.sqrt(a);
        this.y = this.x;
    }
    printDescription(){
        console.log(`this rectangle has ${this.x} width and ${this.y} height`)
    }

}

const testRectangle1 = new Rectangle(20,25,"blue");
const testRectangle2 = new Rectangle(35,80,"red");

console.log(testRectangle1.x);
testRectangle1.area = 950;
console.log(testRectangle1.x);
