"use client"

import type { Meta, StoryObj } from "@storybook/react"

import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "."

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Primary: Story = {
  render: ({ ...args }) => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <button>Open Drawer</button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerClose>닫아주세요</DrawerClose>
      </DrawerContent>
    </Drawer>
  ),
}
