"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { heroContent } from "@/lib/site-data";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
  backgroundImage?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function HeroSection({
  backgroundImage = "/luxury-black-porsche-911-in-dark-dramatic-studio-li.jpg",
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      router.push("/gallery");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Премиум детейлинг автомобиля"
          fill
          className="object-cover object-center scale-105"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50" />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1e88e5]/10 via-transparent to-[#22d3ee]/10 animate-pulse"
          style={{ animationDuration: "4s" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#60a5fa]/30 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-[#22d3ee]/20 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[#a855f7]/20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-2/3 right-1/4 w-4 h-4 rounded-full bg-[#1e88e5]/15 animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Content - данные из heroContent */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 md:mb-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse" />
            <span className="text-[#60a5fa] text-xs sm:text-sm font-medium tracking-widest uppercase">
              {heroContent.badge}
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 md:mb-8 transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {heroContent.title} <br className="hidden sm:block" />
            <span className="gradient-text">{heroContent.highlightedWord}</span>
          </h1>

          {/* Description */}
          <p
            className={`text-base sm:text-lg md:text-xl text-[#94a3b8] max-w-xl leading-relaxed mb-8 md:mb-10 transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {heroContent.description}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <Button
              size="lg"
              onClick={handlePrimaryClick}
              className="bg-gradient-to-r from-[#1e88e5] to-[#0ea5e9] hover:from-[#1976d2] hover:to-[#0284c7] text-white rounded-full px-8 py-6 text-base shadow-xl shadow-[#1e88e5]/30 hover:shadow-[#1e88e5]/50 transition-all duration-300 hover:scale-105 group"
            >
              {heroContent.primaryButtonText}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleSecondaryClick}
              className="border-[#1e293b] hover:border-[#60a5fa]/50 text-white hover:bg-white/5 hover:text-white  rounded-full px-8 py-6 text-base bg-transparent backdrop-blur-sm transition-all duration-300 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {heroContent.secondaryButtonText}
            </Button>
          </div>

          {/* Stats preview - данные из heroContent.stats */}
          <div
            className={`grid grid-cols-3 gap-4 sm:gap-8 mt-12 md:mt-16 pt-8 md:pt-12 border-t border-[#1e293b]/50 transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {heroContent.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center sm:text-left stagger-${index + 1}`}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-[#94a3b8] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <ChevronDown className="w-6 h-6 text-[#60a5fa]" />
      </div>

      {/* Bottom gradient for transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent z-[5]" />
    </section>
  );
}
