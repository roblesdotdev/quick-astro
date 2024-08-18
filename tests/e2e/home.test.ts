import { test, expect } from '@playwright/test'

test('check correct title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Quick Astro')
})
