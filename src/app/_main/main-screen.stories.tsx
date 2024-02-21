import type { Meta } from "@storybook/react"
import { StoryFn } from "@storybook/react"
import React from "react"

import { mockMyUserInfo } from "@/seeds/user-mock"

import MainScreen from "./main-screen"

const meta: Meta<typeof MainScreen> = {
  title: "Main/Screen",
  component: MainScreen,
  tags: ["autodocs"],
}

const myInfo = mockMyUserInfo

const Template: StoryFn<typeof MainScreen> = args => <MainScreen {...args} />

const PhoneSize: StoryFn<typeof MainScreen> = args => (
  <div className="phone-size">
    <MainScreen {...args} />
  </div>
)

export const Primary = Template.bind({})
export const PrimaryFirst = Template.bind({})

export const Phone = PhoneSize.bind({})
export const PhoneFirst = PhoneSize.bind({})

Primary.args = { isMainFirst: false, myInfo }
PrimaryFirst.args = { isMainFirst: true, myInfo }
Phone.args = { isMainFirst: false, myInfo }
PhoneFirst.args = { isMainFirst: true, myInfo }

export default meta
