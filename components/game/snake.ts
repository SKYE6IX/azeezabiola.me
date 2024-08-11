//
import constants from "./constants";
interface ConstantType {
   direction: string;
   key: string;
   move: {
      x: number;
      y: number;
   };
}
interface Coordinate {
   x: number;
   y: number;
}

class SnakeGame {
   protected _board: HTMLCanvasElement | null = null;
   protected _boardContext: CanvasRenderingContext2D | null = null;
   protected _cellSize = 10;
   protected _boardSize = 25;
   boardWidth = this._cellSize * this._boardSize;
   protected _direction: ConstantType | null = null;
   protected _snake: Coordinate[] = [];
   protected _targetCell: Coordinate | null = null;
   public gameSpeed = 10;
   public isPlaying = false;

   constructor(canvas: HTMLCanvasElement) {
      this._board = canvas;
      this._boardContext = this._board.getContext("2d");
      window.addEventListener("keydown", this._onKeyPress.bind(this));
   }
   protected _onKeyPress(event: Event) {
      const prvDirection = this._direction?.direction;
      const newDirection = constants.find(
         (c) => c.key === (event as KeyboardEvent).key
      );
      if (
         !newDirection ||
         (prvDirection === "right" && newDirection.direction === "left") ||
         (prvDirection === "left" && newDirection.direction === "right") ||
         (prvDirection === "top" && newDirection.direction === "bottom") ||
         (prvDirection === "bottom" && newDirection.direction === "top")
      ) {
         return;
      }
      this._direction = newDirection;
   }
   clearBoard() {
      if (this._boardContext != null) {
         this._boardContext.clearRect(
            0,
            0,
            this.boardWidth,
            this.boardWidth * 1.6
         );
      }
   }
   resetGame() {
      let startCell = Math.round(this._boardSize / 2);
      this._snake = [
         {
            x: startCell,
            y: startCell
         }
      ];
      const randomDirectionIndex = Math.floor(Math.random() * 4);
      this._direction = constants[randomDirectionIndex];
      this._targetCell = null;
   }
   stopGame() {
      this.isPlaying = false;
   }
   startGame() {
      this.isPlaying = true;
   }
   static amoutCellInSnake(cell: Coordinate, snake: Coordinate[]) {
      return snake.filter(({ x, y }) => x === cell.x && y === cell.y).length;
   }
   static isCellOutOfBound({ x, y }: Coordinate, boardWidth: number) {
      return x < 0 || y < 0 || x >= boardWidth || y >= boardWidth * 1.6;
   }
   protected _setTargetCell() {
      const randomCell = () => {
         return {
            x: Math.floor(Math.random() * this._boardSize),
            y: Math.floor(Math.random() * this._boardSize)
         };
      };
      if (!this._targetCell) {
         let newTargetCell = randomCell();
         while (SnakeGame.amoutCellInSnake(newTargetCell, this._snake) > 0) {
            this._targetCell = randomCell();
         }
         this._targetCell = newTargetCell;
      }
      if (this._boardContext != null) {
         this._boardContext.beginPath();
         this._boardContext.fillStyle = "red";
         this._boardContext.rect(
            this._targetCell.x * this._cellSize,
            this._targetCell.y * this._cellSize,
            this._cellSize,
            this._cellSize
         );
         this._boardContext.fill();
         this._boardContext.closePath();
      }
   }
   protected _isTargetNewHead() {
      if (this._targetCell) {
         return (
            this._snake[0].x + this._direction?.move.x! ===
               this._targetCell.x &&
            this._snake[0].y + this._direction?.move.y! === this._targetCell.y
         );
      }
   }
   protected _drawNewCell({ x, y }: Coordinate) {
      if (this._boardContext != null) {
         this._boardContext.rect(
            x * this._cellSize,
            y * this._cellSize,
            this._cellSize,
            this._cellSize
         );
         this._boardContext.fillStyle = "#43D9AD";
         this._boardContext.fill();
      }
   }
   getGameSpeed(newSpeed?: number) {
      if (newSpeed) {
         return (2 / newSpeed) * 1000;
      } else {
         return (2 / this.gameSpeed) * 1000;
      }
   }
   moveSnake() {
      if (!this.isPlaying) {
         return;
      }
      this.clearBoard();
      this._setTargetCell();
      const newSnakeHead = {
         x: this._snake[0].x + this._direction?.move.x!,
         y: this._snake[0].y + this._direction?.move.y!
      };
      if (this._isTargetNewHead() && this._targetCell) {
         this._snake.unshift(this._targetCell);
         this._targetCell = null;
      } else {
         this._snake.unshift(newSnakeHead);
         this._snake.pop();
      }
      if (this._boardContext != null) {
         this._boardContext.beginPath();
         this._snake.forEach(this._drawNewCell.bind(this));
         this._boardContext.closePath();
      }
      setTimeout(() => {
         this.moveSnake();
      }, this.getGameSpeed());
   }
}

export default SnakeGame;
