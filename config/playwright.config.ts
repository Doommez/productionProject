import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    retries: 0,
    fullyParallel: true,
    use: {
        baseURL: 'http://localhost:6006', // Storybook dev server
        headless: true
    },
    expect: {
        toMatchSnapshot: {
            threshold: 0.5 // допустимое отличие в % (можно уменьшить)
        }
    }
});
