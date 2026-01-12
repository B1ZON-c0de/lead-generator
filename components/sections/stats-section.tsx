"use client"

import { CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { stats, features } from "@/lib/site-data"
import type { Stat, Feature } from "@/types"

interface StatsSectionProps {
  // TODO: Передайте данные из CMS или API
  customStats?: Stat[]
  customFeatures?: Feature[]
  title?: string
  subtitle?: string
  description?: string
}

export function StatsSection({
  customStats,
  customFeatures,
  title = "Задаём Стандарты в",
  subtitle = "Премиум Уходе",
  description = "Мы относимся к каждому автомобилю как к произведению искусства. Наша студия оснащена специальным освещением, климат-контролем и новейшими технологиями для безупречного результата каждый раз.",
}: StatsSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Используем переданные данные или дефолтные
  const displayStats = customStats || stats
  const displayFeatures = customFeatures || features

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
    <section id="why-us" ref={sectionRef} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f172a] to-transparent z-10 pointer-events-none" />

      <div className="py-24 md:py-36 bg-gradient-to-b from-[#0f172a] via-[#0a1628] to-[#0a0f1a]">
        <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 bg-[#1e88e5]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Stats Grid - данные из displayStats */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {displayStats.map((stat, index) => (
                <div
                  key={stat.id}
                  className={`group relative bg-gradient-to-br from-[#0f172a] to-[#020617] border border-[#1e293b]/50 rounded-3xl p-6 md:p-8 text-center hover:border-[#60a5fa]/40 transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1e88e5]/15 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1e88e5]/5 via-transparent to-[#22d3ee]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div
                    className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${stat.colorGradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-xs md:text-sm text-[#94a3b8] uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Content */}
            <div
              className={`space-y-6 md:space-y-8 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
                <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse" />
                <span className="text-[#60a5fa] text-sm font-medium tracking-widest uppercase">Почему Elite</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
                {title} <span className="gradient-text">{subtitle}</span> за Авто
              </h2>

              <p className="text-[#94a3b8] leading-relaxed text-base md:text-lg">{description}</p>

              {/* Features - данные из displayFeatures */}
              <div className="space-y-5 pt-4">
                {displayFeatures.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/50 border border-[#1e293b]/50 hover:border-[#60a5fa]/40 transition-all duration-500 group ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                    }`}
                    style={{ transitionDelay: `${500 + index * 150}ms` }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1e88e5] to-[#22d3ee] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover:text-[#60a5fa] transition-colors duration-500">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-[#94a3b8] group-hover:text-[#cbd5e1] transition-colors duration-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1a] to-transparent z-10 pointer-events-none" />
    </section>
  )
}
