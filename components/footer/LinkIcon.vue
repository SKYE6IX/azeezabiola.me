<script setup lang="ts">
interface Props {
   iconComponent: any;
   href: string;
}
defineProps<Props>();
</script>

<template>
   <li>
      <NuxtLink :to="href" target="_blank">
         <component :is="iconComponent" class="social-icon" />
      </NuxtLink>
   </li>
</template>
