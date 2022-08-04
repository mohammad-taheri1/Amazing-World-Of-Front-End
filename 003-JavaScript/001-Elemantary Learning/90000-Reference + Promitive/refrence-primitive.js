let number = 444;

let number2 = number;

number2 = 555;

console.log(number)
console.log(number2)

const arr1 = [1,2,3,4,5];
const arr2 = arr1;

arr2.push(434342);

console.log(arr1);
console.log(arr2);

let obj1 = {name: "mamad"};
let obj2 = {name: "mamad"};

console.log(obj1 == obj2);
console.log(obj1 === obj2);

const fun1 = () => {
    console.log("aaa");
}

const fun2 = () => {
    console.log("aaa");
}

console.log(fun1 == fun2);
console.log(fun1 === fun2);