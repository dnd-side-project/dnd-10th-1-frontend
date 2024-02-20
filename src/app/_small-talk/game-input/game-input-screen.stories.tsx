import type { Meta, StoryFn } from "@storybook/react"

import { mockQuestion } from "@/seeds/small-talk-mock"
import { mockUserInfo } from "@/seeds/user-mock"

import SmallTalkGameInputScreen from "./game-input-screen"

const meta: Meta<typeof SmallTalkGameInputScreen> = {
  title: "SmallTalk/Screens/GameInput",
  component: SmallTalkGameInputScreen,
  tags: ["autodocs"],
}

const question = mockQuestion
const myInfo = mockUserInfo

const Template: StoryFn<typeof SmallTalkGameInputScreen> = args => <SmallTalkGameInputScreen {...args} />

const PhoneSize: StoryFn<typeof SmallTalkGameInputScreen> = args => (
  <div className="phone-size">
    <SmallTalkGameInputScreen {...args} />
  </div>
)

export const Primary = Template.bind({})

export const Phone = PhoneSize.bind({})

Primary.args = { myInfo, question }
Phone.args = { myInfo, question }

export default meta
