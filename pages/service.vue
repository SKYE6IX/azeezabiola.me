<template>
   <div class="service">
      <Service />
   </div>
</template>

<style scoped lang="scss">
.service {
   height: 100%;
   width: 100%;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
}
@include media-query("max-width", "540px") {
   .service {
      align-items: unset;
      justify-content: unset;
   }
}
</style>
