<script setup lang="ts">
import { RiMailAddFill, RiPhoneFill, RiExternalLinkFill } from "@remixicon/vue";
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
               <h2>
                  My approach is simple, make something great and make it
                  personal. Join me and let build modern web applications
                  together.
               </h2>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
@import "./asset/contact.scss";
</style>
