<script setup lang="ts">
import { RiMailAddFill, RiPhoneFill } from "@remixicon/vue";
interface Prop {
   activeProfileCategory: string;
   currentContentVisibility: string;
}
defineProps<Prop>();
defineEmits<{
   changeProfileCategory: [value: string];
   changeContentVisibilty: [value: string];
}>();
const aboutNavs = [
   {
      category: "professional",
      menuItems: ["experience", "skills"]
   },
   {
      category: "personal-info",
      menuItems: ["bio"]
   },
   {
      category: "hobbies",
      menuItems: ["music", "sports"]
   }
];
</script>
<template>
   <div class="about-nav">
      <div v-for="nav in aboutNavs" :key="nav.category" class="about-nav__item">
         <span
            class="about-nav__item-title profile"
            :class="{ active: nav.category === activeProfileCategory }"
            @click="$emit('changeProfileCategory', nav.category)"
            ><ArrowDownFilled />{{ nav.category }}</span
         >
         <div
            class="about-nav__item-lists-wrapper"
            :class="{ active: nav.category === activeProfileCategory }"
         >
            <ul class="about-nav__item-lists">
               <li
                  v-for="menu in nav.menuItems"
                  class="about-nav__item-list-item"
                  :class="{ active: currentContentVisibility === menu }"
                  @click="$emit('changeContentVisibilty', menu)"
               >
                  <FileIcon />
                  {{ menu }}
               </li>
            </ul>
         </div>
      </div>
      <div class="about-nav__item">
         <span class="about-nav__item-title contact"
            ><ArrowDownFilled />contacts</span
         >
         <ul class="about-nav__item-lists">
            <li class="about-nav__item-list-item">
               <NuxtLink>
                  <RiMailAddFill class="icon" />skye6ix@gmail.com</NuxtLink
               >
            </li>
            <li class="about-nav__item-list-item">
               <NuxtLink> <RiPhoneFill class="icon" />+79774604073</NuxtLink>
            </li>
         </ul>
      </div>
   </div>
</template>

<style scoped lang="scss">
@import "./assests/about-nav.scss";
</style>
