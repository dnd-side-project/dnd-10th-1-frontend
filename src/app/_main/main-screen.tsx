"use client"

import { useEffect, useState } from "react"

import { Drawer } from "@/components/drawer"
import { SOCKET_EVENT } from "@/constants/apis"
import useAdminStore from "@/store/admin-store"
import useSocketStore from "@/store/socket-store"
import { UserMyInfoType } from "@/types/user"

import { useFlow } from "../stackflow"
import MainContent from "./components/main-content"
import MainFooter from "./components/main-footer"
import MainHeader from "./components/main-header"
import MainOnboarding from "./components/main-onboarding"

type Props = {
  myInfo: UserMyInfoType
}

export default function MainScreen({ myInfo }: Props) {
  const [isFirst, setIsFirst] = useState(() => (localStorage.getItem("main-first") ? false : true))
  const { replace } = useFlow()
  const setAdmin = useAdminStore(state => state.setAdmin)
  const socket = useSocketStore(state => state.socket)

  useEffect(() => {
    socket.on(SOCKET_EVENT.MOVE_TO_WAITING_ROOM, res => {
      if (res.hasOwnProperty("code")) {
        if (res.code !== 400) {
          replace("Waiting", { roomId: res.roomId })
        }
      } else {
        replace("Waiting", { roomId: res })
      }
    })

    return () => {
      socket?.off(SOCKET_EVENT.MOVE_TO_WAITING_ROOM)
    }
  }, [replace, socket])

  const onSubmit = async (formData: FormData) => {
    const inputId = formData.get("inviteCode")?.toString()

    if (!inputId) throw new Error("옳지 않은 접근입니다.")

    socket?.emit(SOCKET_EVENT.JOIN_ROOM, { roomId: inputId, userId: myInfo.id })
  }

  const onboardingHandler = () => {
    setIsFirst(false)
    localStorage.setItem("main-first", "isNotFirst")
  }

  const onCreateRoom = () => {
    setAdmin()
    socket?.emit(SOCKET_EVENT.CREATE_ROOM, { userId: myInfo.id })
  }

  return (
    <div className="relative h-full w-full bg-gray-950">
      <Drawer>
        {isFirst && <MainOnboarding onboardingHandler={onboardingHandler} />}
        <MainHeader myInfo={myInfo} />
        <MainFooter onCreateRoom={onCreateRoom} />
        <MainContent inviteWithCode={onSubmit} />
      </Drawer>
    </div>
  )
}
