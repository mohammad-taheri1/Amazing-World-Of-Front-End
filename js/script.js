const getBtn = document.querySelector(".get-data");
const postBtn = document.querySelector(".post-data");

function getData(){
    fetch("https://jsonplaceholder.typicode.com/users/5", {method: "GET"})
        .then(response => {
             return response.json();
        })
        .then(data => console.log(data))
}

function postData(){
    const userData = {
        id: 1,
        name: "mamad",
        username: "mamad@mamad.mamad",
        email: "mamad@gmail.com",
    };
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body:JSON.stringify(userData),
        headers: {
                'content-type': 'application/jspn'
            },
    })
        .then(response => {
            return response.json();
        })
        .then(data => console.log(data))
}

getBtn.addEventListener("click",getData);
postBtn.addEventListener("click", postData);
