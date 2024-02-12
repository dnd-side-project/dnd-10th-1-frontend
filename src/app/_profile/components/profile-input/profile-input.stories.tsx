import type { Meta, StoryObj } from "@storybook/react"

import PorifleInput from "./profile-input"

const meta: Meta<typeof PorifleInput> = {
  title: "Profile/Components/PorifleInput",
  component: PorifleInput,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof PorifleInput>

export const Primary: Story = {
  render: args => <PorifleInput {...args} />,
}
