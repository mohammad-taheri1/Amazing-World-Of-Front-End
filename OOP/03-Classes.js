class User {
    constructor(firstName, lastName, userHobies){
        this.firstName = firstName;
        this.lastName = lastName;
        this.userHobies = userHobies;
    }

    getFullName = () => {
        return `${this.firstName} ${this.lastName}`;
    }
}

let john = new User("Mamad", "Taheri", ["soccer", "chess"]);

console.log(john.getFullName())

let AliJoon = new User("Ali", "Alavi", ["chess", "dancing"]);
console.log(AliJoon.getFullName())

 