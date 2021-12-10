const btnS = document.querySelectorAll(".btn");
const counter = document.querySelector("#counter");

let count = 0;

// incBtn.addEventListener("click",()=>{
//     count++;
//     counter.textContent = count;
// });
//
// decBtn.addEventListener("click",()=>{
//     count--;
//     counter.textContent = count;
// });
//
// resetBtn.addEventListener("click",()=>{
//     count = 0;
//     counter.textContent = count;
// });

btnS.forEach(btn => {
    btn.addEventListener("click", ()=> {
        const classes = btn.classList;
        if(classes.contains("inc")) count++;
        else if(classes.contains("dec")) count--;
        else count = 0;
        counter.textContent = count;
        if(count > 0) counter.style.color = "blue";
        else counter.style.color = "red";
    })
})