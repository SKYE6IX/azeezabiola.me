<script setup lang="ts">
function wrapWords(text: string) {
   const words = text.split("");
   const wrappedWords = words.map(
      (word) => `<span class="title-letter">${word}</span>`
   );
   return wrappedWords.join("");
}
</script>

<template>
   <h5 class="site-title" v-html="wrapWords('azeez-abiola')"></h5>
</template>

<style lang="scss">
@import "./assets/site-title.scss";
</style>
