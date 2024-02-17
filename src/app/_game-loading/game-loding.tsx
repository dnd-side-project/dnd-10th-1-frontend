"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { GameLoadingScreen } from "./game-loading-screen"

const Waiting: ActivityComponentType = () => {
  return (
    <AppScreen>
      <GameLoadingScreen />
    </AppScreen>
  )
}

export default Waiting
