"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { useFlow } from "@/app/stackflow"

import SecondScreen from "./second-screen"

const Second: ActivityComponentType = () => {
  const { replace, pop } = useFlow()

  return (
    <AppScreen>
      <SecondScreen
        onClick={() => {
          replace("OnboardingThird", {})
        }}
        onSkipClick={() => {
          pop()
          replace("Profile", {}, { animate: false })
        }}
      />
    </AppScreen>
  )
}

export default Second
