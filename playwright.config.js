// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */

export default defineConfig({

  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail if test.only exists in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 0,

  // Workers for CI
  workers: process.env.CI ? 1 : undefined,

  // HTML Report
  reporter: 'html',

  // Shared settings
  use: {

    // Open browser visibly
    headless: false,

    // Slow execution
    slowMo: 1000,

    // Trace on retry
    trace: 'on-first-retry',

  },

  // Browser projects
  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],

});