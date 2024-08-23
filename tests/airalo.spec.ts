import { test, expect } from '@playwright/test';

test('Airalo page has title', async ({ page }) => {
  await page.goto('https://www.airalo.com/');

  await expect(page).toHaveTitle(/Airalo/);
});
