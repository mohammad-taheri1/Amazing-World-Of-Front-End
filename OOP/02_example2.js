function User(_email, _name){
    this.email = _email;
    this.name = _name;
    this.online = false;
    this.created_at = Date.now();
    // this.login = function(){
    //     console.log(this.email, 'has logged in');
    // }
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

var user1 = new User('mamad@ninjas.com', 'mamad');
var user2 = new User('ali@mariocorp', 'ali');

console.log(user1);