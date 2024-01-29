<script setup lang="ts">
import { RiCheckLine } from "@remixicon/vue";
interface Props {
   price: string;
   title: string;
   description: string;
   duration: string;
   features: string[];
}
defineProps<Props>();
</script>

<template>
   <div class="service-card">
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
      <button class="service-card__button">
         <NuxtLink href="/contact"> hire me 👨🏿‍💻</NuxtLink>
      </button>
   </div>
</template>

<style lang="scss">
.service-card {
   width: 320px;
   height: auto;
   padding: 20px 30px;
   border-radius: 26px;
   background: $primary-black-manga;
   border: 1px solid $line-color;
   display: flex;
   flex-direction: column;
   gap: 20px;
   flex-shrink: 0;
   &:last-child {
      margin-right: 30px;
   }
}
.service-card__price {
   font-size: 1.0625rem;
   font-weight: 500;
   font-style: normal;
   line-height: normal;
   color: $white-color;
   .bold {
      font-size: 2.25rem;
      font-weight: 700;
      line-height: 46px;
   }
}
.service-card__title {
   font-size: 1.75rem;
   font-weight: 500;
   font-style: normal;
   line-height: normal;
   color: $white-color;
   text-transform: uppercase;
}
.service-card__description {
   font-size: 0.9375rem;
   font-weight: 500;
   font-style: normal;
   line-height: normal;
   color: $white-color;
}
.service-card__duration {
   font-size: 1rem;
   font-weight: 500;
   font-style: normal;
   line-height: normal;
   color: $white-color;
}
.service-card__features {
   list-style: none;
   padding: 0px;
   li {
      font-size: 0.9375rem;
      font-weight: 500;
      font-style: normal;
      line-height: normal;
      color: $white-color;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 5px;
   }
}
.service-card__button {
   width: 100%;
   background: rgba(28, 43, 58, 1);
   border-radius: 24px;
   border: none;
   padding: 10px;
   font-family: $font-fira;
   font-size: 0.9375rem;
   font-weight: 500;
   font-style: normal;
   line-height: normal;
   color: $white-color;
   transition: all 0.3s ease-in;
   &:hover {
      background: rgba(38, 59, 80, 1);
   }
   a {
      width: 100%;
   }
}
</style>
