import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import SmallTalkGameResultScreen from "@/app/_small-talk/game-result/game-result-screen"
import { mockSelectAnswer, mockTopic } from "@/seeds/small-talk-mock"
import { mockUserInfo } from "@/seeds/user-mock"
import useAdminStore from "@/store/admin-store"

const SmallTalkGameResult: ActivityComponentType = () => {
  const isAdmin = useAdminStore(state => state.isAdmin)
  return (
    <AppScreen>
      <SmallTalkGameResultScreen
        isAdmin={isAdmin}
        topic={mockTopic}
        selectAnswer={mockSelectAnswer}
        selectUserInfo={mockUserInfo}
      />
    </AppScreen>
  )
}

export default SmallTalkGameResult
