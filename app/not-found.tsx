import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft, MapPinOff } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#020617] relative overflow-hidden text-center px-4">
      {/* Фоновые эффекты (как на главной) */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#1e88e5]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#a855f7]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Контент */}
      <div className="relative z-10 space-y-8 max-w-2xl mx-auto animate-fade-in">
        <div className="space-y-2">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#1e88e5]/20 flex items-center justify-center shadow-2xl shadow-[#1e88e5]/10 animate-float">
              <MapPinOff className="w-10 h-10 text-[#60a5fa]" />
            </div>
          </div>

          <h1 className="text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Кажется, вы свернули <span className="text-[#ef4444]">не туда</span>
          </h2>

          <p className="text-[#94a3b8] text-lg max-w-md mx-auto leading-relaxed">
            Этой страницы не существует. Возможно, она уехала на полировку или
            была удалена.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            asChild
            size="lg"
            className="h-12 px-8 bg-white text-[#020617] hover:bg-gray-200 font-semibold rounded-xl transition-all hover:scale-105"
          >
            <Link href="/">
              <MoveLeft className="w-4 h-4 mr-2" />
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </div>

      {/* Декоративная сетка внизу */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent z-20 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
