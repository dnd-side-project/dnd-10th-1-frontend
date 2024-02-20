import type { Meta } from "@storybook/react"
import { StoryFn } from "@storybook/react"

import { mockQuestion, mockSelectQuestion } from "@/seeds/small-talk-mock"
import { mockUserInfo } from "@/seeds/user-mock"

import SmallTalkGameBanner from "./game-banner"

const meta: Meta<typeof SmallTalkGameBanner> = {
  title: "SmallTalk/Components/GameBanner",
  component: SmallTalkGameBanner,
  tags: ["autodocs"],
}

const selectQuestion = mockSelectQuestion
const { userNickName } = mockUserInfo
const question = mockQuestion

const Template: StoryFn<typeof SmallTalkGameBanner> = args => <SmallTalkGameBanner {...args} />

const PhoneSize: StoryFn<typeof SmallTalkGameBanner> = args => (
  <div className="phone-size">
    <SmallTalkGameBanner {...args} />
  </div>
)

export const Primary = Template.bind({})
export const PhoneRandom = PhoneSize.bind({})
export const PhoneResult = PhoneSize.bind({})

Primary.args = { type: "random", question, selectQuestion, userNickName }
PhoneRandom.args = { type: "random", question, selectQuestion, userNickName }
PhoneResult.args = { type: "result", question, selectQuestion, userNickName }

export default meta
