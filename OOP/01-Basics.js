var name1 = "Mamad";

var name2 = new String("Ali");


var userOne = {
    email: 'Mamad@gmail.com',
    name: 'Mamad',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

console.log(userOne.email)