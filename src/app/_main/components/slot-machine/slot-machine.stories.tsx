import type { Meta, StoryObj } from "@storybook/react"

import MachineTest from "./machine-test"
import SlotMachine from "./slot-machine"
import useSlotMachine from "./slot-machine"

const meta: Meta<typeof SlotMachine> = {
  title: "Main/Components/SlotMachine",
  component: MachineTest,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof SlotMachine>

export const Primary: Story = {
  render: () => {
    const textList = [
      "일하지 않을 때 주로 뭐하세요?",
      "어떤 종류의 음악을 좋아하세요?",
      "로또에 당첨된다면 무엇을 가장 먼저 하고 싶으세요?",
      "형제, 자매 있으세요? 친하신가요?",
      "부모님과 함께 지내세요?",
      "요리 잘하시나요?",
      "영화랑 TV 중에 무엇을 더 좋아하세요?",
    ]
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { SlotMachine, randomStart, text } = useSlotMachine({ textList, duration: 4 })
    return (
      <MachineTest>
        <button className="bg-gray-400 text-white" onClick={randomStart}>
          룰렛 돌리기
        </button>
        <SlotMachine className="text-white" />
        <span className="text-white">{text}</span>
      </MachineTest>
    )
  },
}
