<script setup lang="ts">
type PlaylistTypes =
   | {
        is_paused: boolean;
        is_active: boolean;
        id: string;
        images: {
           url: string;
        }[];
     }[]
   | undefined;
const { data } = useFetch("/api/spotify", {
   lazy: true,
   dedupe: "cancel"
});
const token = useState("token", () => "");
if (data.value != null) {
   token.value = data.value.accessToken;
}
const playlists = useState<PlaylistTypes>("playlists", () => {
   return data.value?.playlists.items.map((item) => {
      const newObj = { ...item, is_paused: true, is_active: false };
      return newObj;
   });
});
function setIsPaused(state: boolean, id: string) {
   if (playlists.value) {
      const index = playlists.value.findIndex((playlist) => playlist.id === id);
      if (index !== -1) {
         const updatePlaylist = { ...playlists.value[index] };
         updatePlaylist.is_paused = state;
         playlists.value.splice(index, 1, updatePlaylist);
      }
   }
}
function setIsActive(state: boolean, id: string) {
   if (playlists.value) {
      playlists.value.forEach((playlist) => {
         playlist.is_active = false;
      });
      const index = playlists.value.findIndex((playlist) => playlist.id === id);
      if (index !== -1) {
         const updatePlaylist = { ...playlists.value[index] };
         updatePlaylist.is_active = state;
         playlists.value.splice(index, 1, updatePlaylist);
      }
   }
}
</script>
<template>
   <div class="music">
      <h2 class="music__title">Spotify top playlists:</h2>
      <ClientOnly fallback-tag="span" fallback="LOADING....">
         <div class="music__playlists-container">
            <div
               v-for="playlist in playlists"
               :key="playlist.id"
               class="music__playlist"
            >
               <img
                  :src="playlist.images[0].url"
                  alt="spotify music playlist"
               />
               <WebPlayer
                  class="player"
                  :access-token="token"
                  :playlist_id="playlist.id"
                  :is_paused="playlist.is_paused"
                  :playlists="playlists"
                  @set-is-paused="setIsPaused"
                  @set-is-active="setIsActive"
               />
            </div>
         </div>
      </ClientOnly>
   </div>
</template>

<style scoped lang="scss">
.music__title {
   font-size: 1.5rem;
   font-weight: 500;
   font-style: normal;
   line-height: normal;
   color: $secondary-grey-color;
   margin-bottom: 20px;
}
.music__playlists-container {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 10px;
}
.music__playlist {
   position: relative;
   img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 12px;
   }
   &:hover {
      & .player {
         opacity: 1;
      }
   }
}
.player {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   opacity: 0;
   transition: opacity 0.4s ease-in-out;
}
</style>
