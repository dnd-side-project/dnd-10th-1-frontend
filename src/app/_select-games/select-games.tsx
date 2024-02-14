import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { useFlow } from "../stackflow"
import SelectGamesScreen from "./select-games-screen"

const SelectGames: ActivityComponentType = () => {
  const { replace } = useFlow()

  const onCompleteClick = (selected: "mbti" | "blank") => {
    replace("Splash", { state: selected })
  }

  return (
    <AppScreen>
      <SelectGamesScreen onCompleteClick={onCompleteClick} />
    </AppScreen>
  )
}

export default SelectGames
