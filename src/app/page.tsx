"use client"

import { useEffect } from "react"

import Splash from "@/components/splash"

import { OnboardingStack } from "./_onboarding/onboarding-stackflow"
import { ProfileStack } from "./_profile/profile-stackflow"
import { useFlowMachine } from "./flow-machine"

export default function Home() {
  const { flow, changeOnboarding, isFirstVisit } = useFlowMachine()

  useEffect(() => {
    if (!isFirstVisit) return

    setTimeout(() => {
      changeOnboarding()
    }, 1500)
  }, [changeOnboarding, isFirstVisit])

  return (
    <main>
      {flow === "SPLASH" && <Splash />}
      {flow === "ONBOARDING" && <OnboardingStack />}
      {flow === "PROFILE" && <ProfileStack />}
    </main>
  )
}
