import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import SmallTalkGameInputScreen from "./game-input-screen"

const SmallTalkGameInput: ActivityComponentType = () => {
  const mockQuestion = "지하철에서 만난 빌런은"
  return (
    <AppScreen>
      <SmallTalkGameInputScreen question={mockQuestion} />
    </AppScreen>
  )
}

export default SmallTalkGameInput
