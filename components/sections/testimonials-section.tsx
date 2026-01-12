"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { testimonials } from "@/lib/site-data";
import type { Testimonial } from "@/lib/types";

interface TestimonialsSectionProps {
  // TODO: Передайте данные из CMS или API
  customTestimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

export function TestimonialsSection({
  customTestimonials,
  title = "Нам Доверяют",
  subtitle = "Владельцы Премиум Авто",
}: TestimonialsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Используем переданные данные или дефолтные
  const displayTestimonials = customTestimonials || testimonials;

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

  return (
    <section id="reviews" ref={sectionRef} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0f1a] to-transparent z-10" />

      <div className="py-24 md:py-36 bg-gradient-to-b from-[#0a0f1a] via-[#020617] to-[#0a0f1a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#1e88e5]/5 via-[#22d3ee]/5 to-[#a855f7]/5 rounded-full blur-3xl opacity-50" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div
            className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <span className="inline-block text-[#60a5fa] text-sm font-medium tracking-widest uppercase mb-4">
              Отзывы клиентов
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              {title} <span className="gradient-text">{subtitle}</span>
            </h2>
          </div>

          {/* Testimonials Grid - данные из displayTestimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group relative bg-gradient-to-br from-[#0f172a] to-[#0a1628] backdrop-blur-sm border border-[#1e293b]/50 rounded-3xl p-6 lg:p-8 hover:border-[#60a5fa]/40 transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#1e88e5]/20 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${index * 200 + 200}ms` }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#1e88e5]/0 via-[#22d3ee]/0 to-[#a855f7]/0 group-hover:from-[#1e88e5]/5 group-hover:via-[#22d3ee]/5 group-hover:to-[#a855f7]/5 transition-all duration-700" />

                {/* Quote icon */}
                <Quote className="w-10 h-10 text-[#1e88e5]/30 mb-6 group-hover:text-[#60a5fa]/50 transition-colors duration-500" />

                {/* Stars - динамический рейтинг */}
                <div className="flex gap-1.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 transition-all duration-300 ${
                        i < testimonial.rating
                          ? "fill-[#60a5fa] text-[#60a5fa]"
                          : "fill-transparent text-[#1e293b]"
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-[#94a3b8] mb-8 leading-relaxed group-hover:text-[#cbd5e1] transition-colors duration-500 relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Author - с поддержкой фото или инициалов */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative">
                    {testimonial.avatarUrl ? (
                      // Если есть URL фото - показываем фото
                      <Image
                        src={testimonial.avatarUrl || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-[#1e293b] group-hover:ring-[#60a5fa]/50 transition-all duration-500 group-hover:scale-110"
                      />
                    ) : (
                      // Иначе показываем инициалы
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e88e5] to-[#60a5fa] flex items-center justify-center ring-2 ring-[#1e293b] group-hover:ring-[#60a5fa]/50 transition-all duration-500 group-hover:scale-110">
                        <span className="text-white font-semibold text-sm">
                          {testimonial.initials}
                        </span>
                      </div>
                    )}
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-[#22d3ee] to-[#1e88e5] rounded-full border-2 border-[#0f172a] group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-[#60a5fa] transition-colors duration-500">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#60a5fa]/80">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1a] to-transparent z-10" />
    </section>
  );
}
