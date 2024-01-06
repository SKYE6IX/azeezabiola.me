<template>
   <div class="index-page">
      <BlueEffects class-name="blue-effect" />
      <GreenEffect class-name="green-effect" />
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
   width: 454px;
   height: 492px;
   svg {
      height: 100%;
      width: 100%;
   }
}
.green-effect {
   top: 50px;
   left: 870px;
}
.blue-effect {
   right: 110px;
   bottom: 40px;
}
</style>
