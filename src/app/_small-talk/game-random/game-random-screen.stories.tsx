import type { Meta, StoryFn } from "@storybook/react"

import { mockQuestion, mockSelectQuestion, mockTalkList } from "@/seeds/small-talk-mock"

import SmallTalkGameRandomScreen from "./game-random-screen"

const meta: Meta<typeof SmallTalkGameRandomScreen> = {
  title: "SmallTalk/Screens/GameRandom",
  component: SmallTalkGameRandomScreen,
  tags: ["autodocs"],
}

export default meta

const talkList = mockTalkList
const question = mockQuestion
const selectQuestion = mockSelectQuestion

const Template: StoryFn<typeof SmallTalkGameRandomScreen> = args => <SmallTalkGameRandomScreen {...args} />

export const Admin = Template.bind({})
export const User = Template.bind({})

const PhoneSize: StoryFn<typeof SmallTalkGameRandomScreen> = args => (
  <div className="phone-size">
    <SmallTalkGameRandomScreen {...args} />
  </div>
)

export const Phone = PhoneSize.bind({ isAdmin: true, talkList, question })

Admin.args = { isAdmin: true, selectQuestion, talkList, question }
User.args = { selectQuestion, talkList, question }
Phone.args = { selectQuestion, talkList, question }
