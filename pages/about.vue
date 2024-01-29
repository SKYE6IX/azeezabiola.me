<script setup lang="ts">
onMounted(() => {
   if (!process.server) {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      document.body.appendChild(script);
   }
});
</script>
<template>
   <div class="about-page">
      <About />
   </div>
</template>

<style scoped>
.about-page {
   height: 100%;
   overflow: hidden;
}
</style>
