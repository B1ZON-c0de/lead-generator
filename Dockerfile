# Используем Node.js 20 (легкая версия Alpine)
FROM node:20-alpine

# Включаем pnpm (так как он используется в проекте)
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Создаем рабочую папку
WORKDIR /app

# Копируем файлы зависимостей
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости
RUN pnpm install --frozen-lockfile

# Копируем весь исходный код проекта
COPY . .

# Отключаем телеметрию Next.js
ENV NEXT_TELEMETRY_DISABLED=1

# Собираем проект (создается папка .next)
RUN pnpm run build

# Открываем порт 3000
EXPOSE 3000

# Переменная порта (важно для некоторых хостингов)
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Запускаем проект обычной командой start
CMD ["pnpm", "start"]
