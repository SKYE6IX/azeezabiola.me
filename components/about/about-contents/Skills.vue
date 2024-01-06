<template>
   <div>
      <div>
         <h5>Soft:</h5>
         <p>
            Problem solving, Strong communication, Collaboration, Time
            management, Creativity, Adaptability.
         </p>
      </div>
      <div>
         <h5>Frontend Skills:</h5>
         <p>
            HTML, CSS, JavaScript, Typescript, React.js, Next.js, Vue, Nuxt,
            Redux, SASS, Component-based MUI, Styled Components, Framer, Jest.
         </p>
      </div>
      <div>
         <h5>Backend Skills:</h5>
         <p>
            Node.js, Express, RESTful APIs, GraphQL APIs, Web-Socket, NO-SQL
            (MongoDB with Mongoose), SQL (PostgreSQL with Prisma).
         </p>
      </div>
      <div>
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
h5 {
   font-size: 1.375rem;
   @include text-style($white-color, 450);
}
p {
   font-size: 1.0625rem;
   @include text-style($secondary-grey-color, 400);
}
</style>
