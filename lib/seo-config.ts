export const seoConfig = {
  // --- БАЗОВАЯ ИНФОРМАЦИЯ ---
  siteName: "Elite Car Wash",
  siteUrl: "https://cult-detailing.site/", // TODO: Замените на ваш домен

  // --- META ТЕГИ ---
  title: {
    default: "Elite Car Wash — Премиум Детейлинг Студия в Новосибирске",
    template: "%s | Elite Car Wash", // Шаблон для страниц: "Услуги | Elite Car Wash"
  },
  description:
    "Профессиональный детейлинг и керамическое покрытие для люксовых автомобилей в Новосибирске. 15+ лет опыта, 20000+ обслуженных авто. Запись онлайн 24/7.",

  // --- КЛЮЧЕВЫЕ СЛОВА ---
  // TODO: Добавьте релевантные ключевые слова для вашего региона
  keywords: [
    "детейлинг москва",
    "керамическое покрытие авто",
    "премиум мойка",
    "полировка автомобиля",
    "защитное покрытие кузова",
    "детейлинг студия",
    "автомойка премиум класса",
    "восстановление лкп",
    "нанокерамика авто",
    "elite car wash",
  ],

  // --- ЛОКАЦИЯ ---
  locale: "ru_RU",
  language: "ru",
  region: "RU",
  city: "Новосибирск",

  // --- КОНТАКТЫ ДЛЯ SEO ---
  // TODO: Замените на реальные контакты
  contact: {
    phone: "+7 (800) 123-45-67",
    phoneFormatted: "+78001234567",
    email: "info@elite-carwash.ru",
    address: {
      street: "ул. Гоголя, 38",
      city: "Новосибирск",
      region: "Новосибирская область",
      postalCode: "630005",
      country: "RU",
    },
  },

  // --- СОЦИАЛЬНЫЕ СЕТИ ---
  // TODO: Добавьте ваши профили
  social: {
    twitter: "@elitecarwash",
    instagram: "elitecarwash_moscow",
    vk: "elitecarwash",
    telegram: "elitecarwash",
    youtube: "@elitecarwash",
  },

  // --- РАБОЧИЕ ЧАСЫ ---
  // TODO: Укажите реальные часы работы
  openingHours: {
    weekdays: "09:00-21:00",
    saturday: "09:00-21:00",
    sunday: "10:00-20:00",
  },

  // --- ИЗОБРАЖЕНИЯ ДЛЯ OG/TWITTER ---
  // TODO: Создайте и загрузите изображения в public/
  images: {
    og: "/og-image.jpg", // Рекомендуемый размер: 1200x630px
    twitter: "/twitter-image.jpg", // Рекомендуемый размер: 1200x600px
    logo: "/logo.png", // Логотип компании
  },

  // --- ВЕРИФИКАЦИЯ ---
  // TODO: Добавьте коды верификации после регистрации
  verification: {
    google: "", // Google Search Console
    yandex: "", // Яндекс.Вебмастер
    bing: "", // Bing Webmaster Tools
  },

  // --- ЦЕНЫ УСЛУГ ДЛЯ SCHEMA ---
  // TODO: Укажите реальные цены
  priceRange: {
    min: 3000,
    max: 150000,
    currency: "RUB",
  },

  // --- РЕЙТИНГ ---
  // TODO: Обновляйте на основе реальных отзывов
  rating: {
    value: 4.9,
    count: 256, // Количество отзывов
  },
};

// --- ТИПЫ УСЛУГ ДЛЯ SCHEMA.ORG ---
// TODO: Добавьте все ваши услуги с ценами
export const servicesSchema = [
  {
    name: "Наружная мойка премиум",
    description:
      "Двухфазная ручная мойка с деконтаминацией кузова и нанесением силанта",
    price: 3000,
    priceCurrency: "RUB",
    duration: "PT2H", // ISO 8601 duration (2 часа)
  },
  {
    name: "Детейлинг интерьера",
    description:
      "Полная паровая стерилизация, восстановление кожи и химчистка салона",
    price: 8000,
    priceCurrency: "RUB",
    duration: "PT4H",
  },
  {
    name: "Керамическое покрытие",
    description:
      "Многоэтапная коррекция ЛКП с нанесением 9H керамического покрытия",
    price: 45000,
    priceCurrency: "RUB",
    duration: "PT48H",
  },
  {
    name: "Полный комплекс детейлинга",
    description:
      "Комплексный детейлинг экстерьера и интерьера с защитными покрытиями",
    price: 75000,
    priceCurrency: "RUB",
    duration: "PT72H",
  },
];
