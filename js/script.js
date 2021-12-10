const pS = document.querySelectorAll("p");

pS.forEach((item, index) => {
    if (item.textContent.includes("3")) item.remove();
});