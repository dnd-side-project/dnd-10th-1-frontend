import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType, useActivity } from "@stackflow/react"
import { useEffect, useState } from "react"

import SmallTalkGameResultScreen from "@/app/_small-talk/game-result/game-result-screen"
import { useFlow } from "@/app/stackflow"
import { SOCKET_EVENT } from "@/constants/apis"
import useAdminStore from "@/store/admin-store"
import useMyInfoStore from "@/store/my-info-store"
import useSocketStore from "@/store/socket-store"
import { SmallTalkResult } from "@/types/small-talk"

const SmallTalkGameResult: ActivityComponentType = () => {
  const isAdmin = useAdminStore(state => state.isAdmin)
  const { socket } = useSocketStore()
  const { myInfo } = useMyInfoStore()
  const [smallTalkResult, setSmallTalkResult] = useState<SmallTalkResult | null>(null)
  const { replace } = useFlow()
  const { params } = useActivity()
  const { roomId } = params
  useEffect(() => {
    socket.on(SOCKET_EVENT.GET_SMALL_TALK_RANDOM_ANSWER, res => setSmallTalkResult(res))
    socket.emit(SOCKET_EVENT.GET_SMALL_TALK_RANDOM_ANSWER)
    return () => {
      socket.off(SOCKET_EVENT.GET_SMALL_TALK_RANDOM_ANSWER)
    }
  }, [socket])

  if (!myInfo || !smallTalkResult) throw new Error("옳지 않은 접근입니다.")

  const onReset = () => {
    socket.emit(SOCKET_EVENT.MOVE_TO_SMALL_TALK_RESULT)
  }

  const moveToWaitingRoom = () => {
    replace("Waiting", { roomId })
  }

  const moveToMainRoom = () => {
    socket.emit(SOCKET_EVENT.END_GAME, { roomId, userId: myInfo.id })
    replace("Main", {})
  }

  const { isTryAllowed, selectAnswer, topic, userInfo } = smallTalkResult
  return (
    <AppScreen>
      <SmallTalkGameResultScreen
        isTryAllowed={isTryAllowed}
        isAdmin={isAdmin}
        topic={topic}
        selectAnswer={selectAnswer}
        selectUserInfo={userInfo}
        onReset={onReset}
        moveToMainRoom={moveToMainRoom}
        moveToWaitingRoom={moveToWaitingRoom}
      />
    </AppScreen>
  )
}

export default SmallTalkGameResult
