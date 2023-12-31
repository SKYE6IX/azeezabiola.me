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
         <iconComponent class="social-icon" />
      </NuxtLink>
   </li>
</template>
