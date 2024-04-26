<script setup lang="ts">
import { RiMailAddFill, RiPhoneFill } from "@remixicon/vue";
interface Prop {
   currentVisibility: string;
}
defineProps<Prop>();
defineEmits<{
   changeContentVisibilty: [value: string];
}>();

const navigations = useState("navigations", () => [
   {
      navName: "professional",
      menuItems: ["experience", "skills"],
      isSet: false
   },
   {
      navName: "personal-info",
      menuItems: ["bio", "education"],
      isSet: false
   },
   {
      navName: "hobbies",
      menuItems: ["music", "sports"],
      isSet: false
   },
   {
      navName: "contact",
      isSet: false
   }
]);

function openNav(setNav: string) {
   navigations.value.forEach((nav) => {
      nav.isSet = false;
   });
   const index = navigations.value.findIndex((nav) => nav.navName === setNav);
   const updateSetNav = { ...navigations.value[index] };
   updateSetNav.isSet = !updateSetNav.isSet;
   navigations.value.splice(index, 1, updateSetNav);
}
function closeNav() {
   navigations.value.forEach((nav) => {
      nav.isSet = false;
   });
}
</script>

<template>
   <div>
      <div
         v-for="nav in navigations"
         v-show="currentVisibility === nav.navName"
         class="nav-list"
      >
         <ul class="nav-list__items">
            <li
               v-for="list in nav.menuItems"
               @click="$emit('changeContentVisibilty', list)"
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

      <!-- MOBILE MARK UP -->
      <div v-for="nav in navigations" class="nav-list-dropdown">
         <button
            @click="openNav(nav.navName)"
            class="nav-list-dropdown__button"
         >
            <OpenArrow v-show="nav.isSet" class="button-icon" />
            <ClosedArrow v-show="!nav.isSet" class="button-icon" />
            {{ nav.navName }}
         </button>
         <ul
            class="nav-list__items"
            v-show="nav.isSet && nav.navName !== 'contact'"
         >
            <li
               v-for="list in nav.menuItems"
               @click="$emit('changeContentVisibilty', list)"
            >
               <FileIcon />
               {{ list }}
            </li>
         </ul>
         <div
            class="nav-list__links nav-list__items"
            v-show="nav.navName === 'contact' && nav.isSet"
         >
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
