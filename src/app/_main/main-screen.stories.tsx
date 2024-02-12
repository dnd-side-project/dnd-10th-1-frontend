import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import MainScreen from "./main-screen"

const meta: Meta<typeof MainScreen> = {
  title: "Main/Screen",
  component: MainScreen,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MainScreen>

export const Primary: Story = {
  render: ({ ...args }) => {
    const mockInfo = {
      userNickName: "해지",
      userProfileImage: "https://source.unsplash.com/random/?cat",
    }
    return (
      <div className="phone-size">
        <MainScreen {...args} isFirstVisit userInfo={mockInfo} />
      </div>
    )
  },
}
