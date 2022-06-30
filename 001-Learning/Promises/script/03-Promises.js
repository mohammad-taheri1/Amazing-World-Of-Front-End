const examplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("promise is resolved successfully");
        reject(new Error("promise is rejected with errors"));
    }, 3000);
})

examplePromise
    .then(res => console.log(res))
    .catch(error => console.log(error));