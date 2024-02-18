import type { Meta, StoryObj } from "@storybook/react"

import SmallTalkGameBanner from "./game-banner"

const meta: Meta<typeof SmallTalkGameBanner> = {
  title: "SmallTalk/Components/GameBanner",
  component: SmallTalkGameBanner,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SmallTalkGameBanner>

export const Random: Story = {
  render: () => (
    <div className="phone-size">
      <SmallTalkGameBanner question="지하철에서 만난 빌런은" type="random" />
    </div>
  ),
}

export const Result: Story = {
  render: () => (
    <div className="phone-size">
      <SmallTalkGameBanner
        question="지하철에서 만난 빌런은"
        type="result"
        result={{ talkValue: "단소 살인마", userNickName: "타락천사" }}
      />
    </div>
  ),
}
