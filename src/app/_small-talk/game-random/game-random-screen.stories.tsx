import type { Meta, StoryFn } from "@storybook/react"

import { mockAnswerList, mockTopic } from "@/seeds/small-talk-mock"

import SmallTalkGameRandomScreen from "./game-random-screen"

const meta: Meta<typeof SmallTalkGameRandomScreen> = {
  title: "SmallTalk/Screens/GameRandom",
  component: SmallTalkGameRandomScreen,
  tags: ["autodocs"],
}

export default meta

const answerList = mockAnswerList
const topic = mockTopic

const Template: StoryFn<typeof SmallTalkGameRandomScreen> = args => <SmallTalkGameRandomScreen {...args} />

export const Admin = Template.bind({})
export const User = Template.bind({})

const PhoneSize: StoryFn<typeof SmallTalkGameRandomScreen> = args => (
  <div className="phone-size">
    <SmallTalkGameRandomScreen {...args} />
  </div>
)

export const Phone = PhoneSize.bind({})

Admin.args = { isAdmin: true, answerList, topic }
User.args = { answerList, topic }
Phone.args = { answerList, topic }
