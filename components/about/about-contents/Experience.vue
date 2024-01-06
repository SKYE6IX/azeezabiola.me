<template>
   <div class="experience">
      <h3>Frontend Developer: Freelancer</h3>
      <h4>Moscow,Russia</h4>
      <span>2020-present</span>
      <ul class="experience__list">
         <li>
            Developed responsive and interactive web applications using HMTL,CSS
            and JavaScript(React.js,Next.js, Redux, SASS).
         </li>
         <li>
            Collaborated with UI Designers to transform mockups into responsive
            web applications using React.js, Next.js and Styled Components
            increasing mobile traffic by 25%.
         </li>
         <li>
            Built a captivating landing page for a leading car company using
            React.js and Styled Components, enhancing the overall user
            experience
         </li>
         <li>
            Leveraged RESTful and GraphQL APIs to integrate frontend and backend
            functionalities
         </li>
         <li>
            Gained hands-on experience with Webpack, Babel, and NPM in project
            environments, boosting project build efficiencies by 10%
         </li>
      </ul>
   </div>
   <div class="experience">
      <h3>Computer Technical Specialist: Omatek</h3>
      <h4>Lagos,Nigeria</h4>
      <span>2013-2018</span>
      <ul class="experience__list">
         <li>
            Led a team in the engineering department, efficiently resolving both
            hardware and software issues for diverse computer systems.
         </li>
         <li>
            Demonstrated proficiency in installing various operating systems
            such as Mac OS and Windows, tailored to client specifications.
         </li>
         <li>
            Proficiently handled a wide range of computer brands including MAC,
            HP, Dell, ASUS, etc., providing comprehensive technical support.
         </li>
      </ul>
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
   h3 {
      font-size: 1.6875rem;
      @include text-style($white-color, 500);
   }
   h4 {
      font-size: 1.4375rem;
      @include text-style($secondary-grey-color, 450);
   }
   span {
      font-size: 1.1875rem;
      @include text-style($secondary-grey-color, 350);
   }
}
.experience__list {
   li {
      font-size: 1.125rem;
      font-weight: 450;
      font-style: normal;
      line-height: 27px;
      color: $secondary-grey-color;
   }
}
</style>
