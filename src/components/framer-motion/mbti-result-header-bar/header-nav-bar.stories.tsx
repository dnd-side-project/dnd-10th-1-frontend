import type { Meta, StoryObj } from "@storybook/react"

import HeaderNavBar from "./header-nav-bar"

const meta: Meta<typeof HeaderNavBar> = {
  title: "Motion/HeaderNavBar",
  component: HeaderNavBar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof HeaderNavBar>

export const Primary: Story = {
  render: () => (
    <div className="phone-size bg-gray-950">
      <HeaderNavBar />,
    </div>
  ),
}
