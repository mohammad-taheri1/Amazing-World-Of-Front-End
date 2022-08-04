function User(_email, _name){
    this.email = _email;
    this.name = _name;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has been logged in');
}

User.prototype.logout = function() {
    this.online = true;
    console.log(this.email, 'has been logged out');
}

function Admin(...args) {
    User.apply(this, args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u) {
    users = users.filter(user => user.email != u.email);
}

var userOne = new User('mamad@gmail.com', 'mamad');
var userTwo = new User('alice@gmail.com', 'alice');

var admin = new Admin('zahra@gmail.com', 'zahra');

let users = [userOne, userTwo, admin];

console.log(userOne);
userTwo.login();

console.log(admin);