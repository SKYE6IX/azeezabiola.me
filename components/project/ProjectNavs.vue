<script setup lang="ts">
import {
   RiReactjsFill,
   RiHtml5Fill,
   RiCss3Fill,
   RiVuejsFill,
   RiBootstrapFill
} from "@remixicon/vue";
type Props = { isNavOpen: boolean };
const model = defineModel();
defineProps<Props>();
</script>

<template>
   <div class="project-navs" :class="{ open: isNavOpen, closed: !isNavOpen }">
      <div class="project-navs__item">
         <input type="checkbox" id="next" value="next" v-model="model" />
         <label for="next"><NextJsIcon /> Next</label>
      </div>
      <div class="project-navs__item">
         <input type="checkbox" id="react" value="react" v-model="model" />
         <label for="react"><RiReactjsFill /> React</label>
      </div>
      <div class="project-navs__item">
         <input type="checkbox" id="nuxt" value="nuxt" v-model="model" />
         <label for="nuxt"><NuxtIcon /> Nuxt</label>
      </div>
      <div class="project-navs__item">
         <input type="checkbox" id="vue" value="vue" v-model="model" />
         <label for="vue"><RiVuejsFill /> Vue</label>
      </div>
      <div class="project-navs__item">
         <input type="checkbox" id="html" value="html" v-model="model" />
         <label for="html"><RiHtml5Fill /> HTML</label>
      </div>
      <div class="project-navs__item">
         <input type="checkbox" id="css" value="css" v-model="model" />
         <label for="css"><RiCss3Fill /> CSS</label>
      </div>
      <div class="project-navs__item">
         <input type="checkbox" id="framer" value="framer" v-model="model" />
         <label for="framer"><FramerIcon /> Framer</label>
      </div>
      <div class="project-navs__item">
         <input type="checkbox" id="mui" value="mui" v-model="model" />
         <label for="mui"><MuiIcon /> MUI</label>
      </div>
      <div class="project-navs__item">
         <input
            type="checkbox"
            id="bootstrap"
            value="bootstrap"
            v-model="model"
         />
         <label for="bootstrap"><RiBootstrapFill /> Bootstrap</label>
      </div>
   </div>
</template>

<style scoped lang="scss">
.project-navs {
   display: flex;
   flex-direction: column;
   gap: 18px;
   padding-top: 18px;
}
.project-navs__item {
   display: flex;
   gap: 18px;
   align-items: center;
   padding-left: 18px;
   input {
      appearance: none;
      height: 18px;
      width: 18px;
      border: 2px solid $secondary-grey-color;
      border-radius: 3px;
      position: relative;
      cursor: pointer;
      &::before {
         content: "\2713";
         font-size: 1rem;
         color: $white-color;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         display: none;
      }
      &:checked {
         background-color: $secondary-grey-color;
         &::before {
            display: block;
         }
      }
   }
   label {
      display: inline-flex;
      gap: 10px;
      font-size: 1rem;
      font-weight: 400;
      font-style: normal;
      line-height: normal;
      color: $secondary-grey-color;
      cursor: pointer;
      svg {
         width: 24px;
         height: 24px;
      }
   }
}
@include media-query("max-width", "540px") {
   .project-navs {
      padding-top: 15px;
      transition: all 0.3s linear;
   }
   .project-navs.open {
      height: 380px;
   }
   .project-navs.closed {
      height: 0px;
      padding: 0px;
      opacity: 0;
   }
}
</style>
