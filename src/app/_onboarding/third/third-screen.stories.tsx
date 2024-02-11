import type { Meta, StoryObj } from "@storybook/react"

import ThirdScreen from "./third-screen"

const meta: Meta<typeof ThirdScreen> = {
  title: "Onboarding/ThirdScreen",
  component: ThirdScreen,
  argTypes: { onClick: { action: "clicked" }, onSkipClick: { action: "skipClicked" } },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ThirdScreen>

export const Primary: Story = {
  render: args => <ThirdScreen {...args} />,
}
