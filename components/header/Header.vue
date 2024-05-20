<script setup lang="ts">
import gsap from "gsap";
const navRefs = ref<any>([]);
const navWidths = useState<any>(() => []);
const navItemVariables = computed(() => ({
   "--home": navWidths.value[0] + "px",
   "--about": navWidths.value[1] + "px",
   "--project": navWidths.value[2] + "px",
   "--contact": navWidths.value[3] + "px",
   "--service": navWidths.value[4] + "px"
}));
const isOpen = useState("menu-bar-state", () => false);
const route = useRoute();
const navs = [
   { id: "1", name: "_hello", href: "/" },
   { id: "2", name: "_about-me", href: "/about" },
   { id: "3", name: "_projects", href: "/project" },
   { id: "4", name: "_contact-me", href: "/contact" },
   { id: "5", name: "_service", href: "/service" }
];
const setIsOpen = () => {
   isOpen.value = !isOpen.value;
};
let ctx: gsap.Context;
let tl: gsap.core.Timeline;
onMounted(() => {
   navRefs.value.forEach((el: any) => {
      navWidths.value.push(el.offsetWidth);
   });
   const updateNavsWidth = () => {
      navRefs.value.forEach((el: any) => {
         navWidths.value.push(el.offsetWidth);
      });
   };
   window.addEventListener("resize", updateNavsWidth);
});
</script>
<template>
   <header class="header">
      <h5 class="header__title">azeez-abiola</h5>
      <div
         class="header__menu-bar"
         :class="{ open: isOpen, close: !isOpen }"
         @click="setIsOpen"
      >
         <div class="bar"></div>
         <div class="bar"></div>
         <div class="bar"></div>
      </div>
      <nav class="header__navigation" :class="{ open: isOpen, close: !isOpen }">
         <ul class="nav-lists" :style="navItemVariables">
            <li
               v-for="nav in navs"
               :key="nav.id"
               class="nav-item"
               :class="{ active: nav.href === route.fullPath }"
               :ref="
                  (el) => {
                     navRefs.push(el);
                  }
               "
               @click="setIsOpen"
            >
               <NuxtLink :to="nav.href">{{ nav.name }}</NuxtLink>
            </li>
         </ul>
         <Footer />
      </nav>
   </header>
</template>
<style scoped lang="scss">
@import "./assets/header.scss";
</style>
