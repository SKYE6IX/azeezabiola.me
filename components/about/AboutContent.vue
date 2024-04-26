<script setup lang="ts">
interface Prop {
   currentContentVisibility: string;
}
defineProps<Prop>();
</script>

<template>
   <section
      v-if="currentContentVisibility === 'experience'"
      class="about-content__section"
   >
      <Experience />
   </section>
   <section
      v-if="currentContentVisibility === 'skills'"
      class="about-content__section"
   >
      <Skills />
   </section>
   <section
      v-if="currentContentVisibility === 'bio'"
      class="about-content__section"
   >
      <Bio />
   </section>
   <section
      v-if="currentContentVisibility === 'education'"
      class="about-content__section"
   >
      <Education />
   </section>
   <section
      v-if="currentContentVisibility === 'music'"
      class="about-content__section"
   >
      <Music />
   </section>
   <section
      v-if="currentContentVisibility === 'sports'"
      class="about-content__section"
   >
      <Sports />
   </section>
</template>

<style scoped lang="scss">
.about-content__section {
   padding: 15px;
   height: auto;
}
</style>
