import type { Meta, StoryObj } from "@storybook/react"

import SmallTalkGameInputScreen from "./game-input-screen"

const meta: Meta<typeof SmallTalkGameInputScreen> = {
  title: "SmallTalk/GameInput",
  component: SmallTalkGameInputScreen,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SmallTalkGameInputScreen>

export const Primary: Story = {
  render: () => (
    <div className="phone-size bg-gray-950">
      <SmallTalkGameInputScreen />
    </div>
  ),
}
