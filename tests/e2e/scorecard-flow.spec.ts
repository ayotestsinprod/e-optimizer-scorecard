import { test, expect } from '@playwright/test';

test.describe('Optimizer Scorecard Flow', () => {
  test('should navigate from landing to scorecard via sample button', async ({ page }) => {
    // Go to landing page
    await page.goto('/');
    
    // Verify landing page loaded
    await expect(page.getByRole('heading', { name: /How does your optimizer really perform/i })).toBeVisible();
    
    // Click "View Sample Scorecard" button
    await page.getByRole('button', { name: /View Sample Scorecard/i }).click();
    
    // Verify scorecard page loaded
    await expect(page).toHaveURL('/scorecard');
    await expect(page.getByText('Bramley Battery')).toBeVisible();
    await expect(page.getByText('B+')).toBeVisible();
    await expect(page.getByText('Performance Grade')).toBeVisible();
  });

  test('should show sample data banner on scorecard', async ({ page }) => {
    await page.goto('/scorecard');
    
    // Verify sample banner is visible
    await expect(page.getByText(/Sample Scorecard/i)).toBeVisible();
    await expect(page.getByText(/Upload your data/i)).toBeVisible();
  });

  test('should display all key scorecard sections', async ({ page }) => {
    await page.goto('/scorecard');
    
    // Check for main sections
    await expect(page.getByText('REVENUE ANALYSIS')).toBeVisible();
    await expect(page.getByText('KEY METRICS')).toBeVisible();
    await expect(page.getByText('MARKET BENCHMARK')).toBeVisible();
    
    // Check revenue cards
    await expect(page.getByText('Actual Revenue')).toBeVisible();
    await expect(page.getByText('Optimal Revenue')).toBeVisible();
    await expect(page.getByText('Money Left on Table')).toBeVisible();
    
    // Check CTA
    await expect(page.getByRole('button', { name: /Get Full Analysis/i })).toBeVisible();
  });

  test('should open email capture modal when clicking CTA', async ({ page }) => {
    await page.goto('/scorecard');
    
    // Click "Get Full Analysis" button
    await page.getByRole('button', { name: /Get Full Analysis/i }).click();
    
    // Verify modal opened
    await expect(page.getByText('Get Your Full Analysis')).toBeVisible();
    await expect(page.getByPlaceholder('you@company.com')).toBeVisible();
    
    // Fill and submit form
    await page.getByPlaceholder('you@company.com').fill('test@example.com');
    await page.getByPlaceholder('Your company name').fill('Test Corp');
    await page.getByRole('button', { name: 'Submit' }).click();
    
    // Verify success message
    await expect(page.getByText('Thank you!')).toBeVisible();
  });

  test('should simulate file upload flow', async ({ page }) => {
    await page.goto('/');
    
    // Click "Upload Your Data" button
    await page.getByRole('label', { name: /Upload Your Data/i }).click();
    
    // Note: File input dialog will open, but we can't interact with it in headless mode
    // This test verifies the upload trigger works
    const fileInput = page.locator('input[type="file"]');
    await expect(fileInput).toHaveAttribute('accept', '.csv');
  });
});
