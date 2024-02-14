import type { Meta, StoryObj } from "@storybook/react"

import SelectGamesScreen from "./select-games-screen"

const meta: Meta<typeof SelectGamesScreen> = {
  title: "SelectGames/SelectGamesScreen",
  component: SelectGamesScreen,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SelectGamesScreen>

export const Primary: Story = {
  render: args => (
    <div className="phone-size">
      <SelectGamesScreen {...args} />
    </div>
  ),
}
