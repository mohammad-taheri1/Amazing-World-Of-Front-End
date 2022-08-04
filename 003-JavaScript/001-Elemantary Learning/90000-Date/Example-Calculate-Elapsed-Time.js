// #1 Using Date objects
let startTime1 = Date.now();

for (let index = 0; index < 10_000_000; index++) {
  const a = Math.random();
}
let endTime1 = Date.now();
let elapsed1 = endTime1 - startTime1; // elapsed time in milliseconds
console.log(elapsed1);

// #2 Using built-in methods
let startTime2 = new Date();

for (let index = 0; index < 10_000_000; index++) {
  const a = Math.random();
}
let endTime2 = new Date();
let elapsed2 = endTime2.getTime() - startTime2.getTime(); // elapsed time in milliseconds
console.log(elapsed2);
