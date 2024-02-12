"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { useFlow } from "../../stackflow"
import FirstScreen from "./first-screen"

const First: ActivityComponentType = () => {
  const { push, replace } = useFlow()

  return (
    <AppScreen>
      <FirstScreen
        onClick={() => {
          push("OnboardingSecond", {})
        }}
        onSkipClick={() => {
          replace("Profile", {})
        }}
      />
    </AppScreen>
  )
}

export default First
