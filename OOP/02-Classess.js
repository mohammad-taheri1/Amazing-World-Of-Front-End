class User {
    constructor(_email, _name){
        this.email = _email;
        this.name = _name;
        this.score = 0;
        console.log('constructor has been invoked for', this.name);
    }
    login(){
        console.log(this.email, 'has logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'has logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }

}

 var userOne = new User('mamad@gmail.com', 'mamad');
 var userTwo = new User('alice@gmail.com', 'alice');

//  userOne.login();
//  userOne.logout();
//  userTwo.login();
//  userTwo.logout();

userOne.login().updateScore().updateScore().logout();
