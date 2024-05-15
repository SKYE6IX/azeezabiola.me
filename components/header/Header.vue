<script setup lang="ts">
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
onMounted(() => {
   navRefs.value.forEach((el: any) => {
      navWidths.value.push(el.offsetWidth);
   });
});
</script>
<template>
   <header class="header">
      <h5 class="header__title">azeez-abiola</h5>
      <nav class="header__navigation">
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
            >
               <NuxtLink :to="nav.href">{{ nav.name }}</NuxtLink>
            </li>
         </ul>
      </nav>
      <!-- Menu Bar -->
      <!-- <div
         class="header__menu-bar"
         :class="{ 'menu-open': isOpen, 'menu-close': !isOpen }"
         @click="setIsOpen"
      >
         <div class="bar"></div>
         <div class="bar"></div>
         <div class="bar"></div>
      </div> -->
   </header>
   <!-- Mobile Naviagtion Container -->
   <!-- <div class="header__menu-slide-in" :class="{ open: isOpen, close: !isOpen }">
      Mobile Navigation
      <ul class="nav-lists">
         <li
            v-for="nav in navs"
            :key="nav.id"
            class="nav-list"
            :class="{ active: nav.href === route.fullPath }"
            @click="setIsOpen"
         >
            <NuxtLink :to="nav.href">{{ nav.name }}</NuxtLink>
         </li>
      </ul>
      Mobile Footer
      <Footer />
   </div> -->
</template>

<style scoped lang="scss">
@import "./assets/header.scss";
</style>
