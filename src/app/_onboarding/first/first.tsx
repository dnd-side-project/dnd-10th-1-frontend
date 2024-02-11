"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { useFlow } from "../../stackflow"
import FirstScreen from "./first-screen"

const First: ActivityComponentType = () => {
  const { push, replace, pop } = useFlow()

  return (
    <AppScreen>
      <FirstScreen
        onClick={() => {
          push("OnboardingSecond", {})
        }}
        onSkipClick={() => {
          pop()
          replace("Profile", {}, { animate: false })
        }}
      />
    </AppScreen>
  )
}

export default First
