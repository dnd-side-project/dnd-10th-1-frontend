import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType, useActivity } from "@stackflow/react"
import { useEffect, useState } from "react"

import { SOCKET_EVENT } from "@/constants/apis"
import useMyInfoStore from "@/store/my-info-store"
import useSocketStore from "@/store/socket-store"

import { useFlow } from "../../stackflow"
import { getMbtiResult } from "../_loading/api/get-mbti-result"
import MbtiScreen from "./mbti-game-screen"

const MbtiGame: ActivityComponentType = () => {
  const [isSelected, setIsSelected] = useState(false)
  const [selectedMbti, setSelectedMbti] = useState<string>()

  const { push } = useFlow()
  const { params } = useActivity()
  const { roomId } = params

  const socket = useSocketStore(state => state.socket)
  const { myInfo } = useMyInfoStore()

  useEffect(() => {
    socket.on(SOCKET_EVENT.MOVE_TO_MBTI_LOADING, () => {
      console.log("선택 완료")
    })

    return () => {
      socket.off(SOCKET_EVENT.MOVE_TO_MBTI_LOADING)
    }
  }, [socket, push, roomId])

  useEffect(() => {
    socket.on(SOCKET_EVENT.MOVE_TO_MBTI_RESULT, async () => {
      const data = await getMbtiResult({ roomId: roomId!, userId: myInfo?.id! })
      console.log(data)
      console.log(data.userMbtiResult)
      push("MbtiLoading", { roomId })
    })

    return () => {
      socket.off(SOCKET_EVENT.MOVE_TO_MBTI_RESULT)
    }
  }, [socket, roomId, myInfo, push])

  return (
    <AppScreen>
      <MbtiScreen
        onBubbleClick={mbti => {
          setIsSelected(true)
          setSelectedMbti(mbti)
        }}
        onCompleteClick={() => {
          socket.emit(SOCKET_EVENT.SELECT_MBTI, { roomId, userId: myInfo?.id, mbti: selectedMbti })
        }}
        isSelected={isSelected}
      />
    </AppScreen>
  )
}

export default MbtiGame
