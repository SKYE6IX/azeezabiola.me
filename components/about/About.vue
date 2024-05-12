<script setup lang="ts">
const profileCategory = ref("professional");
const activeProfileCategory = computed(() => profileCategory.value);
const contentVisibility = ref("experience");
const currentContentVisibility = computed(() => contentVisibility.value);
watch(profileCategory, (newProfileCategory, oldProfileCategory) => {
   switch (newProfileCategory) {
      case "personal-info":
         contentVisibility.value = "bio";
         break;
      case "hobbies":
         contentVisibility.value = "music";
         break;
      default:
         contentVisibility.value = "experience";
   }
});
const changeProfileCategory = (category: string) => {
   profileCategory.value = category;
};
const changeContentVisibilty = (content: string) => {
   contentVisibility.value = content;
};
</script>
<template>
   <div class="about">
      <aside class="about__aside">
         <AboutNav
            @change-profile-category="changeProfileCategory"
            @change-content-visibilty="changeContentVisibilty"
            :active-profile-category="activeProfileCategory"
            :current-content-visibility="currentContentVisibility"
         />
      </aside>
      <main class="about__main">
         <AboutContent :current-content-visibility="currentContentVisibility" />
      </main>
   </div>
</template>

<style lang="scss">
@import "./assests/about.scss";
</style>
