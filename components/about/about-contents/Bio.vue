<template>
   <p class="bio">
      Highly skilled Frontend Developer with 3+ years of experience in
      developing and implementing frontend architectures that have resulted in
      significant increases in page load speed and user engagement. Proficient
      in collaborating with backend teams to integrate
      <b>user-facing</b> elements with <b>server-side</b> logic, implementing
      automated <b>testing</b> platforms, and <b>optimising</b> components for
      maximum performance. Adept at identifying and resolving performance and
      scalability issues, staying up-to-date with emerging technologies and
      frameworks, and reducing development time for new projects.
   </p>
</template>
<style scoped lang="scss">
.bio {
   width: 100%;
   font-size: 1.125rem;
   font-weight: 500;
   font-style: normal;
   line-height: 27px;
   word-spacing: -3px;
   color: $secondary-grey-color;
}
@include media-query("max-width", "540px") {
   .bio {
      font-size: 1rem;
      line-height: 24px;
   }
}
</style>
