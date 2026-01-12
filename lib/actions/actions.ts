"use server";

import { ContactFormData } from "../types";
import { sendMessageTg, sendPhoneTg } from "../uttils/send-message-tg";

export async function submitContactForm(formData: ContactFormData) {
  const TG_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
  const TG_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

  await sendMessageTg(TG_TOKEN, TG_CHAT_ID, formData);
  await sendPhoneTg(TG_TOKEN, TG_CHAT_ID, formData);
}
