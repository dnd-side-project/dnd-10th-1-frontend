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
  const [userCount, setUserCount] = useState<UserCountType>({ answerCount: 0, unanswerCount: 0 })

  const { socket } = useSocketStore()
  const { params } = useActivity()
  const { push } = useFlow()
  const { description, id: topicId, roomId } = params

  useEffect(() => {
    socket.on(SOCKET_EVENT.LISTEN_LIVE_USER_COUNT, res => setUserCount(res))
    socket.on(SOCKET_EVENT.MOVE_TO_BLACK_TOPIC_RESULT, res => push("SmallTalkRandom", { ...res }))

    return () => {
      socket.off(SOCKET_EVENT.LISTEN_LIVE_USER_COUNT)
      socket.off(SOCKET_EVENT.MOVE_TO_BLACK_TOPIC_RESULT)
    }
  }, [push, socket])

  if (!myInfo || !roomId || !description || !topicId || !userCount) return

  const sendAnswer = (answer: string) => {
    socket.emit(SOCKET_EVENT.SEND_USER_ANSWER, { topicId, answer, userId: myInfo.id, roomId })
  }

  const timeOut = (isSubmit: boolean) => {
    if (!isSubmit) {
      sendAnswer("")
    }
  }

  return (
    <AppScreen>
      <SmallTalkGameInputScreen userCount={userCount} timeOut={timeOut} myInfo={myInfo} topic={description} />
    </AppScreen>
  )
}

export default SmallTalkGameInput
