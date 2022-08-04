document.addEventListener("mousedown", function () {
  document.addEventListener("mousemove", handleChange);
});
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleChange);
});

function handleChange(e) {
  let body = document.querySelector("body");
  let particles = document.createElement("span");
  let x = e.offsetX;
  let y = e.offsetY;
  particles.style.left = x + "px";
  particles.style.top = y + "px";

  let size = Math.random() * 8;
  particles.style.width = 5 + size + "px";
  particles.style.height = 5 + size + "px";

  let transFormValue = Math.random() * 360;
  particles.style.transform = `rotate(${transFormValue}deg)`;

  body.appendChild(particles);

  setTimeout(function () {
    particles.remove();
  }, 3000);
}
