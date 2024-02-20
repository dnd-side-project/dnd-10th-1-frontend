import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { mockAnswerList, mockTopic } from "@/seeds/small-talk-mock"
import useAdminStore from "@/store/admin-store"

import SmallTalkGameRandomScreen from "./game-random-screen"

const SmallTalkGameRandom: ActivityComponentType = () => {
  const isAdmin = useAdminStore(state => state.isAdmin)

  // const { push } = useFlow()

  // const _getResult = useCallback(() => {
  //   push("SmallTalkResult", {})
  // }, [push])

  return (
    <AppScreen>
      <SmallTalkGameRandomScreen isAdmin={isAdmin} answerList={mockAnswerList} topic={mockTopic} />
    </AppScreen>
  )
}

export default SmallTalkGameRandom
