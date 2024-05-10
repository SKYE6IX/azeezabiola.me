<template>
   <div class="page">
      <div class="page__inner">
         <Header />
         <slot />
         <div class="page__footer">
            <Footer />
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
.page {
   width: 100%;
   height: 100vh;
   background: $black-color;
   padding: 60px;
   overflow: hidden;
}
.page__inner {
   height: 100%;
   width: 100%;
   background: $primary-black-gaze;
   border: 1px solid $line-color;
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   position: relative;
   overflow: hidden;
}
.page__footer {
   margin-top: auto;
}
@include media-query("max-width", "540px") {
   .page {
      padding: 15px;
   }
   .page__footer {
      display: none;
   }
}
</style>
