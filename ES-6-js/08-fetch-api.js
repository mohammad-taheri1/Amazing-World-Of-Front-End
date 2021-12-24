let userPromises = fetch("https://randomuser.me/api/");
console.log(userPromises);
userPromises
.then(response =>  {
    return response.json();
})
.then((resData) => {
    console.log(resData.results[0].name.first);
    console.log(resData.results[0].name.last);
})
 
.catch(error => console.log(error));
