import { defineConfig } from "@playwright/test";

const baseURL = process.env.BASE_URL ?? "http://localhost:3000";

export default defineConfig({
  testDir: "e2e",
  use: { baseURL },
  // Against a deployed URL, test it as is; locally, start the app first.
  webServer: process.env.BASE_URL
    ? undefined
    : { command: "npm run build && npm run start", url: baseURL, reuseExistingServer: true, timeout: 180_000 },
});
