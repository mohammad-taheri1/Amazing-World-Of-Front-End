// const randomData = "015 354 8787 687351 3512 8735";

// const regexpFourDigit = /\b\d{4}\b/;
// const regexpFourDigits = /\b\d{4}\b/g;
// console.log(randomData.match(regexpFourDigit));
// console.log(randomData.match(regexpFourDigits));

const re = /\w+\s/g;
const str = 'fee fi fo fum';
const myArray = str.match(re);
console.log(myArray);