import type {
  Service,
  Testimonial,
  Stat,
  Feature,
  ContactFormData,
} from "./types/";

// ============================================
// БАЗОВЫЙ URL API
// ============================================
// TODO: Замените на URL вашего API
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

// ============================================
// ПОЛУЧЕНИЕ УСЛУГ
// ============================================
// TODO: Подключите к вашей CMS
export async function getServices(): Promise<Service[]> {
  // Пример для Strapi:
  // const res = await fetch(`${process.env.STRAPI_URL}/api/services?populate=*`)
  // const data = await res.json()
  // return data.data.map(transformService)

  // Пример для Sanity:
  // const query = `*[_type == "service"] { ... }`
  // return await sanityClient.fetch(query)

  // Заглушка - возвращает данные из lib/site-data.ts
  const { services } = await import("./site-data");
  return services;
}

// ============================================
// ПОЛУЧЕНИЕ ОТЗЫВОВ
// ============================================
// TODO: Подключите к вашей CMS или базе данных
export async function getTestimonials(): Promise<Testimonial[]> {
  // Пример для Supabase:
  // const { data } = await supabase
  //   .from('testimonials')
  //   .select('*')
  //   .eq('is_published', true)
  //   .order('created_at', { ascending: false })
  // return data

  const { testimonials } = await import("./site-data");
  return testimonials;
}

// ============================================
// ПОЛУЧЕНИЕ СТАТИСТИКИ
// ============================================
export async function getStats(): Promise<Stat[]> {
  const { stats } = await import("./site-data");
  return stats;
}

// ============================================
// ПОЛУЧЕНИЕ ПРЕИМУЩЕСТВ
// ============================================
export async function getFeatures(): Promise<Feature[]> {
  const { features } = await import("./site-data");
  return features;
}

// ============================================
// ОТПРАВКА ФОРМЫ КОНТАКТОВ
// ============================================
export async function submitContactForm(
  data: ContactFormData,
): Promise<{ success: boolean; message: string }> {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Ошибка отправки формы");
  }

  return response.json();
}

// ============================================
// ХЕЛПЕРЫ ДЛЯ ТРАНСФОРМАЦИИ ДАННЫХ ИЗ CMS
// ============================================
// TODO: Добавьте функции для преобразования данных из вашей CMS

// Пример для Strapi:
// function transformService(strapiService: any): Service {
//   return {
//     id: strapiService.id,
//     title: strapiService.attributes.title,
//     description: strapiService.attributes.description,
//     icon: getIconByName(strapiService.attributes.icon),
//     features: strapiService.attributes.features.map((f: any) => f.text),
//     colorGradient: strapiService.attributes.colorGradient,
//     shadowColor: strapiService.attributes.shadowColor,
//   }
// }
