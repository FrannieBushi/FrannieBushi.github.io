const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
let snake = [{x: 300, y: 300}];
let direction = {x: 0, y: 0};
let food = {x: 100, y: 100};
const size = 20;
let score = 0;  

function drawSnake() {
    ctx.fillStyle = '#2A2141';
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, size, size);
    });
}


function drawFood() {
    ctx.fillStyle = '#A097BA';
    ctx.fillRect(food.x, food.y, size, size);
}


function update() {
    const head = {x: snake[0].x + direction.x * size, y: snake[0].y + direction.y * size};
    snake.unshift(head);

   
    if (head.x === food.x && head.y === food.y) {
        
        food = {x: Math.floor(Math.random() * canvas.width / size) * size, y: Math.floor(Math.random() * canvas.height / size) * size};
        score += 10; 
        updateScore();  
    } else {
        snake.pop();
    }

    
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height || snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
        alert('¡Juego terminado!');
        snake = [{x: 200, y: 200}];
        direction = {x: 0, y: 0};
        food = {x: 100, y: 100};
        score = 0;  
        updateScore();  
    }
}

window.addEventListener('keydown', event => {
    event.preventDefault();  

    if (event.key === 'ArrowUp' && direction.y === 0) direction = {x: 0, y: -1};
    if (event.key === 'ArrowDown' && direction.y === 0) direction = {x: 0, y: 1};
    if (event.key === 'ArrowLeft' && direction.x === 0) direction = {x: -1, y: 0};
    if (event.key === 'ArrowRight' && direction.x === 0) direction = {x: 1, y: 0};
});


function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = score;
}


function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    drawSnake();
    update();
}

setInterval(gameLoop, 100);