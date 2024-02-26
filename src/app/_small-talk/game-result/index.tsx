import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType, useActivity } from "@stackflow/react"
import { useEffect, useState } from "react"

import SmallTalkGameResultScreen from "@/app/_small-talk/game-result/game-result-screen"
import { useFlow } from "@/app/stackflow"
import { SOCKET_EVENT } from "@/constants/apis"
import useAdminStore from "@/store/admin-store"
import useMyInfoStore from "@/store/my-info-store"
import useSocketStore from "@/store/socket-store"
import { AnswerType, SmallTalkResult } from "@/types/small-talk"

const SmallTalkGameResult: ActivityComponentType = () => {
  const isAdmin = useAdminStore(state => state.isAdmin)
  const { socket } = useSocketStore()
  const { myInfo } = useMyInfoStore()
  const [selectInfo, setSelectInfo] = useState<SmallTalkResult | null>(null)
  const { replace } = useFlow()
  const { params } = useActivity()
  const { roomId, userAnswerList, topicId } = params as typeof params & {
    roomId: number
    userAnswerList: AnswerType[]
    topicId: number
  }
  useEffect(() => {
    socket.on(SOCKET_EVENT.GET_BLANK_TOPIC_RANDOM_ANSWER, res => setSelectInfo(res))
    socket.emit(SOCKET_EVENT.GET_BLANK_TOPIC_RANDOM_ANSWER, { userAnswerList, topicId, roomId })
    return () => {
      socket.off(SOCKET_EVENT.GET_BLANK_TOPIC_RANDOM_ANSWER)
    }
  }, [roomId, socket, topicId, userAnswerList])

  useEffect(() => {
    socket.on(SOCKET_EVENT.DRAW_AGAIN_USER_ANSWER, () => {
      if (selectInfo === null) return
      const selectAnswerList = userAnswerList.filter(answer => answer.answer !== selectInfo.selectAnswer[0].answer)
      replace("SmallTalkResult", {
        roomId,
        userAnswerList: selectAnswerList,
        topicId,
      })
    })

    return () => {
      socket.off(SOCKET_EVENT.DRAW_AGAIN_USER_ANSWER)
    }
  }, [replace, roomId, selectInfo, socket, topicId, userAnswerList])

  if (!myInfo || !selectInfo) return

  const onReset = () => {
    socket.emit(SOCKET_EVENT.DRAW_AGAIN_USER_ANSWER, roomId)
  }

  const moveToWaitingRoom = () => {
    replace("Waiting", { roomId })
  }

  const moveToMainRoom = () => {
    socket.emit(SOCKET_EVENT.END_GAME, { roomId, userId: myInfo.id })
    replace("Main", {})
  }

  const { selectAnswer, topic, userInfo } = selectInfo

  return (
    <AppScreen>
      <SmallTalkGameResultScreen
        isTryAllowed={userAnswerList.length > 1}
        isAdmin={isAdmin}
        topic={topic.description}
        selectAnswer={selectAnswer[0].answer}
        selectUserInfo={userInfo}
        onReset={onReset}
        moveToMainRoom={moveToMainRoom}
        moveToWaitingRoom={moveToWaitingRoom}
      />
    </AppScreen>
  )
}

export default SmallTalkGameResult
