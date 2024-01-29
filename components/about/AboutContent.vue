<script setup lang="ts">
interface Prop {
   currentContentVisibility: string;
}
defineProps<Prop>();
</script>

<template>
   <section
      v-show="currentContentVisibility === 'experience'"
      class="about-content__section"
   >
      <Experience />
   </section>
   <section
      v-show="currentContentVisibility === 'skills'"
      class="about-content__section"
   >
      <Skills />
   </section>
   <section
      v-show="currentContentVisibility === 'certificate'"
      class="about-content__section"
   >
      <Certificate />
   </section>
   <section
      v-show="currentContentVisibility === 'bio'"
      class="about-content__section"
   >
      <Bio />
   </section>
   <section
      v-show="currentContentVisibility === 'interest'"
      class="about-content__section"
   >
      <Interest />
   </section>
   <section
      v-show="currentContentVisibility === 'education'"
      class="about-content__section"
   >
      <Education />
   </section>
   <section
      v-show="currentContentVisibility === 'music'"
      class="about-content__section"
   >
      <Music />
   </section>
   <section
      v-show="currentContentVisibility === 'skating'"
      class="about-content__section"
   >
      <Skating />
   </section>
   <section
      v-show="currentContentVisibility === 'football'"
      class="about-content__section"
   >
      <Football />
   </section>
</template>

<style scoped lang="scss">
.about-content__section {
   padding: 10px 15px;
   height: 100%;
   overflow-y: scroll;
   &::-webkit-scrollbar {
      width: 2px;
   }
}
</style>
