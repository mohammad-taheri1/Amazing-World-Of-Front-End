const user = {
    name : "mamad",
    family: "taheri",
    socialNumber: 12345
};

const keys = Object.keys(user);
const values = Object.values(user);
const enteries = Object.entries(user);

// console.log(keys);
// console.log(values);
// console.log(enteries);
// for (key in user) console.log(key, user[key]);

// for (key of Object.keys(user)) console.log(key);

if("name" in user) console.log("yes");
