// ============================================
// ДАННЫЕ САЙТА - РЕДАКТИРУЙТЕ ЗДЕСЬ
// ============================================
// Все данные лендинга собраны в одном месте.
// Импортируйте нужные данные в компоненты.

import { Droplets, Armchair, Shield, Car, ThumbsUp, Clock, Phone, MapPin, Twitter, Instagram } from "lucide-react"
import type {
  NavLink,
  HeroContent,
  Service,
  Stat,
  Feature,
  Testimonial,
  ContactInfo,
  ServiceOption,
  FooterLink,
  SocialLink,
  SiteConfig,
} from "@/types"

// --- КОНФИГУРАЦИЯ САЙТА ---
// TODO: Замените на данные вашей компании
export const siteConfig: SiteConfig = {
  name: "Elite Car Wash",
  description: "Премиум детейлинг студия для люксовых автомобилей",
  logoText: "ELITE",
  logoHighlight: "CARWASH",
  year: 2026,
}

// --- НАВИГАЦИЯ ---
// TODO: Добавьте/удалите ссылки навигации
export const navLinks: NavLink[] = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#why-us" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contact" },
]

// --- HERO СЕКЦИЯ ---
// TODO: Замените текст и статистику на свои данные
export const heroContent: HeroContent = {
  badge: "Премиум Детейлинг Студия",
  title: "Идеальный Блеск для Вашего",
  highlightedWord: "Шедевра",
  description:
    "Профессиональные услуги детейлинга для премиальных автомобилей. Ощутите элитное качество с нашей экспертной коррекцией ЛКП и керамической защитой.",
  primaryButtonText: "Записаться на детейлинг",
  secondaryButtonText: "Смотреть галерею",
  stats: [
    { value: "15+", label: "Лет опыта" },
    { value: "20k+", label: "Авто обслужено" },
    { value: "99%", label: "Довольных клиентов" },
  ],
}

// --- УСЛУГИ ---
// TODO: Добавьте свои услуги с описаниями
export const services: Service[] = [
  {
    id: "exterior",
    icon: Droplets,
    title: "Наружная Мойка",
    description:
      "Двухфазная ручная мойка, деконтаминация кузова и нанесение премиального силанта для гидрофобной защиты.",
    features: ["Мойка дисков и барабанов", "Обработка глиной"],
    colorGradient: "from-[#1e88e5] to-[#0ea5e9]",
    shadowColor: "shadow-[#1e88e5]/20",
  },
  {
    id: "interior",
    icon: Armchair,
    title: "Детейлинг Интерьера",
    description: "Полная паровая стерилизация, восстановление кожи и тщательная чистка ковров для салона как нового.",
    features: ["Кондиционирование кожи", "Нейтрализация запахов"],
    colorGradient: "from-[#22d3ee] to-[#06b6d4]",
    shadowColor: "shadow-[#22d3ee]/20",
  },
  {
    id: "ceramic",
    icon: Shield,
    title: "Керамическое Покрытие",
    description:
      "Многоэтапная коррекция ЛКП с нанесением ультратвёрдого 9H керамического покрытия для долговременной защиты.",
    features: ["5-летняя защита", "Зеркальный финиш"],
    colorGradient: "from-[#a855f7] to-[#8b5cf6]",
    shadowColor: "shadow-[#a855f7]/20",
  },
]

// --- СТАТИСТИКА ---
// TODO: Обновите цифры статистики
export const stats: Stat[] = [
  { id: "experience", icon: Shield, value: "15+", label: "Лет Опыта", colorGradient: "from-[#1e88e5] to-[#0ea5e9]" },
  { id: "cars", icon: Car, value: "20k+", label: "Авто Обслужено", colorGradient: "from-[#22d3ee] to-[#06b6d4]" },
  {
    id: "satisfaction",
    icon: ThumbsUp,
    value: "99%",
    label: "Довольных Клиентов",
    colorGradient: "from-[#a855f7] to-[#8b5cf6]",
  },
  { id: "booking", icon: Clock, value: "24ч", label: "Онлайн Запись", colorGradient: "from-[#f472b6] to-[#ec4899]" },
]

// --- ПРЕИМУЩЕСТВА ---
// TODO: Добавьте преимущества вашей компании
export const features: Feature[] = [
  {
    id: "certified",
    title: "Сертифицированные Профессионалы",
    description: "Наши детейлеры сертифицированы IDA и обучены ведущими брендами покрытий.",
  },
  {
    id: "eco",
    title: "Экологичный Процесс",
    description:
      "Мы используем водосберегающие технологии и биоразлагаемую химию, безопасную для вашего авто и планеты.",
  },
]

// --- ОТЗЫВЫ ---
// TODO: Замените на реальные отзывы клиентов
// Подключите к CMS или базе данных для динамической загрузки
export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Внимание к деталям просто невероятное. Мой Porsche выглядит лучше, чем когда я забирал его из салона. Керамическое покрытие — это просто магия.",
    author: "Джеймс Миллер",
    role: "Владелец 911 GT3",
    initials: "ДМ",
    avatarUrl: undefined, // TODO: Добавьте URL фото
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Обслуживаю здесь весь свой автопарк. Неизменно профессиональный подход и безупречные результаты каждый раз. Лучший интерьерный детейлинг в городе.",
    author: "Сара Чен",
    role: "Директор Автопарка",
    initials: "СЧ",
    avatarUrl: undefined,
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Наконец-то нашёл мастерскую, которая понимает, как работать с экзотической краской. Их коррекция ЛКП — настоящее волшебство.",
    author: "Михаил Росс",
    role: "Коллекционер",
    initials: "МР",
    avatarUrl: undefined,
    rating: 5,
  },
]

// --- КОНТАКТНАЯ ИНФОРМАЦИЯ ---
// TODO: Замените на реальные контакты
export const contactInfo: ContactInfo[] = [
  {
    id: "phone",
    icon: Phone,
    label: "Телефон",
    value: "+7 (800) ELITE-SHINE",
    href: "tel:+78001234567",
  },
  {
    id: "address",
    icon: MapPin,
    label: "Адрес",
    value: "Москва, ул. Премиум Детейлинг, 123",
    href: "https://maps.google.com/?q=...", // TODO: Добавьте реальную ссылку на карту
  },
  {
    id: "hours",
    icon: Clock,
    label: "Часы работы",
    value: "Пн-Вс: 9:00 - 21:00",
  },
]

// --- ОПЦИИ УСЛУГ ДЛЯ ФОРМЫ ---
// TODO: Синхронизируйте с вашим списком услуг
export const serviceOptions: ServiceOption[] = [
  { id: "exterior", value: "exterior", label: "Наружный Детейлинг" },
  { id: "interior", value: "interior", label: "Детейлинг Интерьера" },
  { id: "ceramic", value: "ceramic", label: "Керамическое Покрытие" },
  { id: "full", value: "full", label: "Полный Комплекс" },
]

// --- FOOTER ССЫЛКИ ---
// TODO: Обновите ссылки на ваши страницы
export const footerLinks: FooterLink[] = [
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Условия использования", href: "/terms" },
  { label: "Настройки cookie", href: "/cookies" },
]

// --- СОЦИАЛЬНЫЕ СЕТИ ---
// TODO: Добавьте ваши социальные сети
export const socialLinks: SocialLink[] = [
  { id: "twitter", icon: Twitter, href: "https://twitter.com/...", label: "Twitter" },
  { id: "instagram", icon: Instagram, href: "https://instagram.com/...", label: "Instagram" },
]
