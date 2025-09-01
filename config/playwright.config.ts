import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    retries: 0,
    fullyParallel: true,
    projects: [
        {
            name: 'Desktop Chrome',
            use: {
                ...devices['Desktop Chrome'],
                viewport: { width: 1920, height: 1080 }
            }
        },
        {
            name: 'iPhone 12',
            use: {
                ...devices['iPhone 12']
            }
        }
    ],

    use: {
        baseURL: 'http://localhost:6006', // Storybook dev server
        headless: true
    },

    expect: {
        toMatchSnapshot: {
            threshold: 0.2 // допустимое отличие в %
        }
    }
});
