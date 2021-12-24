const arr = [2,5,6,32,41,562,53];

console.log("**************for**************");
for (let i=0; i<arr.length; i++){
    console.log(arr[i])
}

console.log("**************for of **************");
for (let value of arr) {
    console.log(value);
}

console.log("**************forEach**************");
arr.forEach((fruit, index) => {
    console.log(index+1 , fruit)
})

console.log("**************map**************");
const newArr = arr.map((fruit) => {
    return fruit;
})

console.log(newArr);

const filteredArray = newArr.filter(q => q>10);
console.log(filteredArray);
