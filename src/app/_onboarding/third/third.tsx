"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { useFlow } from "@/app/stackflow"

import ThirdScreen from "./third-screen"

const Third: ActivityComponentType = () => {
  const { replace, pop } = useFlow()

  return (
    <AppScreen>
      <ThirdScreen
        onClick={() => {
          pop()
          replace("Profile", {}, { animate: false })
        }}
        onSkipClick={() => {
          pop()
          replace("Profile", {}, { animate: false })
        }}
      />
    </AppScreen>
  )
}

export default Third
