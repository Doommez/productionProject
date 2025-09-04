FROM mcr.microsoft.com/playwright:v1.54.2-noble

WORKDIR /tests

# Копируем только package.json и lock-файл для кэширования зависимостей
COPY package*.json ./

# Ставим зависимости под Linux

# Копируем остальной проект
COPY . .

RUN npm ci

RUN npm run build-storybook

# По умолчанию запускаем Playwright
CMD ["npx", "playwright","test", "--update-snapshots=all", "-c", "config/playwright.config.ts","config/tests/visual.spec.ts"]
