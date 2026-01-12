"use client"

import { Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { services } from "@/lib/site-data"
import type { Service } from "@/types"

// Props для кастомизации секции
interface ServicesSectionProps {
  // TODO: Передайте данные из CMS или API
  customServices?: Service[]
  title?: string
  subtitle?: string
  description?: string
}

export function ServicesSection({
  customServices,
  title = "Профессиональный Уход",
  subtitle = "за Вашим Автомобилем",
  description = "От регулярной мойки до полного восстановления шоурумного состояния — мы используем только лучшие pH-нейтральные продукты.",
}: ServicesSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Используем переданные данные или дефолтные из lib/site-data
  const displayServices = customServices || services

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#020617] to-transparent z-10 pointer-events-none" />

      <div className="py-24 md:py-36 bg-gradient-to-b from-[#020617] via-[#0a0f1a] to-[#0f172a]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1e88e5]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#22d3ee]/5 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div
            className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
              <Sparkles className="w-4 h-4 text-[#60a5fa]" />
              <span className="text-[#60a5fa] text-sm font-medium tracking-widest uppercase">Наши Услуги</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 text-balance">
              {title} <br className="hidden sm:block" />
              <span className="gradient-text">{subtitle}</span>
            </h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto text-base md:text-lg">{description}</p>
          </div>

          {/* Services Grid - данные из displayServices */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayServices.map((service, index) => (
              <div
                key={service.id}
                className={`group relative bg-gradient-to-br from-[#0f172a] to-[#0a1628] backdrop-blur-sm border border-[#1e293b]/50 rounded-3xl p-6 lg:p-8 hover:border-[#60a5fa]/40 transition-all duration-700 ease-out hover:-translate-y-3 ${service.shadowColor} hover:shadow-2xl ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${index * 200 + 200}ms` }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1e88e5]/10 via-transparent to-[#22d3ee]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.colorGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-[#60a5fa] transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-[#94a3b8] mb-6 leading-relaxed group-hover:text-[#cbd5e1] transition-colors duration-500">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-[#94a3b8] group-hover:text-white transition-colors duration-500"
                      >
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.colorGradient}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-10 pointer-events-none" />
    </section>
  )
}
