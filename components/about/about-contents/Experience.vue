<template>
   <div class="experience">
      <h3 class="experience__title">Frontend Developer: TechNex Innovations</h3>
      <h4 class="experience__country">Greece</h4>
      <span class="experience__year">2020-2023</span>
      <div class="experience__list-container">
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Implemented and maintained frontend web applications, resulting
               in a 20% reduction in page load speeds and conversion rates by
               utilizing modern web technologies such as
               <b>React</b>, <b>Next.JS </b>and <b>Typescript</b> with best
               practices for user experience and accessibility.
            </p>
         </div>
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Collaborated with a team of designers and backend developers to
               create a cohesive user experience for a web application, leading
               to a 40% increase in user engagement.
            </p>
         </div>
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Designed and developed a reusable component library for future
               use, resulting in a 40% divreduction in development time for new
               projects.
            </p>
         </div>
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Developed and maintained <b>RESTful APIs</b>, enabling seamless
               communication between web applications and third-party services,
               resulting in a 30% increase in efficiency.
            </p>
         </div>
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Proficiently use <b>Git</b> and other version control systems to
               manage and track changes collaboratively.
            </p>
         </div>
      </div>
   </div>
   <div class="experience">
      <h3 class="experience__title">Computer Technical Specialist: Omatek</h3>
      <h4 class="experience__country">Lagos,Nigeria</h4>
      <span class="experience__year">2013-2018</span>
      <div class="experience__list-container">
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Led a team in the engineering department, efficiently resolving
               both hardware and software issues for diverse computer systems.
            </p>
         </div>
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Demonstrated proficiency in installing various operating systems
               such as Mac OS and Windows, tailored to client specifications.
            </p>
         </div>
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Proficiently handled a wide range of computer brands including
               MAC, HP, Dell, ASUS, etc. Providing comprehensive technical
               support.
            </p>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
@mixin text-style($color, $weight) {
   font-weight: $weight;
   font-style: normal;
   line-height: normal;
   color: $color;
}
.experience {
   width: 100%;
}
.experience__title {
   font-size: 1.6875rem;
   word-spacing: -10px;
   @include text-style($white-color, 600);
}
.experience__country {
   font-size: 1.4375rem;
   @include text-style($secondary-grey-color, 400);
}
.experience__year {
   font-size: 1.1875rem;
   @include text-style($secondary-grey-color, 300);
}
.experience__list-container {
   width: 100%;
}
.experience__item {
   display: flex;
   gap: 2px;
   margin-bottom: 10px;
}
.experience__item-bullet {
   color: $secondary-grey-color;
}
.experience__item-text {
   font-size: 1.125rem;
   font-weight: 450;
   font-style: normal;
   line-height: 27px;
   color: $secondary-grey-color;
   word-spacing: -5.5px;
}

@include media-query("max-width", "540px") {
   .experience__item-text {
      font-size: 1rem;
      font-weight: 600;
      line-height: 24px;
      word-spacing: -5.5px;
   }
}
</style>
