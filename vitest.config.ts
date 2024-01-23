import react from "@vitejs/plugin-react"
import { stylexPlugin } from "vite-plugin-stylex-dev"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react(), stylexPlugin()],
  test: {
    environment: "jsdom",
  },
})
