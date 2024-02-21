import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { mockTopic } from "@/seeds/small-talk-mock"
import useMyInfoStore from "@/store/my-info-store"

import SmallTalkGameInputScreen from "./game-input-screen"

const SmallTalkGameInput: ActivityComponentType = () => {
  const myInfo = useMyInfoStore(state => state.myInfo)
  // const { push } = useFlow()

  // const _setRandom = useCallback(() => {
  //   push("SmallTalkRandom", {})
  // }, [push])

  return (
    <AppScreen>
      <SmallTalkGameInputScreen myInfo={myInfo} topic={mockTopic} />
    </AppScreen>
  )
}

export default SmallTalkGameInput
