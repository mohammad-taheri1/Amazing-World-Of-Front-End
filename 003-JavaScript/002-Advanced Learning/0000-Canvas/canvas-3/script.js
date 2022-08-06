const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

const thickness=10;
let x=0, y=0, w=200, h=400;

let i=1;
while(i<=10){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.fillStyle= (i%2 !== 0) ? 'blue' : "white";
    ctx.fill();
    x=x+thickness;
    y=y+thickness;
    w=w-thickness-thickness;
    h=h-thickness-thickness;
    i=i+1;
}

 