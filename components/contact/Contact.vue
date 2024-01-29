<script setup lang="ts">
const { $anime } = useNuxtApp();
import { RiMailAddFill, RiPhoneFill, RiExternalLinkFill } from "@remixicon/vue";
function wrapWords(text: string) {
   const words = text.split(" ");
   const wrappedWords = words.map(
      (word) => `<span class="letter">${word}</span>`
   );
   return wrappedWords.join(" ");
}
onMounted(() => {
   $anime
      .timeline({ loop: true })
      .add({
         targets: ".texts .letter",
         opacity: [0, 1],
         easing: "easeInOutQuad",
         duration: 2250,
         delay: (el, i) => 150 * (i + 1)
      })
      .add({
         targets: ".texts",
         opacity: 0,
         duration: 1000,
         easing: "easeOutExpo",
         delay: 1000
      });
});
</script>

<template>
   <div class="contact">
      <div class="contact__header">
         <h3><ArrowDownFilled /> contacts</h3>
      </div>
      <div class="contact__inner-wrapper">
         <aside class="contact__aside">
            <div class="contact__links">
               <NuxtLink><RiMailAddFill /> skye6ix@gmail.com</NuxtLink>
               <NuxtLink><RiPhoneFill /> +79774604073</NuxtLink>
            </div>
            <div class="contact__social-links">
               <h3><ArrowDownFilled /> find-me-also-in</h3>
               <NuxtLink><RiExternalLinkFill /> Twitter</NuxtLink>
               <NuxtLink><RiExternalLinkFill /> Instagram</NuxtLink>
               <NuxtLink><RiExternalLinkFill /> LinkedIn</NuxtLink>
            </div>
         </aside>
         <div class="contact__main-content">
            <div class="contact__form-wrapper">
               <Form />
            </div>
            <div class="contact__text-wrapper">
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
      </div>
   </div>
</template>

<style scoped lang="scss">
@import "./asset/contact.scss";
</style>
