// Important! Try this example on both browser and Node.js
// Month is starting from 0
// 0 : Jan
// 1: Feb

// const birthday1 = new Date('1995-12-17T03:24:00')   // This is ISO8601-compliant and will work reliably
// console.log(birthday1)

// const birthday2 = new Date(628021800000)            // passing epoch timestamp
// console.log(birthday2)

const time1 = new Date();
console.log(time1);
console.log(time1.toString());
console.log(time1.toDateString());
console.log(time1.toTimeString());
console.log(time1.toISOString());

// const time2 = new Date("Aug 05 2022");
// console.log(time2);

// const time3 = new Date(2022, 7, 5, 10, 0, 0);
// console.log(time3);

// const time4 = new Date(2022, 7, 5);
// console.log(time4);

// const time5 = new Date(2022, 7);
// console.log(time5);

// const time6 = new Date(2022);
// console.log(time6);
