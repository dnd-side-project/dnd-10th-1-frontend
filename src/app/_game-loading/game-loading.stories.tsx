import type { Meta } from "@storybook/react"
import { StoryFn } from "@storybook/react"
import React from "react"

import { GameLoadingScreen } from "./game-loading-screen"

const meta: Meta<typeof GameLoadingScreen> = {
  title: "GameLoading/Screen",
  component: GameLoadingScreen,
  tags: ["autodocs"],
}

const Template: StoryFn<typeof GameLoadingScreen> = () => <GameLoadingScreen />

const PhoneSize: StoryFn<typeof GameLoadingScreen> = () => (
  <div className="phone-size">
    <GameLoadingScreen />
  </div>
)

export const Primary = Template.bind({})
export const Phone = PhoneSize.bind({})

Primary.args = {}
Phone.args = {}

export default meta
