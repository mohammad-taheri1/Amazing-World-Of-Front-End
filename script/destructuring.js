const userData = {
    name: "mamad",
    family: "taheri",
    age: 32,
    address: {
        city: "Tehran",
        street: "Pardis"
    }
};

const name = userData.name;
const  family= userData["family"];
const { address, address: { city, street } , age } = userData;
console.log(name);
console.log(family);
console.log(age);
console.log(address);
console.log(city);
console.log(street);