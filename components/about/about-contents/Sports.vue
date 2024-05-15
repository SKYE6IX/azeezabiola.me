<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const footballContent = [
   {
      name: "football1",
      scr: "/sport-media/football1.jpg"
   },
   { name: "football2", scr: "/sport-media/football2.jpg" },
   { name: "football3", scr: "/sport-media/football3.jpg" }
];
const skateContent = [
   { name: "skate1", scr: "/sport-media/skate1.jpg" },
   { name: "skate2", scr: "/sport-media/skate2.jpg" },
   { name: "skate3", scr: "/sport-media/skate3.jpg" },
   { name: "skate4", scr: "/sport-media/skate4.jpg" }
];
let ctx: gsap.Context;
let tl: gsap.core.Timeline;

onMounted(() => {
   ctx = gsap.context(() => {});
});
onUnmounted(() => {
   ctx.revert();
});
</script>

<template>
   <div class="sport-block">
      <div class="sport-block__content">
         <h2 class="sport-block__title">football</h2>
         <div class="sport-block__grid">
            <div
               v-for="content in footballContent"
               class="sport-block__media-wrapper football"
            >
               <NuxtImg
                  preload
                  :src="content.scr"
                  alt="image"
                  :key="content.name"
               />
            </div>
         </div>
      </div>
      <div class="sport-block__content">
         <h2 class="sport-block__title">skating</h2>
         <div class="sport-block__grid">
            <div
               v-for="content in skateContent"
               class="sport-block__media-wrapper"
            >
               <NuxtImg
                  preload
                  :src="content.scr"
                  alt="image"
                  :key="content.name"
               />
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
.sport-block {
   width: 100%;
}
.sport-block__title {
   font-size: 2.5rem;
   font-weight: 500;
   text-transform: uppercase;
   color: $white-color;
   line-height: 51px;
}
.sport-block__grid {
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   gap: 20px;
   row-gap: 20px;
}
.sport-block__media-wrapper {
   width: 340px;
   height: auto;
   border-radius: 12px;
   img {
      max-width: 100%;
      max-height: 100%;
      border-radius: inherit;
   }
}
.sport-block__media-wrapper.football:last-child {
   margin-right: auto;
}
</style>
