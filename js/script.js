let num1 = 5;
let num2 = num1;

num2 = 45;

console.log(num1);
console.log(num2);

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(43);

console.log(arr1);
console.log(arr2);

let arr3 = [1, 2, 3];
let arr4 = [...arr3];

arr4.push(43);

console.log(arr3);
console.log(arr4);

