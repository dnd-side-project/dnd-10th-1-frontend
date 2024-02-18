import type { Meta, StoryObj } from "@storybook/react"

import SmallTalkGameRandomScreen from "./game-random-screen"

const meta: Meta<typeof SmallTalkGameRandomScreen> = {
  title: "SmallTalk/Screens/GameRandom",
  component: SmallTalkGameRandomScreen,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SmallTalkGameRandomScreen>

export const Primary: Story = {
  render: () => {
    const mockTalkList = ["단소 빌런", "지하철에서 담배피는 놈", "기계체조 장인", "자르반 84세"]
    const mockQuestion = "지하철에서 만난 빌런은"

    return (
      <div className="phone-size bg-gray-950">
        <SmallTalkGameRandomScreen question={mockQuestion} talkList={mockTalkList} />
      </div>
    )
  },
}
