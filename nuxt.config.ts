// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   runtimeConfig: {
      public: {
         mailApi: process.env.NUXT_MAIL_API
      }
   },
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
         "Fira Code": [300, 400, 500, 600, 700],
         Lato: [100, 300, 400, 700]
      },
      display: "swap",
      subsets: "latin",
      prefetch: true
   }
});
