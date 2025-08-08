import { test, expect } from '@playwright/test';
import stories from '../stories.json';

const viewportConfigs = [
    {
        name: 'mobile',
        width: 360,
        height: 640
    },
    {
        name: 'tablet',
        width: 768,
        height: 1024
    },
    {
        name: 'desktop',
        width: 1280,
        height: 800
    }
];

const themes = ['light', 'dark'];

// eslint-disable-next-line no-restricted-syntax
Object.values(stories.entries)
    .forEach((story) => {
        viewportConfigs.forEach((viewport) => {
            themes.forEach((theme) => {
                test(`${story.id} — ${viewport.name} — ${theme}`, async ({ page }) => {
                    await page.setViewportSize({
                        width: viewport.width,
                        height: viewport.height
                    });
                    await page.goto(`http://localhost:6006/iframe.html?id=${story.id}&viewMode=story&globals=theme:${theme}`);
                    await expect(page.locator('#storybook-root'))
                        .toHaveScreenshot(`${story.id}-${viewport.name}-${theme}.png`);
                });
            });
        });
    });
