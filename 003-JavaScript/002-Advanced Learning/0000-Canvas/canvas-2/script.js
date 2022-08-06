const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(100,100,200,200);
ctx.lineWidth=70;
ctx.strokeStyle='rgb(223,215,60';
ctx.fillStyle='#AD2C05';
ctx.fill();
ctx.stroke();