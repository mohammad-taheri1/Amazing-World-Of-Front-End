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

const data = [
    {name: "a", id: 1},
    {name: "b", id: 2},
];

console.log(data.indexOf(data.find(q  => q.id === 2)));

console.log(data.findIndex(q => q.id === 2));
