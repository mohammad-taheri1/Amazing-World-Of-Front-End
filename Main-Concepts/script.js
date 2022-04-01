console.log("*********Beggining************");

console.log("log 1");

setTimeout(() => {
  console.log("setTimeout 3000 ms");
}, 3000);

Promise.resolve("anything").then(() => {
  console.log("Promise 1");
});

setTimeout(() => {
    console.log("setTimeout 2000 ms");
}, 2000);

setTimeout(() => {
    console.log("setTimeout 1000 ms");
}, 1000);

setTimeout(() => {
    console.log("setTimeout 0 ms");
}, 0);

Promise.resolve("anything").then(() => {
  console.log("Promise 2");
});

console.log("log 2");

console.log("*********End************");