<script setup lang="ts">
const footballContent = [
   {
      name: "football1",
      scr: "/sport-media/football1webp.webp",
      type: "image"
   },
   { name: "football2", scr: "/sport-media/football2.webp", type: "image" },
   { name: "football3", scr: "/sport-media/football3.webp", type: "image" },
   { name: "football4", scr: "/sport-media/football4.mov", type: "video" }
];
const skateContent = [
   { name: "skate1", scr: "/sport-media/skate1.jpg", type: "image" },
   { name: "skate2", scr: "/sport-media/skate2.jpg", type: "image" },
   { name: "skate3", scr: "/sport-media/skate3.jpg", type: "image" },
   { name: "skate4", scr: "/sport-media/skate4.jpg", type: "image" },
   { name: "skate5", scr: "/sport-media/skate5.mov", type: "video" },
   { name: "skate6", scr: "/sport-media/skate6.mov", type: "video" },
   { name: "skate7", scr: "/sport-media/skate7.mov", type: "video" }
];
</script>

<template>
   <div class="sport-block">
      <div class="sport-block__content">
         <h2 class="sport-block__title">football</h2>
         <div class="sport-block__grid">
            <div
               v-for="content in footballContent"
               class="sport-block__image-wrapper"
            >
               <NuxtImg
                  v-if="content.type === 'image'"
                  :src="content.scr"
                  alt=""
                  :key="content.name"
               />
               <video
                  v-if="content.type === 'video'"
                  :src="content.scr"
                  :key="content.name"
                  controls
               ></video>
            </div>
         </div>
      </div>
      <div class="sport-block__content">
         <h2 class="sport-block__title">skating</h2>
         <div class="sport-block__grid">
            <div
               v-for="content in skateContent"
               class="sport-block__image-wrapper"
            >
               <NuxtImg
                  v-if="content.type === 'image'"
                  :src="content.scr"
                  alt=""
                  :key="content.name"
               />
               <video
                  v-if="content.type === 'video'"
                  :src="content.scr"
                  :key="content.name"
                  controls
               ></video>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
.sport-block__title {
   font-size: 2.5rem;
   font-weight: 500;
   text-transform: uppercase;
   color: $white-color;
   line-height: 51px;
}
.sport-block__grid {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
}
.sport-block__image-wrapper {
   border-radius: 12px;
   img,
   video {
      max-width: 100%;
      max-height: 100%;
      border-radius: inherit;
   }
}
</style>
