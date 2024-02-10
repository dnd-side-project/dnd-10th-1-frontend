import type { Meta, StoryObj } from "@storybook/react"

import MainScreen from "."

const meta: Meta<typeof MainScreen> = {
  title: "Main/Screen",
  component: MainScreen,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MainScreen>

export const Primary: Story = {
  render: ({ ...args }) => <MainScreen {...args} />,
}
