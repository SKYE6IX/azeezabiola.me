<script setup lang="ts">
import gsap from "gsap";
import HtmlIcon from "../icons/HtmlIcon.vue";
import Css3Icon from "../icons/Css3Icon.vue";
import JavaScriptIcon from "../icons/JavaScriptIcon.vue";
import NextJsIcon from "../icons/NextJsIcon.vue";
import ReactIcon from "../icons/ReactIcon.vue";
import NuxtIcon from "../icons/NuxtIcon.vue";
import VueIcon from "../icons/VueIcon.vue";
import MuiIcon from "../icons/MuiIcon.vue";
import FramerIcon from "../icons/FramerIcon.vue";
import ReduxIcon from "../icons/ReduxIcon.vue";
import GithubIcon from "../icons/GithubIcon.vue";
import NpmIcon from "../icons/NpmIcon.vue";
import WebpackIcon from "../icons/WebpackIcon.vue";
import EslintIcon from "../icons/EslintIcon.vue";
import VsCodeIcon from "../icons/VsCodeIcon.vue";
const stackIcons = [
   { name: "html", icon: HtmlIcon },
   { name: "css", icon: Css3Icon },
   { name: "javascript", icon: JavaScriptIcon },
   { name: "nextjs", icon: NextJsIcon },
   { name: "react", icon: ReactIcon },
   { name: "nuxt", icon: NuxtIcon },
   { name: "vue", icon: VueIcon },
   { name: "mui", icon: MuiIcon },
   { name: "framer", icon: FramerIcon },
   { name: "redux", icon: ReduxIcon },
   { name: "github", icon: GithubIcon },
   { name: "npm", icon: NpmIcon },
   { name: "webpack", icon: WebpackIcon },
   { name: "eslint", icon: EslintIcon },
   { name: "vscode", icon: VsCodeIcon }
];
</script>

<template>
   <div class="marquee-wrapper">
      <div v-for="stack in stackIcons" class="marquee-item" :key="stack.name">
         <component :is="stack.icon"></component>
      </div>
   </div>
</template>

<style scoped lang="scss">
.marquee-wrapper {
   overflow-x: hidden;
   width: 620px;
   max-width: 100%;
   display: flex;
}
.marquee-item {
   flex-shrink: 0;
   width: 120px;
   height: 120px;
   padding: 10px;
   border-radius: 10px;
   border: 2px solid $line-color;
   background: rgba(1, 22, 39, 0.84);
   box-shadow: 0px 4px 40px 0px rgba(9, 9, 12, 0.1);
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 20px;
   svg {
      max-width: 100%;
      max-height: 100%;
   }
}
</style>
