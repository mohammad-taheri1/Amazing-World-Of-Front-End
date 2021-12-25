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

class AdminUser extends User {
    setPassword = (password) => {
        this.password = password;
    }
}

let mmm = new User("Mamad", "Taheri", ["soccer", "chess"]);
console.log(mmm);

let aaa = new AdminUser("Ali", "Alavi", ["soccer"]);
console.log(aaa);
