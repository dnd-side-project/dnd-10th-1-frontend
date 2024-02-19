import type { Meta, StoryFn } from "@storybook/react"

import SmallTalkGameResultScreen from "./game-random-screen"

const meta: Meta<typeof SmallTalkGameResultScreen> = {
  title: "SmallTalk/Screens/GameResult",
  component: SmallTalkGameResultScreen,
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

const Template: StoryFn<typeof SmallTalkGameResultScreen> = args => <SmallTalkGameResultScreen {...args} />

const result = {
  userNickName: "해콩이",
  userProfile: "https://source.unsplash.com/random/?cat",
  talkValue: "자르반 84세",
}

const question = "지하철에서 만난 빌런은"

export const Admin = Template.bind({})
export const User = Template.bind({})

const PhoneSize: StoryFn<typeof SmallTalkGameResultScreen> = args => (
  <div className="phone-size">
    <SmallTalkGameResultScreen {...args} />
  </div>
)

export const Phone = PhoneSize.bind({ isAdmin: true, result, question })

Admin.args = { isAdmin: true, result, question }
User.args = { isAdmin: false, result, question }
Phone.args = { isAdmin: false, result, question }

export default meta
