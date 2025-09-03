import { test, expect } from '@playwright/test';
// @ts-ignore
import indexJson from '../../storybook-static/index.json';

// Фильтруем только сторисы (не docs)
const stories = Object.values(indexJson.entries)
    .filter(
        (entry: any) => entry.type === 'story'
    );
const storybookBaseUrl = 'http://localhost:6006';

// test.describe.configure({ mode: 'parallel' });
// eslint-disable-next-line no-restricted-syntax
for (const story of stories) {
    test(`${story.title} — ${story.name}`, async ({ page }) => {
        const url = `${storybookBaseUrl}/iframe.html?id=${story.id}`;
        // Переходим на страницу сториса
        await page.goto(url);
        await page.evaluate(async () => {
            // @ts-ignore
            await document.fonts.ready;
            document.fonts.forEach((fontFace) => {
                console.log(fontFace.family, fontFace.status);
            });
        });
        // Ждём пока пропадёт индикатор загрузки
        await page.waitForTimeout(3000);
        await page.waitForSelector('.lds-ripple', {
            state: 'hidden',
            timeout: 10000
        });
        // const projectName = test.info()
        //     .project
        //     .name
        //     .toLowerCase() // все буквы маленькие
        //     .replace(/\s+/g, '-') // пробелы → дефисы
        //     .replace(/[^\w-]/g, ''); // убрать все спецсимволы кроме букв, цифр и дефисов

        const snapshotName = `${story.id}.png`;

        // Делаем скриншот и сравниваем с эталонным
        await expect(page)
            // @ts-ignore
            .toHaveScreenshot(snapshotName, { fullPage: true });
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

// test('Check screenshot of existing storybook', async ({ page }) => {
//     const storybookConfig = await (await page.request.get('http://localhost:6006/index.json'))
//         .json();
//     const storybooks = Object.keys(storybookConfig.entries)
//         .filter((entry) => storybookConfig.entries[entry].type === 'story');
//     // eslint-disable-next-line no-restricted-syntax
//     for (const story of storybooks) {
//         const url = `${storybookBaseUrl}/iframe.html?id=${story}`;
//
//         await page.goto(url);
//         await expect(page.locator('#storybook-root'))
//             .toBeVisible();
//         await expect(page.locator('.sb-preparing-story .sb-loader'))
//             .not
//             .toBeVisible();
//         await page.waitForTimeout(500);
//         await expect(page)
//             .toHaveScreenshot(`${story}.png`, { fullPage: true });
//     }
// });
