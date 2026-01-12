import type { LucideIcon } from "lucide-react";

// --- НАВИГАЦИЯ ---
export interface NavLink {
  label: string;
  href: string;
}

// --- HERO СЕКЦИЯ ---
export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  highlightedWord: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  stats: HeroStat[];
}

// --- УСЛУГИ ---
export interface ServiceFeature {
  text: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  // Tailwind градиент для иконки: "from-[#1e88e5] to-[#0ea5e9]"
  colorGradient: string;
  // Tailwind тень: "shadow-[#1e88e5]/20"
  shadowColor: string;
}

// --- СТАТИСТИКА ---
export interface Stat {
  id: string;
  icon: LucideIcon;
  value: string;
  label: string;
  colorGradient: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}

// --- ОТЗЫВЫ ---
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  // Опционально: URL фото если хотите использовать вместо инициалов
  avatarUrl?: string;
  rating: number; // 1-5
}

// --- КОНТАКТЫ ---
export interface ContactInfo {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  // Опционально: ссылка (tel:, mailto:, etc)
  href?: string;
}

export interface ServiceOption {
  id: string;
  value: string;
  label: string;
}

// --- ФОРМА ЗАЯВКИ ---
export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  vehicleModel: string;
  serviceType: string;
  message?: string;
}

// --- FOOTER ---
export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  icon: LucideIcon;
  href: string;
  label: string; // для accessibility
}

// --- SITE CONFIG ---
export interface SiteConfig {
  name: string;
  description: string;
  logoText: string;
  logoHighlight: string;
  year: number;
}
