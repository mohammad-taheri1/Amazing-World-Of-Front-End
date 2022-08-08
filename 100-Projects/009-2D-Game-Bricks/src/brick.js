import { detectCollision } from "./collisionDetection.js";

export default class Brick {
  constructor(game, position) {
    this.image = document.querySelector("#img_brick");

    this.game = game;

    this.position = position;
    this.width = 80;
    this.height = 24;

    this.markedForDeletion = false;
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y *= -1;
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
