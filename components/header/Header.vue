<script setup lang="ts">
const route = useRoute();
const navs = [
   { id: "1", name: "_hello", href: "/" },
   { id: "2", name: "_about-me", href: "/about" },
   { id: "3", name: "_projects", href: "/project" },
   { id: "4", name: "_contact-me", href: "/contact" },
   { id: "5", name: "_service", href: "/service" }
];
</script>

<template>
   <header class="header">
      <h5 class="header__title">azeez-abiola</h5>
      <nav>
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
   </header>
</template>

<style scoped lang="scss">
@import "./assets/header.scss";
</style>
