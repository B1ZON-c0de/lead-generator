import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cookie } from "lucide-react";

export default function CookiesPolicy() {
  const companyName = "Cult Detailing";
  const companyEmail = "info@cultdetailing.ru";
  const siteUrl = "cultdetailing.ru";

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden text-white selection:bg-[#1e88e5]/30">
      {/* Фоновые декорации */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e88e5]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Сетка на фоне */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Кнопка назад */}
        <div className="mb-10">
          <Button
            asChild
            variant="ghost"
            className="text-[#94a3b8] hover:text-white hover:bg-white/5 -ml-4"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться на главную
            </Link>
          </Button>
        </div>

        {/* Заголовок */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e88e5] to-[#22d3ee] flex items-center justify-center shadow-lg shadow-[#1e88e5]/20">
            <Cookie className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Политика использования Cookie
          </h1>
        </div>

        {/* Контент политики */}
        <div className="space-y-8 text-[#94a3b8] leading-relaxed bg-[#0f172a]/50 backdrop-blur-sm border border-[#1e293b] rounded-3xl p-6 md:p-10">
          <section className="space-y-4">
            <p className="text-sm">
              Последнее обновление: {new Date().toLocaleDateString("ru-RU")}
            </p>
            <p>
              На сайте <strong>{companyName}</strong> ({siteUrl}) мы используем
              файлы cookie и аналогичные технологии, чтобы обеспечить
              максимальное удобство для посетителей, предоставлять
              персонализированную информацию и анализировать трафик.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              1. Что такое файлы cookie?
            </h2>
            <p>
              Файлы cookie — это небольшие текстовые файлы, которые сохраняются
              на вашем устройстве (компьютере, планшете или смартфоне) при
              посещении веб-сайтов. Они позволяют сайту запоминать ваши действия
              и предпочтения (например, логин, язык, размер шрифта) в течение
              определенного времени.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              2. Какие типы cookie мы используем?
            </h2>
            <ul className="list-disc pl-5 space-y-4 marker:text-[#1e88e5]">
              <li>
                <strong className="text-white">
                  Технические (обязательные) cookie:
                </strong>
                <br />
                Необходимы для корректной работы сайта. Без них некоторые
                функции (например, отправка форм) могут быть недоступны.
              </li>
              <li>
                <strong className="text-white">Аналитические cookie:</strong>
                <br />
                Помогают нам понять, как пользователи взаимодействуют с сайтом
                (например, Яндекс.Метрика). Вся собранная информация анонимна.
              </li>
              <li>
                <strong className="text-white">Функциональные cookie:</strong>
                <br />
                Позволяют сайту запоминать выбранные вами настройки, чтобы вам
                не приходилось указывать их заново.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              3. Как управлять файлами cookie?
            </h2>
            <p>
              Вы можете управлять файлами cookie и удалять их по своему желанию.
              Вы можете удалить все cookie, уже сохраненные на вашем устройстве,
              и настроить большинство браузеров так, чтобы они блокировали их
              установку.
            </p>
            <p>
              Однако, если вы это сделаете, вам, возможно, придется вручную
              настраивать некоторые параметры при каждом посещении сайта, а
              некоторые сервисы и функции могут не работать.
            </p>
            <p>Инструкции по управлению cookie в популярных браузерах:</p>
            <ul className="flex flex-wrap gap-2 text-sm">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=ru"
                  target="_blank"
                  className="text-[#1e88e5] hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li className="text-gray-600">•</li>
              <li>
                <a
                  href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac"
                  target="_blank"
                  className="text-[#1e88e5] hover:underline"
                >
                  Safari
                </a>
              </li>
              <li className="text-gray-600">•</li>
              <li>
                <a
                  href="https://yandex.ru/support/browser/personal-data-protection/cookies.html"
                  target="_blank"
                  className="text-[#1e88e5] hover:underline"
                >
                  Яндекс.Браузер
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              4. Изменения в политике
            </h2>
            <p>
              Мы можем время от времени обновлять данную Политику использования
              файлов cookie. Мы рекомендуем регулярно просматривать эту
              страницу, чтобы быть в курсе любых изменений.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              5. Связаться с нами
            </h2>
            <p>
              Если у вас возникли вопросы о нашем использовании файлов cookie,
              пожалуйста, напишите нам:
              <br />
              Email:
              <a
                href={`mailto:${companyEmail}`}
                className="text-[#1e88e5] hover:text-[#60a5fa] ml-1 transition-colors"
              >
                {companyEmail}
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 text-center text-xs text-[#475569]">
          © {new Date().getFullYear()} {companyName}. Все права защищены.
        </div>
      </div>
    </div>
  );
}
