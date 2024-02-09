"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/button"
import Splash from "@/components/splash"
import { cn } from "@/libs/tailwind/cn"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <main className="relative">
      {loading ? (
        <Splash />
      ) : (
        <>
          <Button className={cn("t2 bg-primary-200")}>dnd-10-1 fe</Button>
        </>
      )}
    </main>
  )
}
