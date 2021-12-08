const userData = {
    name: "mamad",
    family: "taheri",
    age: 32,
    address: {
        provience: "tehran",
        city: "tehran",
        place: "pardis",
        district: "Phase 8"
    }
}

function showUser(user) {
    for(let key in user) console.log(key, user[key]);
}

showUser(userData);