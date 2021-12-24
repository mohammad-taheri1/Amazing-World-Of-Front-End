let mamadPromise = new  Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            firstName: "mamad",
            lastName: "Taheri"
        });
        // reject("Something went wrong");
    }, 2000)
});

console.log("start")
mamadPromise.then(response => {
    console.log(response);
}).catch(error => console.log(error));