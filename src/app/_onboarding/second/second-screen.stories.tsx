import type { Meta, StoryObj } from "@storybook/react"

import SecondScreen from "./second-screen"

const meta: Meta<typeof SecondScreen> = {
  title: "Onboarding/SecondScreen",
  component: SecondScreen,
  argTypes: { onClick: { action: "clicked" }, onSkipClick: { action: "skipClicked" } },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SecondScreen>

export const Primary: Story = {
  render: args => <SecondScreen {...args} />,
}
