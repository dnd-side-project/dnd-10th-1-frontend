"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType, useActivity } from "@stackflow/react"
import { useEffect } from "react"

import { SOCKET_EVENT } from "@/constants/apis"
import useSocketStore from "@/store/socket-store"

import { useFlow } from "../stackflow"
import { GameLoadingScreen } from "./game-loading-screen"

const GameLoading: ActivityComponentType = () => {
  const socket = useSocketStore(state => state.socket)
  const { params } = useActivity()
  const { push } = useFlow()
  const roomId = params.roomId
  useEffect(() => {
    socket.on(SOCKET_EVENT.MOVE_TO_GAME, res => {
      const { gameId, gameInfo } = res
      switch (gameId) {
        case 1:
          push("SmallTalkInput", { ...gameInfo, roomId })
          break
        case 2:
          push("MbtiGame", { ...gameInfo, roomId })
          break
      }
    })

    return () => {
      socket.off(SOCKET_EVENT.MOVE_TO_GAME)
    }
  }, [push, roomId, socket])
  return (
    <AppScreen>
      <GameLoadingScreen />
    </AppScreen>
  )
}

export default GameLoading
