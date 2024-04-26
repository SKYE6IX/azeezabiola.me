<script setup lang="ts">
import { RiArrowRightSLine, RiArrowLeftSLine } from "@remixicon/vue";
import gsap from "gsap";
import { serviceLists } from "./service-list";

const scopeRef = ref();
const childRefs = ref<any>([]);
const moveIdx = useState("moveIdx", () => 0);
const cardWidth = useState("card-width", () => 0);
let ctx: gsap.Context;
let tween: gsap.core.Tween;
const offset = 20;
const isFirst = computed(() => moveIdx.value <= 0);
const isLast = computed(() => moveIdx.value >= 2);

onMounted(() => {
   cardWidth.value = childRefs.value[0].cardRef.clientWidth;
   ctx = gsap.context(() => {}, scopeRef.value);
});
onUnmounted(() => {
   ctx.revert();
});

function moveLeft() {
   moveIdx.value--;
   ctx.add(() => {
      tween = gsap.to(".service-card", {
         x: -(cardWidth.value + offset) * moveIdx.value,
         duration: 0.5,
         ease: "power1.out"
      });
   });
}
function moveRight() {
   moveIdx.value++;
   ctx.add(() => {
      tween = gsap.to(".service-card", {
         x: -(cardWidth.value + offset) * moveIdx.value,
         duration: 0.5,
         ease: "power1.out"
      });
   });
}
</script>
<template>
   <div class="services" ref="scopeRef">
      <button
         class="services__carousel-button left"
         :class="{ disabled: isFirst }"
         @click="moveLeft"
         :disabled="isFirst"
      >
         <RiArrowLeftSLine class="icon" />
      </button>
      <button
         class="services__carousel-button right"
         :class="{ disabled: isLast }"
         @click="moveRight"
         :disabled="isLast"
      >
         <RiArrowRightSLine class="icon" />
      </button>
      <div class="services__card-container">
         <ServiceCard
            v-for="service in serviceLists"
            :ref="
               (el) => {
                  if (el) {
                     childRefs.push(el);
                  }
               }
            "
            :price="service.price"
            :title="service.title"
            :description="service.description"
            :duration="service.duration"
            :features="service.features"
            :key="service.title"
         />
      </div>
   </div>
</template>

<style scoped lang="scss">
@import "./asset/service.scss";
</style>
