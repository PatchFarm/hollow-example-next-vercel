import { expect, test } from "@playwright/test";

test("home page renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Next.js and Prisma");
});

test("health check passes", async ({ request }) => {
  const res = await request.get("/api/health");
  expect(res.status()).toBe(200);
});
