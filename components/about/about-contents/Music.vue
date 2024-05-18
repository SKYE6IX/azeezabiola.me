<script setup lang="ts">
const { data, pending, error } = useFetch("/api/spotify", {
   lazy: true,
   dedupe: "defer"
});
</script>
<template>
   <div class="music-block">
      <h2 class="music-block__title">Spotify top playlists:</h2>
      <!-- skeleton -->
      <div class="music-block__playlists-container" v-if="pending">
         <div
            v-for="item in Array.from({ length: 9 })"
            class="music-block__playlist skeleton"
         ></div>
      </div>
      <!-- Resolve data -->
      <div class="music-block__playlists-container" v-else>
         <div
            v-for="playlist in data"
            :key="playlist.id"
            class="music-block__playlist"
         >
            <NuxtImg
               :src="playlist.images[0].url"
               alt="spotify music playlist"
               class="music-block__playlist-image"
            />
            <div class="music-block__playlist-link">
               <NuxtLink class="playlist-link" :href="playlist.uri">
                  <span>Add to your playlist</span>
                  <PlaylistIcon />
               </NuxtLink>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
.music-block {
   width: 100%;
}
.music-block__title {
   font-size: 2rem;
   font-weight: 600;
   font-style: normal;
   line-height: 38px;
   color: $secondary-grey-color;
   margin-bottom: 20px;
   text-transform: uppercase;
}
.music-block__playlists-container {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 10px;
}
.music-block__playlist {
   border-radius: 10px;
   height: 230px;
   position: relative;
   cursor: pointer;
   overflow-y: hidden;
}
.music-block__playlist:hover {
   & .music-block__playlist-link {
      transform: translateY(0%);
      opacity: 1;
   }
}
.music-block__playlist.skeleton {
   width: 100%;
   background: linear-gradient(90deg, #5f768e, #4f667f, #4d4b4b);
   background-size: 200%;
   animation: leftToRight 1.5s infinite reverse;
}
.music-block__playlist-image {
   width: 100%;
   height: 100%;
   border-radius: inherit;
}
.music-block__playlist-link {
   position: absolute;
   z-index: 10;
   bottom: 10px;
   right: 10px;
   background: rgba(30, 45, 61, 0.9);
   border-radius: 8px;
   padding: 10px 5px;
   transform: translateY(100%);
   opacity: 0;
   transition: all 0.35s ease-in;
}
.playlist-link {
   color: $white-color;
   font-size: 0.9rem;
   font-weight: 500;
   line-height: 19.1px;
   word-spacing: -6px;
   text-transform: uppercase;
   svg {
      display: none;
   }
}
@include media-query("max-width", "540px") {
   .music-block__title {
      font-size: 1.5rem;
      line-height: 28px;
      margin-bottom: 10px;
      word-spacing: -5px;
   }
   .music-block__playlists-container {
      grid-template-columns: repeat(2, 1fr);
   }
   .music-block__playlist {
      width: 100%;
      height: auto;
      aspect-ratio: 1 / 1;
   }
   .music-block__playlist-link {
      right: 2px;
      padding: 8px 5px;
      transform: translateY(0%);
      opacity: 1;
   }
   .playlist-link {
      span {
         display: none;
      }
      svg {
         display: block;
         width: 30px;
         height: 25px;
      }
   }
}
@keyframes leftToRight {
   0% {
      background-position: -100% 0;
   }

   100% {
      background-position: 100% 0;
   }
}
</style>
