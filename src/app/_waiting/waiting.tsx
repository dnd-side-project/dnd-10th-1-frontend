"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType, useActivity } from "@stackflow/react"
import { useEffect, useState } from "react"

import { SOCKET_EVENT } from "@/constants/apis"
import useAdminStore from "@/store/admin-store"
import useMyInfoStore from "@/store/my-info-store"
import useSocketStore from "@/store/socket-store"
import { WaitingResponseType } from "@/types/waiting"

import { useFlow } from "../stackflow"
import WaitingScreen from "./waiting-screen"

const Waiting: ActivityComponentType = () => {
  const isAdmin = useAdminStore(state => state.isAdmin)
  const { params } = useActivity()

  const { push, replace } = useFlow()

  const [waitingResponse, setWaitingResponse] = useState<WaitingResponseType>(null)

  const myInfo = useMyInfoStore(state => state.myInfo)
  const socket = useSocketStore(state => state.socket)

  const { roomId } = params

  useEffect(() => {
    socket.on(SOCKET_EVENT.LISTEN_ROOM_USER_LIST, res => setWaitingResponse(res))
    socket.on(SOCKET_EVENT.LEAVE_ALL_USER_FROM_ROOM, () => replace("Main", {}))
    if (!isAdmin) {
      socket.on(SOCKET_EVENT.MOVE_TO_LOADING_ROOM, () => {
        socket.off(SOCKET_EVENT.MOVE_TO_LOADING_ROOM)
        socket.off(SOCKET_EVENT.LISTEN_ROOM_USER_LIST)
        socket.off(SOCKET_EVENT.LEAVE_ALL_USER_FROM_ROOM)
        push("GameLoading", { roomId })
      })
    }
    socket.emit(SOCKET_EVENT.LISTEN_ROOM_USER_LIST, { roomId })

    return () => {
      if (!isAdmin) {
        socket.off(SOCKET_EVENT.MOVE_TO_LOADING_ROOM)
      }
      socket.off(SOCKET_EVENT.LISTEN_ROOM_USER_LIST)
      socket.off(SOCKET_EVENT.LEAVE_ALL_USER_FROM_ROOM)
    }
  }, [isAdmin, replace, roomId, socket, push])

  const inNotUser = typeof roomId === "undefined" && !isAdmin

  if (inNotUser || !myInfo) return

  return (
    <AppScreen>
      <WaitingScreen myInfo={myInfo} roomId={roomId} userList={waitingResponse?.userList} />
    </AppScreen>
  )
}

export default Waiting
