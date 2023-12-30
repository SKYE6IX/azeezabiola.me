<template>
   <div class="page">
      <div class="page__inner">
         <Header />
         <slot />
      </div>
   </div>
</template>

<style scoped lang="scss">
.page {
   width: 100%;
   height: 100vh;
   background: $black-color;
   padding: 69px;
}
.page__inner {
   height: 100%;
   width: 100%;
   background: $primary-black-gaze;
   border: 1px solid $line-color;
   border-radius: 8px;
}
</style>
