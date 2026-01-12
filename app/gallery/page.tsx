"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

// === ДАННЫЕ ГАЛЕРЕИ ===
const galleryItems = [
  {
    id: 1,
    src: "/luxury-black-porsche-911-in-dark-dramatic-studio-li.jpg",
    category: "Полировка",
    alt: "Porsche 911 Detailing",
  },
  {
    id: 2,
    src: "/luxury-blue-bmw-sports-car-in-professional-detaili.jpg",
    category: "Керамика",
    alt: "BMW Ceramic Coating",
  },
  {
    id: 3,
    src: "/luxury-black-sports-car-on-dark-road-night-cinemat.jpg",
    category: "Химчистка",
    alt: "Sports Car Night",
  },
  {
    id: 4,
    src: "/cars-photo/1.jpg",
    category: "Полировка",
    alt: "Car 1",
  },
  {
    id: 5,
    src: "/cars-photo/2.jpg",
    category: "Химчистка",
    alt: "Car 2",
  },
  {
    id: 6,
    src: "/cars-photo/3.jpg",
    category: "Пленка",
    alt: "Car 3",
  },
  {
    id: 7,
    src: "/cars-photo/4.jpg",
    category: "Керамика",
    alt: "Car 4",
  },
  {
    id: 8,
    src: "/cars-photo/5.jpg",
    category: "Химчистка",
    alt: "Car 5",
  },
  {
    id: 9,
    src: "/cars-photo/6.jpg",
    category: "Пленка",
    alt: "Car 6",
  },
  {
    id: 10,
    src: "/cars-photo/7.jpg",
    category: "Полировка",
    alt: "Car 7",
  },
  {
    id: 11,
    src: "/cars-photo/8.jpg",
    category: "Керамика",
    alt: "Car 8",
  },
];

const categories = ["Все", "Полировка", "Керамика", "Химчистка", "Пленка"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  // Фильтрация
  const filteredItems =
    selectedCategory === "Все"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden text-white selection:bg-[#1e88e5]/30">
      {/* --- ФОНОВЫЕ ЭФФЕКТЫ --- */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1e88e5]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#a855f7]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* --- ЗАГОЛОВОК --- */}
        <div className="flex flex-col items-start gap-6 mb-12">
          <Button
            asChild
            variant="ghost"
            className="text-[#94a3b8] hover:text-white hover:bg-white/5 pl-0"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              На Главную
            </Link>
          </Button>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Наши{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e88e5] to-[#22d3ee]">
                Работы
              </span>
            </h1>
            <p className="text-[#94a3b8] text-lg max-w-2xl">
              Взгляните на результаты нашей работы. Мы гордимся каждым
              автомобилем, который выезжает из нашего бокса.
            </p>
          </div>
        </div>

        {/* --- ФИЛЬТРЫ (ТАБЫ) --- */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "bg-transparent text-[#94a3b8] border-[#1e293b] hover:border-[#60a5fa] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- MASONRY ГАЛЕРЕЯ --- */}
        {/* columns-1 md:columns-2 lg:columns-3 создает эффект Pinterest */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer border border-[#1e293b]/50 bg-[#0f172a]"
                onClick={() => setSelectedImage(item)}
              >
                {/* Изображение */}
                <div className="relative w-full">
                  {/* Используем width 0 и sizes, чтобы Image подстраивался под ширину колонки и сохранял высоту */}
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Оверлей при наведении */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-10 h-10 text-white mx-auto mb-2 opacity-80" />
                      <span className="text-[#22d3ee] text-sm font-medium tracking-wider uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Если ничего не найдено */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#94a3b8] text-xl">
              В этой категории пока нет фото.
            </p>
          </div>
        )}
      </div>

      {/* --- LIGHTBOX (МОДАЛЬНОЕ ОКНО) --- */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-[95vw] md:max-w-[90vw] h-[90vh] p-0 bg-transparent border-none shadow-none flex items-center justify-center overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedImage?.alt || "Просмотр изображения"}
          </DialogTitle>
          {selectedImage && (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* Кнопка закрыть */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Картинка на весь экран */}
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              {/* Подпись снизу */}
              <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                <span className="inline-block px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-sm">
                  {selectedImage.alt}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
