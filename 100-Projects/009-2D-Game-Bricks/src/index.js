import Game from "./game.js";


let canvas = document.querySelector("#gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;


function gemeLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  
  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gemeLoop);
}

requestAnimationFrame(gemeLoop);