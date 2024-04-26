<script setup lang="ts">
import { RiPlayLine, RiPauseLine } from "@remixicon/vue";
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
interface Props {
   accessToken: string;
   playlist_id: string;
   is_paused: boolean;
   playlists: PlaylistTypes;
}
// STATES
const player = useState<Spotify.Player>("player");
const deviceId = useState("device-id", () => "");
const playId = useState("play-id", () => "");

// PROPS AND EMIT FUNCTIONS
const props = defineProps<Props>();
const emit = defineEmits<{
   (e: "setIsPaused", state: boolean, id: string): void;
   (e: "setIsPlaying", state: boolean, id: string): void;
}>();

window.onSpotifyWebPlaybackSDKReady = () => {
   const newPlayer = new window.Spotify.Player({
      name: "Web Playback SDK",
      getOAuthToken: (cb) => {
         cb(props.accessToken);
      },
      volume: 0.5
   });
   player.value = newPlayer;
   player.value.addListener("ready", ({ device_id }) => {
      deviceId.value = device_id;
      // console.log("Ready with Device ID", device_id);
   });
   player.value.addListener("not_ready", ({ device_id }) => {
      // console.log("Device ID has gone offline", device_id);
   });
   player.value.on("playback_error", ({ message }) => {
      console.error("Failed to perform playback", message);
   });
   player.value.addListener("player_state_changed", (state) => {
      if (!state) {
         return;
      }
      emit("setIsPaused", state.paused, playId.value);
      player.value.getCurrentState().then((state) => {
         if (state) {
            emit("setIsPlaying", true, playId.value);
         }
      });
   });
   player.value.connect();
};

async function play(id: string) {
   let play_playlist = await $fetch(
      "https://api.spotify.com/v1/me/player/play?device_id=" + deviceId.value,
      {
         method: "PUT",
         headers: {
            Authorization: "Bearer " + props.accessToken,
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            context_uri: `spotify:playlist:${id}`
         })
      }
   ).then((res) => {
      console.log(res);
   });
}
function handleTogglePlay() {
   props.playlists?.forEach(async (playlist) => {
      if (playlist.id === props.playlist_id) {
         if (!playlist.is_active) {
            await play(playlist.id);
            playId.value = playlist.id;
            player.value.togglePlay();
         } else {
            playId.value = playlist.id;
            player.value.togglePlay();
         }
      }
   });
}
function handleTogglePause() {
   props.playlists?.forEach((playlist) => {
      if (playlist.id === props.playlist_id) {
         playId.value = playlist.id;
         player.value.pause();
      }
   });
}
</script>

<template>
   <div>
      <button @click="handleTogglePlay" v-show="is_paused">
         <RiPlayLine />
      </button>
      <button @click="handleTogglePause" v-show="!is_paused">
         <RiPauseLine />
      </button>
   </div>
</template>

<style scoped lang="scss">
button {
   background: rgba(63, 67, 76, 0.9);
   border: none;
   border-radius: 1000px;
   cursor: pointer;
   width: 90px;
   height: 90px;
   svg {
      color: rgba(255, 255, 255, 0.8);
      width: 70px;
      height: 70px;
   }
}
</style>
