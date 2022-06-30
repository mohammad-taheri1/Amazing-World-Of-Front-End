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

class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email !== user.email;
        })
    }
}

 var userOne = new User('mamad@gmail.com', 'mamad');
 var userTwo = new User('alice@gmail.com', 'alice');

 var admin = new Admin('Admin@gmail.com','admin');

 
 //  userOne.login();
 //  userOne.logout();
 //  userTwo.login();
 //  userTwo.logout();
 
 // userOne.login().updateScore().updateScore().logout();
 
 let users = [userOne, userTwo, admin];
 
 admin.deleteUser(userTwo);

 console.log(users);