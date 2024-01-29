declare module "nuxt/schema" {
   interface RuntimeConfig {
      spotifyRefreshToken: string;
      spotifyClientId: string;
      spotifyClientSecret: string;
   }
}
export {};
