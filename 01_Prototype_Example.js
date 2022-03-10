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
console.log(benz);

console.log('****************************************************************');

var userName = 'mamad';
console.log(userName);

var nums = [18,43,24,81,58];
console.log(nums);
console.log('****************************************************************');

console.log(Object.keys(nums));
console.log('****************************************************************');

console.log(Object.values(nums));
console.log('****************************************************************');

