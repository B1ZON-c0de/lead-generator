import { ContactFormData } from "../types";

export const saveLeadAirtable = async (
  AIRTABLE_TOKEN: string,
  AIRTABLE_DB_ID: string,
  TABLE_NAME: string,
  data: ContactFormData,
) => {
  const url = `https://api.airtable.com/v0/${AIRTABLE_DB_ID}/${TABLE_NAME}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: data.fullName,
              Phone: data.phone,
              Auto: data.vehicleModel,
              Service: data.serviceType,
              Date: new Date().toISOString(),
            },
          },
        ],
        typecast: true,
      }),
    });

    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (e) {
    console.error("Airtable Error", e);
  }
};
