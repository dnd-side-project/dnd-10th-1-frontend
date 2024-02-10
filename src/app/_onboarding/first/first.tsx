"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { useFlow } from "../onboarding-stackflow"
import FirstScreen from "./first-screen"

const First: ActivityComponentType = () => {
  const { push } = useFlow()

  return (
    <AppScreen>
      <FirstScreen
        onClick={() => {
          push("Second", {})
        }}
      />
    </AppScreen>
  )
}

export default First
