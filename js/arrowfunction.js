function getfullName(){
    let firstName = "Mamad";
    let lastName = "taheri";
    return `${firstName} ${lastName} -> regular function`;
}

const getfullName2 = () => {
    let firstName = "Mamad";
    let lastName = "taheri";
    return `${firstName} ${lastName} -> arrow function`;
}

console.log(getfullName());
console.log(getfullName2());

let firstName = "Mamad";
let lastName = "taheri";

const shorterGetFullName = (firstName, lastName) => console.log(`${firstName} ${lastName} -> shorter arrow function`);

shorterGetFullName(firstName, lastName);