import { test, expect } from '@playwright/test';
// @ts-ignore
import indexJson from '../../storybook-static/index.json';

// Фильтруем только сторисы (не docs)
const stories = Object.values(indexJson.entries)
    .filter(
        (entry: any) => entry.type === 'story'
    );
const storybookBaseUrl = 'http://localhost:6006';

test.describe.configure({ mode: 'parallel' });
// eslint-disable-next-line no-restricted-syntax
for (const story of stories) {
    test(`${story.title} — ${story.name}`, async ({ page }, testInfo) => {
        const url = `${storybookBaseUrl}/iframe.html?id=${story.id}`;
        console.log(testInfo.snapshotDir);
        // Переходим на страницу сториса
        await page.goto(url);

        // Ждём пока пропадёт индикатор загрузки
        await page.waitForSelector('.lds-ripple', { state: 'detached', timeout: 10000 });
        const projectName = test.info().project.name
            .toLowerCase() // все буквы маленькие
            .replace(/\s+/g, '-') // пробелы → дефисы
            .replace(/[^\w-]/g, ''); // убрать все спецсимволы кроме букв, цифр и дефисов

        const snapshotName = `${story.id}-${projectName}.png`;
        // Делаем скриншот и сравниваем с эталонным
        expect(await page.screenshot())
            // @ts-ignore
            .toMatchSnapshot();
    });
}
// npx playwright test --update-snapshots=all tests/visual.spec.ts
// all — пересоздать все снапшоты (и существующие, и отсутствующие).
//
// changed — обновить только те, что отличаются от ожидаемых.
//
//     missing — создать только отсутствующие (в твоём случае, чтобы первый раз записать).
//
// none — не трогать снапшоты.
