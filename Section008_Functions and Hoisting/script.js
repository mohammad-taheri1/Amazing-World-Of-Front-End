
// function mSum() {
//     var num1 = 10;
//     var num2 = 20;
//     var sum = num1 + num2
//     console.log(sum)
// }

// mSum()

// function mSum() {
//     var num1 = 10;
//     var num2 = 20;
//     var sum = num1 + num2

//     return sum
// }

// console.log(mSum())

// function greetings(personName) {
//     console.log('Welcome ' + personName)
// }

// greetings('Mamad')
// greetings('Zahra')

// function totalSum(num1 = 10, num2 = 20, num3 = 40) {
//     console.log('num1 => ' + num1)
//     console.log('num2 => ' + num2)
//     console.log('num3 => ' + num3)
//     console.log(num1 + num2)
// }

// totalSum(2)
// totalSum(2, 5)
// totalSum()


// var num1 = 10

// function sum(num2) {
//     var total = num1 + num2
//     console.log(num1 + num2)
// }

// sum(20)

// Variables Hoisting 

// console.log(num1)
// num1 = 10
// console.log(num1)
// var num1

// console.log(car1)
// car1 = "Demo String"
// console.log(car1)
// var car1

// Functions Hoisting 

// sum(5, 10)
// sum(30, 22)

var total = 10
function sum(num1, num2) {
    console.log(total)
    var total = num1 + num2
    console.log(total)
}

sum(90, 8)