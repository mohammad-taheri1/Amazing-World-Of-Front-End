class Rectangle{
    constructor(_x,_y,_color) {
        this.x = _x;
        this.y = _y;
        this.color = _color;
    }
    getArea(){
        return this.x * this.y;
    }
    printDescription(){
        console.log(`this rectangle has ${this.x} width and ${this.y} height`)
    }
}

const testRectangle1 = new Rectangle(20,25,"blue");
const testRectangle2 = new Rectangle(35,80,"red");

testRectangle1.printDescription();
testRectangle2.printDescription();