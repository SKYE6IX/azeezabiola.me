// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   components: [
      {
         path: "~/components",
         pathPrefix: false
      }
   ],
   pages: true,
   devtools: { enabled: false },
   // Global styles
   css: ["/assets/scss/global-style.scss"],
   vite: {
      css: {
         preprocessorOptions: {
            scss: {
               additionalData: "@use '~/assets/scss/_variables.scss' as *; "
            }
         }
      },
      server: {
         hmr: {
            overlay: false
         }
      }
   },
   modules: ["@nuxtjs/google-fonts", "@nuxt/image", "@nuxt/content"],
   googleFonts: {
      families: {
         "Fira Code": [300, 400, 500, 600, 700]
      },
      display: "swap",
      subsets: "latin",
      prefetch: true
   },
   content: {
      watch: false
   },
   runtimeConfig: {
      spotifyRefreshToken:
         "AQAhCUBteVRvzxcODeotUFkzgzU2UlEKONiDOU4Kbw43UD03YrqdvLKyB5zXFP8D1BtwVaMDCgP7B2AsT06aXDlbrBWIiEOfNlo9nirPYdNbOcRkl-vP46BOU47bADRLya0",
      spotifyClientId: "cd0b9f180bc14382bed3c1035b8a9219",
      spotifyClientSecret: "510495265636465ba8a639cee37ef7c9"
   }
});
