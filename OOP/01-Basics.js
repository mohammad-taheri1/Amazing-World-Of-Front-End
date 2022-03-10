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

console.log(userOne);
console.log(userOne.name);
userOne.name = 'King Mamad';
console.log(userOne.name);
userOne['name'] = '222222';
console.log(userOne.name);
userOne.age = 25;
console.log(userOne);
delete userOne.age;
console.log(userOne);

var userTwo = {
    email: 'Ali@gmail.com',
    name: 'Ali',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

console.log(userTwo)