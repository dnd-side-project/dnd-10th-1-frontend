import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType, useActivity } from "@stackflow/react"
import { useEffect } from "react"

import { SOCKET_EVENT } from "@/constants/apis"
import useSocketStore from "@/store/socket-store"

import { useFlow } from "../stackflow"
import SelectGamesScreen from "./select-games-screen"

const SelectGames: ActivityComponentType = () => {
  const { replace } = useFlow()
  const { params } = useActivity()
  const roomId = params.roomId
  const onCompleteClick = (gameId: number) => {
    socket.emit(SOCKET_EVENT.START_GAME, { roomId, gameId })
  }
  const socket = useSocketStore(state => state.socket)

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
    socket.emit(SOCKET_EVENT.SELECT_GAME, { roomId })

    return () => {
      socket.off(SOCKET_EVENT.MOVE_TO_GAME)
    }
  }, [replace, roomId, socket])

  return (
    <AppScreen>
      <SelectGamesScreen onCompleteClick={onCompleteClick} />
    </AppScreen>
  )
}

export default SelectGames
