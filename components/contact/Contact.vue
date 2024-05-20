<script setup lang="ts">
import { RiMailAddFill, RiPhoneFill, RiExternalLinkFill } from "@remixicon/vue";
import gsap from "gsap";
let ctx: gsap.Context;
let tl: gsap.core.Timeline;
let scopeRef = ref();
const activeTab = useState(() => "contact");
onMounted(() => {
   ctx = gsap.context((self) => {
      gsap.set(".texts .letter", { opacity: 0 });
      tl = gsap.timeline({ repeat: -1 }).to(".texts .letter", {
         opacity: 1,
         stagger: 0.5,
         duration: 1.5,
         ease: "sine.out"
      });
   }, scopeRef.value);
});
onUnmounted(() => {
   ctx.revert();
});
function wrapWords(text: string) {
   const words = text.split(" ");
   const wrappedWords = words.map(
      (word) => `<span class="letter">${word}</span>`
   );
   return wrappedWords.join(" ");
}
const setActiveTab = (tab: string) => {
   activeTab.value = tab;
};
</script>
<template>
   <div class="contact" ref="scopeRef">
      <aside class="contact__aside">
         <span
            class="contact__aside-title"
            :class="{ active: activeTab === 'contact' }"
            @click="setActiveTab('contact')"
         >
            <ArrowDownFilled /> contacts
         </span>
         <div
            class="contact__aside-menu-wrapper"
            :class="{ active: activeTab === 'contact' }"
         >
            <ul class="contact__aside-contacts">
               <li class="contact__aside-contacts-item">
                  <NuxtLink href="mailto:skye6ix@gmail.com"
                     ><RiMailAddFill /> skye6ix@gmail.com</NuxtLink
                  >
               </li>
               <li class="contact__aside-contacts-item">
                  <NuxtLink href="tel:+79774604073"
                     ><RiPhoneFill /> +79774604073</NuxtLink
                  >
               </li>
            </ul>
         </div>
         <span
            class="contact__aside-title"
            :class="{ active: activeTab === 'links' }"
            @click="setActiveTab('links')"
            ><ArrowDownFilled /> find-me-also-in</span
         >
         <div
            class="contact__aside-menu-wrapper"
            :class="{ active: activeTab === 'links' }"
         >
            <ul class="contact__aside-links">
               <li class="contact__aside-links-item">
                  <NuxtLink href="https://twitter.com/skye_6ix"
                     ><RiExternalLinkFill /> Twitter</NuxtLink
                  >
               </li>
               <li class="contact__aside-links-item">
                  <NuxtLink href="https://t.me/Skye6ix"
                     ><RiExternalLinkFill /> Telegram</NuxtLink
                  >
               </li>
               <li class="contact__aside-links-item">
                  <NuxtLink href="https://www.linkedin.com/in/azeezabiola/"
                     ><RiExternalLinkFill /> LinkedIn</NuxtLink
                  >
               </li>
            </ul>
         </div>
      </aside>
      <main class="contact__main">
         <Form />
      </main>
      <div class="contact__text-animation">
         <h2
            class="texts"
            v-html="
               wrapWords(
                  'My approach is simple, make something great and make it personal. Join me and let build modern web applications together.'
               )
            "
         ></h2>
      </div>
   </div>
</template>
<style scoped lang="scss">
@import "./asset/contact.scss";
</style>
