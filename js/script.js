class Animal{
    constructor(_name) {
        this.name = _name;
    }
    eats(){
        console.log(`the ${this.name} eats food`);
    }
}

class Dog extends Animal{
    eats() {
        super.eats();
        console.log(`overrided function`);
    }

}

const animal1 = new Dog('animaltest');
animal1.eats();