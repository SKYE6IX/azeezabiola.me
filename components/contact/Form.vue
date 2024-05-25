<script setup lang="ts">
const formInputs = ref({
   name: "",
   email: "",
   message: ""
});

async function sumbit() {
   const { data, pending, error } = await useFetch("/api/email", {
      method: "post",
      body: {
         name: formInputs.value.name,
         email: formInputs.value.email,
         message: formInputs.value.message
      }
   });
}
</script>
<template>
   <form class="contact-form" data-static-form-name="contact">
      <div class="contact-form__input">
         <label for="name">_name:</label>
         <input type="text" name="name" v-model="formInputs.name" />
      </div>
      <div class="contact-form__input">
         <label for="email">_email:</label>
         <input type="email" name="email" v-model="formInputs.email" />
      </div>
      <div class="contact-form__input">
         <label for="message">_message:</label>
         <textarea name="message" v-model="formInputs.message"></textarea>
      </div>
      <button class="contact-form__button" type="submit">submit-message</button>
   </form>
</template>

<style scoped lang="scss">
%text-style {
   font-family: $font-fira;
   font-size: 1rem;
   font-weight: 450;
   font-style: normal;
   line-height: normal;
   color: $secondary-grey-color;
}
.contact-form__input {
   margin-bottom: 24px;
   width: 370px;
   display: flex;
   flex-direction: column;
   gap: 10px;
   input,
   textarea {
      padding: 10px 0px 10px 15px;
      background-color: rgba(1, 18, 33, 1);
      border: 1px solid #1e2d3d;
      border-radius: 8px;
      caret-color: $secondary-grey-color;
      @extend %text-style;
      transition: all 0.3s ease-in;
      &:focus {
         border: 1px solid #607b96;
         box-shadow: 0px 0px 0px 2px rgba(96, 123, 150, 0.3);
         outline: none;
      }
   }
   label {
      @extend %text-style;
   }
   textarea {
      height: 145px;
      resize: none;
   }
}
.contact-form__button {
   padding: 10px 15px;
   border: none;
   border-radius: 8px;
   outline: none;
   background: rgba(28, 43, 58, 1);
   font-family: $font-fira;
   font-size: 0.875rem;
   font-weight: 450;
   font-style: normal;
   line-height: normal;
   color: $white-color;
   cursor: pointer;
   transition: all 0.3s ease-in;
   &:hover {
      background: rgba(38, 59, 80, 1);
   }
}
@include media-query("max-width", "540px") {
   .contact-form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   .contact-form__input {
      width: calc(100% - 30px);
      margin-bottom: 18px;
   }
   .contact-form__button {
      align-self: flex-start;
      margin-left: 27px;
   }
}
</style>
