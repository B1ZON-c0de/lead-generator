// ============================================
// JSON-LD СТРУКТУРИРОВАННЫЕ ДАННЫЕ
// ============================================
// Добавляет Schema.org разметку для поисковых систем
// TODO: Обновите данные в lib/seo-config.ts

import { seoConfig, servicesSchema } from "@/lib/seo-config"

// --- ОРГАНИЗАЦИЯ ---
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair", // Тип бизнеса для детейлинга
    "@id": `${seoConfig.siteUrl}/#organization`,
    name: seoConfig.siteName,
    description: seoConfig.description,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}${seoConfig.images.logo}`,
    image: `${seoConfig.siteUrl}${seoConfig.images.og}`,
    telephone: seoConfig.contact.phone,
    email: seoConfig.contact.email,

    // Адрес
    address: {
      "@type": "PostalAddress",
      streetAddress: seoConfig.contact.address.street,
      addressLocality: seoConfig.contact.address.city,
      addressRegion: seoConfig.contact.address.region,
      postalCode: seoConfig.contact.address.postalCode,
      addressCountry: seoConfig.contact.address.country,
    },

    // Геолокация (TODO: добавьте реальные координаты)
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.7558, // Москва, замените на реальные
      longitude: 37.6173,
    },

    // Рабочие часы
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: seoConfig.openingHours.weekdays.split("-")[0],
        closes: seoConfig.openingHours.weekdays.split("-")[1],
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: seoConfig.openingHours.saturday.split("-")[0],
        closes: seoConfig.openingHours.saturday.split("-")[1],
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: seoConfig.openingHours.sunday.split("-")[0],
        closes: seoConfig.openingHours.sunday.split("-")[1],
      },
    ],

    // Ценовой диапазон
    priceRange: `${seoConfig.priceRange.min}₽ - ${seoConfig.priceRange.max}₽`,

    // Агрегированный рейтинг
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: seoConfig.rating.value,
      reviewCount: seoConfig.rating.count,
      bestRating: 5,
      worstRating: 1,
    },

    // Социальные сети
    sameAs: [
      seoConfig.social.instagram && `https://instagram.com/${seoConfig.social.instagram}`,
      seoConfig.social.vk && `https://vk.com/${seoConfig.social.vk}`,
      seoConfig.social.telegram && `https://t.me/${seoConfig.social.telegram}`,
      seoConfig.social.youtube && `https://youtube.com/${seoConfig.social.youtube}`,
    ].filter(Boolean),

    // Способы оплаты
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "RUB",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// --- УСЛУГИ ---
export function ServicesJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Услуги детейлинга",
    description: "Профессиональные услуги детейлинга и керамического покрытия",
    itemListElement: servicesSchema.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "AutoRepair",
          name: seoConfig.siteName,
        },
        offers: {
          "@type": "Offer",
          price: service.price,
          priceCurrency: service.priceCurrency,
          availability: "https://schema.org/InStock",
        },
        // Продолжительность услуги
        ...(service.duration && {
          serviceOutput: {
            "@type": "Thing",
            name: service.name,
          },
        }),
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// --- ХЛЕБНЫЕ КРОШКИ ---
interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${seoConfig.siteUrl}${item.url}`,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// --- FAQ ---
interface FAQItem {
  question: string
  answer: string
}

export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// --- ЛОКАЛЬНЫЙ БИЗНЕС ---
export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${seoConfig.siteUrl}/#localbusiness`,
    name: seoConfig.siteName,
    image: `${seoConfig.siteUrl}${seoConfig.images.og}`,
    telephone: seoConfig.contact.phone,
    email: seoConfig.contact.email,
    url: seoConfig.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: seoConfig.contact.address.street,
      addressLocality: seoConfig.contact.address.city,
      addressRegion: seoConfig.contact.address.region,
      postalCode: seoConfig.contact.address.postalCode,
      addressCountry: seoConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.7558,
      longitude: 37.6173,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: seoConfig.openingHours.weekdays.split("-")[0],
        closes: seoConfig.openingHours.weekdays.split("-")[1],
      },
    ],
    priceRange: "₽₽₽",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: seoConfig.rating.value,
      reviewCount: seoConfig.rating.count,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// --- ВЕБ-САЙТ (для поиска по сайту) ---
export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seoConfig.siteUrl}/#website`,
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.description,
    publisher: {
      "@id": `${seoConfig.siteUrl}/#organization`,
    },
    inLanguage: seoConfig.locale,
    // Поиск по сайту (если есть)
    // potentialAction: {
    //   "@type": "SearchAction",
    //   target: `${seoConfig.siteUrl}/search?q={search_term_string}`,
    //   "query-input": "required name=search_term_string",
    // },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
