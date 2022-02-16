// function sum(a, b){
//     return (a + b);
// }

// const sum = function(a, b){
//     return (a + b);
// }

// const sum = (a, b) => {
//     return (a + b);
// }

// const sum = (a, b) => a + b;

// console.log(sum(10, 12));

// const  sum = function(){
//     console.log("arguments.length: ", arguments.length)
//     console.log(arguments[0])
//     console.log(arguments[1])
//     console.log(arguments[2])
//     console.log(arguments[3])
// }

const  sum = (...rest) => {
    console.log("rest: ", rest)
    console.log(rest[0])
    console.log(rest[1])
    console.log(rest[2])
    console.log(rest[3])
}

console.log(sum(10, 12, 20, 5));
