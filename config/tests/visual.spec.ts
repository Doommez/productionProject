import { test, expect } from '@playwright/test';
// @ts-ignore
import indexJson from '../../storybook-static/index.json';

// Фильтруем только сторисы (не docs)
const stories = Object.values(indexJson.entries)
    .filter(
        (entry: any) => entry.type === 'story'
    );
const storybookBaseUrl = 'http://localhost:6006';
for (const story of stories) {
    // @ts-ignore
    test(`${story.title} — ${story.name}`, async ({ page }) => {
        console.log(`${storybookBaseUrl}/iframe.html?id=${story.id}`);
        // @ts-ignore
        await page.goto(`${storybookBaseUrl}/iframe.html?id=${story.id}`);

        await page.waitForTimeout(1000); // подождём отрисовку

        expect(await page.screenshot())
            // @ts-ignore
            .toMatchSnapshot(`${story.id}.png`);
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
