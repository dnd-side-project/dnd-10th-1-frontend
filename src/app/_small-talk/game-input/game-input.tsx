import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import SmallTalkGameInputScreen from "./game-input-screen"

const GameInput: ActivityComponentType = () => {
  return (
    <AppScreen>
      <SmallTalkGameInputScreen />
    </AppScreen>
  )
}

export default GameInput
