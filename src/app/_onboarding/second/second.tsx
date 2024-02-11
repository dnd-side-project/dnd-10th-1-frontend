"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { useFlow } from "@/app/stackflow"

import SecondScreen from "./second-screen"

const Second: ActivityComponentType = () => {
  const { replace } = useFlow()

  return (
    <AppScreen>
      <SecondScreen
        onClick={() => {
          replace("OnboardingThird", {})
        }}
      />
    </AppScreen>
  )
}

export default Second
