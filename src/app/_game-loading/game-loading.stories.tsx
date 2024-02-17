import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { GameLoadingScreen } from "./game-loading-screen"

const meta: Meta<typeof GameLoadingScreen> = {
  title: "GameLoading/Screen",
  component: GameLoadingScreen,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof GameLoadingScreen>

export const Primary: Story = {
  render: () => {
    return (
      <div className="phone-size">
        <GameLoadingScreen />
      </div>
    )
  },
}
