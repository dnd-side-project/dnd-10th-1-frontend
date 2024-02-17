import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"
import { useState } from "react"

import { useFlow } from "../../stackflow"
import MbtiScreen from "./mbti-game-screen"

const MbtiGame: ActivityComponentType = () => {
  const [isSelected, setIsSelected] = useState(false)
  const [selectedMbti, setSelectedMbti] = useState<string>()

  const { replace } = useFlow()

  return (
    <AppScreen>
      <MbtiScreen
        onBubbleClick={mbti => {
          setIsSelected(true)
          setSelectedMbti(mbti)
        }}
        onCompleteClick={() => {
          replace("Splash", { mbti: selectedMbti })
        }}
        isSelected={isSelected}
      />
    </AppScreen>
  )
}

export default MbtiGame
