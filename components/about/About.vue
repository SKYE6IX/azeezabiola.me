<script setup lang="ts">
const visibility = ref("professional");
const currentVisibility = computed(() => visibility.value);

const contentVisibility = ref("experience");
const currentContentVisibility = computed(() => contentVisibility.value);

watch(visibility, (newVisibility, oldvisibility) => {
   switch (newVisibility) {
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

const changeVisibility = (visible: string) => {
   visibility.value = visible;
};
const changeContentVisibilty = (content: string) => {
   contentVisibility.value = content;
};
</script>

<template>
   <div class="about">
      <aside class="about__aside">
         <AboutNav
            :change-visibility="changeVisibility"
            :current-visibility="currentVisibility"
         />
      </aside>
      <div class="about__main">
         <div class="about__main-header">
            <h3><ArrowDownFilled />{{ currentVisibility }}</h3>
            <h3>{{ currentContentVisibility }} <span></span></h3>
         </div>
         <div class="about__main-inner-wrapper">
            <div class="about__main-nav-list">
               <AboutNavLists
                  :current-visibility="currentVisibility"
                  :change-content-visibilty="changeContentVisibilty"
               />
            </div>
            <div class="about__main-content">
               <AboutContent
                  :current-content-visibility="currentContentVisibility"
               />
            </div>
         </div>
      </div>
   </div>
</template>

<style lang="scss">
@import "./assests/about.scss";
</style>
