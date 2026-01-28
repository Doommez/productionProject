import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    snapshotPathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}-{projectName}{ext}',
    timeout: 30 * 6000,
    retries: 0,
    fullyParallel: true,
    projects: [
        {
            name: 'Desktop Chrome',
            use: {
                ...devices['Desktop Chrome'],
                viewport: {
                    width: 1920,
                    height: 1080
                }
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
    reporter: 'html',
    expect: {
        toMatchSnapshot: {
            threshold: 0.2 // допустимое отличие в %
        }
    },
    webServer: {
        command: 'npm run storybook',
        url: 'http://localhost:6006',
        reuseExistingServer: !process.env.CI
    }
});
