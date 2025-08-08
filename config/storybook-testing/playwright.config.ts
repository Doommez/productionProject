import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    retries: 1,
    use: {
        baseURL: 'http://localhost:6006',
        headless: true,
        screenshot: 'only-on-failure'
    },
    reporter: [['html'], ['list']]
});
