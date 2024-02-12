import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import type { Meta, StoryObj } from "@storybook/react"

import { Avatar } from "."

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  render: ({ ...args }) => (
    <Avatar {...args}>
      <AvatarImage width={40} height={40} src="https://source.unsplash.com/random/?cat" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}
