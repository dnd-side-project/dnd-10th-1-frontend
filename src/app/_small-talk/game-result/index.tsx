import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import SmallTalkGameResultScreen from "./game-random-screen"

const SmallTalkGameResult: ActivityComponentType = () => {
  const mockResult = {
    userNickName: "해콩이",
    userProfile: "https://source.unsplash.com/random/?cat",
    talkValue: "자르반 84세",
  }
  const mockQuestion = "지하철에서 만난 빌런은"

  return (
    <AppScreen>
      <SmallTalkGameResultScreen isAdmin result={mockResult} question={mockQuestion} />
    </AppScreen>
  )
}

export default SmallTalkGameResult
