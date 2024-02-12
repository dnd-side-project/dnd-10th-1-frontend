import type { Meta, StoryObj } from "@storybook/react"

import Chip from "."

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Chip>

export const Primary: Story = {
  render: () => <Chip>팀원 성향 파악</Chip>,
}

export const Check: Story = {
  render: () => <Chip check>썰 풀어줄 사람 고르기</Chip>,
}
