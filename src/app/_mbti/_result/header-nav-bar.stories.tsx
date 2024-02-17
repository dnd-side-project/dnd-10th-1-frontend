import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { TITLE_LIST } from "./constants"
import HeaderNavBar from "./header-nav-bar"

const meta: Meta<typeof HeaderNavBar> = {
  title: "Mbti/HeaderNavBar",
  component: HeaderNavBar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof HeaderNavBar>

export const Primary: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedTitle, setSelectedTitle] = useState<(typeof TITLE_LIST)[number]>("팀조합")

    return (
      <div className="phone-size bg-gray-950 text-white">
        <HeaderNavBar {...args} selectedTitle={selectedTitle} onClick={title => setSelectedTitle(title)} />,
      </div>
    )
  },
}
