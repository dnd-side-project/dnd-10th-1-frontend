"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { useFlowMachine } from "@/app/flow-machine"

import ThirdScreen from "./third-screen"

const Third: ActivityComponentType = () => {
  const { changeProfile } = useFlowMachine()

  return (
    <AppScreen>
      <ThirdScreen onClick={changeProfile} />
    </AppScreen>
  )
}

export default Third
