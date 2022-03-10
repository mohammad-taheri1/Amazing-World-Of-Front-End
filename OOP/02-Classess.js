class User {
    constructor(_email, _name){
        this.email = _email;
        this.name = _name;
        console.log('constructor has been invoked');
    }
}

 var userOne = new User('mamad@gmail.com', 'mamad');
 var userTwo = new User('alice@gmail.com', 'alice');

 console.log(userOne);
 console.log(userTwo);