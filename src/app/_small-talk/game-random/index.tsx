import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { mockQuestion, mockSelectQuestion, mockTalkList } from "@/seeds/small-talk-mock"
import { mockUserInfo } from "@/seeds/user-mock"
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
      <SmallTalkGameRandomScreen
        isAdmin={isAdmin}
        selectQuestion={mockSelectQuestion}
        selectUserInfo={mockUserInfo}
        question={mockQuestion}
        talkList={mockTalkList}
      />
    </AppScreen>
  )
}

export default SmallTalkGameRandom
