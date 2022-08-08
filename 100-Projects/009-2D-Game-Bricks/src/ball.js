import { detectCollision } from "./collisionDetection.js";

export default class Ball {
  constructor(game) {
    this.image = document.querySelector("#img_ball");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.size = 16;
    this.reset();
  }

  reset() {
    this.position = { x: 10, y: 280 };
    this.speed = { x: 1, y: 1 };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // wall on the left or right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x *= -1;
    }

    // wall on the top
    if (this.position.y < 0) {
      this.speed.y *= -1;
    }

    // wall on the bottom
    if (this.position.y + this.size > this.gameHeight) {
      this.game.lives--;
      this.reset();
    }

    if (detectCollision(this, this.game.paddle)) {
      this.speed.y *= -1;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
