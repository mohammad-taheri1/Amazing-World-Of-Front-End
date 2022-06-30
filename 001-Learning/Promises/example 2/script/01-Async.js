console.log("1");                                                               // -> 1

setTimeout(() => {                                                             // -> Queue
    console.log("2");
}, 3000);

setTimeout(() => {                                                             // -> Queue
    console.log("3");
}, 2000);

setTimeout(() => {                                                            // -> Queue
    console.log("4");
}, 1000);

setTimeout(() => {                                                            // -> Queue
    console.log("5");
}, 0);
 
Promise.resolve("salam from dubai").then(res => console.log(res));           // -> Queue

console.log("6");                                                                // -> 2