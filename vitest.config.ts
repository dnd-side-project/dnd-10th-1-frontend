import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { stylexPlugin } from "vite-plugin-stylex-dev";

export default defineConfig({
  plugins: [react(), stylexPlugin()],
  test: {
    environment: "jsdom",
  },
});
