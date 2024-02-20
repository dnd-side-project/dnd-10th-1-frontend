import type { Meta, StoryFn } from "@storybook/react"

import SmallTalkGameResultScreen from "@/app/_small-talk/game-result/game-result-screen"
import { mockQuestion, mockSelectQuestion } from "@/seeds/small-talk-mock"
import { mockUserInfo } from "@/seeds/user-mock"

const meta: Meta<typeof SmallTalkGameResultScreen> = {
  title: "SmallTalk/Screens/GameResult",
  component: SmallTalkGameResultScreen,
  tags: ["autodocs"],
}

const Template: StoryFn<typeof SmallTalkGameResultScreen> = args => <SmallTalkGameResultScreen {...args} />

const selectUserInfo = mockUserInfo
const selectQuestion = mockSelectQuestion
const question = mockQuestion

const PhoneSize: StoryFn<typeof SmallTalkGameResultScreen> = args => (
  <div className="phone-size">
    <SmallTalkGameResultScreen {...args} />
  </div>
)

export const Admin = Template.bind({})
export const User = Template.bind({})
export const Phone = PhoneSize.bind({})

Admin.args = { isAdmin: true, selectUserInfo, selectQuestion, question }
User.args = { isAdmin: false, selectUserInfo, selectQuestion, question }
Phone.args = { isAdmin: false, selectUserInfo, selectQuestion, question }

export default meta
