import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType, useActivity } from "@stackflow/react"
import { useEffect, useState } from "react"

import { useFlow } from "@/app/stackflow"
import { SOCKET_EVENT } from "@/constants/apis"
import useAdminStore from "@/store/admin-store"
import useSocketStore from "@/store/socket-store"
import { AnswerType } from "@/types/small-talk"
import { WaitingUserType } from "@/types/waiting"

import SmallTalkGameResultListScreen from "./game-result-list-screen"

const SmallTalkGameResultList: ActivityComponentType = () => {
  const isAdmin = useAdminStore(state => state.isAdmin)
  const [answerList, setAnswerList] = useState<AnswerType[]>([])
  const { socket } = useSocketStore()
  const { params } = useActivity()
  const { roomId, topicId, userList, topic } = params as typeof params & {
    roomId: number
    topic: string
    topicId: number
    userList: WaitingUserType[]
  }
  const { push } = useFlow()
  useEffect(() => {
    socket.on(SOCKET_EVENT.GET_USERS_ANSWER, res =>
      setAnswerList(() => res.filter((item: AnswerType) => item.answer !== "")),
    )
    socket.emit(SOCKET_EVENT.GET_USERS_ANSWER, { roomId, topicId })

    return () => {
      socket.off(SOCKET_EVENT.GET_USERS_ANSWER)
    }
  }, [push, roomId, socket, topic, topicId, userList])

  useEffect(() => {
    socket.on(SOCKET_EVENT.MOVE_TO_BLANK_TOPIC_RESULT, () =>
      push("SmallTalkResult", { roomId, userAnswerList: answerList, topicId }),
    )
    return () => {
      socket.off(SOCKET_EVENT.MOVE_TO_BLANK_TOPIC_RESULT)
    }
  }, [answerList, push, roomId, socket, topicId])

  const moveResultScreen = () => {
    socket.emit(SOCKET_EVENT.MOVE_TO_BLANK_TOPIC_RESULT, roomId)
  }

  return (
    <AppScreen>
      <SmallTalkGameResultListScreen
        moveResultScreen={moveResultScreen}
        isAdmin={isAdmin}
        answerList={answerList}
        topic={topic}
      />
    </AppScreen>
  )
}

export default SmallTalkGameResultList
