"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import SplashLogo from "@/app/assets/images/splash-logo.png"

export default function Splash() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 1000)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen items-center justify-center bg-[#4747F4]">
      <Image src={SplashLogo} alt="스플래시 로고" priority className="animate-bounce" />
    </div>
  )
}
