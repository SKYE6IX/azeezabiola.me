<template>
   <div class="skill">
      <h5 class="skill__title">Soft-Skills:</h5>
      <p class="skill__texts">
         Problem solving, Strong communication, Collaboration, Time management,
         Creativity, Adaptability.
      </p>
   </div>
   <div class="skill">
      <h5 class="skill__title">Frontend-Skills:</h5>
      <p class="skill__texts">
         HTML, CSS, JavaScript, Typescript, React.js, Next.js, Vue, Nuxt, Redux,
         React Query, SASS, Component-based MUI, Styled Components, Framer.
      </p>
   </div>
   <div class="skill">
      <h5 class="skill__title">Backend-Skills:</h5>
      <p class="skill__texts">
         Node.js, Express, RESTful APIs, GraphQL APIs, Web-Socket, NO-SQL
         (MongoDB with Mongoose), SQL (PostgreSQL with Prisma).
      </p>
   </div>
   <div class="skill">
      <h5 class="skill__title">Tools:</h5>
      <p class="skill__texts">VsCode, Figma, Git, Git-Flow, Jest.</p>
   </div>
   <div class="skill">
      <h5 class="skill__title">Languages:</h5>
      <p class="skill__texts">English (Native), Russian (Elementary)</p>
   </div>
</template>

<style scoped lang="scss">
@mixin text-style($color, $weight) {
   font-weight: $weight;
   font-style: normal;
   line-height: normal;
   color: $color;
}
.skill {
   width: 100%;
   margin-bottom: 20px;
}
.skill__title {
   font-size: 1.375rem;
   text-transform: uppercase;
   @include text-style($white-color, 600);
}
.skill__texts {
   font-size: 1.0625rem;
   word-spacing: -6.5px;
   @include text-style($secondary-grey-color, 500);
}
</style>
