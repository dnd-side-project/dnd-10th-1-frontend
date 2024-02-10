import type { Meta, StoryObj } from "@storybook/react"

import Chip from "@/components/chip"

import MainButton from "."

const meta: Meta<typeof MainButton> = {
  title: "Main/Button",
  component: MainButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MainButton>

export const Primary: Story = {
  render: ({ ...args }) => {
    const Game = ["MBTI 성향", "빈칸주제"]
    return (
      <MainButton {...args} control="create">
        <div className="left t3 mt-[10px] flex text-left text-pink-100">
          방을 만들고
          <br />
          팀원들과 게임을 시작하세요
        </div>
        <div className="mt-10 flex gap-[10px]">
          {Game.map(item => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </MainButton>
    )
  },
}

export const InviteRoomButton: Story = {
  render: ({ ...args }) => <MainButton {...args} control="invite" />,
}
