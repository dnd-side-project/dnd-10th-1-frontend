import type { Meta, StoryObj } from "@storybook/react"

import { mockUserInfo } from "@/seeds/user-mock"

import GameBody from "./game-body"

const meta: Meta<typeof GameBody> = {
  title: "SmallTalk/Components/GameBody",
  component: GameBody,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof GameBody>

export const Primary: Story = {
  render: () => (
    <div className="phone-size bg-gray-950 pt-20">
      <GameBody myInfo={mockUserInfo} />
    </div>
  ),
}
