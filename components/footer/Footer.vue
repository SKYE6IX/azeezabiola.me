<script setup lang="ts">
import {
   RiGithubFill,
   RiTwitterFill,
   RiLinkedinBoxFill,
   RiTelegramFill
} from "@remixicon/vue";

const footerLinks = [
   {
      name: "twitter",
      icon: RiTwitterFill,
      href: "https://twitter.com/skye_6ix"
   },
   {
      name: "linkedin",
      icon: RiLinkedinBoxFill,
      href: "https://www.linkedin.com/in/azeezabiola/"
   },
   { name: "telegram", icon: RiTelegramFill, href: "https://t.me/Skye6ix" },
   { name: "github", icon: RiGithubFill, href: "https://github.com/SKYE6IX" }
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
