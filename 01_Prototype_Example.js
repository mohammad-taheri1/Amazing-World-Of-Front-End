let Car = function(model) {
    this.model = model;
};

Car.prototype.getModel = function(){
    return this.model;
}

let toyota = new Car('Toyota Hilux 2015 black');
console.log(toyota.getModel());

console.log(toyota);

let benz = new Car('Benz S550 2022');
console.log(benz.getModel());
console.log(benz)