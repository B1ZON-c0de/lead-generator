import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  const companyName = "Cult Detailing";
  const companyEmail = "info@cultdetailing.ru";
  const siteUrl = "cultdetailing.ru";

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden text-white selection:bg-[#1e88e5]/30">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e88e5]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-[100px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
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

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1e88e5] to-[#22d3ee] flex items-center justify-center shadow-lg shadow-[#1e88e5]/20">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Политика конфиденциальности
          </h1>
        </div>

        <div className="space-y-8 text-[#94a3b8] leading-relaxed bg-[#0f172a]/50 backdrop-blur-sm border border-[#1e293b] rounded-3xl p-6 md:p-10">
          <section className="space-y-4">
            <p className="text-sm">
              Последнее обновление: {new Date().toLocaleDateString("ru-RU")}
            </p>
            <p>
              Настоящая Политика конфиденциальности персональных данных (далее –
              Политика конфиденциальности) действует в отношении всей
              информации, которую сайт <strong>{companyName}</strong>,
              расположенный на доменном имени <strong>{siteUrl}</strong>, может
              получить о Пользователе во время использования сайта, программ и
              продуктов сайта.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              1. Определение терминов
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>«Администрация сайта»</strong> – уполномоченные
                сотрудники на управление сайтом, которые организуют и
                осуществляют обработку персональных данных.
              </li>
              <li>
                <strong>«Персональные данные»</strong> – любая информация,
                относящаяся к прямо или косвенно определенному или определяемому
                физическому лицу (субъекту персональных данных).
              </li>
              <li>
                <strong>«Обработка персональных данных»</strong> – любое
                действие (операция) или совокупность действий (операций),
                совершаемых с использованием средств автоматизации или без
                использования таких средств с персональными данными.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              2. Предмет политики конфиденциальности
            </h2>
            <p>
              Настоящая Политика конфиденциальности устанавливает обязательства
              Администрации сайта по неразглашению и обеспечению режима защиты
              конфиденциальности персональных данных, которые Пользователь
              предоставляет по запросу Администрации сайта при регистрации на
              сайте или при оформлении заявку на услуги.
            </p>
            <p>
              Персональные данные, разрешённые к обработке в рамках настоящей
              Политики конфиденциальности, включают в себя следующую информацию:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-[#1e88e5]">
              <li>Фамилию, имя, отчество Пользователя;</li>
              <li>Контактный телефон Пользователя;</li>
              <li>Адрес электронной почты (e-mail);</li>
              <li>
                Данные об автомобиле (Марка, модель), необходимые для расчета
                стоимости услуг.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              3. Цели сбора информации
            </h2>
            <p>
              Персональные данные Пользователя Администрация сайта может
              использовать в целях:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-[#1e88e5]">
              <li>
                Идентификации Пользователя для оформления заказа и (или)
                заключения Договора оказания услуг.
              </li>
              <li>
                Установления с Пользователем обратной связи, включая направление
                уведомлений, запросов, касающихся использования Сайта, оказания
                услуг, обработку запросов и заявок от Пользователя.
              </li>
              <li>
                Подтверждения достоверности и полноты персональных данных,
                предоставленных Пользователем.
              </li>
              <li>Уведомления Пользователя Сайта о состоянии Заказа.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              4. Способы и сроки обработки персональной информации
            </h2>
            <p>
              Обработка персональных данных Пользователя осуществляется без
              ограничения срока, любым законным способом, в том числе в
              информационных системах персональных данных с использованием
              средств автоматизации или без использования таких средств.
            </p>
            <p>
              Персональные данные Пользователя могут быть переданы
              уполномоченным органам государственной власти Российской Федерации
              только по основаниям и в порядке, установленным законодательством
              Российской Федерации.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              5. Обратная связь
            </h2>
            <p>
              Все предложения или вопросы по поводу настоящей Политики
              конфиденциальности следует сообщать по адресу электронной почты:
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
