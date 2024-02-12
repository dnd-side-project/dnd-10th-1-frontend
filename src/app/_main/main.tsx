"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import MainScreen from "./main-screen"

const Main: ActivityComponentType = () => {
  const mockInfo = {
    userNickName: "해지",
    userProfileImage: "https://source.unsplash.com/random/?cat",
  }
  return (
    <AppScreen>
      <MainScreen isFirstVisit userInfo={mockInfo} />
    </AppScreen>
  )
}

export default Main
