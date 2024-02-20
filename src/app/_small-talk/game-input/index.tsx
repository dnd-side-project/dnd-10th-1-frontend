import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { mockQuestion } from "@/seeds/small-talk-mock"
import { mockUserInfo } from "@/seeds/user-mock"

import SmallTalkGameInputScreen from "./game-input-screen"

const SmallTalkGameInput: ActivityComponentType = () => {
  // const { push } = useFlow()

  // const _setRandom = useCallback(() => {
  //   push("SmallTalkRandom", {})
  // }, [push])

  return (
    <AppScreen>
      <SmallTalkGameInputScreen myInfo={mockUserInfo} question={mockQuestion} />
    </AppScreen>
  )
}

export default SmallTalkGameInput
