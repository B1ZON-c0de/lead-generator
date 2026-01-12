import { Header } from "@/components/base/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/base/footer";
import {
  OrganizationJsonLd,
  ServicesJsonLd,
  LocalBusinessJsonLd,
  WebsiteJsonLd,
  FAQJsonLd,
} from "@/components/seo/json-ld";

// TODO: FAQ данные для SEO (вопросы-ответы помогают в выдаче)
const faqItems = [
  {
    question: "Сколько времени занимает керамическое покрытие?",
    answer:
      "Процесс нанесения керамического покрытия занимает от 2 до 3 дней, включая подготовку поверхности, полировку и нанесение нескольких слоёв покрытия.",
  },
  {
    question: "Как долго держится керамическое покрытие?",
    answer:
      "Наше керамическое покрытие 9H держится от 3 до 5 лет при правильном уходе. Мы предоставляем гарантию и рекомендации по уходу.",
  },
  {
    question: "Можно ли записаться онлайн?",
    answer:
      "Да, вы можете записаться онлайн 24/7 через форму на сайте или позвонить нам по телефону. Мы свяжемся с вами в течение 2 часов.",
  },
  {
    question: "Какие марки автомобилей вы обслуживаете?",
    answer:
      "Мы специализируемся на премиальных и люксовых автомобилях всех марок: Porsche, BMW, Mercedes-Benz, Audi, Ferrari, Lamborghini и других.",
  },
];

export default function Home() {
  return (
    <>
      {/* JSON-LD для SEO */}
      <WebsiteJsonLd />
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <ServicesJsonLd />
      <FAQJsonLd items={faqItems} />

      <main className="min-h-screen bg-background">
        {/*
          HEADER
          - Навигация берётся из lib/site-data.ts -> navLinks
          - Логотип из lib/site-data.ts -> siteConfig
        */}
        <Header />

        {/*
          HERO СЕКЦИЯ
          Props:
          - backgroundImage: string - путь к фоновому изображению
          - onPrimaryClick: () => void - обработчик основной кнопки
          - onSecondaryClick: () => void - обработчик вторичной кнопки

          Данные берутся из lib/site-data.ts -> heroContent
        */}
        <HeroSection backgroundImage="/luxury-black-porsche-911-in-dark-dramatic-studio-li.jpg" />

        {/*
          УСЛУГИ
          Props:
          - customServices: Service[] - массив услуг из CMS
          - title, subtitle, description: string - заголовки секции

          Данные по умолчанию из lib/site-data.ts -> services
        */}
        <ServicesSection />

        {/*
          СТАТИСТИКА И ПРЕИМУЩЕСТВА
          Props:
          - customStats: Stat[] - массив статистики
          - customFeatures: Feature[] - массив преимуществ

          Данные по умолчанию из lib/site-data.ts -> stats, features
        */}
        <StatsSection />

        {/*
          ОТЗЫВЫ
          Props:
          - customTestimonials: Testimonial[] - массив отзывов из CMS
          - title, subtitle: string - заголовки секции

          Данные по умолчанию из lib/site-data.ts -> testimonials
        */}
        <TestimonialsSection />

        {/*
          КОНТАКТНАЯ ФОРМА
          Props:
          - onSubmit: (data: ContactFormData) => Promise<void> - обработчик формы
          - title, subtitle, description: string - заголовки секции

          Контактные данные из lib/site-data.ts -> contactInfo
          Опции услуг из lib/site-data.ts -> serviceOptions
        */}
        <ContactSection />

        {/*
          FOOTER
          - Ссылки из lib/site-data.ts -> footerLinks
          - Соцсети из lib/site-data.ts -> socialLinks
          - Копирайт из lib/site-data.ts -> siteConfig
        */}
        <Footer />
      </main>
    </>
  );
}
