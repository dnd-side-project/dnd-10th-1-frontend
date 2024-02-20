"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { mockUserInfo } from "@/seeds/user-mock"

import MainScreen from "./main-screen"

const Main: ActivityComponentType = () => {
  if (typeof window === "undefined") return
  const isMainFirst = localStorage.getItem("main-first") ? true : false
  return (
    <AppScreen>
      <MainScreen isMainFirst={isMainFirst} userInfo={mockUserInfo} />
    </AppScreen>
  )
}

export default Main
