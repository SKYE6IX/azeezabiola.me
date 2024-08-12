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
   protected _boardWidth = this._cellSize * this._boardSize;
   protected _direction: ConstantType | null = null;
   protected _snake: Coordinate[] = [];
   protected _targetCell: Coordinate | null = null;
   protected _isPlaying = false;
   protected _isGameOver = true;
   protected _snakeFoodColor: string = "";
   protected _snakeColor: string | null = null;
   protected _gameSpeed = 10;
   protected _scores: number = 0;

   constructor(canvas: HTMLCanvasElement) {
      this._board = canvas;
      this._boardContext = this._board.getContext("2d");
      this._board.width = this._boardWidth;
      this._board.height = this._boardWidth * 1.6;

      this.resetGame();
      this._getRandomColor();
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
            this._boardWidth,
            this._boardWidth * 1.6
         );
      }
   }
   resetGame() {
      let startCell = Math.floor(this._boardSize / 2);
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
      this._isGameOver = true;
      this._isPlaying = false;
      this._scores = 0;
      this.clearBoard();
      this.resetGame();
   }
   startGame() {
      this.resetGame();
      this._isGameOver = false;
      this._isPlaying = true;
      this.runGame();
   }
   getGameScore() {
      return this._scores;
   }
   getIsGameOver() {
      return this._isGameOver;
   }
   protected _setGameScore() {
      this._scores += 10;
   }
   static amoutCellInSnake(cell: Coordinate, snake: Coordinate[]) {
      return snake.filter(({ x, y }) => x === cell.x && y === cell.y).length;
   }
   set setGameSpeed(value: number) {
      this._gameSpeed = value;
   }
   protected _getGameSpeed() {
      return (2 / this._gameSpeed) * 1000;
   }
   protected _getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      this._snakeFoodColor = `rgb(${r}, ${g}, ${b})`;
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
         this._getRandomColor();
         while (SnakeGame.amoutCellInSnake(newTargetCell, this._snake) > 0) {
            this._targetCell = randomCell();
         }
         this._targetCell = newTargetCell;
      }
      if (this._boardContext != null) {
         this._boardContext.beginPath();
         this._boardContext.fillStyle = this._snakeFoodColor;
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
   protected _isCellOutOfBoard({ x, y }: Coordinate) {
      return (
         x * this._cellSize >= this._board?.width! ||
         x * this._cellSize + 10 <= 0 ||
         y * this._cellSize >= this._board?.height! ||
         y * this._cellSize + 10 <= 0
      );
   }
   protected _drawNewCell({ x, y }: Coordinate) {
      if (this._boardContext != null) {
         this._boardContext.rect(
            x * this._cellSize,
            y * this._cellSize,
            this._cellSize,
            this._cellSize
         );
         this._boardContext.fillStyle = this._snakeColor ?? "#43D9AD";
         this._boardContext.fill();
      }
   }
   runGame() {
      if (!this._isPlaying) {
         return;
      }

      this.clearBoard();
      this._setTargetCell();
      const newSnakeHead = {
         x: this._snake[0].x + this._direction?.move.x!,
         y: this._snake[0].y + this._direction?.move.y!
      };
      if (this._isCellOutOfBoard(newSnakeHead)) {
         this.stopGame();
      }
      if (this._isTargetNewHead() && this._targetCell) {
         this._snake.unshift(this._targetCell);
         this._snakeColor = this._snakeFoodColor;
         this._setGameScore();
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
      setTimeout(this.runGame.bind(this), this._getGameSpeed());
   }
}

export default SnakeGame;
