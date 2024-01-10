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
      }
   },
   modules: ["@nuxtjs/google-fonts", "@nuxt/image", "@nuxt/content"],
   googleFonts: {
      families: {
         "Fira Code": "200..900"
      },
      display: "swap",
      subsets: "latin",
      prefetch: true
   },
   content: {
      watch: false
   }
});
