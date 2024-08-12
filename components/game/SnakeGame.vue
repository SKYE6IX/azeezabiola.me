<script setup lang="ts">
import SnakeGame from "./snake";
type SnakeGameInstance = InstanceType<typeof SnakeGame>;

const canvas = ref<HTMLCanvasElement | null>();
const snakeGame = ref<SnakeGameInstance>();
const gameSpeed = ref(10);

onMounted(() => {
   if (canvas.value != null) {
      snakeGame.value = new SnakeGame(canvas.value);
   }
});
const handleSetGameSpeed = () => {
   if (snakeGame.value) {
      snakeGame.value.setGameSpeed = gameSpeed.value;
   }
};
</script>
<template>
   <div class="game-container">
      <canvas ref="canvas" id="snake-canvas"> </canvas>
      <button
         @click="snakeGame?.startGame()"
         class="game__button-start"
         v-show="snakeGame?.getIsGameOver()"
      >
         start-game
      </button>
      <div class="game__info">
         <div class="game__info-header">
            <p>
               <span>// use keyboard</span>
               <span>// to play</span>
            </p>
            <div class="game__info-header-icons">
               <KeyUp />
               <KeyLeft />
               <KeyDown />
               <KeyRight />
            </div>
         </div>
         <div class="game__info-scores">
            <p>
               _scores: <span> {{ snakeGame?.getGameScore() }}</span>
            </p>
         </div>
         <div class="game__speed-set">
            <input
               type="radio"
               value="10"
               v-model="gameSpeed"
               id="x1"
               :disabled="!snakeGame?.getIsGameOver()"
               @change="handleSetGameSpeed"
            />
            <label for="x1">x1</label>
            <input
               type="radio"
               value="15"
               v-model="gameSpeed"
               id="x2"
               :disabled="!snakeGame?.getIsGameOver()"
               @change="handleSetGameSpeed"
            />
            <label for="x2">x2</label>
            <input
               type="radio"
               value="20"
               v-model="gameSpeed"
               id="x3"
               :disabled="!snakeGame?.getIsGameOver()"
               @change="handleSetGameSpeed"
            />
            <label for="x3">x3</label>
         </div>
         <span class="game__set-speed" v-show="snakeGame?.getIsGameOver()"
            >set-game-speed</span
         >
         <button
            @click="snakeGame?.stopGame()"
            class="game__button-stop"
            v-show="!snakeGame?.getIsGameOver()"
         >
            stop-game
         </button>
      </div>
   </div>
</template>
<style scoped lang="scss">
@import "./assets/snake-game.scss";
</style>
