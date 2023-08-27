import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const header = await page.locator("h1").textContent();
  // Expect a title "to contain" a substring.
  await expect(header).toBe("Web");
});
