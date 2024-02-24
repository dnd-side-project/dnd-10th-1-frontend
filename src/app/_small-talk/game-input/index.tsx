import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType, useActivity } from "@stackflow/react"
import { useEffect, useState } from "react"

import { useFlow } from "@/app/stackflow"
import { SOCKET_EVENT } from "@/constants/apis"
import useMyInfoStore from "@/store/my-info-store"
import useSocketStore from "@/store/socket-store"
import { UserCountType } from "@/types/small-talk"

import SmallTalkGameInputScreen from "./game-input-screen"

const SmallTalkGameInput: ActivityComponentType = () => {
  const myInfo = useMyInfoStore(state => state.myInfo)
  const { params } = useActivity()

  const {
    description: topic,
    id: topicId,
    roomId,
    totalCount,
  } = params as typeof params & {
    description: string
    id: number
    roomId: number
    totalCount: number
  }

  const [userCount, setUserCount] = useState<UserCountType>({ answerCount: 0, totalCount })
  const { socket } = useSocketStore()
  const { replace } = useFlow()

  useEffect(() => {
    socket.on(SOCKET_EVENT.LISTEN_LIVE_USER_COUNT, res => setUserCount(res))
    socket.on(SOCKET_EVENT.MOVE_TO_BLACK_TOPIC_RESULT, () => {
      socket.off(SOCKET_EVENT.LISTEN_LIVE_USER_COUNT)
      socket.off(SOCKET_EVENT.MOVE_TO_BLACK_TOPIC_RESULT)
      replace("SmallTalkGameResultList", { roomId, topic, topicId })
    })

    return () => {
      socket.off(SOCKET_EVENT.LISTEN_LIVE_USER_COUNT)
      socket.off(SOCKET_EVENT.MOVE_TO_BLACK_TOPIC_RESULT)
    }
  }, [replace, roomId, socket, topic, topicId])

  const badRequest = !myInfo || !roomId || !topic || !topicId || !userCount

  if (badRequest) return

  const sendAnswer = (answer: string) => {
    socket.emit(SOCKET_EVENT.SEND_USER_ANSWER, { topicId, answer, userId: myInfo.id, roomId })
  }

  return (
    <AppScreen>
      <SmallTalkGameInputScreen
        sendAnswer={sendAnswer}
        userCount={userCount}
        timeOut={() => sendAnswer("")}
        myInfo={myInfo}
        topic={topic}
      />
    </AppScreen>
  )
}

export default SmallTalkGameInput
