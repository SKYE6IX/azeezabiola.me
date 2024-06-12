<script setup lang="ts">
const config = useRuntimeConfig();
interface Response {
   message: string;
   status: "success" | "rejected";
}
const initialInputState = {
   name: "",
   email: "",
   message: ""
};
const formInputs = ref({
   name: "",
   email: "",
   message: ""
});
const formErrors = ref<String[]>();
function formValidation() {
   formErrors.value = [];
   const { name, email, message } = formInputs.value;
   if (name && email && message) {
      return true;
   } else {
      !name && formErrors.value.push("name");
      !email && formErrors.value.push("email");
      !message && formErrors.value.push("message");
      return false;
   }
}

const isSendingMessage = ref(false);
const pending = ref(false);
const showMessageState = ref<"open" | "close" | null>(null);
const responseMessage = ref("");
function sumbit() {
   if (!formValidation()) return;
   isSendingMessage.value = true;
   pending.value = true;
   $fetch<Response>(config.public.mailApi, {
      method: "POST",
      body: {
         name: formInputs.value.name,
         email: formInputs.value.email,
         message: formInputs.value.message
      }
   })
      .then((res) => {
         pending.value = false;
         showMessageState.value = "open";
         formInputs.value = initialInputState;
         if (res.status === "success") {
            responseMessage.value = res.message;
         } else if (res.status === "rejected") {
            responseMessage.value = res.message;
         }
         setTimeout(() => {
            showMessageState.value = "close";
            isSendingMessage.value = false;
         }, 3000);
      })
      .catch((err) => {
         console.log(err);
      });
}
</script>
<template>
   <form class="contact-form" @submit.prevent="sumbit">
      <div
         class="contact-form__input"
         :class="{ error: formErrors?.includes('name') }"
      >
         <label for="name">_name:</label>
         <input type="text" name="name" v-model="formInputs.name" />
      </div>
      <div
         class="contact-form__input"
         :class="{ error: formErrors?.includes('email') }"
      >
         <label for="email">_email:</label>
         <input type="email" name="email" v-model="formInputs.email" />
      </div>
      <div
         class="contact-form__input"
         :class="{ error: formErrors?.includes('message') }"
      >
         <label for="message">_message:</label>
         <textarea name="message" v-model="formInputs.message"></textarea>
      </div>
      <div class="contact-form__action">
         <button
            class="contact-form__button action-child"
            :class="{
               active: isSendingMessage
            }"
            type="submit"
         >
            submit-message
         </button>
         <p
            class="contact-form__pending action-child"
            :class="{
               active: pending
            }"
         >
            <span class="pending-letter">s</span>
            <span class="pending-letter">e</span>
            <span class="pending-letter">n</span>
            <span class="pending-letter">d</span>
            <span class="pending-letter">i</span>
            <span class="pending-letter">n</span>
            <span class="pending-letter">g</span>
         </p>
         <p
            class="contact-form__message action-child"
            :class="{
               open: showMessageState === 'open',
               close: showMessageState === 'close'
            }"
         >
            {{ responseMessage }}
         </p>
      </div>
   </form>
</template>

<style scoped lang="scss">
@import "./asset/form.scss";
</style>
