import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

import { useFlow } from "../../stackflow"

const MbtiLoading: ActivityComponentType = () => {
  const { replace } = useFlow()

  return (
    <AppScreen>
      <div>result</div>
    </AppScreen>
  )
}

export default MbtiLoading
