import { test, expect } from '@playwright/test';

test('Button story snapshot', async ({ page }) => {
    await page.goto('/?path=/story/shared-ui-button--primary');
    await expect(page)
        .toHaveScreenshot(); // Сравнение с эталоном
});
