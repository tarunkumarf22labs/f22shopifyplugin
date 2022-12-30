/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setuptest.ts"],
  },
});
