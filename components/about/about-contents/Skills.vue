<template>
   <div>
      <div class="skill-block">
         <h5>Soft-Skills:</h5>
         <p>
            Problem solving, Strong communication, Collaboration, Time
            management, Creativity, Adaptability.
         </p>
      </div>
      <div class="skill-block">
         <h5>Frontend-Skills:</h5>
         <p>
            HTML, CSS, JavaScript, Typescript, React.js, Next.js, Vue, Nuxt,
            Redux, React Query, SASS, Component-based MUI, Styled Components,
            Framer.
         </p>
      </div>
      <div class="skill-block">
         <h5>Backend-Skills:</h5>
         <p>
            Node.js, Express, RESTful APIs, GraphQL APIs, Web-Socket, NO-SQL
            (MongoDB with Mongoose), SQL (PostgreSQL with Prisma).
         </p>
      </div>
      <div class="skill-block">
         <h5>Tools:</h5>
         <p>VsCode, Figma, Git, Git-Flow, Jest.</p>
      </div>
      <div class="skill-block">
         <h5>Languages:</h5>
         <p>English (Native), Russian (Elementary)</p>
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
.skill-block {
   margin-bottom: 20px;
}
h5 {
   font-size: 1.375rem;
   @include text-style($white-color, 450);
}
p {
   font-size: 1.0625rem;
   @include text-style($secondary-grey-color, 500);
}
</style>
