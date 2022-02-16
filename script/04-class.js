class Car {
    constructor(model,color){
        this.model = model;
        this.color = color;
    }
    loggg(){
        console.log("loggg", this.model);
        console.log("loggg", this.color);
    }
    lg = () => {
        console.log("lg", this.model);
        console.log("lg", this.color);
    }
}

const benz = new Car("benz S500","black");
benz.loggg();
benz.lg()
