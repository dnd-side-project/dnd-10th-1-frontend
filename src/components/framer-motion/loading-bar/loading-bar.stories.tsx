import type { Meta, StoryObj } from "@storybook/react"

import Loadingbar from "./loadingbar"

const meta: Meta<typeof Loadingbar> = {
  title: "Motion/LoadingBar",
  component: Loadingbar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Loadingbar>

export const Primary: Story = {
  render: () => (
    <div className="phone-size bg-gray-950">
      <Loadingbar />,
    </div>
  ),
}
