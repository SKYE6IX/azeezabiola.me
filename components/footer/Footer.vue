<script setup lang="ts">
import {
   RiGithubFill,
   RiTwitterFill,
   RiLinkedinBoxFill,
   RiTelegramFill
} from "@remixicon/vue";

const footerLinks = [
   { name: "twitter", icon: RiTwitterFill, href: "#" },
   { name: "linkedin", icon: RiLinkedinBoxFill, href: "#" },
   { name: "telegram", icon: RiTelegramFill, href: "#" },
   { name: "github", icon: RiGithubFill, href: "#" }
];
</script>

<template>
   <footer class="footer">
      <h5 class="footer__title">find me in:</h5>
      <div class="footer__link-wrapper">
         <ul class="footer__links">
            <LinkIcon
               v-for="link in footerLinks"
               :icon-component="link.icon"
               :href="link.href"
            />
         </ul>
      </div>
   </footer>
</template>

<style lang="scss">
@import "./assets/footer.scss";
</style>
