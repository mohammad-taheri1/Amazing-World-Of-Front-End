function createCircle(radius){
    return {
        radius,
        move(){
            console.log(`move function for radius ${radius}`);
        }
    }
}

const obj1 = createCircle(5);
const obj2 = createCircle(10);
