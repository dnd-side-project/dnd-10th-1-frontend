"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { useFlow } from "@/app/stackflow"

import ThirdScreen from "./third-screen"

const Third: ActivityComponentType = () => {
  const { replace } = useFlow()

  return (
    <AppScreen>
      <ThirdScreen
        onClick={() => {
          replace("Profile", {})
        }}
        onSkipClick={() => {
          replace("Profile", {})
        }}
      />
    </AppScreen>
  )
}

export default Third
