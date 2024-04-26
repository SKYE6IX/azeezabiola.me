<script setup lang="ts">
import { RiCheckLine } from "@remixicon/vue";
interface Props {
   price: string;
   title: string;
   description: string;
   duration: string;
   features: string[];
}
const cardRef = ref<HTMLDivElement | null>(null);
defineExpose({
   cardRef
});
defineProps<Props>();
</script>

<template>
   <div class="service-card" ref="cardRef">
      <h3 class="service-card__price" v-html="price"></h3>
      <h4 class="service-card__title">{{ title }}</h4>
      <p class="service-card__description">
         {{ description }}
      </p>
      <h5 class="service-card__duration">Develop-Duration: {{ duration }}</h5>
      <ul class="service-card__features">
         <li v-for="(list, i) in features" :key="i">
            <RiCheckLine />{{ list }}
         </li>
      </ul>

      <NuxtLink href="/contact" class="service-card__button">
         hire me 👨🏿‍💻</NuxtLink
      >
   </div>
</template>

<style lang="scss">
@import "./asset/service-card.scss";
</style>
