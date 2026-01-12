import { serviceOptions } from "../site-data";
import { ContactFormData } from "../types";

export const sendMessageTg = async (
  TG_TOKEN: string,
  TG_CHAT_ID: string,
  data: ContactFormData,
) => {
  const message = `
  ✨ <b>НОВАЯ ЗАЯВКА (CULT DETAILING)</b>

  👤 <b>Клиент:</b> ${data.fullName}
  📞 <b>Контакты:</b> <code>${data.phone}</code>
  🚘 <b>Автомобиль:</b> ${data.vehicleModel}

  💎 <b>Услуга:</b>
  ${serviceOptions.find((option) => option.value === data.serviceType)?.label}

  📝 <b>Комментарий:</b>
  <i>${data.message || "— Пусто —"}</i>

  #new_lead #website
  `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: message,
          phone_number: data.phone,
          parse_mode: "HTML",
        }),
      },
    );

    if (!response.ok) {
      throw new Error(
        `Telegram API error: ${response.status} ${response.statusText}`,
      );
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
};

export const sendPhoneTg = async (
  TG_TOKEN: string,
  TG_CHAT_ID: string,
  data: ContactFormData,
) => {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TG_TOKEN}/sendContact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          phone_number: data.phone,
          first_name: data.fullName,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(
        `Telegram API error: ${response.status} ${response.statusText}`,
      );
    }
  } catch (error) {
    console.error("Error sending phone to Telegram:", error);
  }
};
