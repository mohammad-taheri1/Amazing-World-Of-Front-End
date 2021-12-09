// const numbers = [6, 4, 18, 90];

// numbers.push(5, 12);
//
// numbers.unshift(999);
//
// numbers.shift();
//
// numbers.splice(1, 0, 1111,2222);


// console.log(numbers.indexOf(18));
// console.log(numbers.includes(17));

// const data = [
//     {name: "a", id: 1},
//     {name: "b", id: 2},
// ];
//
// console.log(data.slice(1,));

// console.log(data.indexOf(data.find(q  => q.id === 2)));

// console.log(data.findIndex(q => q.id === 2));

// const first = [3, 15, 9, 8, 15, 6];

// const second = [4,5,6];

// const mix = first.concat(second);

// console.log(mix)

// console.log(first.slice(0, 3))

// const mixed = [...first, 653, 6585];
// console.log(mixed);

// const message = "salam mamad taheri";
//  const splitted = message.split(" ");
//  const joinSplitted = splitted.join("-");
// console.log(joinSplitted);

// const newMessage = message.split(" ").join("-");

// const numbers = [-3, 15, 6, -1, 15, 6];

// const checkEvery = numbers.every(q => {
//     console.log(q ,  q>0);
//     return q>0;
// });
//
// console.log(checkEvery)

// const checkSome = numbers.some(q => {
//     console.log(q ,  q>0);
//     return q>0;
// });

// console.log(checkSome);

// numbers.forEach((value, i) => console.log(value , " => ", i) );

// console.log(numbers.filter(q => q>0))

// const users = [
//     { id: 1, name: "mamad", family: "taheri", symbol: "شتران" },
//     { id: 2, name: "ali", family: "alavi", symbol: "شبریز" },
//     { id: 3, name: "javad", family: "javadi", symbol: "وبملت" },
//     { id: 4, name: "sanam", family: "sanami", symbol: "کنور" },
//     { id: 5, name: "maral", family: "marali", symbol: "تملت" },
// ];
//
// const filteredArray = users.filter(item => item.symbol.includes("ت"));
//
// console.log(filteredArray.length + " of " + users.length);
// console.log(filteredArray);

// const asfdkljiosg = users.map(item => {
//     return {
//         ...item,
//         fullName: item.name + " " + item.family
//     }
// });
//
// console.log(asfdkljiosg)

const numbers = [2, 4, 3, 8, 1, 5];

const sum = numbers.reduce((prev, item) => {
    return prev + item
}, 0);
console.log(sum)