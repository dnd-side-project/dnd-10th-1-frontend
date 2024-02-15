/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import MbtiScreen from "./mbti-screen"

const meta: Meta<typeof MbtiScreen> = {
  title: "Mbti/MbtiScreen",
  component: MbtiScreen,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MbtiScreen>

export const Primary: Story = {
  render: () => {
    const [isSelected, setIsSelected] = useState(false)
    return (
      <MbtiScreen
        onBubbleClick={() => {
          setIsSelected(true)
        }}
        isSelected={isSelected}
        onCompleteClick={() => {}}
      />
    )
  },
}
