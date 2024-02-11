"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"
import Image from "next/image"
import { useEffect, useState } from "react"

import SplashLogo from "@/assets/images/splash-logo.png"

import { useFlow } from "../stackflow"

const Splash: ActivityComponentType = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const { replace } = useFlow()

  useEffect(() => {
    const timeout = setTimeout(() => {
      const change = isFirstVisit ? "OnboardingFirst" : "OnboardingFirst"
      replace(change, {})
    }, 1500)

    return () => clearTimeout(timeout)
  }, [isFirstVisit, replace])

  return (
    <AppScreen>
      <div className="flex h-screen items-center justify-center bg-[#4747F4]">
        <Image src={SplashLogo} alt="스플래시 로고" priority className="animate-bounce" />
      </div>
    </AppScreen>
  )
}

export default Splash
