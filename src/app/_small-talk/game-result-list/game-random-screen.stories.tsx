import type { Meta, StoryFn } from "@storybook/react"

import { mockAnswerList, mockTopic } from "@/seeds/small-talk-mock"

import SmallTalkGameResultListScreen from "./game-result-list-screen"

const meta: Meta<typeof SmallTalkGameResultListScreen> = {
  title: "SmallTalk/Screens/GameRandom",
  component: SmallTalkGameResultListScreen,
  tags: ["autodocs"],
}

export default meta

const answerList = mockAnswerList
const topic = mockTopic

const mockFunction = () => {}

const Template: StoryFn<typeof SmallTalkGameResultListScreen> = args => <SmallTalkGameResultListScreen {...args} />

export const Admin = Template.bind({})
export const User = Template.bind({})

const PhoneSize: StoryFn<typeof SmallTalkGameResultListScreen> = args => (
  <div className="phone-size">
    <SmallTalkGameResultListScreen {...args} />
  </div>
)

export const Phone = PhoneSize.bind({})

Admin.args = { isAdmin: true, answerList, topic, moveResultScreen: mockFunction }
User.args = { answerList, topic, moveResultScreen: mockFunction }
Phone.args = { answerList, topic, moveResultScreen: mockFunction }
