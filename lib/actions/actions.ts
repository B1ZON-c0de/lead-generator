"use server";

import { ContactFormData } from "../types";
import { saveLeadAirtable } from "../uttils/save-lead-airtable";
import { sendMessageTg, sendPhoneTg } from "../uttils/send-message-tg";

export async function submitContactForm(formData: ContactFormData) {
  const TG_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
  const TG_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN!;
  const AIRTABLE_DB_ID = process.env.AIRTABLE_DB_ID!;
  const TABLE_NAME = "Table 1";

  await saveLeadAirtable(AIRTABLE_TOKEN, AIRTABLE_DB_ID, TABLE_NAME, formData);
  await sendMessageTg(TG_TOKEN, TG_CHAT_ID, formData);
  await sendPhoneTg(TG_TOKEN, TG_CHAT_ID, formData);
}
