const addBtn = document.querySelector("button");
const pS = document.querySelectorAll("p");

addBtn.addEventListener("click", (e) => {
    pS.forEach(item => {
        item.remove();
    })
});