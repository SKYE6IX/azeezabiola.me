<template>
   <div class="home-block">
      <div class="home-block__hero-content">
         <div class="home-block__text-container">
            <div class="home-block__title-wrapper">
               <h5 class="title-greeting">Hi! I'm</h5>
               <h3 class="title-name">Azeez Abiola</h3>
               <h4 class="title-job">> Frontend developer</h4>
            </div>
            <div class="home-block__sub-texts-container">
               <p class="sub-text-item">
                  <span> // </span> I create web applications to help business
                  do better online.
               </p>
               <p class="sub-text-item">
                  <span> // </span> Turning idea to real life product is what I
                  enjoy doing the most.
               </p>
               <p class="sub-text-item">
                  <span> // </span> You can checkout my codes on Github.
               </p>
               <p class="sub-text-item link">
                  const <span>githubLink</span> <span>=</span>
                  <NuxtLink href="https://github.com/SKYE6IX" target="_">
                     “https://github.com/SKYE6IX”;</NuxtLink
                  >
               </p>
            </div>
         </div>
         <Marquee />
      </div>
      <div class="home-block__game-container">
         <SnakeGame />
      </div>
      <div class="blue-effect"></div>
      <div class="green-effect"></div>
   </div>
</template>

<style scoped lang="scss">
@import "./assets/home-block.scss";
</style>
