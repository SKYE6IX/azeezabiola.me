<template>
   <div class="experience">
      <h3 class="experience__title">Frontend Developer: TechNex Innovations</h3>
      <h4 class="experience__country">Greece(remote)</h4>
      <span class="experience__year">2020-2023</span>
      <div class="experience__list-container">
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Developed and maintained frontend web applications from scratch
               utilizing modern web technologies such as <b>React.js</b>,
               <b>Next.js</b> and <b>Typescripts</b> with best practices.
            </p>
         </div>
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Collaborated with UI/UX designers, backend developer and project
               manager to create a cohesive user experience for web
               applications.
            </p>
         </div>
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Optimized web applications for maximum speed and scalability,
               resulting in a 40% decrease in page load time and a 20% increase
               in overall site traffic.
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
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Participated in cross-team projects, technical events, and
               research initiatives to develop innovative frontend solutions
               that enhanced user experience and streamlined application
               performance
            </p>
         </div>
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Demonstrated strong proficiency in JavaScript, including advanced
               DOM manipulation and comprehensive understanding of the
               JavaScript object model, to build dynamic, responsive web
               applications.
            </p>
         </div>
         <div class="experience__item">
            <span class="experience__item-bullet">&#x2022;</span>
            <p class="experience__item-text">
               Implemented unit tests with Jest, resulting in a 30% reduction in
               bug related delays and a 20% increase in overall code quality
            </p>
         </div>
      </div>
   </div>
   <div class="experience">
      <h3 class="experience__title">Computer Technical Specialist: Omatek</h3>
      <h4 class="experience__country">Lagos, Nigeria</h4>
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
   font-family: $font-lato;
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
   @include text-style($white-color, 700);
}
.experience__country {
   font-size: 1.4375rem;
   @include text-style($secondary-grey-color, 500);
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
   font-family: $font-lato;
   font-size: 1.125rem;
   font-weight: 500;
   font-style: normal;
   line-height: 27px;
   color: $secondary-grey-color;
}

@include media-query("max-width", "540px") {
   .experience__item-text {
      font-size: 1rem;
      line-height: 24px;
   }
}
</style>
