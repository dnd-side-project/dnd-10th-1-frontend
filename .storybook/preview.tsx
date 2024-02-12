import type { Preview } from "@storybook/react"
import "../src/app/globals.css"
import { pretendard } from "../src/styles/fonts/pretendard"
import React from "react"

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    Story => (
      <main className={pretendard.className}>
        <Story />
      </main>
    ),
  ],
}

export default preview
