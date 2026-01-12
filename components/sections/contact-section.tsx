"use client";

import type React from "react";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";

import { contactInfo, serviceOptions } from "@/lib/site-data";
import type { ContactFormData } from "@/lib/types";
import { submitContactForm } from "@/lib/actions/actions";

interface ContactSectionProps {
  // TODO: Передайте обработчик отправки формы
  onSubmit?: (data: ContactFormData) => Promise<void>;
  title?: string;
  subtitle?: string;
  description?: string;
}

export function ContactSection({
  onSubmit,
  title = "Готовы Восстановить",
  subtitle = "Ваш Автомобиль?",
  description = "Заполните форму для индивидуального расчёта или записи на ближайшее время. Наши специалисты свяжутся с вами в течение 2 рабочих часов.",
}: ContactSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Состояние формы
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    vehicleModel: "",
    serviceType: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        console.log("Form submitted");
      }

      setFormData({
        fullName: "",
        email: "",
        vehicleModel: "",
        serviceType: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Ошибка отправки. Попробуйте ещё раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0f1a] to-transparent z-10 pointer-events-none" />

      <div className="py-24 md:py-36 bg-gradient-to-b from-[#0a0f1a] via-[#0f172a] to-[#0a1628]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e88e5]/5 via-transparent to-[#a855f7]/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1e88e5]/10 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            >
              <div>
                <span className="inline-block text-[#60a5fa] text-sm font-medium tracking-widest uppercase mb-4">
                  Свяжитесь с нами
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight text-balance">
                  {title} <span className="gradient-text">{subtitle}</span>
                </h2>
                <p className="text-[#94a3b8] leading-relaxed text-base md:text-lg">
                  {description}
                </p>
              </div>

              {/* Contact info cards - данные из contactInfo */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/50 border border-[#1e293b]/50 hover:border-[#60a5fa]/40 transition-all duration-500 group ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-12"
                    } ${item.href ? "cursor-pointer" : "cursor-default"}`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e88e5] to-[#22d3ee] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#94a3b8] uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-white font-medium group-hover:text-[#60a5fa] transition-colors duration-500">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div
              className={`bg-gradient-to-br from-[#0f172a]/90 to-[#0a1628]/90 backdrop-blur-xl border border-[#1e293b]/50 rounded-3xl p-6 md:p-8 lg:p-10 transition-all duration-1000 ease-out hover:border-[#60a5fa]/30 hover:shadow-2xl hover:shadow-[#1e88e5]/10 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#94a3b8] uppercase tracking-wide">
                      Ваше Имя
                    </label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                      className="bg-[#020617]/80 border-[#1e293b] text-white placeholder:text-[#475569] focus:border-[#1e88e5] h-12 rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-[#1e88e5]/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#94a3b8] uppercase tracking-wide">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-[#020617]/80 border-[#1e293b] text-white placeholder:text-[#475569] focus:border-[#1e88e5] h-12 rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-[#1e88e5]/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#94a3b8] uppercase tracking-wide">
                    Марка и Модель Авто
                  </label>
                  <Input
                    placeholder="напр. 2024 Tesla Model S"
                    value={formData.vehicleModel}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleModel: e.target.value })
                    }
                    required
                    className="bg-[#020617]/80 border-[#1e293b] text-white placeholder:text-[#475569] focus:border-[#1e88e5] h-12 rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-[#1e88e5]/10"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#94a3b8] uppercase tracking-wide">
                    Интересующая Услуга
                  </label>
                  {/* Выбор услуги - данные из serviceOptions */}
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, serviceType: value })
                    }
                  >
                    <SelectTrigger className="bg-[#020617]/80 border-[#1e293b] text-white focus:border-[#1e88e5] h-12 rounded-xl">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0f172a] border-[#1e293b]">
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.id} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#94a3b8] uppercase tracking-wide">
                    Сообщение (опционально)
                  </label>
                  <Textarea
                    placeholder="Расскажите о специфических пожеланиях..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-[#020617]/80 border-[#1e293b] text-white placeholder:text-[#475569] focus:border-[#1e88e5] resize-none rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-[#1e88e5]/10"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#1e88e5] to-[#0ea5e9] hover:from-[#1976d2] hover:to-[#0284c7] text-white rounded-xl uppercase tracking-wide font-semibold h-14 shadow-xl shadow-[#1e88e5]/25 hover:shadow-[#1e88e5]/40 transition-all duration-500 hover:scale-[1.02] group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  {isSubmitting ? "Отправка..." : "Получить Бесплатный Расчёт"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
