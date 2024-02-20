import type { Meta } from "@storybook/react"
import { StoryFn } from "@storybook/react"
import React from "react"

import LoadingBar from "./loading-bar"

const meta: Meta<typeof LoadingBar> = {
  title: "GameLoading/Components/LoadingBar",
  component: LoadingBar,
  tags: ["autodocs"],
}

const Template: StoryFn<typeof LoadingBar> = () => (
  <div className="bg-gray-950">
    <LoadingBar />
  </div>
)

const PhoneSize: StoryFn<typeof LoadingBar> = () => (
  <div className="phone-size bg-gray-950">
    <LoadingBar />
  </div>
)

export const Primary = Template.bind({})

export const Phone = PhoneSize.bind({})
Primary.args = {}

Phone.args = {}
export default meta
