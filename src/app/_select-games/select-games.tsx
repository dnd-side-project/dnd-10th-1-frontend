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
  const onCompleteClick = (selected: "mbti" | "blank") => {
    replace("Splash", { state: selected })
  }
  const socket = useSocketStore(state => state.socket)

  useEffect(() => {
    socket.emit(SOCKET_EVENT.SELECT_GAME, { roomId })
  }, [roomId, socket])

  return (
    <AppScreen>
      <SelectGamesScreen onCompleteClick={onCompleteClick} />
    </AppScreen>
  )
}

export default SelectGames
