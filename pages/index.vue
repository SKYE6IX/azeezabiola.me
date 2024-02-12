<template>
   <div class="index-page">
      <BlueEffects class-name="blue-effect" />
      <GreenEffect class-name="green-effect" />
      <div class="blue-effect-mobile"></div>
      <div class="green-effect-mobile"></div>
      <HomeBlock />
   </div>
</template>

<style lang="scss">
.index-page {
   height: 100%;
   width: 100%;
   overflow: hidden;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
}
.blue-effect,
.green-effect {
   position: absolute;
   width: 524.7px;
   height: 489.7px;
   svg {
      height: 100%;
      width: 100%;
   }
}
.green-effect {
   top: -50px;
   right: 300px;
}
.blue-effect {
   right: -50px;
   bottom: -60px;
}
@include breakpoint(small) {
   .blue-effect,
   .green-effect {
      display: none;
   }
   .blue-effect-mobile,
   .green-effect-mobile {
      position: absolute;
      width: 200px;
      height: 200px;
      opacity: 0.4;
      -webkit-filter: blur(174px);
      filter: blur(174px);
   }
   .green-effect-mobile {
      top: 60.5px;
      left: 0px;
      background-color: #43d9ad;
      transform: rotate(-94.31deg);
   }
   .blue-effect-mobile {
      top: 179px;
      right: 0px;
      transform: rotate(-346.49deg);
      background-color: #4d5bce;
   }
}
</style>
