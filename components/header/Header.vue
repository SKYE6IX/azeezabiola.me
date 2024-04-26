<script setup lang="ts">
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
</script>

<template>
   <header class="header">
      <h5 class="header__title">azeez-abiola</h5>
      <!-- Desktop Navigation -->
      <nav class="header__navigation">
         <ul class="nav-lists">
            <li
               v-for="nav in navs"
               :key="nav.id"
               class="nav-list"
               :class="{ active: nav.href === route.fullPath }"
            >
               <NuxtLink :to="nav.href">{{ nav.name }}</NuxtLink>
            </li>
         </ul>
      </nav>
      <!-- Menu Bar -->
      <div
         class="header__menu-bar"
         :class="{ 'menu-open': isOpen, 'menu-close': !isOpen }"
         @click="setIsOpen"
      >
         <div class="bar"></div>
         <div class="bar"></div>
         <div class="bar"></div>
      </div>
   </header>
   <!-- Mobile Naviagtion Container -->
   <div class="header__menu-slide-in" :class="{ open: isOpen, close: !isOpen }">
      <!-- Mobile Navigation -->
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
      <!-- Mobile Footer -->
      <Footer />
   </div>
</template>

<style scoped lang="scss">
@import "./assets/header.scss";
</style>
