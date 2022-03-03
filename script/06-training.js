const btns = document.querySelectorAll(".btn");

// btns.forEach(btn => {
//     btn.addEventListener("click", function() {
//         this.classList.add("blue");
//         const mamad = this;
//         setTimeout(function() {
//             console.log(this)
//             console.log(mamad)
//             // this.classList.remove("blue");
//             // this.classList.add("red");
//         }, 2000);
//     })
// })

console.log(btns)

btns.forEach(btn => {
    btn.addEventListener("click", function() {
        this.classList.add("blue");
        setTimeout(() =>  {
            console.log(this)
            this.classList.remove("blue");
            this.classList.add("red");
        }, 2000);
    })
})