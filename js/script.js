const incBtn = document.querySelector("#inc");
const decBtn = document.querySelector("#dec");
const resetBtn = document.querySelector("#reset");
const counter = document.querySelector("#counter");

let count = 0;

incBtn.addEventListener("click",()=>{
    count++;
    counter.textContent = count;
});

decBtn.addEventListener("click",()=>{
    count--;
    counter.textContent = count;
});

resetBtn.addEventListener("click",()=>{
    count = 0;
    counter.textContent = count;
});
