import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { mockUserInfo, mockUserList } from "@/seeds/user-mock"

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
      <div className="phone-size">
        <WaitingScreen {...args} myInfo={mockUserInfo} userList={mockUserList} />
      </div>
    )
  },
}
