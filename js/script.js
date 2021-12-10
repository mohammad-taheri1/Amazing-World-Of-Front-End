const showbtn = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
const closebtn = document.querySelector(".close-modal");

showbtn.addEventListener("click",()=>{
    modal.style.opacity = "1";
    modal.style.transform = "translateY(20vh)"
    backDrop.style.display = "block";
})

closebtn.addEventListener("click",()=>{
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)"
    backDrop.style.display = "none";
})

