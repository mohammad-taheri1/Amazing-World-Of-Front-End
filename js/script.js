class Rectangle{
    constructor(_x,_y,_color) {
        this.x = _x;
        this.y = _y;
        this.color = _color;
        console.log(this)
    }
}

const testRectangle1 = new Rectangle(20,25,"blue");
const testRectangle2 = new Rectangle(35,80,"red");