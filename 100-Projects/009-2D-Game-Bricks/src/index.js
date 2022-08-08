import Paddle from "./paddle.js";
import InputHandler from './input.js'

let canvas = document.querySelector("#gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

paddle.draw(ctx);

let lastTime = 0;

function gemeLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  requestAnimationFrame(gemeLoop);
}

gemeLoop();