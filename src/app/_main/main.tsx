"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import useMyInfoStore from "@/store/my-info-store"

import MainScreen from "./main-screen"

const Main: ActivityComponentType = () => {
  const myInfo = useMyInfoStore(state => state.myInfo)
  if (typeof window === "undefined" || !myInfo) return

  return (
    <AppScreen>
      <MainScreen myInfo={myInfo} />
    </AppScreen>
  )
}

export default Main
