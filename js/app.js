const titr = document.querySelector(".titr");
let newTitrElement = document.createElement("h3");
newTitrElement.innerText = "ممد";
newTitrElement.className = "text-white bg-danger";
titr.append(newTitrElement);
titr.prepend(newTitrElement);