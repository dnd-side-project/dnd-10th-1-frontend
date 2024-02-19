import type { Meta, StoryFn } from "@storybook/react"

import SmallTalkGameRandomScreen from "./game-random-screen"

const meta: Meta<typeof SmallTalkGameRandomScreen> = {
  title: "SmallTalk/Screens/GameRandom",
  component: SmallTalkGameRandomScreen,
  tags: ["autodocs"],
  argTypes: {
    isAdmin: {
      control: "boolean",
    },
    question: {
      control: "text",
    },
  },
}

export default meta

const talkList = [
  "단소 빌런",
  "지하철에서 담배피는 놈",
  "기계체조 장인",
  "자르반 84세",
  "단소 빌런",
  "지하철에서 담배피는 놈",
  "기계체조 장인",
  "자르반 84세",
]
const question = "지하철에서 만난 빌런은"

const Template: StoryFn<typeof SmallTalkGameRandomScreen> = args => <SmallTalkGameRandomScreen {...args} />

export const Admin = Template.bind({})
export const User = Template.bind({})

const PhoneSize: StoryFn<typeof SmallTalkGameRandomScreen> = args => (
  <div className="phone-size">
    <SmallTalkGameRandomScreen {...args} />
  </div>
)

export const Phone = PhoneSize.bind({ isAdmin: true, talkList, question })

Admin.args = { isAdmin: true, talkList, question }
User.args = { isAdmin: false, talkList, question }
Phone.args = { isAdmin: false, talkList, question }
