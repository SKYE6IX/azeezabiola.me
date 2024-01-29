<script setup lang="ts">
const { $anime } = useNuxtApp();
import type { ProjectData } from "./Project.vue";

type Props = Omit<ProjectData, "tags" | "id">;

defineProps<Props>();

onMounted(() => {
   $anime({
      targets: ".card",
      opacity: [0, 1],
      translateY: [200, 0],
      duration: 1000,
      easing: "easeOutElastic",
      delay: (el, i) => i * 100
   });
});
</script>
<template>
   <div class="card">
      <h3 class="card__title">// {{ title }}</h3>
      <div class="card__inner-wrapper">
         <div
            class="card__image-wrapper"
            :style="{
               backgroundImage: 'url(' + image + ')'
            }"
         ></div>
         <div class="card__inner-content">
            <p class="card__description">
               {{ description }}
            </p>
            <div class="card__buttons">
               <NuxtLink
                  :to="links.live_link"
                  target="_blank"
                  v-show="links.live_link"
                  >view-live</NuxtLink
               >
               <NuxtLink
                  :to="links.git_hub_link"
                  target="_blank"
                  v-show="links.git_hub_link"
                  >view-code</NuxtLink
               >
            </div>
         </div>
      </div>
   </div>
</template>
<style scoped lang="scss">
@import "./assets/card.scss";
</style>
