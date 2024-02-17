import type { Meta, StoryObj } from "@storybook/react"

import LoadingBar from "./loading-bar"

const meta: Meta<typeof LoadingBar> = {
  title: "GameLoading/Components/LoadingBar",
  component: LoadingBar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LoadingBar>

export const Primary: Story = {
  render: () => (
    <div className="phone-size bg-gray-950">
      <LoadingBar />,
    </div>
  ),
}
