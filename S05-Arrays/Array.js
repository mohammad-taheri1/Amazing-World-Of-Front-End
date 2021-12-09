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

const numbers = [3, 15, 6, -1, 15, 6];

const checkEvery = numbers.every(q => {
    console.log(q ,  q>0);
    return q>0;
});

console.log(checkEvery)