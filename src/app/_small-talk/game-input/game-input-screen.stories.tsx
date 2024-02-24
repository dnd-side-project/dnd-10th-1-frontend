import type { Meta, StoryFn } from "@storybook/react"

import { mockTopic } from "@/seeds/small-talk-mock"
import { mockMyUserInfo } from "@/seeds/user-mock"

import SmallTalkGameInputScreen from "./game-input-screen"

const meta: Meta<typeof SmallTalkGameInputScreen> = {
  title: "SmallTalk/Screens/GameInput",
  component: SmallTalkGameInputScreen,
  tags: ["autodocs"],
}

const topic = mockTopic
const myInfo = mockMyUserInfo
const userCount = { answerCount: 0, totalCount: 3 }
const mockFunction = () => {}

const Template: StoryFn<typeof SmallTalkGameInputScreen> = args => (
  <SmallTalkGameInputScreen {...args} userCount={userCount} />
)

const PhoneSize: StoryFn<typeof SmallTalkGameInputScreen> = args => (
  <div className="phone-size">
    <SmallTalkGameInputScreen {...args} userCount={userCount} />
  </div>
)

export const Primary = Template.bind({})

export const Phone = PhoneSize.bind({})

Primary.args = { myInfo, topic, userCount, sendAnswer: mockFunction, timeOut: mockFunction }
Phone.args = { myInfo, topic, userCount }

export default meta
