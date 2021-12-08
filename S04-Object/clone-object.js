const user = {
    name : "mamad",
    family: "taheri",
    age: 12345
};

// 1 iterate

const user2 = {};

for (key in user) {
    user2[key] = user[key];
}

console.log(user);

user2.age = 26;

console.log(user2);

// 2 assign

const user3 = Object.assign({}, user);

user3.age = 27;

console.log(user3);

// 3 Spread Operator

const user4 = {...user};

user4.age = 5;

console.log(user);
console.log(user4);