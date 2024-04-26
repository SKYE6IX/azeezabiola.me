export default defineEventHandler(async (event) => {
   const config = useRuntimeConfig(event);
   type TokenResponseType = {
      access_token: string;
      token_type: string;
      expires_in: string;
      scope: string;
   };
   type PlaylistResponseType = {
      href: string;
      items: {
         id: string;
         images: {
            url: string;
         }[];
      }[];
   };
   async function getAccessToken() {
      const credentials = Buffer.from(
         config.spotifyClientId + ":" + config.spotifyClientSecret
      ).toString("base64");
      try {
         const response = await $fetch<TokenResponseType>(
            "https://accounts.spotify.com/api/token",
            {
               method: "post",
               headers: {
                  Authorization: `Basic ${credentials}`,
                  "Content-Type": "application/x-www-form-urlencoded"
               },
               body: new URLSearchParams({
                  grant_type: "refresh_token",
                  refresh_token: config.spotifyRefreshToken
               })
            }
         );
         return response;
      } catch (error) {
         console.log("I have no idea for this error", error);
      }
   }

   const tokenResponse = await getAccessToken();

   const playlistData = await $fetch<PlaylistResponseType>(
      "https://api.spotify.com/v1/me/playlists?limit=12",
      {
         method: "GET",
         headers: {
            Authorization: `Bearer ${tokenResponse?.access_token}`
         }
      }
   );

   const objectResponse = {
      accessToken: tokenResponse?.access_token,
      playlists: playlistData
   };

   return objectResponse;
});
