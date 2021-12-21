// var _name = "mamad";

// console.log(_name);

// var user_age = prompt("What is your age? ");

// document.getElementById("body").innerHTML = user_age;

// // **********************************************

// var num1 = 5;
// num1++;
// num1--;
// console.log(num1);

// **********************************************

// Create Function
// function testFunction(){
//     console.log("salam mamad");
// }

// Invoke (Call) Function
// testFunction();

// function greeting(){
//     var _name = prompt('What is your name ?');
//     var result = 'Hello ' + _name;
//     console.log(result);
// }

// greeting();

// function sumNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// sumNumbers(4, 13);

// working with loops

// var num = 0;

// while(num < 5) {
//     num += 1;
//     console.log(num)
// }

// console.log("**********************************");

// for (let num = 0; num < 5;  num++) {
//     console.log(num)
// }

// Data types 

// let yourAge = 18;
// let yourNamee = 'Bob';
// let name = {
//     first: "Mamad",
//     last : "Taheri"
// };
// let truth = false;
// let groceries = ['apple', 'banana', 'oranges'];
// let radom;
// let nothing = null;

// Strings

// let fruit = 'banana,apple,orange';
// let moreFruits = 'banana\napple';
// console.log(moreFruits);

// console.log(fruit.length);
// console.log(fruit.indexOf('nan'));
// console.log(fruit.slice(1, 2));
// console.log(fruit.replace('ban', 'mamad'));
// console.log(fruit.toUpperCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(","));

// let fruits = ['banana', 'apple', 'orange', 'pinepple'];
// fruits.forEach(item => {
//     console.log(item)
// })
// let fruits2 = new Array('banana', 'apple', 'orange', 'pinepple');
// console.log(fruits)
// console.log(fruits2)
// console.log(fruits[2]);

// console.log(fruits.join(' && '))
// console.log("------------")
// fruits.pop();
// fruits.unshift("mamad");
// console.log(fruits.join(' && '))
// let vegetables = ['asp', 'tomato', 'potao'];
// let allArray = fruits.concat(vegetables)
// console.log(allArray);
// console.log(allArray.slice(1,4));
// console.log(allArray.reverse());

// let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 37, 53];
// console.log(someNumbers.sort(function(a, b){
//     return a - b
// }))
// console.log(someNumbers.sort(function(a, b){
//     return b - a
// }))

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray)