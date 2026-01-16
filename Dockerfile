# 1. Base image setup
FROM node:20-alpine AS base

# Устанавливаем pnpm через corepack (встроен в Node.js)
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# 2. Dependencies - Установка зависимостей
FROM base AS deps
WORKDIR /app

# Устанавливаем libc6-compat, нужен для некоторых библиотек на Alpine (например, для обработки изображений)
RUN apk add --no-cache libc6-compat

COPY package.json pnpm-lock.yaml ./
# Устанавливаем зависимости (используем кэш pnpm для скорости)
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# 3. Builder - Сборка приложения
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Отключаем телеметрию Next.js (опционально)
ENV NEXT_TELEMETRY_DISABLED=1

# Собираем проект
RUN pnpm run build

# 4. Runner - Запуск готового приложения
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Создаем системного пользователя для безопасности (чтобы не запускать от root)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем публичные файлы
COPY --from=builder /app/public ./public

# Настраиваем права на папку .next (для кэша изображений и ISR)
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Копируем ТОЛЬКО standalone сборку (максимальная оптимизация размера)
# Standalone папка уже содержит server.js и минимальные node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
# Разрешаем подключение к Next.js снаружи контейнера (важно для Docker)
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
