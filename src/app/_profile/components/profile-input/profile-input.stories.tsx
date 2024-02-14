import type { Meta, StoryObj } from "@storybook/react"

import ProfileInput from "./profile-input"

const meta: Meta<typeof ProfileInput> = {
  title: "Profile/Components/ProfileInput",
  component: ProfileInput,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ProfileInput>

export const Primary: Story = {
  render: args => <ProfileInput {...args} />,
}
