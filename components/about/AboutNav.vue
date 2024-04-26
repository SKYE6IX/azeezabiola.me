<script setup lang="ts">
interface Prop {
   changeVisibility: (visible: string) => void;
   currentVisibility: string;
}
defineProps<Prop>();
</script>

<template>
   <div class="about-nav">
      <button
         @click="changeVisibility('professional')"
         :class="{ active: currentVisibility === 'professional' }"
         class="button"
      >
         <ProIcon />
      </button>
      <button
         @click="changeVisibility('personal-info')"
         class="button"
         :class="{ active: currentVisibility === 'personal-info' }"
      >
         <PersonalIcon />
      </button>
      <button
         @click="changeVisibility('hobbies')"
         :class="{ active: currentVisibility === 'hobbies' }"
         class="button"
      >
         <HobbiesIcon />
      </button>
   </div>
</template>

<style scoped lang="scss">
.about-nav {
   width: 100%;
   display: inline-flex;
   flex-direction: column;
   gap: 15px;
   align-items: center;
   padding-top: 17px;
}
.button {
   background: none;
   border: none;
   cursor: pointer;
   transition: all 0.3s ease-in;
   svg {
      opacity: 0.4;
   }
}
.button__text {
   display: none;
}
.active {
   svg {
      opacity: 1;
   }
}

@include breakpoint(small) {
   .about-nav {
      display: none;
   }
}
</style>
