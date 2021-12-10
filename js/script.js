class Person{
    constructor(_name,_age) {
        this.name=_name;
        this.age = _age;
    }
    introduce(){
        console.log(`The Person name is ${this.name} and his/her age is ${this.age}`)
    }
}

class Programmer extends Person{
    constructor(_name,_age,_experties) {
        super(_name,_age);
        this.expertis = _experties;
    }
    introduce() {
        console.log("override")
    }

    code(){
        console.log(`${this.name} has experty of ${this.expertis}`);
    }
}

const person1 = new Person("mamad", 32);

const mamad = new Programmer("mamad", 32, "react Developer")