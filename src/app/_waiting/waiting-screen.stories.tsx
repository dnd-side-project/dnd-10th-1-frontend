import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UserWaitingType } from "@/app/_waiting/types/game"
import { UserInfoType } from "@/types/user"

import WaitingScreen from "./waiting-screen"

const meta: Meta<typeof WaitingScreen> = {
  title: "Waiting/Screen",
  component: WaitingScreen,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof WaitingScreen>

export const Primary: Story = {
  render: ({ ...args }) => {
    const mockInfo: UserInfoType = {
      userNickName: "현아",
      userProfileImage: "https://source.unsplash.com/random/?cat",
    }

    const mockUserList: UserWaitingType[] = [
      {
        id: 1,
        nickName: "얼음공주",
        profileImage: "https://source.unsplash.com/random/?cat",
        status: true,
      },
      {
        id: 2,
        nickName: "얼음공주",
        profileImage: "https://source.unsplash.com/random/?cat",
        status: true,
      },
      {
        id: 3,
        nickName: "얼음공주",
        profileImage: "https://source.unsplash.com/random/?cat",
        status: true,
      },
      {
        id: 4,
        nickName: "얼음공주",
        profileImage: "https://source.unsplash.com/random/?cat",
        status: true,
      },
      {
        id: 5,
        nickName: "얼음공주",
        profileImage: "https://source.unsplash.com/random/?cat",
        status: true,
      },
    ]
    return (
      <div className="phone-size">
        <WaitingScreen {...args} userInfo={mockInfo} userList={mockUserList} role="방장" />
      </div>
    )
  },
}
