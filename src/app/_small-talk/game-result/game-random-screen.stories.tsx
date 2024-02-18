import type { Meta, StoryObj } from "@storybook/react"

import SmallTalkGameResultScreen from "./game-random-screen"

const meta: Meta<typeof SmallTalkGameResultScreen> = {
  title: "SmallTalk/Screens/GameResult",
  component: SmallTalkGameResultScreen,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SmallTalkGameResultScreen>

export const Primary: Story = {
  render: () => {
    const mockResult = {
      userNickName: "해콩이",
      userProfile: "https://source.unsplash.com/random/?cat",
      talkValue: "자르반 84세",
    }
    const mockQuestion = "지하철에서 만난 빌런은"

    return (
      <div className="phone-size bg-gray-950">
        <SmallTalkGameResultScreen question={mockQuestion} result={mockResult} />
      </div>
    )
  },
}
