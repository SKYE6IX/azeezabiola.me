// // ALL ACTION INCLUDED IN THE GAME
// import constants from "./constants";
// let snake: { x: number; y: number }[];
// let direction: {
//    direction: string;
//    key: string;
//    move: {
//       x: number;
//       y: number;
//    };
// };
// let targetCell: { x: number; y: number } | null;
// const cellSize = 10;
// const boardSize = 20;
// export const boardSizePx = cellSize * boardSize;
// const speed = 5;

// export function onKeyPress(event: Event) {
//    const newDirection = constants.find(
//       (c) => c.key === (event as KeyboardEvent).key
//    );
//    if (!newDirection) {
//       return;
//    }
//    direction = newDirection;
// }

// function getMiddleCell() {
//    return Math.round(20 / 2);
// }
// export function resetSnake() {
//    snake = [
//       {
//          x: getMiddleCell(),
//          y: getMiddleCell()
//       }
//    ];
//    const randomDirectionIndex = Math.floor(Math.random() * 4);
//    direction = constants[randomDirectionIndex];
//    targetCell = null;
// }

// export function clear() {
//    boardContext.clearRect(0, 0, boardSizePx, boardSizePx);
// }
// function getRandomCell() {
//    return {
//       x: Math.floor(Math.random() * boardSize),
//       y: Math.floor(Math.random() * boardSize)
//    };
// }
// function amountCellsInSnake(cell: { x: number; y: number }) {
//    return snake.filter(({ x, y }) => x === cell.x && y === cell.y).length;
// }

// function setTargetCell() {
//    if (!targetCell) {
//       let newTargetCell = getRandomCell();
//       while (amountCellsInSnake(newTargetCell) > 0) {
//          targetCell = getRandomCell();
//       }
//       targetCell = newTargetCell;
//    }

//    if (targetCell != null) {
//       boardContext.beginPath();
//       boardContext.rect(
//          targetCell.x * cellSize,
//          targetCell.y * cellSize,
//          cellSize,
//          cellSize
//       );
//    }
//    boardContext.fillStyle = "red";
//    boardContext.fill();
//    boardContext.closePath();
// }
// function iScellOutOfBound({ x, y }: { x: number; y: number }) {
//    return x < 0 || y < 0 || x >= boardSize || y >= boardSize;
// }

// function isTargetNewHead() {
//    if (targetCell) {
//       return (
//          snake[0].x + direction.move.x === targetCell.x &&
//          snake[0].y + direction.move.y === targetCell.y
//       );
//    }
// }

// function drawCell({ x, y }: { x: number; y: number }) {
//    boardContext.rect(x * cellSize, y * cellSize, cellSize, cellSize);
//    boardContext.fillStyle = "black";
//    boardContext.fill();
// }

// function getMoveDelay() {
//    return (2 / Number(speed)) * 1000;
// }

// export function move(isPlaying: boolean, stopGame: () => void) {
//    if (!isPlaying) {
//       return;
//    }
//    clear();
//    setTargetCell();

//    const newHeadCell = {
//       x: snake[0].x + direction.move.x,
//       y: snake[0].y + direction.move.y
//    };
//    if (iScellOutOfBound(newHeadCell) || amountCellsInSnake(snake[0]) > 1) {
//       stopGame();
//       alert("Game over");
//    }
//    if (isTargetNewHead() && targetCell) {
//       snake.unshift(targetCell);
//       targetCell = null;
//       // addScores(speed.value);
//    } else {
//       snake.unshift(newHeadCell);
//       snake.pop();
//    }

//    boardContext.beginPath();
//    snake.forEach(drawCell);
//    boardContext.closePath();
//    setTimeout(move, getMoveDelay());
// }
