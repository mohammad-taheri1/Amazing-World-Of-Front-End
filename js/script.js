const pS = document.querySelectorAll("p");

pS.forEach((item, index) => {
    if (item.textContent.includes("3")) item.remove();
});

const p = document
.createElement("p");
p.textContent = "Mohammad new P";
document.querySelector("body").append(p);