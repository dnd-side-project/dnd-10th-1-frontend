"use client"

import { useEffect } from "react"

import useSocketStore from "@/store/socket-store"

import { Stack } from "./stackflow"

export default function Home() {
  const { connect, disconnect } = useSocketStore()
  useEffect(() => {
    connect()

    return () => {
      disconnect()
    }
  }, [connect, disconnect])

  return <Stack />
}
