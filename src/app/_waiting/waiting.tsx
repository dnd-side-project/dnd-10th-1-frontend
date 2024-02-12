"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import WaitingScreen from "./waiting-screen"

const Waiting: ActivityComponentType = () => {
  return (
    <AppScreen>
      <WaitingScreen />
    </AppScreen>
  )
}

export default Waiting
