<script setup lang="ts">
import { RiMailAddFill, RiPhoneFill } from "@remixicon/vue";
interface Prop {
   currentVisibility: string;
   changeContentVisibilty: (content: string) => void;
}
defineProps<Prop>();
const navList = {
   professional: ["experience", "skills"],
   personalInfo: ["bio", "education"],
   hobbies: ["music", "sports"]
};
</script>

<template>
   <div>
      <div v-show="currentVisibility === 'professional'" class="nav-list">
         <ul class="nav-list__items">
            <li
               v-for="list in navList.professional"
               @click="changeContentVisibilty(list)"
            >
               <FileIcon />
               {{ list }}
            </li>
         </ul>
      </div>
      <div v-show="currentVisibility === 'personal-info'" class="nav-list">
         <ul class="nav-list__items">
            <li
               v-for="list in navList.personalInfo"
               @click="changeContentVisibilty(list)"
            >
               <FileIcon />
               {{ list }}
            </li>
         </ul>
      </div>
      <div v-show="currentVisibility === 'hobbies'" class="nav-list">
         <ul class="nav-list__items">
            <li
               v-for="list in navList.hobbies"
               @click="changeContentVisibilty(list)"
            >
               <FileIcon />
               {{ list }}
            </li>
         </ul>
      </div>
      <div class="nav-list">
         <h3 class="nav-list__title"><ArrowDownFilled />contacts</h3>
         <div class="nav-list__links">
            <NuxtLink>
               <RiMailAddFill class="icon" />skye6ix@gmail.com</NuxtLink
            >
            <NuxtLink> <RiPhoneFill class="icon" />+79774604073</NuxtLink>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
@import "./assests/about-nav-lists.scss";
</style>
