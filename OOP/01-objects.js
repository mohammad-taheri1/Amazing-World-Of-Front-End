let user = {
    firstName: "mamad",
    lastName: "taheri",
    setPassword: (user, password) => {
        user.password = password;
    },
    "user hobbies": [
        "soccer",
        "volleyball"
    ],
    getFullName: (user) => {
        return `${user.firstName} ${user.lastName}`;
    }
}

console.log(user.getFullName(user));
console.log(user.firstName);
console.log(user["lastName"])
console.log(user["user hobbies"])

if("user hobbies" in user) {
    console.log("user hobbies exists");
} else {
    console.log("randomAttr not exist")
}

console.log("**************************************");

for (let prop in user) {
    console.log(user[prop])
}