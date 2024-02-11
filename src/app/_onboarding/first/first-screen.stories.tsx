import type { Meta, StoryObj } from "@storybook/react"

import FirstScreen from "./first-screen"

const meta: Meta<typeof FirstScreen> = {
  title: "Onboarding/FirstScreen",
  component: FirstScreen,
  argTypes: { onClick: { action: "clicked" }, onSkipClick: { action: "skipClicked" } },

  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof FirstScreen>

export const Primary: Story = {
  render: args => <FirstScreen {...args} />,
}
