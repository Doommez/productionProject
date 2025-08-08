import { test, expect } from '@playwright/test';
import stories from '../../../storybook-static/index.json';

const storyesKyes = Object.keys(stories.entries);
// eslint-disable-next-line no-restricted-syntax
for (const key of storyesKyes) {
    // @ts-ignore
    const story = stories.entries[key];

    test(`Screenshot: ${story.name}`, async ({ page }) => {
        const url = `http://localhost:6006/iframe.html?id=${key}`;
        await page.goto(url);
        await page.screenshot({
            path: `__screenshots__/${key}.png`,
            fullPage: true
        });
        expect(await page.screenshot())
            .toMatchSnapshot(`${key}.png`);
    });
}
