import type { Meta, StoryObj } from "@storybook/react"

import MainOnboarding from "."

const meta: Meta<typeof MainOnboarding> = {
  title: "Main/OnboardingScreen",
  component: MainOnboarding,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MainOnboarding>

export const Primary: Story = {
  render: ({ ...args }) => <MainOnboarding {...args} />,
}
