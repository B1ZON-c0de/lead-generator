"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

import { navLinks, siteConfig } from "@/lib/site-data";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookingClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#020617]/95 backdrop-blur-md border-b border-[#1e293b] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 md:h-14 items-center justify-between">
          {/* Logo - используем данные из siteConfig */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-linear-to-br from-[#1e88e5] to-[#22d3ee] group-hover:animate-glow transition-all duration-300">
              <Image src={"/icon.svg"} alt="Logo" width={32} height={32} />
              <span className="absolute inset-0 rounded-full bg-[#1e88e5] animate-pulse-ring" />
            </div>
            <span className="text-lg md:text-xl font-bold text-white">
              {siteConfig.logoText}
              <span className="font-normal text-[#60a5fa]">
                {siteConfig.logoHighlight}
              </span>
            </span>
          </Link>

          {/* Desktop Navigation - данные из navLinks */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-[#94a3b8] transition-colors hover:text-white group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#1e88e5] to-[#22d3ee] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            onClick={handleBookingClick}
            className="hidden lg:inline-flex bg-linear-to-r from-[#1e88e5] to-[#0ea5e9] hover:from-[#1976d2] hover:to-[#0284c7] text-white rounded-full px-6 shadow-lg shadow-[#1e88e5]/25 hover:shadow-[#1e88e5]/40 transition-all duration-300 hover:scale-105"
          >
            Записаться
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`py-3 text-base font-medium text-[#94a3b8] border-b border-[#1e293b]/50 last:border-0 hover:text-white hover:pl-2 transition-all duration-200 ${
                isMenuOpen ? "animate-slide-up" : ""
              } stagger-${index + 1}`}
              style={{ opacity: isMenuOpen ? 1 : 0 }}
            >
              {link.label}
            </Link>
          ))}
          <Button
            onClick={handleBookingClick}
            className="mt-4 bg-linear-to-r from-[#1e88e5] to-[#0ea5e9] text-white rounded-full w-full"
          >
            Записаться
          </Button>
        </nav>
      </div>
    </header>
  );
}
