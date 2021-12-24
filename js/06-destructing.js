let fullName = {
    firstName: "Mamad",
    lastName: "Taheri"
}

const {firstName, lastName} = fullName;
console.log(firstName);
console.log(lastName);

let user = [
    {
        firstName: "mmm",
        lastName: "ttt"
    },
    (user) => {
        console.log("I set the user: ", user);
    }
]

const [newuser, setuser] = user;
console.log(newuser);
setuser({firstname: "Cool", lastName: "Stuff"});
