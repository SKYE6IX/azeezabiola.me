<script setup lang="ts">
import { RiMailAddFill, RiPhoneFill, RiExternalLinkFill } from "@remixicon/vue";
import gsap from "gsap";
let ctx: gsap.Context;
let tl: gsap.core.Timeline;
let scopeRef = ref();
const isTabsActive = useState(() => [false, false]);
const tabState = computed(() => ({
   contact: {
      open: isTabsActive.value[0],
      closed: !isTabsActive.value[0]
   },
   links: {
      open: isTabsActive.value[1],
      closed: !isTabsActive.value[1]
   }
}));
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
const setTabState = (index: number) => {
   isTabsActive.value = [false, false];
   isTabsActive.value[index] = !isTabsActive.value[index];
};
</script>
<template>
   <div class="contact" ref="scopeRef">
      <aside class="contact__aside">
         <span
            class="contact__aside-button"
            @click="setTabState(0)"
            :class="tabState.contact"
         >
            <ArrowDownFilled /> contacts
         </span>
         <ul class="contact__aside-contacts" :class="tabState.contact">
            <li class="contact__aside-contacts-item">
               <NuxtLink><RiMailAddFill /> skye6ix@gmail.com</NuxtLink>
            </li>
            <li class="contact__aside-contacts-item">
               <NuxtLink><RiPhoneFill /> +79774604073</NuxtLink>
            </li>
         </ul>
         <span
            class="contact__aside-button"
            @click="setTabState(1)"
            :class="tabState.links"
            ><ArrowDownFilled /> find-me-also-in</span
         >
         <ul class="contact__aside-links" :class="tabState.links">
            <li class="contact__aside-links-item">
               <NuxtLink><RiExternalLinkFill /> Twitter</NuxtLink>
            </li>
            <li class="contact__aside-links-item">
               <NuxtLink><RiExternalLinkFill /> Instagram</NuxtLink>
            </li>
            <li class="contact__aside-links-item">
               <NuxtLink><RiExternalLinkFill /> LinkedIn</NuxtLink>
            </li>
         </ul>
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
