var _name = "mamad";

console.log(_name);

var user_age = prompt("What is your age? ");

document.getElementById("body").innerHTML = user_age;

// **********************************************

var num1 = 5;
num1++;
num1--;
console.log(num1);

// **********************************************

// Create Function
function testFunction(){
    console.log("salam mamad");
}

// Invoke (Call) Function
testFunction();

function greeting(){
    var _name = prompt('What is your name ?');
    var result = 'Hello ' + _name;
    console.log(result);
}

greeting();

function sumNumbers(num1, num2){
    console.log(num1 + num2);
}

sumNumbers(4, 13);