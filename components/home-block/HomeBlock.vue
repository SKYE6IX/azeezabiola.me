<template>
   <div class="home-block">
      <div class="home-block__hero-content">
         <div class="home-block__text">
            <div class="home-block__text-title">
               <h5>Hi all. I am</h5>
               <h3>Azeez Abiola</h3>
               <h4>> Front-end developer</h4>
            </div>
            <div class="home-block__text-sub">
               <p>
                  <span> // </span> I create web application to help business do
                  better online
               </p>
               <p>
                  <span> // </span> Turning idea to real life product is what i
                  enjoy doing the most
               </p>
               <p><span> // </span> You can also see it on my Github page</p>
               <p class="home-block__link">
                  const <span>githubLink</span> <span>=</span>
                  <a href=""> “https://github.com/example/url”</a>
               </p>
            </div>
         </div>
         <div class="home-block__marquee">
            <Marquee />
         </div>
      </div>
      <div class="home-block__game">
         <SnakeGame />
      </div>
   </div>
</template>

<style scoped lang="scss">
@import "./assets/home-block.scss";
</style>
