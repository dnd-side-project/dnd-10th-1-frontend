"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import useMyInfoStore from "@/store/my-info-store"

import MainScreen from "./main-screen"

const Main: ActivityComponentType = () => {
  const myInfo = useMyInfoStore(state => state.myInfo)
  if (typeof window === "undefined" || !myInfo) return

  const isMainFirst = localStorage.getItem("main-first") ? false : true

  return (
    <AppScreen>
      <MainScreen isMainFirst={isMainFirst} myInfo={myInfo} />
    </AppScreen>
  )
}

export default Main
