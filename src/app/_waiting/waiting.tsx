"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { UserWaitingType } from "@/app/_waiting/types/game"
import { UserInfoType } from "@/types/user"

import WaitingScreen from "./waiting-screen"

const Waiting: ActivityComponentType = () => {
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
    <AppScreen>
      <WaitingScreen userInfo={mockInfo} userList={mockUserList} role="방장" />
    </AppScreen>
  )
}

export default Waiting
