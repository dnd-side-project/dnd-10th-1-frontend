"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType, useActivity } from "@stackflow/react"
import { useEffect } from "react"

import { SOCKET_EVENT } from "@/constants/apis"
import useSocketStore from "@/store/socket-store"

import { useFlow } from "../stackflow"
import { GameLoadingScreen } from "./game-loading-screen"

const Waiting: ActivityComponentType = () => {
  const socket = useSocketStore(state => state.socket)
  const { params } = useActivity()
  const { replace } = useFlow()
  const roomId = params.roomId
  useEffect(() => {
    socket.on(SOCKET_EVENT.MOVE_TO_GAME, res => {
      const { gameId, gameItem } = res
      switch (gameId) {
        case 1:
          replace("SmallTalkInput", { gameItem })
          break
        case 2:
          replace("MbtiGame", { gameItem })
          break
        default:
          break
      }
    })
    return () => {
      socket.off(SOCKET_EVENT.MOVE_TO_GAME)
    }
  }, [replace, roomId, socket])
  return (
    <AppScreen>
      <GameLoadingScreen />
    </AppScreen>
  )
}

export default Waiting
