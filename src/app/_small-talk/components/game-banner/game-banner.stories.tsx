import type { Meta } from "@storybook/react"
import { StoryFn } from "@storybook/react"

import { mockSelectAnswer, mockTopic } from "@/seeds/small-talk-mock"
import { mockUserInfo } from "@/seeds/user-mock"

import SmallTalkGameBanner from "./game-banner"

const meta: Meta<typeof SmallTalkGameBanner> = {
  title: "SmallTalk/Components/GameBanner",
  component: SmallTalkGameBanner,
  tags: ["autodocs"],
}

const selectAnswer = mockSelectAnswer
const { nickName } = mockUserInfo
const topic = mockTopic

const Template: StoryFn<typeof SmallTalkGameBanner> = args => <SmallTalkGameBanner {...args} />

const PhoneSize: StoryFn<typeof SmallTalkGameBanner> = args => (
  <div className="phone-size">
    <SmallTalkGameBanner {...args} />
  </div>
)

export const Primary = Template.bind({})
export const PhoneRandom = PhoneSize.bind({})
export const PhoneResult = PhoneSize.bind({})

Primary.args = { type: "random", topic, selectAnswer, nickName }
PhoneRandom.args = { type: "random", topic, selectAnswer, nickName }
PhoneResult.args = { type: "result", topic, selectAnswer, nickName }

export default meta
