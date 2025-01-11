const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
let snake = [{x: 300, y: 300}];
let direction = {x: 1, y: 0};  // Dirección inicial hacia la derecha
let food = {x: 100, y: 100};
const size = 20;
let score = 0;
let gameInterval;

// Dibujar la serpiente
function drawSnake() {
    ctx.fillStyle = '#2A2141';
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, size, size);
    });
}

// Dibujar la comida
function drawFood() {
    ctx.fillStyle = '#A097BA';
    ctx.fillRect(food.x, food.y, size, size);
}

// Actualizar el estado del juego
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
        resetGame();
    }
}

// Actualizar la puntuación
function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = score;
}

// Controlar las teclas de dirección
window.addEventListener('keydown', event => {
    event.preventDefault();
    if (event.key === 'ArrowUp' && direction.y === 0) direction = {x: 0, y: -1};
    if (event.key === 'ArrowDown' && direction.y === 0) direction = {x: 0, y: 1};
    if (event.key === 'ArrowLeft' && direction.x === 0) direction = {x: -1, y: 0};
    if (event.key === 'ArrowRight' && direction.x === 0) direction = {x: 1, y: 0};
});

// Reiniciar el juego
function resetGame() {
    clearInterval(gameInterval);
    snake = [{x: 200, y: 200}];
    direction = {x: 1, y: 0};  // Dirección inicial hacia la derecha
    food = {x: 100, y: 100};
    score = 0;
    updateScore();
    document.getElementById('start-button').disabled = false; // Habilitar el botón de inicio nuevamente
}

// Función principal de actualización del juego
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    drawSnake();
    update();
}

// Iniciar el juego cuando se hace clic en el botón
document.getElementById('start-button').addEventListener('click', () => {
    resetGame(); // Reiniciar el juego
    gameInterval = setInterval(gameLoop, 100); // Iniciar la función de actualización del juego
    document.getElementById('start-button').disabled = true; // Desactivar el botón de inicio
});