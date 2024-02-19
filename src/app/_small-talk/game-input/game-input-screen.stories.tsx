import type { Meta, StoryFn } from "@storybook/react"

import SmallTalkGameInputScreen from "./game-input-screen"

const meta: Meta<typeof SmallTalkGameInputScreen> = {
  title: "SmallTalk/Screens/GameInput",
  component: SmallTalkGameInputScreen,
  tags: ["autodocs"],
  argTypes: {
    question: {
      control: "text",
    },
  },
}

const question = "지하철에서 만난 빌런은"

const Template: StoryFn<typeof SmallTalkGameInputScreen> = args => <SmallTalkGameInputScreen {...args} />

export const Primary = Template.bind({ question })

const PhoneSize: StoryFn<typeof SmallTalkGameInputScreen> = args => (
  <div className="phone-size">
    <SmallTalkGameInputScreen {...args} />
  </div>
)

export const Phone = PhoneSize.bind({ question })

export default meta
