import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfUse() {
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
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Условия использования
          </h1>
        </div>

        {/* Контент соглашения */}
        <div className="space-y-8 text-[#94a3b8] leading-relaxed bg-[#0f172a]/50 backdrop-blur-sm border border-[#1e293b] rounded-3xl p-6 md:p-10">
          <section className="space-y-4">
            <p className="text-sm">
              Последнее обновление: {new Date().toLocaleDateString("ru-RU")}
            </p>
            <p>
              Добро пожаловать на сайт <strong>{companyName}</strong> ({siteUrl}
              ). Используя этот сайт, вы соглашаетесь соблюдать и быть
              связанными следующими условиями использования. Если вы не согласны
              с этими условиями, пожалуйста, не используйте наш сайт.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              1. Общие положения
            </h2>
            <p>
              Сайт предназначен для информирования пользователей об услугах
              компании (детейлинг, мойка, полировка и др.) и сбора заявок на
              обслуживание. Вся информация, представленная на сайте, носит
              исключительно ознакомительный характер и ни при каких условиях не
              является публичной офертой.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              2. Интеллектуальная собственность
            </h2>
            <p>
              Весь контент, размещенный на сайте, включая тексты, изображения,
              логотипы, дизайн и программный код, является собственностью{" "}
              <strong>{companyName}</strong> или используется с разрешения
              правообладателей. Запрещается копирование, распространение или
              любое иное использование материалов сайта без письменного
              разрешения администрации.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              3. Обязанности пользователя
            </h2>
            <p>Используя сайт, вы обязуетесь:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-[#1e88e5]">
              <li>
                Предоставлять достоверную информацию при заполнении форм
                обратной связи.
              </li>
              <li>
                Не использовать сайт для распространения вредоносного ПО или
                спама.
              </li>
              <li>
                Не предпринимать действий, направленных на нарушение
                работоспособности сайта.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              4. Ограничение ответственности
            </h2>
            <p>
              Администрация сайта не несет ответственности за любой прямой или
              косвенный ущерб, возникший в результате использования или
              невозможности использования сайта, а также за ошибки или
              неточности в предоставленной информации. Мы оставляем за собой
              право изменять цены и описание услуг в любое время без
              предварительного уведомления.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              5. Ссылки на сторонние ресурсы
            </h2>
            <p>
              Сайт может содержать ссылки на сторонние веб-сайты (например,
              социальные сети или карты). Мы не несем ответственности за
              содержание, политику конфиденциальности или безопасность таких
              ресурсов.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              6. Изменение условий
            </h2>
            <p>
              Мы оставляем за собой право обновлять данные Условия использования
              в любое время. Изменения вступают в силу с момента их публикации
              на этой странице. Продолжение использования сайта после внесения
              изменений означает ваше согласие с новой редакцией Условий.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              7. Контактная информация
            </h2>
            <p>
              Если у вас есть вопросы касательно данных Условий, пожалуйста,
              свяжитесь с нами:
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
