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
let ctx: gsap.Context;
let tween: gsap.core.Tween;
const marqueeBoxes = ref<any>([]);
const marqueeWidth = useState(() => 0);

onMounted(() => {
   marqueeWidth.value = marqueeBoxes.value[2].offsetWidth;
   const moveX = marqueeWidth.value * stackIcons.length + 150;
   ctx = gsap.context((self) => {
      gsap.set(".marquee-item", {
         x: (i) => i * 130
      });
      tween = gsap.to(".marquee-item", {
         duration: 20,
         ease: "none",
         x: "+=" + moveX,
         modifiers: {
            x: gsap.utils.unitize((x) => parseInt(x) % moveX)
         },
         repeat: -1
      });
   });
});
onUnmounted(() => {
   ctx.revert();
});
</script>
<template>
   <div class="marquee-wrapper">
      <div class="marquee-boxes">
         <div
            v-for="stack in stackIcons"
            class="marquee-item"
            :key="stack.name"
            :ref="
               (el) => {
                  marqueeBoxes.push(el);
               }
            "
         >
            <component :is="stack.icon"></component>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
.marquee-wrapper {
   overflow-x: hidden;
   width: 620px;
   height: 120px;
   max-width: 100%;
   position: relative;
   z-index: 1;
}
.marquee-boxes {
   height: 100%;
   position: relative;
   left: -120px;
}
.marquee-item {
   position: absolute;
   width: 120px;
   height: 100%;
   padding: 10px;
   border-radius: 10px;
   border: 2px solid $line-color;
   background: rgba(1, 22, 39, 0.84);
   box-shadow: 0px 4px 40px 0px rgba(9, 9, 12, 0.1);
   display: flex;
   justify-content: center;
   align-items: center;
   svg {
      max-width: 100%;
      max-height: 100%;
   }
}
@include media-query("max-width", "540px") {
   .marquee-wrapper {
      width: 100%;
   }
}
</style>
