export default defineEventHandler(async (event) => {
   type TokenResponseType = {
      access_token: string;
      token_type: string;
      expires_in: string;
      scope: string;
   };
   type Playlists = {
      id: string;
      uri: string;
      images: {
         url: string;
      }[];
   }[];
   type Response = {
      items: Playlists;
   };

   async function getAccessToken(): Promise<
      TokenResponseType | undefined | any
   > {
      const credentials = Buffer.from(
         process.env.NUXT_SPOTIFY_CLIENT_ID +
            ":" +
            process.env.NUXT_SPOTIFY_CLIENT_SECRET
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
                  refresh_token: process.env.NUXT_SPOTIFY_REFRESH_TOKEN!
               })
            }
         );
         return response;
      } catch (error) {
         console.log(error);
         console.log("Error from acess token");
         return error;
      }
   }
   const tokenResponse = await getAccessToken();
   const playlistData = await $fetch<Response>(
      "https://api.spotify.com/v1/me/playlists?limit=12",
      {
         method: "GET",
         headers: {
            Authorization: `Bearer ${tokenResponse?.access_token}`
         }
      }
   );
   return playlistData.items;
});
