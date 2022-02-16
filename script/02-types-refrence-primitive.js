console.log(typeof null);
console.log(typeof true);
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof {id: 1, name: "mamad"});
console.log(typeof [{id: 1, name: "mamad"},{id: 1, name: "mamad"},{id: 1, name: "mamad"}]);

const x = {name: "ali", age: 50};
const y = {...x};  //spread operator
y.name = "mamad";
console.log(x)
console.log(y)