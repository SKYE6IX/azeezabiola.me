<script setup lang="ts">
import SnakeGame from "./snake";

type SnakeGameInstance = InstanceType<typeof SnakeGame>;

const canvas = ref<HTMLCanvasElement | null>();
const snakeGame = ref<SnakeGameInstance>();
const isPlaying = ref(false);
onMounted(() => {
   if (canvas.value != null) {
      snakeGame.value = new SnakeGame(canvas.value);
   }
});
callOnce("call-once", () => snakeGame.value?.resetGame());
watch(isPlaying, (value) => {
   snakeGame.value?.clearBoard();
   if (value) {
      snakeGame.value?.resetGame();
      snakeGame.value?.moveSnake();
   }
});
const handleStartGame = () => {
   isPlaying.value = true;
   snakeGame.value?.startGame();
};
const handleStopGame = () => {
   isPlaying.value = false;
   snakeGame.value?.stopGame();
};
</script>
<template>
   <div class="game-container">
      <canvas
         ref="canvas"
         id="snake-canvas"
         :width="snakeGame?.boardWidth"
         :height="snakeGame?.boardWidth! * 1.6"
      >
      </canvas>
      <button
         @click="handleStartGame"
         class="game__button-start"
         v-show="!isPlaying"
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
               <!-- _scores: <span> {{ scores }}</span> -->
            </p>
         </div>
         <div class="game__speed-set">
            <!-- <input
               type="radio"
               value="10"
               v-model="speed"
               id="x1"
               :disabled="isPlaying"
            /> -->
            <label for="x1">x1</label>
            <!-- <input
               type="radio"
               value="15"
               v-model="speed"
               id="x2"
               :disabled="isPlaying"
            /> -->
            <label for="x2">x2</label>
            <!-- <input
               type="radio"
               value="20"
               v-model="speed"
               id="x3"
               :disabled="isPlaying"
            /> -->
            <label for="x3">x3</label>
         </div>
         <span class="game__set-speed" v-show="!isPlaying">set-game-speed</span>
         <button
            @click="handleStopGame"
            class="game__button-stop"
            v-show="isPlaying"
         >
            stop-game
         </button>
      </div>
   </div>
</template>
<style scoped lang="scss">
@import "./assets/snake-game.scss";
</style>
