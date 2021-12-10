document.title = "mamad";
const mamad = document.querySelector("#mamad");

// console.log(mamad);

mamad.remove();
const pS = document.querySelectorAll("p");

pS.forEach((item, index) => {
    console.log(item);
    if (index %2 === 1) item.remove();
})