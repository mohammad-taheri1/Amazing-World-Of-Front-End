const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(100,300);
ctx.lineTo(300,300);
ctx.lineTo(300,100);
ctx.lineTo(200,50);
ctx.lineTo(100,100);
ctx.lineTo(100,300);
ctx.stroke();

ctx.beginPath();
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(200,200,20,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.rect(100,300,200,20);
ctx.stroke();