"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { useFlow } from "@/app/_onboarding/onboarding-stackflow"

import SecondScreen from "./second-screen"

const Second: ActivityComponentType = () => {
  const { push } = useFlow()

  return (
    <AppScreen>
      <SecondScreen
        onClick={() => {
          push("Third", {})
        }}
      />
    </AppScreen>
  )
}

export default Second
