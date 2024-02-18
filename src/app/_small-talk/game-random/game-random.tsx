import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import SmallTalkGameRandomScreen from "./game-random-screen"

const SmallTalkGameRandom: ActivityComponentType = () => {
  const mockTalkList = ["단소 빌런", "지하철에서 담배피는 놈", "기계체조 장인", "자르반 84세"]
  const mockQuestion = "지하철에서 만난 빌런은"

  return (
    <AppScreen>
      <SmallTalkGameRandomScreen question={mockQuestion} talkList={mockTalkList} />
    </AppScreen>
  )
}

export default SmallTalkGameRandom
