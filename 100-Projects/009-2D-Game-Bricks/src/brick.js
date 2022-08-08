export default class Brick {
  constructor(game, position) {
    this.image = document.querySelector("#img_brick");

    this.game = game;

    this.position = position;
    this.width = 80;
    this.height = 24;
  }

  update() {}

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
