console.log("1");

setTimeout(() => {
    console.log("2");
}, 2000);

setTimeout(() => {
    console.log("3");
}, 1000);

setTimeout(() => {
    console.log("4");
}, 0);

console.log("5");