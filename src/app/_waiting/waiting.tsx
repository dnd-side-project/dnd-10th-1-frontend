"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType, useActivity } from "@stackflow/react"
import { useEffect } from "react"

import { mockUserInfo, mockUserList } from "@/seeds/user-mock"
import useAdminStore from "@/store/admin-store"

import WaitingScreen from "./waiting-screen"

const Waiting: ActivityComponentType = () => {
  const isAdmin = useAdminStore()
  const { params } = useActivity()

  const roomId = params.roomId

  // const { replace } = useFlow()

  // const _gameStart = useCallback(() => {
  //   if (isAdmin) {
  //     replace("SelectGames", {})
  //   } else {
  //     replace("Loading", {})
  //   }
  // }, [replace, isAdmin])

  useEffect(() => {
    if (isAdmin) {
      // 소켓 연결 (방장의 경우)
      // console.log("만들어용")
    } else {
      if (typeof roomId === "string") {
        // 소켓 연결 (방장이 아닌 경우)
        // console.log(`${roomId} 들어가용`)
      }
    }
  }, [isAdmin, roomId])

  if (typeof roomId === "undefined" && !isAdmin) return

  return (
    <AppScreen>
      <WaitingScreen roomId="받아온 초대코드" myInfo={mockUserInfo} userList={mockUserList} />
    </AppScreen>
  )
}

export default Waiting
