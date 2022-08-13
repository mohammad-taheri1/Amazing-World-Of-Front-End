let inputDirection = { x: 0, y: 0 };
const foodSound = new Audio("assets/food.mp3");
const gameOverSound = new Audio("assets/gameover.mp3");
const moveSpeed = new Audio("assets/move.mp3");
const musicSound = new Audio("assets/music.mp3");
let speed = 15;
let score = 0;
let lastPaintTime = 0;
let snakeArray = [{ x: 13, y: 15 }];
let food = { x: 6, y: 7 };
console.log()

function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  } else {
    lastPaintTime = ctime;
  }
  gameEngine();
}

function isCollide(snake) {
  // hit body of snake
  for (let i = 1; i < snakeArray.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }
  // hit wall
  if (
    snake[0].x >= 18 ||
    snake[0].x <= 0 ||
    snake[0].y >= 18 ||
    snake[0].y <= 0
  ) {
    return true;
  }
}

function gameEngine() {
  // Update snake aaray
  if (isCollide(snakeArray)) {
    gameOverSound.play();
    musicSound.pause();
    inputDirection = { x: 0, y: 0 };
    alert("Game Over. Press any key to playy again!");
    snakeArray = [{ x: 13, y: 15 }];
    musicSound.play();
    score = 0;
  }

  // If eat food, increment score and regenerate foor
  if (snakeArray[0].y === food.y && snakeArray[0].x === food.x) {
    foodSound.play();
    score += 1;
    if (score > highScoreVal) {
      highScoreVal = score;
      localStorage.setItem("highscore", JSON.stringify(highScoreVal));
      highScoreBox.innerHTML = `High Score: ${highScoreVal}`;
    }
    scoreBox.innerHTML = `Score: ${score}`;
    snakeArray.unshift({
      x: snakeArray[0].x + inputDirection.x,
      y: snakeArray[0].y + inputDirection.y,
    });
    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  //   Move the snake
  for (let i = snakeArray.length - 2; i >= 0; i--) {
    snakeArray[i + 1] = { ...snakeArray[i] };
  }
  snakeArray[0].x += inputDirection.x;
  snakeArray[0].y += inputDirection.y;

  // Display snake
  board.innerHTML = "";
  snakeArray.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);
  });
  // Display food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

musicSound.play(); 
let highscore = localStorage.getItem("highscore");
if (highscore === null) {
  highScoreVal = 0;
  localStorage.setItem("highscore", JSON.stringify(highScoreVal));
} else {
  highScoreVal = JSON.parse(highscore);
  highScoreBox.innerHTML = `High Score: ${highscore}`;
}

window.requestAnimationFrame(main);

window.addEventListener("keydown", (e) => {
  inputDirection = { x: 0, y: 1 };
  moveSpeed.play();
  switch (e.key) {
    case "ArrowUp":
      inputDirection.x = 0;
      inputDirection.y = -1;
      break;
    case "ArrowDown":
      inputDirection.x = 0;
      inputDirection.y = 1;
      break;
    case "ArrowLeft":
      inputDirection.x = -1;
      inputDirection.y = 0;
      break;
    case "ArrowRight":
      inputDirection.x = 1;
      inputDirection.y = 0;
      break;
  }
  console.log(inputDirection);
});
