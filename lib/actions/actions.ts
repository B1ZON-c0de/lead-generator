"use server";

import { ContactFormData } from "../types";

export async function submitContactForm(formData: ContactFormData) {
  console.log("Form submitted:", formData);
}
