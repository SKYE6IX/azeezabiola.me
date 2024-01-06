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
      >
         <ProIcon />
      </button>
      <button
         @click="changeVisibility('personal-info')"
         :class="{ active: currentVisibility === 'personal-info' }"
      >
         <PersonalIcon />
      </button>
      <button
         @click="changeVisibility('hobbies')"
         :class="{ active: currentVisibility === 'hobbies' }"
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
button {
   background: none;
   border: none;
   cursor: pointer;
   transition: all 0.3s ease-in;
   svg {
      opacity: 0.4;
   }
}
.active {
   svg {
      opacity: 1;
   }
}
</style>
