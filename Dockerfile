FROM mcr.microsoft.com/playwright:v1.58.1-noble

WORKDIR /tests

# Копируем только package.json и lock-файл для кэширования зависимостей
COPY package*.json ./

# Ставим зависимости под Linux

# Копируем остальной проект
COPY . .

RUN npm ci

RUN npm run build-storybook

EXPOSE 9323

# По умолчанию запускаем Playwright
CMD ["npx", "playwright", "test", "-c", "config/playwright.config.ts","config/tests/visual.spec.ts"]
