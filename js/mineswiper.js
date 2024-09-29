const board = document.getElementById('board');
const width = 9;
const height = 13;
const totalCells = width * height;
const mines = 20;
let mineLocations = [];
let revealedCells = 0;
let flaggedCells = 0;

function createBoard() {
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        board.appendChild(cell);
    }
    placeMines();
}

function placeMines() {
    for (let i = 0; i < mines; i++) {
        let randomCell;
        do {
            randomCell = Math.floor(Math.random() * totalCells);
        } while (mineLocations.includes(randomCell));
        mineLocations.push(randomCell);
    }
}

function revealCell(cell) {
    const index = parseInt(cell.dataset.index);
    if (cell.classList.contains('revealed') || cell.classList.contains('flagged')) {
        return;
    }
    if (mineLocations.includes(index)) {
        gameOver();
    } else {
        cell.classList.add('revealed');
        revealedCells++;
        if (revealedCells === totalCells - mines) {
            gameWon();
        } else {
            const adjacentMines = countAdjacentMines(index);
            if (adjacentMines === 0) {
                const x = index % width;
                const y = Math.floor(index / width);
                for (let yOffset = -1; yOffset <= 1; yOffset++) {
                    for (let xOffset = -1; xOffset <= 1; xOffset++) {
                        const neighborX = x + xOffset;
                        const neighborY = y + yOffset;
                        if (neighborX >= 0 && neighborX < width && neighborY >= 0 && neighborY < height) {
                            const neighborIndex = neighborY * width + neighborX;
                            const neighborCell = document.querySelector(`.cell[data-index="${neighborIndex}"]`);
                            revealCell(neighborCell);
                        }
                    }
                }
            } else {
                cell.textContent = adjacentMines;
            }
        }
    }
}

function countAdjacentMines(index) {
    const x = index % width;
    const y = Math.floor(index / width);
    let count = 0;
    for (let yOffset = -1; yOffset <= 1; yOffset++) {
        for (let xOffset = -1; xOffset <= 1; xOffset++) {
            const neighborX = x + xOffset;
            const neighborY = y + yOffset;
            if (neighborX >= 0 && neighborX < width && neighborY >= 0 && neighborY < height) {
                const neighborIndex = neighborY * width + neighborX;
                if (mineLocations.includes(neighborIndex)) {
                    count++;
                }
            }
        }
    }
    return count;
}

function gameOver() {
    alert('Игра окончена. Вы проиграли.');
    resetGame();
}

function gameWon() {
    alert('Поздравляем! Вы выиграли!');
    resetGame();
}

function resetGame() {
    board.innerHTML = '';
    mineLocations = [];
    revealedCells = 0;
    flaggedCells = 0;
    createBoard();
}

function handleCellClick(event) {
    const cell = event.target;
    revealCell(cell);
}

function handleCellRightClick(event) {
    event.preventDefault();
    const cell = event.target;
    if (!cell.classList.contains('revealed')) {
        cell.classList.toggle('flagged');
        if (cell.classList.contains('flagged')) {
            flaggedCells++;
        } else {
            flaggedCells--;
        }
    }
}

createBoard();
board.addEventListener('click', handleCellClick);
board.addEventListener('contextmenu', handleCellRightClick);