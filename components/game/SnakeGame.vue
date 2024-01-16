<script setup lang="ts">
import constants from "./constants";
// VARIBALES
let snake: { x: number; y: number }[];
let direction: {
   direction: string;
   key: string;
   move: {
      x: number;
      y: number;
   };
};
let targetCell: { x: number; y: number } | null;
const cellSize = 10;
const boardSize = 25;
const boardSizePx = cellSize * boardSize;

const board = ref<HTMLCanvasElement | null>();
let boardContext: CanvasRenderingContext2D;
const scores = useState("score", () => 0);
const isPlaying = useState("is-palying", () => false);
const speed = useState("speed", () => 10);
onMounted(() => {
   if (board.value != null) {
      boardContext = board.value.getContext("2d")!;
   }
   window.addEventListener("keydown", onKeyPress);
});
onUnmounted(() => {
   window.removeEventListener("keydown", onKeyPress);
});
callOnce("call-once", () => resetSnake());
watch(isPlaying, (value) => {
   clear();
   if (value) {
      resetSnake();
      move();
   }
});
const startGame = () => {
   isPlaying.value = true;
};
const stopGame = () => {
   isPlaying.value = false;
};
// const addScores = (score: number) => {
//    scores.value += score;
// };

// GAME ACTIONS
function onKeyPress(event: Event) {
   const newDirection = constants.find(
      (c) => c.key === (event as KeyboardEvent).key
   );
   if (!newDirection) {
      return;
   }
   direction = newDirection;
}
function getMiddleCell() {
   return Math.round(boardSize / 2);
}
function resetSnake() {
   snake = [
      {
         x: getMiddleCell(),
         y: getMiddleCell()
      }
   ];
   const randomDirectionIndex = Math.floor(Math.random() * 4);
   direction = constants[randomDirectionIndex];
   targetCell = null;
}
function clear() {
   boardContext.clearRect(0, 0, boardSizePx, boardSizePx * 1.6);
}
function getRandomCell() {
   return {
      x: Math.floor(Math.random() * boardSize),
      y: Math.floor(Math.random() * boardSize)
   };
}
function amountCellsInSnake(cell: { x: number; y: number }) {
   return snake.filter(({ x, y }) => x === cell.x && y === cell.y).length;
}
function setTargetCell() {
   if (!targetCell) {
      let newTargetCell = getRandomCell();
      while (amountCellsInSnake(newTargetCell) > 0) {
         targetCell = getRandomCell();
      }
      targetCell = newTargetCell;
   }
   if (targetCell != null) {
      boardContext.beginPath();
      boardContext.rect(
         targetCell.x * cellSize,
         targetCell.y * cellSize,
         cellSize,
         cellSize
      );
   }
   boardContext.fillStyle = "red";
   boardContext.fill();
   boardContext.closePath();
}
function iScellOutOfBound({ x, y }: { x: number; y: number }) {
   return x < 0 || y < 0 || x >= boardSize || y >= boardSize * 1.6;
}
function isTargetNewHead() {
   if (targetCell) {
      return (
         snake[0].x + direction.move.x === targetCell.x &&
         snake[0].y + direction.move.y === targetCell.y
      );
   }
}
function drawCell({ x, y }: { x: number; y: number }) {
   boardContext.rect(x * cellSize, y * cellSize, cellSize, cellSize);
   boardContext.fillStyle = "#43D9AD";
   boardContext.fill();
}
function getMoveDelay() {
   return (2 / Number(speed.value)) * 1000;
}
function move() {
   if (!isPlaying.value) {
      return;
   }
   clear();
   setTargetCell();

   const newHeadCell = {
      x: snake[0].x + direction.move.x,
      y: snake[0].y + direction.move.y
   };
   if (iScellOutOfBound(newHeadCell) || amountCellsInSnake(snake[0]) > 1) {
      stopGame();
      alert("Game over");
   }
   if (isTargetNewHead() && targetCell) {
      snake.unshift(targetCell);
      targetCell = null;
   } else {
      snake.unshift(newHeadCell);
      snake.pop();
   }
   boardContext.beginPath();
   snake.forEach(drawCell);
   boardContext.closePath();

   setTimeout(move, getMoveDelay());
}
</script>

<template>
   <div class="game-container">
      <canvas
         ref="board"
         id="snake-canvas"
         :width="boardSizePx"
         :height="boardSizePx * 1.6"
      >
      </canvas>
      <button @click="startGame" class="game__button-start" v-show="!isPlaying">
         start-game
      </button>
      <div class="game__info">
         <div class="game__info-header">
            <p>
               <span>// use keyboard</span>
               <span>// to play</span>
            </p>
         </div>
         <div class="game__info-scores">
            <p>_scores: <span>50</span></p>
         </div>
         <div class="game__speed-set">
            <input
               type="radio"
               value="10"
               v-model="speed"
               id="x1"
               :disabled="isPlaying"
            />
            <label for="x1">x1</label>
            <input
               type="radio"
               value="15"
               v-model="speed"
               id="x2"
               :disabled="isPlaying"
            />
            <label for="x2">x2</label>
            <input
               type="radio"
               value="20"
               v-model="speed"
               id="x3"
               :disabled="isPlaying"
            />
            <label for="x3">x3</label>
         </div>
         <button @click="stopGame" class="game__button-stop">stop-game</button>
      </div>
   </div>
</template>
<style scoped lang="scss">
@import "./assets/snake-game.scss";
</style>
