import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";
import { z } from "zod";

const mailSchema = z.object({
   name: z.string(),
   email: z.string().email(),
   message: z.string()
});

const mailerSend = new MailerSend({
   apiKey: process.env.NUXT_MAIL_API_TOKEN || ""
});

const recipient = [new Recipient("skye6ix@gmail.com")];
const sentFrom = new Sender("skye6ix@gmail.com", "Azeez Abiola");
export default defineEventHandler(async (event) => {
   const result = await readValidatedBody(event, (body) =>
      mailSchema.safeParse(body)
   );
   if (!result.success) {
      console.log("I run");
      throw result.error.issues;
   }
   const options = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipient)
      .setSubject("You have a new email")
      .setText("Hello To You");
   // .setHtml(`
   // <h4>${result.data.name}</h4>
   // <h5>${result.data.email}</h5>
   // <p>${result.data.message}</p>
   // `);
   try {
      await mailerSend.email.send(options);
   } catch (error) {
      console.log(error);
   }
   return {
      status: "success",
      message: "Email sent"
   };
});
