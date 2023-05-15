const menu = document.querySelector(".header__navbar__menu");
const opneMenuBtn = document.querySelector(".header__navbar__toggle");
const closeMenuBtn = document.querySelector(".header__navbar__menu__close");

opneMenuBtn.addEventListener("click", () => {
   menu.classList.add("open");
});

closeMenuBtn.addEventListener("click", () => {
   menu.classList.remove("open");
});
