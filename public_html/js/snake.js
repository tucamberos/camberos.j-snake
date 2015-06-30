var snake;
var snakeLength;
var snakeSize;

var context;
var screenWidth;
var screenHeight;

gameInitialize();
snakeInitialize();
gameLoop();


function gameInitialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    
  
}
function gameLoop() {
    gameDraw();
    snakeUpdate();
    snakeDraw();
    
}

function gameDraw() {
    context.fillStyle = "rgb(162, 237, 245)";
    context.fillRect(0, 0, screenWidth, screenHeight);
    
      
}

function snakeInitialize() {
    snake = [];
    snakeLength = 10;
    snakeSize = 10;
    
    for(var index = snakeLength -1; index > 0; index--) {
        snake.push({
            x: index,
            y: 0
        });
    }
}
function snakeDraw() {
    for(var index = 0; index < snake.length; index++) {
        context.fillStyle = "white";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
        
    }
}
function snakeUpdate() {
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;
    snakeHeadX++;
    
    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
    
}
