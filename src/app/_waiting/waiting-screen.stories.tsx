import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import WaitingScreen from "./waiting-screen"

const meta: Meta<typeof WaitingScreen> = {
  title: "Waiting/Screen",
  component: WaitingScreen,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof WaitingScreen>

export const Primary: Story = {
  render: ({ ...args }) => {
    return (
      <div className="h-[840px] w-[360px]">
        <WaitingScreen {...args} />
      </div>
    )
  },
}
